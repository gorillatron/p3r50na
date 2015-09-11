(ns p3r50na.apps.bookof5rinds.core

  (:require [compojure.core :refer :all]
            [com.stuartsierra.component :as component]
            [org.httpkit.server :refer :all])

  (:use [hiccup.page]
        [clojure.data.json :only [write-str read-str]]
        [compojure.core :only [routes GET POST DELETE ANY context]]))


(def templates
  {:index (fn [&attrs] (html5
    [:head
      [:link {:rel "stylesheet" :href "/css/bookof5rinds.css"}]]
    [:body
      [:div#app.col-group]
      [:script {:src "/js/app.js"}]]))})


(def app-state (atom {
  :rindidates [
    {:name "Rindiana Jonas"}
    {:name "Rindseeker"}
  ]}))


(def socket-clients (atom {}))


(defn broadcast-state []
  (doseq [client (keys @socket-clients)]
    (send! client (write-str {:type "state" :state @app-state }))))


(defn create-rind [new-rind]
  (swap! app-state assoc :rindidates (conj (:rindidates @app-state) new-rind)))


(defn handle-command [command data]
  (doseq []
    (case command
      "create-rind" (create-rind data))
    (broadcast-state)))


(defn router []
  (routes

    (GET "/" [&args]
      (let [template (get templates :index)]
      (template &args)))

    (GET "/ws" [] (fn [req]
      (with-channel req channel
        (swap! socket-clients assoc channel true)
        (send! channel (write-str {:type "state" :state @app-state }))
        (on-close channel
          (fn [status]
            (println "channel closed")))
        (on-receive channel
          (fn [json-data]
            (let [data (read-str json-data :key-fn clojure.core/keyword)]
              (handle-command (:command data) (:data data))))))))

    ))
