(ns teach-by-friends.ios.core
  (:refer-clojure :exclude [pop])
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.ios.ui :as ios-ui]
            [teach-by-friends.shared.scenes.home-scene :refer [get-home-scene]]
            [teach-by-friends.shared.scenes.chapter-scene :refer [get-chapter-scene]]
            [teach-by-friends.shared.scenes.term-scene :refer [get-term-scene]]
            [teach-by-friends.shared.scenes.new-design :refer [get-new-design-scene]]))

(enable-console-print!)

(def home-scene (get-home-scene ios-ui/activity-indicator {:bar-style "light-content"}))
(def term-scene (get-term-scene ios-ui/activity-indicator))
(def chapter-scene (get-chapter-scene ios-ui/activity-indicator))
(def new-design-scene (get-new-design-scene ios-ui/activity-indicator))

(defmulti render-scene (fn [nav] (:route nav)))
(defmethod render-scene :home
  [_]
  [home-scene])

(defmethod render-scene :chapter
  [_]
  [chapter-scene])

(defmethod render-scene :term
  [{props :props}]
  [term-scene props])

(defmethod render-scene :new-design
  [{title :props}]
  [new-design-scene title])

(defmulti configure-scene identity)
(defmethod configure-scene :default
  [_]
  :push-from-right)

(defn app-root []
  [ui/navigation {:initial-route :home
                  :render-scene render-scene
                  :configure-scene configure-scene}])

(defn init []
  ;(dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
