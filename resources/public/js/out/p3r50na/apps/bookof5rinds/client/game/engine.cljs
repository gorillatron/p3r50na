(ns p3r50na.apps.bookof5rinds.client.game.engine
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [rect-intersects-blocks? rect-intersects-boundary? intersects?]]
            [p3r50na.apps.bookof5rinds.client.game.map :refer [block-of-type walls]]
            [p3r50na.apps.bookof5rinds.client.game.maps.level1 :refer [level1]]))



(defn- apply-controll [state]
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
                          (if (or (rect-intersects-blocks? (:player newstate) (walls (:map state)) (:blocksize (:map state)))
                                  (rect-intersects-boundary? (:player newstate) level1))
                            state
                            newstate))) state (:controlls state))]
        newstate))))


(defn- update-bullet-location [bullet]
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


(defn- update-bullets [state]
  (->> (:bullets state)
      (map update-bullet-location)
      (filter (fn [bullet]
        (not (or (rect-intersects-blocks? bullet (walls (:map state)) (:blocksize (:map state)))
                 (rect-intersects-boundary? bullet level1)))))))


(defn- update-bullet-locations [state]
  (assoc state :bullets (update-bullets state)))


(defn- update-state [state]
  (let [oldstate state
        newstate (-> state
          (update-bullet-locations)
          (apply-controll))]
    newstate))


(defn create-loop [state]
  (let [render-chan (chan)
        controlls (atom #{})]
    (go (loop [oldstate state]
      (let [newstate (update-state oldstate)
            newstate (assoc newstate :controlls @controlls)]
        (>! render-chan newstate)
        (<! (timeout (/ 1000 60)))
        (recur newstate))))
    { :render-chan render-chan
      :controller (fn [mutator] (reset! controlls (mutator @controlls))) }))
