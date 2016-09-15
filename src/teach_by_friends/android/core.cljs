(ns teach-by-friends.android.core
  (:require [reagent.core :as r :refer [atom]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.android.ui :as android-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene]]
            [teach-by-friends.shared.scenes.seasons-scene :refer [get-seasons-scene]]
            [teach-by-friends.shared.scenes.chapters-scene :refer [get-chapters-scene]])
  (:use teach-by-friends.shared.layouts.root-layout))

(enable-console-print!)

(def root-layout (create-root-layout {:background-color "rgb(72, 86, 155)"}))
(def serials-scene (get-serials-scene android-ui/activity-indicator))
(def seasons-scene (get-seasons-scene android-ui/activity-indicator))
(def chapters-scene (get-chapters-scene android-ui/activity-indicator))

(defmulti render-scene (fn [nav] (:route nav)))
(defmethod render-scene :serials
  [{{direction :direction} :props}]
  [root-layout (serials-scene) {:direction direction :time 400}])

(defmethod render-scene :seasons
  [{{direction :direction} :props}]
  [root-layout (seasons-scene) {:direction direction :time 400}])

(defmethod render-scene :chapters
  [{{direction :direction} :props}]
  [root-layout (chapters-scene) {:direction direction :time 400}])

(defn app-root []
  [ui/navigation {:render-scene render-scene}])

(defn init []
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
