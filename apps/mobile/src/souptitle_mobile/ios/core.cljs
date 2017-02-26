(ns souptitle-mobile.ios.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [clojure.string :refer [capitalize]]
            [souptitle-mobile.handlers]
            [souptitle-mobile.subs]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.ios.ui :as ios-ui]
            [souptitle-mobile.shared.scenes.serials-scene :refer [get-serials-screen get-serials-options]]
            [souptitle-mobile.shared.scenes.chapters-scene :refer [get-chapter-screen]]
            [souptitle-mobile.shared.scenes.well-known-screen :refer [get-well-known-screen]]
            [souptitle-mobile.shared.scenes.about-screen :refer [get-about-screen]]
            [souptitle-mobile.shared.scenes.network-error :refer [get-network-error-screen]]
            [souptitle-mobile.shared.icons :refer [get-icon]]
            [souptitle-mobile.shared.navigation :as nav]))

(enable-console-print!)

(def about-screen (get-about-screen))
(def chapter-screen (get-chapter-screen ios-ui/blur-view ios-ui/activity-indicator))
(def serials-screen (get-serials-screen ios-ui/activity-indicator))
(def well-known-screen (get-well-known-screen))
(def network-error-screen (get-network-error-screen))

(def serials-screens
  (nav/create-stack-navigator
   {:serials-main {:screen serials-screen}
    :chapter {:screen chapter-screen}}
   {:card-style {:position "absolute"
                 :top 0
                 :bottom 0
                 :background-color "black"}}))

(def main-tabs
  (nav/create-tab-navigator
   {:serials {:screen serials-screens
              :navigation-options (get-serials-options)}
    :well-known {:screen well-known-screen}
    :about {:screen about-screen}}
   {:tab-bar-options {:style {:background-color "black"}
                      :active-tint-color "white"
                      :inactive-tint-color "#ccc"}}))

(def main-wrapper
  (r/adapt-react-class
   (nav/create-tab-navigator
    {:index {:screen main-tabs}
     :network-error {:screen network-error-screen}}
    {:lazy-load false
     :navigation-options {:tab-bar {:visible false}}})))

(defn app-root []
  [main-wrapper])

(defn init []
  (.registerComponent
   ui/app-registry
   "Souptitle"
   #(r/reactify-component app-root)))
