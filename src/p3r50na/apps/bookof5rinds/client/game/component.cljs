(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [rect-intersects-blocks? rect-intersects-boundary? intersects?]]
            [p3r50na.apps.bookof5rinds.client.game.map :refer [block-of-type walls map-size]]
            [p3r50na.apps.bookof5rinds.client.game.engine :refer [create-loop]]
            [p3r50na.apps.bookof5rinds.client.game.maps.level1 :refer [level1]]))


(defrecord GameState [player remote-players bullets map])

(defrecord Player [name x y size speed])

(def controll-mapping { :w :up
                        :s :down
                        :d :right
                        :a :left })

(def state (atom { :player (new Player "gorillatron" 5 5 10 2)
                   :bullets []
                   :controlls #{}
                   :map level1 }))

(def game-loop (create-loop @state))
(def controller (:controller game-loop))


(defn setup []
  (q/frame-rate 60)
  (go (while true
    (let [newstate (<! (:render-chan game-loop))]
      (reset! state newstate)))))

(defn draw []
  (let [state @state]
    (q/background 255)
    (q/fill 200 200 200)

    (q/stroke 0 0 0)
    (doseq [wall (walls (:map state))]
      (q/rect (:x wall) (:y wall) 20 20))

    (q/fill 50 120 190)
    (q/stroke 50 120 190)
    (let [{x :x y :y size :size} (:player state)]
      (q/rect x y size size))

    (doseq [bullet (:bullets state)]
      (let [{bx :x by :y size :size} bullet]
        (q/rect bx by size size)))))


(defn on-key-down [event]
  (controller #(conj % ((q/key-as-keyword) controll-mapping))))


(defn on-key-up [event]
  (controller #(disj % ((q/key-as-keyword) controll-mapping))))


(defn on-mouse-clicked [state event]
  (let [{mx :x my :y} event
        {px :x py :y ps :size} (:player state)
        start [(+ px (/ ps 2)) (+ py (/ ps 2))]
        bullet {:x (get start 0) :y (get start 1) :start start :goal [mx my] :speed 2 :size 2 :fired-by (:player state)}]
    (controller #(conj % :bullet-fired))))


(q/defsketch game-renderer
  :setup setup
  :draw draw
  :host "game-canvas"
  :size (map-size level1)
  :mouse-clicked on-mouse-clicked
  :key-pressed on-key-down
  :key-released on-key-up)


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
