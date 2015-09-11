(ns p3r50na.apps.bookof5rinds.core

  (:require [compojure.core :refer :all]
            [com.stuartsierra.component :as component]
            [org.httpkit.server :refer :all])

  (:use [hiccup.page]
        [compojure.core :only [routes GET POST DELETE ANY context]]))


(def templates
  {:index (fn [&attrs] (html5
    [:head
      [:link {:rel "stylesheet" :href "/css/bookof5rinds.css"}]]
    [:body
      [:div#app.col-group]
      [:script {:src "/js/app.js"}]]))})


(defn router []
  (routes

    (GET "/" [&args]
      (let [template (get templates :index)]
      (template &args)))

    (GET "/ws" [] (fn [req]
      (with-channel req channel
        (on-close channel
          (fn [status]
            (println "channel closed")))
        (on-receive channel
          (fn [data]
            (send! channel data))))))

    ))
