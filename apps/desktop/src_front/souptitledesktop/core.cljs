(ns souptitledesktop.core
  (:require [reagent.core :as r]))

(defonce state (r/atom {:message "Hello from Souptitle!"}))

(defn root-component []
  [:h1 (:message @state)])

(defn mount-root [settings]
  (r/render [root-component]
            (.getElementById js/document "app")))

(defn init! [settings]
  (mount-root settings))
