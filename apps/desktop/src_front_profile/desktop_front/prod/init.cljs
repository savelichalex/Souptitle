(ns desktop-front.init
    (:require [desktop-front.core :as core]
              [desktop-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
