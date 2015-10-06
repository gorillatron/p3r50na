(ns p3r50na.router
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [com.stuartsierra.component :as component]
            [ring.middleware.reload :as reload]
            [clojure.tools.logging :as log]
            [clojure.core.async :refer [go chan <! <!! >!]])

  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        org.httpkit.server))


;; All the routes for the application
(defroutes all-routes
           (route/resources "/")
           (GET "/" [] "<script src=\"/js/p3r50na.client.core.js\"></script>")
           (route/not-found "<p>Page not found.</p>"))


;; Component record for the application router.
(defrecord Router []
  component/Lifecycle
  (start [component]
    (log/info "component/starting -> " `Router)
    (assoc component :routes #'all-routes))
  (stop [component]
    (log/info "component/stopping -> " `Router)
    (dissoc component :routes)))


;; Helper factory function for Router component;
(defn create-router []
  (map->Router nil))