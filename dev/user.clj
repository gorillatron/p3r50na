(ns user
  (:require [clojure.string :refer [join]]
            [reloaded.repl :refer [system reset stop]]
            [p3r50na.core]))

;(reloaded.repl/set-init! #'p3r50na.core/create-system)


(def stat-adjectives {:str "strong"
                      :agi "fast"
                      :int "smart"
                      :lck "lucky"})


(defprotocol Stats "A entity stats"
  (sort-by-value [this] "Get a list of stat pairs sorted by value")
  (lowest [this] "Get the stat with the lowest value")
  (greatest [this] "Get the greatest stat")
  (two-greatest [this] "Get the two greatest stats"))


(defrecord Rindolorian-Stats [str agi int lck]
  clojure.lang.Seqable
  Stats
  (sort-by-value [this]
    (sort (fn [a b]
      (if (< (last a) (last b))
          true
          false)) (seq this)))
  (lowest [this]
    (first (sort-by-value this)))
  (greatest [this]
    (last (sort-by-value this)))
  (two-greatest [this]
    (take-last 2 (sort-by-value this))))


(defprotocol Warrior "A Warrior. Strong and brave."
  (battle-cry [this] "Shout my power"))


(defprotocol Rogue "A Rogue. Charming and lucky"
  (charm [this] "Use my of seduction"))


(defprotocol Mage "A Mage. Smart and magical."
  (kinetic-blast [this] "Use the force Luke."))


(defrecord Rindolorian [name stats])

(extend Rindolorian
  Warrior
  {:battle-cry (fn [this target]
    ("wat"))})


(defrecord Rindiana-Jones [name stats])

(extend Rindiana-Jones
  Rogue
  {:charm (fn [this]
    "So your body's a temple? how about you let me explore it")})


(defn Rs []
  [(new Rindolorian "Rindseeker" (new Rindolorian-Stats 15 11 7 8))
   (new Rindiana-Jones "Rindy" (new Rindolorian-Stats 8 12 9 15))])
