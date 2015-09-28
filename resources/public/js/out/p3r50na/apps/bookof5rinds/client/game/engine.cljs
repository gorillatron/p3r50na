(ns p3r50na.apps.bookof5rinds.client.game.engine
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [wagjo.data.array :as arr]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [p3r50na.apps.bookof5rinds.client.game.collision :refer [rect-intersects-blocks? rect-intersects-boundary? intersects?]]
            [p3r50na.apps.bookof5rinds.client.game.level :refer [block-of-type walls]]))


; Memoize the function for extracting walls
; Improves collision detection performance a lot
(def wallsm (memoize walls))


(defn- apply-controlls [state controlls]
  "Apply player controls to the game state"
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
                                  (rect-intersects-boundary? (:player newstate) (:map state)))
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


(defn bullet-intersects? [state bullet]
  (not (or (rect-intersects-blocks? bullet (wallsm (:map state)) (:blocksize (:map state)))
           (rect-intersects-boundary? bullet (:map state)))))


(defn- update-bullets [state path]
  (->> (state path)
       (mapv update-bullet-location)
       (filterv (partial bullet-intersects? state))))


(defn- update-bullet-locations [state path]
  (assoc state path (update-bullets state path)))


(defn- update-objects [state]
  (let [oldstate state
        new-state (-> state
          (update-bullet-locations :bullets)
          (update-bullet-locations :remote-bullets))]
    new-state))


(defn- player-event->bullet [player event]
  (let [{mx :mx my :my} event
        {px :x py :y ps :size} player
        start [(+ px (/ ps 2)) (+ py (/ ps 2))]]
    {:x (get start 0)
     :y (get start 1)
     :fired-by (:player state)
     :start start
     :goal [mx my]
     :speed 1.3
     :size 2}))


(defn- player-fired-bullet [state event]
  (let [bullet (player-event->bullet (:player state) event)]
    (update-in state [:bullets] conj bullet)))


(defn- remote-player-change [state event]
  (let [remote-player (:player (:data event))]
    (assoc-in state [:remote-players (:name remote-player)] remote-player)))


(defn- remote-bullet-fired [state event]
  (let [bullet (:bullet (:data event))]
    (update-in state [:remote-bullets] conj bullet)))


(defn- apply-events [state events]
  (reduce (fn [state event]
    (case (:name event)
      "remote-bullet-fired"  (remote-bullet-fired state event)
      "remote-player-change" (remote-player-change state event)
      "player-fired-bullet"  (player-fired-bullet state event))) state events))


(defn- create-initial-state [state]
  (merge {:player nil
          :level nil
          :bullets []
          :remote-players {}
          :remote-bullets []
          :controlls #{}} state))


(defn- send-updates! [channel old-state new-state events]
  (let [oplayer (:player old-state)
        nplayer (:player new-state)]
    (go (doseq []
      (if (not= oplayer nplayer)
        (>! channel {:update "player-change" :player nplayer}))
      (doseq [event events]
        (if (= (:name event) "player-fired-bullet")
          (>! channel {:update "bullet-fired" :bullet (player-event->bullet (:player old-state) event)})))))))


(defn create-simulation [state]
  (let [initial-state    (create-initial-state state)
        old-state        (atom initial-state)
        controlls        (atom #{})
        events           (atom [])
        update-channel   (chan)]

    {:next-frame (fn []
        (let [new-state (apply-events @old-state @events)
              new-state (apply-controlls new-state @controlls)
              new-state (update-objects new-state)]
          (doseq []
            (send-updates! update-channel @old-state new-state @events)
            (reset! events [])
            (reset! old-state new-state)
            new-state)))
      :update-channel update-channel
      :add-event (fn [event] (swap! events conj event))
      :controller (fn [mutator] (reset! controlls (mutator @controlls))) }))
