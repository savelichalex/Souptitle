(ns teach-by-friends.android.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.android.ui :as android-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene]]
            [teach-by-friends.shared.scenes.seasons-scene :refer [get-seasons-scene]]
            [teach-by-friends.shared.scenes.chapters-scene :refer [get-chapters-scene]])
  (:use teach-by-friends.shared.layouts.root-layout))

(def root-layout (create-root-layout {:background-color "rgb(72, 86, 155)"}))
(def serials-scene (get-serials-scene android-ui/activity-indicator))
(def seasons-scene (get-seasons-scene android-ui/activity-indicator))
(def new-design-scene (get-chapters-scene android-ui/activity-indicator))

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
