(ns souptitle-desktop.common.utils.maybe)

(defprotocol Maybe
  (>>= [_ _] "Bind monad with pure function that return new monad"))

(deftype Just [val]
  Maybe
  (>>= [this fn]
    (fn val)))

(defn just [val] (Just. val))

(deftype Nothing []
  Maybe
  (>>= [this fn]
    (Nothing.)))

(defn nothing [] (Nothing.))
