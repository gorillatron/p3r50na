(ns p3r50na.apps.bookof5rinds.client.game.map)

(defrecord Map [blocksize matrix])


(defn map-size [map]
  (let [{matrix :matrix blocksize :blocksize} map
        x (* blocksize (count (first matrix)))
        y (* blocksize (count matrix))]
    [x y]))


(defn block-of-type [type map]
  (let [{blocksize :blocksize matrix :matrix} map]
    (remove nil?
      (flatten
        (map-indexed (fn [ydx row]
          (map-indexed (fn [xdx block]
            (let [y (* ydx blocksize)
                  x (* xdx blocksize)]
              (if (= type (:type block))
                {:x x :y y}))) row)) matrix)))))


(defn construct-map [blocksize matrix]
  (let [map (new Map blocksize matrix)]
    (assoc map :size (map-size map))))
