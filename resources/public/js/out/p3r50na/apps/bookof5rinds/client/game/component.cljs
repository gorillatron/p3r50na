(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [player-intersects-blocks? player-intersects-boundary?]]
            [p3r50na.apps.bookof5rinds.client.game.map :refer [block-of-type]]
            [p3r50na.apps.bookof5rinds.client.game.maps.level1 :refer [level1]]))


(defrecord Player [x y size speed])

(def blocksize (:blocksize level1))
(def map-matrix (:matrix level1))
(def map-size (:size level1))

(def walls (block-of-type :w level1))


(defn setup [watr]
  (q/frame-rate 60)
  { :player (new Player 5 5 10 2)
    :remote-players [(new Player 30 40 10 2)]
    :controlls #{} })


(defn draw [state]
  (q/background 255)
  (q/fill 200 200 200)
  (doseq [wall walls]
    (q/rect (:x wall) (:y wall) blocksize blocksize))
  (q/fill 255 90 20)
  (doseq [remote-player (:remote-players state)]
    (let [{x :x y :y size :size} remote-player]
      (q/rect x y size size)))
  (q/fill 50 120 190)
  (let [{x :x y :y size :size} (:player state)]
    (q/rect x y size size)))


(defn apply-controll [state]
  (if (empty? (:controlls state))
    state
    (let [{x :x y :y speed :speed} (:player state)]
      (let [newstate (reduce (fn [state controll]
                        (let [newstate (case controll
                                :w (update-in state [:player :y] - speed)
                                :s (update-in state [:player :y] + speed)
                                :a (update-in state [:player :x] - speed)
                                :d (update-in state [:player :x] + speed)
                                   state)]
                          (if (or (player-intersects-blocks? (:player newstate) walls blocksize)
                                  (player-intersects-boundary? (:player newstate) level1))
                            state
                            newstate))) state (:controlls state))]
        newstate))))


(defn send-player-state [state]
  (println "send player state"))


(defn cupdate [state]
  (let [oldstate state
        newstate (-> state
          (apply-controll))]
    (if (not= oldstate newstate)
      (send-player-state (:player newstate)))
    newstate))


(defn on-key-down [state event]
  (let [keycode (:key event)]
    (update-in state [:controlls] conj keycode)))


(defn on-key-up [state]
  (let [keycode (q/key-as-keyword)]
    (update-in state [:controlls] disj keycode)))


(q/defsketch game-renderer
  :setup setup
  :update cupdate
  :draw draw
  :host "game-canvas"
  :size map-size
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
