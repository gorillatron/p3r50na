(ns p3r50na.core

  (:gen-class)

  (:require [com.stuartsierra.component :as component]
            [p3r50na.server :refer [create-server]]
            [p3r50na.router :refer [create-router]]))


(defn create-system []
  (component/system-map
    :router (create-router)
    :server (component/using
              (create-server 8080)
              [:router])))


(defn start-system []
  (-> (create-system)
      component/start))


(defn -main [& args]
  (start-system))
