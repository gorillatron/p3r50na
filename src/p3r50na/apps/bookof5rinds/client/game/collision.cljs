(ns p3r50na.apps.bookof5rinds.client.game.collision)


(defn block-intersections [rect blocks blocksize]
  (for [block blocks]
    (let [{px :x py :y psize :size} rect
          {wx :x wy :y} block]
      (or
        (> px (+ wx blocksize))
        (< (+ px psize) wx)
        (> py (+ wy blocksize))
        (< (+ py psize) wy)))))


(defn rect-intersects-blocks? [rect blocks blocksize]
  (let [intersections (block-intersections rect blocks blocksize)
        nri (count (filter false? intersections))]
    (< 0 nri)))


(defn rect-intersects-boundary? [rect map]
  (let [{px :x py :y psize :size} rect
        [mw mh] (:size map)]
    (or
      (< px 0)
      (< py 0)
      (> (+ px psize) mw)
      (> (+ py psize) mh))))
