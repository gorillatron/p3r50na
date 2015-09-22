(ns p3r50na.apps.bookof5rinds.client.game.collision)


(defn block-intersections [player blocks blocksize]
  (for [block blocks]
    (let [{px :x py :y psize :size} player
          {wx :x wy :y} block]
      (or
        (> px (+ wx blocksize))
        (< (+ px psize) wx)
        (> py (+ wy blocksize))
        (< (+ py psize) wy)))))


(defn player-intersects-blocks? [player blocks blocksize]
  (let [intersections (block-intersections player blocks blocksize)
        nri (count (filter false? intersections))]
    (< 0 nri)))


(defn player-intersects-boundary? [player map]
  (let [{px :x py :y psize :size} player
        [mw mh] (:size map)]
    (or
      (< px 0)
      (< py 0)
      (> (+ px psize) mw)
      (> (+ py psize) mh))))
