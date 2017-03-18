(ns souptitle-desktop.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch-sync subscribe]]
            [souptitle-desktop.events]
            [souptitle-desktop.subs]
            [souptitle-desktop.manager.main :refer [manager]]))

(defn app-root [settings]
  [manager])

(defn mount-root [settings]
  (r/render [app-root settings]
            (.getElementById js/document "app")))

(defn init! [settings]
  (dispatch-sync [:initialize-db])
  (mount-root settings))
