(ns p3r50na.system

  (:require [com.stuartsierra.component :as component]
            [p3r50na.server :refer [create-server]]
            [p3r50na.router :refer [create-router]]
            [p3r50na.database :refer [create-database]]
            [environ.core :refer [env]]))


(def port (Integer. (or (env :port) 8080)))


(defn create-system []
  (component/system-map
    :database (create-database)
    :router (component/using
              (create-router)
              [:database])
    :server (component/using
              (create-server port)
              [:router])))

