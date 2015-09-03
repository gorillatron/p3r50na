(ns p3r50na.apps.bookof5rinds

  (:require [compojure.core :refer :all])

  (:use [hiccup.page]
        [compojure.core :only [routes GET POST DELETE ANY context]]))



(def namesofrind ["Rindosaurus" "Rindolorian" "Rindiana Jones"
                  "Rindeus Ex" "Rindseeker" "Ringo Jin"])


(def templates
  {:index (fn [&attrs] (html5
    [:head
      [:link {:rel "stylesheet" :href "/static/css/bookof5rinds.css"}]]
    [:body
      [:h1 "static"]
      [:div#app.col-group]
      [:script {:src "/static/js/bookof5rinds.js"}]]))})


(defn router []
  (routes
    (GET "/" [&args]
      (let [template (get templates :index)]
      (template &args)))))
