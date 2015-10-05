(ns p3r50na.core

  (:gen-class)

  (:require [com.stuartsierra.component :as component]
            [p3r50na.system :refer [create-system]])


(defn -main [& args]
  (-> (create-system)
      component/start))
