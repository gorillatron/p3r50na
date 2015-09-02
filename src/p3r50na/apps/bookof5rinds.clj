(ns p3r50na.apps.bookof5rinds

  (:require [compojure.core :refer :all])

  (:use [hiccup.page]
        [compojure.core :only [routes GET POST DELETE ANY context]]))



(def namesofrind ["Rindosaurus" "Rindolorian" "Rindiana Jones"
                  "Rindeus Ex" "Rindseeker"])


(def templates
  {:index (fn [&attrs] (html5
    [:head
      [:link {:rel "stylesheet" :href "/static/css/bookof5rinds.css"}]
      [:script {:src "/static/js/bookof5rinds.js"}]]
    [:body
      [:div#app.col-group
        [:h1.col-mb-12 "Book of 5 Rinds"]
        [:ul.col-mb-12
          (for [name namesofrind] [:li name])]]]))})


(defn router []
  (routes
    (GET "/" [&args]
      (let [template (get templates :index)]
      (template &args)))))
