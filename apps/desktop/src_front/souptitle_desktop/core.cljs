(ns souptitle-desktop.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch-sync subscribe]]
            [souptitle-desktop.events]
            [souptitle-desktop.subs]))

(defonce state (r/atom {:message "Hello from Souptitle!"}))

(defn root-component []
  (let [message @(subscribe [:get-message])]
    [:h1 message]))

(defn mount-root [settings]
  (dispatch-sync [:initialize-db])
  (r/render [root-component]
            (.getElementById js/document "app")))

(defn init! [settings]
  (mount-root settings))
