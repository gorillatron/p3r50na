(ns p3r50na.database
  (:require [datomic.api$connect :as connect]
            [com.stuartsierra.component :as component]))

(def uri "datomic:sql://dsi9p16oq8i4j?jdbc:postgresql://wvzekhkclvqtsg:ijW7ArxQnEmJasI9f42KIw8CUP@ec2-54-217-238-100.eu-west-1.compute.amazonaws.com:5432/dsi9p16oq8i4j")

(defrecord Database []
  component/Lifecycle
  (start [component]
    (println "START DB"))
  (stop [component]
    (println "STOP DB")))

(defn create-database []
  (map->Database nil))