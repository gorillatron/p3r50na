(ns p3r50na.apps.bookof5rinds.client.game.component
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]))

(enable-console-print!)


(defn setup []
  (q/no-loop)
  {:player-state {:x 10 :y 10 :ydir 0 :xdir 0}
   :keys-down #{}})


(defn draw [state]
  (q/background 255)
  (q/fill 0)
  (let [x (:x (:player-state state))
        y (:y (:player-state state))]
    (q/rect x y 33 33)))


(defn cupdate [state]
  (let [ydir (:ydir (:player-state state))
        xdir (:xdir (:player-state state))]
    (-> state
      (update-in [:player-state :x] + xdir)
      (update-in [:player-state :y] + ydir))))


(q/defsketch hello
  :setup setup
  :draw draw
  :update cupdate
  :host "game-canvas"
  :size [300 300]
  :middleware [m/fun-mode])


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
