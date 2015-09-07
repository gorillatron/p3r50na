(ns p3r50na.apps.bookof5rinds.client
  (:require [om.core :as om]
            [om.dom :as dom]))



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


(om/root widget {:text "Hello worlds waaat!"}
  {:target (. js/document (getElementById "app"))})
