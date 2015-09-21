(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]))

(enable-console-print!)



; Game Objects
(defprotocol GameObject)

(defprotocol Movable)

(defprotocol Static)

(defrecord Player [x y size speed]
  GameObject
  Movable)



(def map-matrix [
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
])

(def blocksize (int 10))

(defn map-size [map-matrix blocksize]
  (println (count (first map-matrix)))
  (let [x (* blocksize (count (first map-matrix)))
        y (* blocksize (count (first (first map-matrix))))]
    [x y]))


; Rendering
(defn setup []
  (q/frame-rate 60)
  { :player (new Player 30 30 10 2)
    :controlls #{} })

(defn draw [state]
  (q/background 255)
  (q/fill 0)
  ; (doseq [row map-matrix
  ;         block row]
  ;   (println block))
  (let [{x :x y :y size :size} (:player state)]
    (q/rect x y size size)))


(defn apply-controll [state]
  (if (empty? (:controlls state))
    state
    (let [{x :x y :y speed :speed} (:player state)]
      (reduce (fn [state controll]
        (case controll
          :w (update-in state [:player :y] - speed)
          :s (update-in state [:player :y] + speed)
          :a (update-in state [:player :x] - speed)
          :d (update-in state [:player :x] + speed)
             state)) state (:controlls state)))))

(defn cupdate [state]
  (-> state
    (apply-controll)))


(defn on-key-down [state event]
  (let [keycode (:key event)]
    (update-in state [:controlls] conj keycode)))

(defn on-key-up [state]
  (let [keycode (q/key-as-keyword)]
    (update-in state [:controlls] disj keycode)))

(println (map-size map-matrix))

(q/defsketch hello
  :setup setup
  :update cupdate
  :draw draw
  :host "game-canvas"
  :size (map-size map-matrix blocksize)
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
