(ns p3r50na.server

  (:require [com.stuartsierra.component :as component]
            [ring.middleware.reload :as reload]
            [clojure.tools.logging :as log])

  (:use [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        org.httpkit.server))


(defn- start-server [handler port]
  (run-server (reload/wrap-reload (site handler)) {:port port}))


(defn- stop-server [server]
  (when server
    (server)))


(defrecord Server [port]
  component/Lifecycle
  (start [component]
    (log/info "component/starting -> " `Server)
    (assoc component :server (start-server (:routes (:router component)) port)))
  (stop [component]
    (log/info "component/stopping -> " `Server)
    (stop-server (:server component))
    (dissoc component :server)))


(defn create-server [port]
  (map->Server {:port port}))
