(ns user
  (:require [clojure.string :refer [join]]
            [reloaded.repl :refer [system reset stop]]
            [p3r50na.core]))

(reloaded.repl/set-init! #'p3r50na.core/create-system)