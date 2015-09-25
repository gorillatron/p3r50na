(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [rect-intersects-blocks? rect-intersects-boundary? intersects?]]
            [p3r50na.apps.bookof5rinds.client.game.map :refer [block-of-type]]
            [p3r50na.apps.bookof5rinds.client.game.engine :refer [create-loop]]
            [p3r50na.apps.bookof5rinds.client.game.maps.level1 :refer [level1]]))



(defrecord Player [name x y size speed])

(def controll-mapping { :w :up
                        :s :down
                        :d :right
                        :a :left })

(def blocksize (:blocksize level1))
(def map-matrix (:matrix level1))
(def map-size (:size level1))

(def walls (block-of-type :w level1))

(def socket
  (js/WebSocket. "ws://localhost:8080/book-of-5-rinds/ws"))

(defn rnd-string
        ([] (rnd-string 8))
        ([n]
           (let [chars (map char (range 33 127))
                 rstr (take n (repeatedly #(rand-nth chars)))]
             (reduce str rstr))))

(def namo (rnd-string))

(def remote-players (atom {}))
(def remote-player-bullets (atom []))

(defn remote-player-update [player]
  (swap! remote-players assoc (:name player) player))

(defn remote-player-fire-bullet [bullet]
  (swap! remote-player-bullets conj bullet))

(set! (.-onmessage socket)
  (fn [e]
    (let [event (js->clj (.parse js/JSON (.-data e)) :keywordize-keys true)]
      (case (:event event)
        "player-update-state"  (remote-player-update (:data event))
        "player-fired-bullet"  (remote-player-fire-bullet (:data event))))))

(defn setup []
  (q/frame-rate 60)
  {:player (new Player namo 5 5 10 2)
   :bullets []
   :remote-bullets []
   :controlls #{} })


(defn draw [state]
  (q/background 255)
  (q/fill 200 200 200)

  (q/stroke 0 0 0)
  (doseq [wall walls]
    (q/rect (:x wall) (:y wall) blocksize blocksize))

  (q/fill 255 90 20)
  (q/stroke 255 90 20)
  (doseq [[name remote-player] @remote-players]
    (let [{x :x y :y size :size} remote-player]
      (q/rect x y size size)))

  (doseq [bullet (:remote-bullets state)]
    (let [{bx :x by :y size :size} bullet]
      (q/rect bx by size size)))


  (q/fill 50 120 190)
  (q/stroke 50 120 190)
  (let [{x :x y :y size :size} (:player state)]
    (q/rect x y size size))

  (doseq [bullet (:bullets state)]
    (let [{bx :x by :y size :size} bullet]
      (q/rect bx by size size))))


(defn send-player-state-report [player]
  (.send socket
    (js/JSON.stringify (clj->js { :command "player-state-report" :data {:player player} }))))

(defn send-player-fired-bullet [bullet]
  (.send socket
    (js/JSON.stringify (clj->js { :command "player-fired-bullet" :data {:bullet bullet} }))))


(defn apply-controll [state]
  (if (empty? (:controlls state))
    state
    (let [{x :x y :y speed :speed} (:player state)]
      (let [newstate (reduce (fn [state controll]
                        (let [newstate (case controll
                                :up    (update-in state [:player :y] - speed)
                                :down  (update-in state [:player :y] + speed)
                                :left  (update-in state [:player :x] - speed)
                                :right (update-in state [:player :x] + speed)
                                        state)]
                          (if (or (rect-intersects-blocks? (:player newstate) walls blocksize)
                                  (rect-intersects-boundary? (:player newstate) level1))
                            state
                            newstate))) state (:controlls state))]
        (doseq []
          (if (not (= newstate state))
            (send-player-state-report (:player newstate)))
          newstate)))))



(defn update-bullet-location [bullet]
  (let [{speed :speed [bx by] :start lx :x ly :y [gx gy] :goal} bullet
        dx (- gx bx)
        dy (- gy by)
        goal-dist (js/Math.sqrt (+ (* dx dx) (* dy dy)))
        ratio (/ speed goal-dist)
        xm (* ratio dx)
        ym (* ratio dy)
        nx (+ xm lx)
        ny (+ ym ly)]
      (assoc bullet :x nx :y ny)))

(defn update-bullets [old-bullets]
  (->> old-bullets
      (map update-bullet-location)
      (filter (fn [bullet]
        (not (or (rect-intersects-blocks? bullet walls blocksize)
                 (rect-intersects-boundary? bullet level1)))))))

(defn update-bullet-locations [state]
  (assoc state :bullets (update-bullets (:bullets state))))


(defn cupdate [state]
  (let [oldstate state
        newstate (-> state
          (update-bullet-locations)
          (apply-controll))]
    newstate))


(defn on-key-down [state event]
  (let [keycode (:key event)]
    (update-in state [:controlls] conj (keycode controll-mapping))))


(defn on-key-up [state]
  (let [keycode (q/key-as-keyword)]
    (update-in state [:controlls] disj (keycode controll-mapping))))


(defn on-mouse-clicked [state event]
  (let [{mx :x my :y} event
        {px :x py :y ps :size} (:player state)
        start [(+ px (/ ps 2)) (+ py (/ ps 2))]
        bullet {:x (get start 0) :y (get start 1) :start start :goal [mx my] :speed 2 :size 2 :fired-by (:player state)}]
    (send-player-fired-bullet bullet)
    (update-in state [:bullets] conj bullet)))


(q/defsketch game-renderer
  :setup setup
  :update cupdate
  :draw draw
  :host "game-canvas"
  :size map-size
  :mouse-clicked on-mouse-clicked
  :key-pressed on-key-down
  :key-released on-key-up
  :middleware [m/fun-mode])

(def game-loop (create-loop {:player (new Player namo 5 5 10 2)
                             :bullets []
                             :controlls #{}
                             :map level1 }))
(go (while true
  (println (:player (<! (:render-chan game-loop))))))

; React Components
(defn game-component []
  (reify
    om/IDidMount
    (did-mount [this]
      (game-renderer))
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil "game")
        (dom/canvas #js {:id "game-canvas" :style #js {:border "1px solid gray"}})))))
