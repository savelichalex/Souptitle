(ns souptitle-desktop.init
  (:require [souptitle-desktop.core :as core]
            [souptitle-desktop.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
