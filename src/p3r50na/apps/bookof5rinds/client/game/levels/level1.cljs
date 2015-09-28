(ns p3r50na.apps.bookof5rinds.client.game.levels.level1
  (:require [p3r50na.apps.bookof5rinds.client.game.level :refer [construct-map map-size]]))


(def level1 (construct-map 20 [
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :w} {:type :w} {:type :w} {:type :w} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :w} {:type :w} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
  [{:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g} {:type :g}{:type :g}{:type :g}{:type :g}]
]))
