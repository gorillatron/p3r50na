(ns p3r50na.apps.bookof5rinds.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cljs.core.async :refer [put! chan <! timeout]]))



(defn rindidates [data]
  (dom/ul nil
    (for [rindidate (:rindidates data)]
      (dom/li nil rindidate))))


(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (rindidates {:rindidates ["a" "b"]})
        (dom/h1 nil (:text data))))))

(def mseq (seq ["foo" "bar" "wat" "lol"]))
(def q (chan 5))


(go
  (doseq [item mseq]
    (>! q item)
    (<! (timeout 1000))))

(go
  (while true
    (let [i (<! q)]
      (js/console.log i))))

(go
  (doseq [x (seq [1 2 3 4 5])]
    (>! q x)))

(om/root widget {:text "Hello worlds waaat!"}
  {:target (. js/document (getElementById "app"))})
