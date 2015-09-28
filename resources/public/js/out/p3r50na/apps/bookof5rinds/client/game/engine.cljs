(ns p3r50na.apps.bookof5rinds.client.game.engine
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [wagjo.data.array :as arr]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [rect-intersects-blocks? rect-intersects-boundary? intersects?]]
            [p3r50na.apps.bookof5rinds.client.game.map :refer [block-of-type walls]]
            [p3r50na.apps.bookof5rinds.client.game.maps.level1 :refer [level1]]))


(def wallsm (memoize walls))

(defn- apply-controlls [state controlls]
  (if (empty? controlls)
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
                            newstate))) state controlls)]
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
       (mapv update-bullet-location)
       (filterv (fn [bullet]
         (not (or (rect-intersects-blocks? bullet (wallsm (:map state)) (:blocksize (:map state)))
                  (rect-intersects-boundary? bullet level1)))))))

(defn- update-bullet-locations [state]
  (assoc state :bullets (update-bullets state)))


(defn- update-objects [state]
  (let [oldstate state
        newstate (-> state
          (update-bullet-locations))]
    newstate))


(defn- player-fired-bullet [state event]
  (let [{mx :mx my :my} event
        {px :x py :y ps :size} (:player state)
        start [(+ px (/ ps 2)) (+ py (/ ps 2))]
        bullet {:x (get start 0) :y (get start 1) :start start :goal [mx my] :speed 1.3 :size 2 :fired-by (:player state)}]
    (update-in state [:bullets] conj bullet)))


(defn- apply-events [state events]
  (reduce (fn [state event]
    (case (:name event)
      "player-fired-bullet" (player-fired-bullet state event))) state events))


(defn create-simulation [state]
  (let [oldstate (atom state)
        controlls (atom #{})
        events (atom [])]
    {
      :next-frame (fn []
        (let [newstate (apply-events @oldstate @events)
              newstate (apply-controlls newstate @controlls)
              newstate (update-objects newstate)]
          (doseq []
            (reset! events [])
            (reset! oldstate newstate)
            newstate)))
      :add-event (fn [event] (swap! events conj event))
      :controller (fn [mutator] (reset! controlls (mutator @controlls))) }))
