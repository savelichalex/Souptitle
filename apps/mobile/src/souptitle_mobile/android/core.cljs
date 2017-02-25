(ns souptitle-mobile.android.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [clojure.string :refer [capitalize]]
            [souptitle-mobile.handlers]
            [souptitle-mobile.subs]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.android.ui :as android-ui]
            [souptitle-mobile.shared.scenes.serials-scene :refer [get-serials-screen]]
            [souptitle-mobile.shared.scenes.chapters-scene :refer [get-chapter-screen]]
            [souptitle-mobile.shared.scenes.well-known-screen :refer [get-well-known-screen]]
            [souptitle-mobile.shared.scenes.about-screen :refer [get-about-screen]]
            [souptitle-mobile.shared.icons :refer [get-icon]]
            [souptitle-mobile.shared.navigation :refer [create-tab-navigator]]))

(enable-console-print!)

(def about-screen (get-about-screen))
(def chapter-screen (get-chapter-screen android-ui/blur-view  android-ui/activity-indicator))
(def serials-screen (get-serials-screen android-ui/activity-indicator))
(def well-known-screen (get-well-known-screen))

(def main-tabs
  (create-tab-navigator {:Serials #(r/reactify-component serials-screen)
                         :WellKnown #(r/reactify-component well-known-screen)
                         :About #(r/reactify-component about-screen)}))

(defn app-root
  [main-tabs])

(defn init []
  (.registerComponent
   ui/app-registry
   "Souptitle"
   #(r/reactify-component app-root)))
