(ns p3r50na.apps.bookof5rinds.model
  (:require [clojure.string :refer [join]]))



(defprotocol Statable "A entity stats"
  (sort-by-value [this] "Get a list of stat pairs sorted by value")
  (lowest [this] "Get the stat with the lowest value")
  (greatest [this] "Get the greatest stat")
  (two-greatest [this] "Get the two greatest stats"))



(defrecord Stats [str agi int lck]
  clojure.lang.Seqable
  Statable
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



(def stat-adjectives {:str "strong"
                      :agi "fast"
                      :int "smart"
                      :lck "lucky"})


(defprotocol Warrior "A Warrior. Strong and brave."
  (rend [this target] "Slice my opponent and leave him to bleed out!")
  (battle-cry [this] "Shout my power"))


(defprotocol Rogue "A Rogue. Charming and lucky"
  (hip-fire [this target-ish] "Who was that...")
  (charm [this] "Use my of power of seduction to save the galaxy!"))


(defprotocol Mage "A Mage. Smart and magical."
  (kinetic-blast [this target] "Use the force Luke.")
  (sheep [this target] "Bææææ"))


(defrecord Rindolorian [name stats])

(extend Rindolorian
  Warrior
  {:battle-cry (fn [this target]
    (str (:name this) " cries out at target" target))})

(defn create-Rindolorian []
  (new Rindolorian "Rindo" (new Stats 15 11 7 8)))

(defrecord Rindiana-Jones [name stats])

(extend Rindiana-Jones
  Rogue
  {:charm (fn [this]
    "So your body's a temple? how about you let me explore it")})

(defn create-Rindiana []
  (new Rindiana-Jones "Rindy" (new Stats 8 11 9 19)))
