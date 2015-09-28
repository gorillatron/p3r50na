(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.engine :refer [create-simulation]]
            [p3r50na.apps.bookof5rinds.client.game.level :refer [block-of-type walls map-size]]
            [p3r50na.apps.bookof5rinds.client.game.levels.level1 :refer [level1]]))


(defrecord GameState [player remote-players bullets map])

(defrecord Player [name x y size speed])

(def controll-mapping { :w :up
                        :s :down
                        :d :right
                        :a :left })

(def game-simulation (create-simulation { :player (new Player "gorillatron" 5 5 10 1)
                                          :map level1 }))

(def next-frame (:next-frame game-simulation))
(def controller (:controller game-simulation))
(def add-event (:add-event game-simulation))


(defn setup []
  (q/smooth)
  (q/frame-rate 60))

(defn draw []
  (let [state (next-frame)
        bullets (:bullets state)
        walls (walls (:map state))]

    (q/background 255)
    (q/fill 200 200 200)

    (q/stroke 0 0 0)
    (doseq [wall walls]
      (q/rect (:x wall) (:y wall) 20 20))

    (q/fill 50 120 190)
    (q/stroke 50 120 190)
    (let [{x :x y :y size :size} (:player state)]
      (q/rect x y size size))

    (doseq [bullet bullets]
      (let [{bx :x by :y size :size} bullet]
        (q/rect bx by size size)))

))

(defn on-key-down []
  (controller #(conj % ((q/key-as-keyword) controll-mapping))))


(defn on-key-up []
  (controller #(disj % ((q/key-as-keyword) controll-mapping))))


(defn on-mouse-clicked []
  (let [mx (q/mouse-x)
        my (q/mouse-y)
        event {:name "player-fired-bullet" :mx mx :my my}]
    (add-event event)))


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
