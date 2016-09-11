(ns teach-by-friends.ios.core
  (:refer-clojure :exclude [pop])
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.ios.ui :as ios-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene]]
            [teach-by-friends.shared.scenes.seasons-scene :refer [get-seasons-scene]]
            [teach-by-friends.shared.scenes.new-design :refer [get-new-design-scene]]))

(enable-console-print!)

(def serials-scene (get-serials-scene ios-ui/activity-indicator {:bar-style "light-content"}))
(def seasons-scene (get-seasons-scene ios-ui/activity-indicator))
(def new-design-scene (get-new-design-scene ios-ui/activity-indicator))

(defmulti render-scene (fn [nav] (:route nav)))
(defmethod render-scene :serials
  [_]
  [serials-scene])

(defmethod render-scene :seasons
  [_]
  [seasons-scene])

(defmethod render-scene :chapter
  [{title :props}]
  [new-design-scene title])

(defmulti configure-scene identity)
(defmethod configure-scene :default
  [_]
  :push-from-right)

(defn app-root []
  [ui/navigation {:initial-route :serials
                  :render-scene render-scene
                  :configure-scene configure-scene}])

(defn init []
  ;(dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
