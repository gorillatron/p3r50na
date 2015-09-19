(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]))

(enable-console-print!)

; Game Objects
(defprotocol GameObject
  (velocity [this])
  (direction [this]))


(defrecord Player [x y angle]
  GameObject
  (velocity [this] 10)
  (direction [this] 12))





; Rendering
(defn setup []
  (q/frame-rate 60)
  { :player {:x 30 :y 30 :angle 180}
    :controlls #{} })


(defn draw [state]
  (q/background 255)
  (q/fill 0)
  (let [x (:x (:player state))
        y (:y (:player state))]
    (q/rect x y 10 10)))


(defn apply-controll [state]
  (if (empty? (:controlls state))
    (identity state)
    (reduce (fn [state controll]
      (case controll
        :w (update-in state [:player :y] - 2)
        :s (update-in state [:player :y] + 2)
        :a (update-in state [:player :x] - 2)
        :d (update-in state [:player :x] + 2))) state (:controlls state))))

(defn cupdate [state]
  (-> state
    (apply-controll)))


(defn on-key-down [state event]
  (let [keycode (:key event)]
    (update-in state [:controlls] conj keycode)))

(defn on-key-up [state]
  (let [keycode (q/key-as-keyword)]
    (update-in state [:controlls] disj keycode)))


(q/defsketch hello
  :setup setup
  :update cupdate
  :draw draw
  :host "game-canvas"
  :size [300 300]
  :key-pressed on-key-down
  :key-released on-key-up
  :middleware [m/fun-mode])





; React Components
(defn game-component []
  (reify
    om/IDidMount
    (did-mount [this]
      (hello))
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil "game")
        (dom/canvas #js {:id "game-canvas"})))))
