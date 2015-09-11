(ns p3r50na.apps.bookof5rinds.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cljs.core.async :refer [put! chan <! timeout]]))

(defn- now []
  (quot (.getTime (js/Date.)) 1000))

(def max-id (atom 0))

(def conn
  (js/WebSocket. "ws://localhost:8080/book-of-5-rinds/ws"))

(set! (.-onopen conn)
  (fn [e]
    (.send conn
      (.stringify js/JSON (js-obj "command" "getall")))))

(set! (.-onerror conn)
  (fn []
    (js/alert "error")
    (.log js/console js/arguments)))

(set! (.-onmessage conn)
  (fn [e]
    (let [msgs (.parse js/JSON (.-data e))]
      (js/console.log "MESSAGE:" msgs))))


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
