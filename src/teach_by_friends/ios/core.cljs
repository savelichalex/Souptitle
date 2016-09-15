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
            [teach-by-friends.shared.scenes.chapters-scene :refer [get-chapters-scene]])
  (:use teach-by-friends.shared.layouts.root-layout))

(enable-console-print!)

(def root-layout (create-root-layout {:bar-style "light-content"}))
(def serials-scene (get-serials-scene ios-ui/activity-indicator))
(def seasons-scene (get-seasons-scene ios-ui/activity-indicator))
(def chapters-scene (get-chapters-scene ios-ui/activity-indicator))

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
  ;(dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
