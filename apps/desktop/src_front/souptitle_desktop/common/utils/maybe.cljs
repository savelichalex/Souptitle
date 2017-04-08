(ns souptitle-desktop.common.utils.maybe)

(defprotocol Maybe
  (>>= [self f] "Bind monad with pure function that return new monad"))

(deftype Just [val]
  Maybe
  (>>= [self f]
    (f val)))

(defn just [val] (Just. val))

(deftype Nothing []
  Maybe
  (>>= [self f]
    (Nothing.)))

(defn nothing [] (Nothing.))
