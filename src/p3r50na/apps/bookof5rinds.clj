(ns p3r50na.apps.bookof5rinds

  (:require [compojure.core :refer :all])

  (:use [hiccup.page]
        [compojure.core :only [routes GET POST DELETE ANY context]]))



(def templates
  {:index (fn [&attrs] (html5
    [:body
      [:h1 "Book of 5 Rinds"]
      [:p "LOL"]])) })


(defn router []
  (routes
    (GET "/" [&args]
      (let [template (get templates :index)]
      (template &args)))))
