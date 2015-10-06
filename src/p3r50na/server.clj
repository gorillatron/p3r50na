(ns p3r50na.server

  (:require [com.stuartsierra.component :as component]
            [ring.middleware.reload :as reload]
            [clojure.tools.logging :as log]
            [environ.core :refer [env]]
            [org.httpkit.server :as httpkit])

  (:use [compojure.handler :only [site]]))


;; Start the server.
;; In non production env reload routes on routes change
(defn- start-server [handler port]
  (case (:env env)
    "production"  (httpkit/run-server (site handler) {:port port})
    "prod"        (httpkit/run-server (site handler) {:port port})
                  (httpkit/run-server (reload/wrap-reload (site handler)) {:port port})))


;; Stop the server supplied.
;; httpkit/run-server returns a function that stops it. Call that here.
(defn- stop-server [server]
  (when server
    (server)))


;; Component record for Server.
(defrecord Server [port]
  component/Lifecycle
  (start [component]
    (log/info "component/starting -> " `Server)
    (assoc component :server (start-server (:routes (:router component)) port)))
  (stop [component]
    (log/info "component/stopping -> " `Server)
    (stop-server (:server component))
    (dissoc component :server)))


;; Server component factory helper function.
(defn create-server [port]
  (map->Server {:port port}))
