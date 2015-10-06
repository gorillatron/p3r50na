(ns p3r50na.core
  (:require [com.stuartsierra.component :as component]
            [p3r50na.system :refer [create-system]]))


;; Create a new p3r50na system map
;; And start it.
(defn -main [& args]
  (-> (create-system)
      component/start))
