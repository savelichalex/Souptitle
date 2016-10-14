(ns teach-by-friends.ios.core
  (:require [reagent.core :as r]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.ios.ui :as ios-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene]]
            [teach-by-friends.shared.scenes.seasons-scene :refer [get-seasons-scene]]
            [teach-by-friends.shared.scenes.chapters-scene :refer [get-chapters-scene chapters-content]]
            [teach-by-friends.shared.layouts.root-layout :refer [create-root-layout]]
            [teach-by-friends.shared.components.timeline :refer [timeline]]
            [teach-by-friends.shared.navigation :refer [navigation-tabs]])
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen get-component-name]]))

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

(def chapter (chapters-content ios-ui/activity-indicator))
(defn empty-scene1 []
  [ui/view {:style {:flex 1
                    :background-color "red"}}])

(defn empty-scene2 []
  [ui/view {:style {:flex 1
                    :background-color "green"}}])

(print (get-component-name chapter))
(defscreen
  chapter
  [nav]
  (print nav))
(defscreen
  empty-scene1
  [nav]
  (print nav))
(defscreen
  empty-scene2
  [nav]
  (print nav))

(defn app-root []
  (navigation-tabs {:tabsStyle {:tabBarButtonColor "rgb(151,151,151)"
                                :tabBarSelectedButtonColor "#fff"
                                :tabBarBackgroundColor "#000"}}
   [chapter {:label "Words"}]
   [empty-scene1 {:label "Favorite"}]
   [empty-scene2 {:label "About"}]))
;(defn app-root []
;  [chapter])

;(defn app-root []
;  (let [tPosition (ui/animated-value 100.0)
;        pan-responder (ui/create-pan-responder {:onStartShouldSetPanResponder        (fn [_ _] true)
;                                                :onStartShouldSetPanResponderCapture (fn [_ _] true)
;                                                :onMoveShouldSetPanResponder         (fn [_ _] true)
;                                                :onMoveShouldSetPanResponderCapture  (fn [_ _] true)
;                                                :onPanResponderGrant                 (fn [event _]
;                                                                                       (print
;                                                                                         (ui/animated-set-value tPosition (aget event "nativeEvent" "pageY"))))
;                                                :onPanResponderMove                  (fn [event _]
;                                                                                       (print
;                                                                                         (ui/animated-set-value tPosition (aget event "nativeEvent" "pageY"))))})]
;
;    [ui/view {:style {:flex           1
;                      :flex-direction "row"}}
;     [timeline (-> {:tPosition          tPosition
;                    :countWordsOnScreen 11
;                    :timestamps         (clj->js (->> (range 0 70) (map #(str %))))
;                    :style              {:flex 1}}
;                   (merge (ui/get-pan-handlers pan-responder)))]
;     [ui/view {:style {:flex 5}}]]))

;(defn app-root []
;  [ui/navigation {:render-scene render-scene}])

(defn init []
  ;(.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
  (app-root))
