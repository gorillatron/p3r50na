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
      [:script {:src "/js/bookof5rinds.client.core.js"}]]))})


(def server-state (atom {
  :clients {} }))

(defn sockets-except [socket]
  (let [sockets (keys (:clients @server-state))]
    (filter #(not= % socket) sockets)))


(defn broadcast-event [name data sockets]
  (doseq [socket sockets]
    (send! socket (write-str {:event name :data data}))))


(defn handle-player-state-report [data socket]
  (let [{player :player} data]
    (doseq []
      (swap! server-state assoc-in [:clients socket] player)
      (broadcast-event "player-update-state" player (sockets-except socket)))))

(defn handle-player-fired-bullet [data socket]
  (let [{bullet :bullet} data]
    (doseq []
      (broadcast-event "player-fired-bullet" bullet (sockets-except socket)))))

(defn handle-command [command data socket]
  (case command
    "player-state-report"  (handle-player-state-report data socket)
    "player-fired-bullet"  (handle-player-fired-bullet data socket)))


(defn router []
  (routes

    (GET "/" [&args]
      (let [template (get templates :index)]
        (template &args)))

    (GET "/ws" [] (fn [req]
      (with-channel req socket
        (swap! server-state assoc-in [:clients socket] {})
        (send! socket (write-str {:type "state" :state @server-state }))
        (on-close socket
          (fn [status]
            (println "channel closed")))
        (on-receive socket
          (fn [json-data]
            (let [data (read-str json-data :key-fn clojure.core/keyword)]
              (handle-command (:command data) (:data data) socket)))))))

    ))
