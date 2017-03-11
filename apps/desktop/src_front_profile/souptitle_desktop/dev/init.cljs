(ns souptitle-desktop.init
  (:require [figwheel.client :as fw :include-macros true]
            [souptitle-desktop.core :as core]
            [souptitle-desktop.conf :as conf]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
