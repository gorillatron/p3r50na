(ns p3r50na.router
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [com.stuartsierra.component :as component]
            [ring.middleware.reload :as reload])

  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        org.httpkit.server))


(defroutes all-routes
           (GET "/" [] "show-landing-page yooo")
           (route/resources "/")
           (route/not-found "<p>Page not found.</p>")) ;; all other, return 404


(defrecord Router []
  component/Lifecycle
  (start [component]
    (assoc component :routes all-routes))
  (stop [component]
    (dissoc component :routes)))


(defn create-router []
  (map->Router nil))