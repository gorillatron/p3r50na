(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [rect-intersects-blocks? rect-intersects-boundary? intersects?]]
            [p3r50na.apps.bookof5rinds.client.game.map :refer [block-of-type]]
            [p3r50na.apps.bookof5rinds.client.game.maps.level1 :refer [level1]]))


(defrecord Player [x y size speed])

(def controll-mapping { :w :up
                        :s :down
                        :d :right
                        :a :left })

(def blocksize (:blocksize level1))
(def map-matrix (:matrix level1))
(def map-size (:size level1))

(def walls (block-of-type :w level1))


(defn setup []
  (q/frame-rate 120)
  {:player (new Player 5 5 10 1)
   :remote-players []
   :bullets []
   :controlls #{} })


(defn draw [state]
  (q/background 255)
  (q/fill 200 200 200)

  (q/stroke 0 0 0)
  (doseq [wall walls]
    (q/rect (:x wall) (:y wall) blocksize blocksize))

  (q/fill 255 90 20)
  (q/stroke 255 90 20)
  (doseq [remote-player (:remote-players state)]
    (let [{x :x y :y size :size} remote-player]
      (q/rect x y size size)))

  (q/fill 130 130 130)
  (q/stroke 150 150 150)
  (doseq [bullet (:bullets state)]
    (let [{bx :x by :y size :size} bullet]
      (q/rect bx by size size)))

  (q/fill 50 120 190)
  (q/stroke 50 120 190)
  (let [{x :x y :y size :size} (:player state)]
    (q/rect x y size size)))


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
        newstate))))



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


(defn update-bullet-locations [state]
  (let [new-bullets (->> (:bullets state)
      (map update-bullet-location)
      (filter (fn [bullet]
        (not (or (rect-intersects-blocks? bullet walls blocksize)
                 (rect-intersects-boundary? bullet level1))))))]
    (assoc state :bullets new-bullets)))


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
        start [(+ px (/ ps 2)) (+ py (/ ps 2))]]
    (update-in state [:bullets] conj {:x (get start 0) :y (get start 1) :start start :goal [mx my] :speed 1.4 :size 2})))


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


; React Components
(defn game-component [socket]
  (reify
    om/IDidMount
    (did-mount [this]
      (game-renderer))
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil "game")
        (dom/canvas #js {:id "game-canvas" :style #js {:border "1px solid gray"}})))))
