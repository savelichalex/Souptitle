(ns souptitle-mobile.ios.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [clojure.string :refer [capitalize]]
            [souptitle-mobile.handlers]
            [souptitle-mobile.subs]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.ios.ui :as ios-ui]
            [souptitle-mobile.shared.scenes.serials-scene :refer [get-serials-screen]]
            [souptitle-mobile.shared.scenes.chapters-scene :refer [get-chapter-screen serial-bars-creator translate-creator]]
            [souptitle-mobile.shared.scenes.well-known-screen :refer [get-well-known-screen]]
            [souptitle-mobile.shared.scenes.about-screen :refer [get-about-screen]]
            [souptitle-mobile.shared.icons :refer [get-icon]]))

(enable-console-print!)

(def about-screen (get-about-screen))
(def chapter-screen (get-chapter-screen ios-ui/activity-indicator))
(def serials-screen (get-serials-screen ios-ui/activity-indicator))
(def well-known-screen (get-well-known-screen))

(def translate (translate-creator ios-ui/blur-view ios-ui/activity-indicator))
(def serial-bars (serial-bars-creator ios-ui/blur-view ios-ui/activity-indicator))

(def network-error (get-network-error-modal))

(def main-tabs
  (create-tab-navigator {:Serials #(r/reactify-component serials-screen)
                         :WellKnown #(r/reactify-component well-known-screen)
                         :About #(r/reactify-component about-screen)}))

(defn init []
  (.registerComponent
   ui/app-registry
   "Souptitle"
   (fn [] main-tabs)))
