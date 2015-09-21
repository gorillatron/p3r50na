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
  [{:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :w} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
])

(def blocksize (int 20))

(defn map-size [map-matrix blocksize]
  (let [x (* blocksize (count (first map-matrix)))
        y (* blocksize (count map-matrix))]
    [x y]))


; Rendering
(defn setup []
  (q/frame-rate 60)
  { :player (new Player 0 0 10 2)
    :remote-players [
      (new Player 100 50 10 2)
    ]
    :controlls #{} })

(def walls
  (remove nil?
    (flatten
      (map-indexed (fn [ydx row]
        (map-indexed (fn [xdx block]
          (let [y (* ydx blocksize)
                x (* xdx blocksize)]
            (if (= :w (:type block))
              {:x x :y y}))) row)) map-matrix))))


(doseq [wall walls]
  (println wall))

(defn draw [state]
  (q/background 255)
  (q/fill 200 200 200)
  (doseq [wall walls]
    (q/rect (:x wall) (:y wall) blocksize blocksize))
  (q/fill 0)
  (doseq [remote-player (:remote-players state)]
    (let [{x :x y :y size :size} remote-player]
      (q/rect x y size size)))
  (let [{x :x y :y size :size} (:player state)]
    (q/rect x y size size)))


(defn comp-intersections [walls player]
  (for [wall walls]
    (let [{px :x py :y psize :size} player
          {wx :x wy :y} wall]
      (or
        (> px (+ wx blocksize))
        (< (+ px psize) wx)
        (> py (+ wy blocksize))
        (< (+ py psize) wy)))))

(defn intersects-wall? [state]
  (let [intersections (comp-intersections walls (:player state))
        nri (count (filter false? intersections))]
    (< 0 nri)))

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
                          (if (intersects-wall? newstate)
                            state
                            newstate))) state (:controlls state))]
        newstate))))

(defn cupdate [state]
  (-> state
    (apply-controll)))


(defn on-key-down [state event]
  (let [keycode (:key event)]
    (update-in state [:controlls] conj keycode)))

(defn on-key-up [state]
  (let [keycode (q/key-as-keyword)]
    (update-in state [:controlls] disj keycode)))

(println (map-size map-matrix blocksize))

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
        (dom/canvas #js {:id "game-canvas" :style #js {:border "1px solid gray"}})))))
