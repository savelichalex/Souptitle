(ns souptitledesktop.init
  (:require [souptitledesktop.core :as core]
            [souptitledesktop.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
