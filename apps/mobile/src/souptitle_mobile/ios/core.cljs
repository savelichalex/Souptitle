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
            [souptitle-mobile.shared.icons :refer [get-icon]]
            [souptitle-mobile.shared.navigation :as nav]))

(enable-console-print!)

(def about-screen (get-about-screen))
(def chapter-screen (get-chapter-screen ios-ui/activity-indicator))
(def serials-screen (get-serials-screen ios-ui/activity-indicator))
(def well-known-screen (get-well-known-screen))

(def translate (translate-creator ios-ui/blur-view ios-ui/activity-indicator))
(def serial-bars (serial-bars-creator ios-ui/blur-view ios-ui/activity-indicator))

(def serials-screens
  (nav/create-stack-navigator
   {:serials-main {:screen serials-screen}}))

(def main-tabs
  (nav/create-tab-navigator
   {:serials {:screen serials-screens}
    :well-known {:screen well-known-screen}
    :about {:screen about-screen}}
   {:tab-bar-options {:style {:background-color "black"}
                      :active-tint-color "white"
                      :inactive-tint-color "#ccc"}}))

(defn app-root []
  [main-tabs])

(defn init []
  (.registerComponent
   ui/app-registry
   "Souptitle"
   #(r/reactify-component app-root)))
