(ns p3r50na.core

  (:gen-class)

  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [com.stuartsierra.component :as component]
            [ring.middleware.reload :as reload]
            [p3r50na.apps.bookof5rinds.core :as bookof5rinds])

  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        org.httpkit.server))


(defn- start-server [handler port]
  (let [server (run-server (reload/wrap-reload (site handler)) {:port port})]
    (println (str "Started server on port:" port))
    server))


(defn- stop-server [server]
  (when server
    (server))) ;; run-server returns a fn that stops the server


(defroutes all-routes
  (GET "/" [] "show-landing-page yooo")
  (context "/book-of-5-rinds" []
    (bookof5rinds/router))
  (route/resources "/")
  (route/not-found "<p>Page not found.</p>")) ;; all other, return 404


(defrecord p3r50na []
  component/Lifecycle
  (start [this]
    (assoc this :server (start-server #'all-routes 8080)))
  (stop [this]
    (stop-server (:server this))
    (dissoc this :server)))


(defn create-system []
  (p3r50na.))


(defn -main [& args]
  (.start (create-system)))
