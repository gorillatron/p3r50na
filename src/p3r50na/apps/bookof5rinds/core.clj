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
  :players {} }))


(defn players-except [except-player]
  (filter (fn [player] (= except-player player)) (:players @server-state)))


(defn broadcast-event [name data players]
  (doseq [player players]
    (send! (:socket player) (write-str {:event name :data data}))))


(defn handle-join-game [data socket]
  (let [{player :player} data
         player (assoc player :socket socket)]
    (doseq []
      (swap! server-state assoc (:name player) player)
      (broadcast-event "player-update-state" player (players-except player)))))


(defn handle-leave-game [data socket]
  (let [{player :player} data]
    (doseq []
      (swap! server-state dissoc (:name player))
      (broadcast-event "player-update-state" player (players-except player)))))


(defn handle-player-state-report [data socket]
  (let [{player :player} data]
    (doseq []
      (swap! server-state assoc (:name player) player)
      (broadcast-event "player-update-state" player (players-except player)))))


(defn handle-command [command data socket]
  (case command
    "player-state-report" (handle-player-state-report data socket)))


(defn router []
  (routes

    (GET "/" [&args]
      (let [template (get templates :index)]
        (template &args)))

    (GET "/ws" [] (fn [req]
      (with-channel req socket
        (send! socket (write-str {:type "state" :state @server-state }))
        (on-close socket
          (fn [status]
            (println "channel closed")))
        (on-receive socket
          (fn [json-data]
            (let [data (read-str json-data :key-fn clojure.core/keyword)]
              (handle-command (:command data) (:data data) socket)))))))

    ))
