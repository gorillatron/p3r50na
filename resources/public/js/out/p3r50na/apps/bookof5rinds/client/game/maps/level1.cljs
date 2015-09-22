(ns p3r50na.apps.bookof5rinds.client.game.maps.level1
  (:require [p3r50na.apps.bookof5rinds.client.game.map :refer [construct-map map-size]]))


(def level1 (construct-map 20 [
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g}]
  [{:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w}]
]))
