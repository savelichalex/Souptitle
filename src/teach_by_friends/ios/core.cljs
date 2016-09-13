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
            [teach-by-friends.shared.scenes.new-design :refer [get-new-design-scene]]
            [clojure.string :as string]))

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

;(defn app-root []
;  [ui/navigation {:initial-route :serials
;                  :render-scene render-scene
;                  :configure-scene configure-scene}])

(defn with-opacity-transition [_ & children]
  (let [state (r/atom {:animated   false
                       :fade-value (ui/animated-value 1)})]
    (r/create-class
      {:component-will-mount
       (fn []
         (swap! state (fn [s] (merge s {:animated      false
                                        :prev-props    children
                                        :current-props children}))))
       :component-will-receive-props
       (fn [_ [_ _ & next-props]]
         (let [current-props (:current-props @state)]
           (swap! state (fn [s] (merge s {:animated      true
                                          :prev-props    current-props
                                          :current-props next-props})))))
       :component-did-update
       (fn [_ [_ {:keys [time]}]]
         (when (:animated @state)
           (ui/start-animated-timing
             (:fade-value @state)
             {:toValue 0 :duration (/ time 2)}
             (fn []
               (swap! state assoc :animated false)
               (ui/start-animated-timing
                 (:fade-value @state)
                 {:toValue 1 :duration (/ time 2)})))))
       :reagent-render
       (fn [{:keys [style]} & children]
         [ui/animated-view {:style (-> style
                                     (assoc :opacity (:fade-value @state))
                                     (assoc :background-color "transparent"))}
          (if (:animated @state)
            (:prev-props @state)
            children)])})))

(defn with-slide-transition [_ & children]
  (let [state (r/atom {:animated false
                       :width nil
                       :from-value (ui/animated-value 0)
                       :to-value (ui/animated-value 100)})]
      (r/create-class
        {:component-will-mount
         (fn []
           (swap! state (fn [s] (merge s {:animated      false
                                          :prev-props    children
                                          :current-props children}))))
         :component-will-receive-props
         (fn [_ [_ _ & next-props]]
           (let [current-props (:current-props @state)]
             (swap! state (fn [s] (merge s {:animated      true
                                            :prev-props    current-props
                                            :current-props next-props})))))
         :component-did-update
         (fn [_ [_ {:keys [time]}]]
           (when (:animated @state)
             (ui/start-animated-timing
               (:fade-value @state)
               {:toValue 0 :duration (/ time 2)}
               (fn []
                 (swap! state assoc :animated false)
                 (ui/start-animated-timing
                   (:fade-value @state)
                   {:toValue 1 :duration (/ time 2)})))))
         :reagent-render
         (fn [{:keys [style]} & children]
           (if (nil? (:width @state))
            [ui/view {:style (merge style {:position "relative"})}
                     :on-layout #(swap! state (fn [s] (assoc s :width (.. % -nativeEvent -layout -width))))]
            [ui/view {:style {:position "relative"}}
             [ui/animated-view {:style {:position "absolute"
                                        :width "100%"
                                        :height "100%"
                                        :left (:from-value @state)}}
              (:prev-props @state)]
             [ui/animated-view {:style {:position "absolute"
                                        :width "100%"
                                        :height "100%"
                                        :left (:to-value @state)}}
              (:current-props @state)]]))})))

;(defn app-root []
;  (let [state (r/atom 0)]
;    (fn []
;      [with-opacity-transition {:time 1000}
;       [ui/text {:on-click #(swap! state inc) @state}]])))
(defn app-root []
  (let [state (r/atom 0)]
    (fn []
      [ui/linear-gradient {:colors ["#834d9b" "#48569B"]
                           :start  [1.0 1.0] :end [0.0 0.0]
                           :style  {:height         150
                                    :flex-direction "row"
                                    :align-items    "center"}}
       [with-opacity-transition {:key  "left-menu"
                                 :time 400
                                 :style {:flex 2
                                         :align-items "center"}}
        [ui/text {:key      1
                  :on-press #(swap! state inc)
                  :style    {:color     "white"
                             :font-size 20}}
         "< Back"]]
       [with-opacity-transition {:key         "title"
                                 :time        400
                                 :style       {:flex 5
                                               :align-items "center"}}
        [ui/text {:style {:color     "white"
                          :font-size 30}}
         (string/upper-case
           (str "serials"))]]
       [with-opacity-transition {:key  "right-menu"
                                 :time 400
                                 :style {:flex 2
                                         :align-items "center"}}
        [ui/text {:key      1
                  :on-press #(swap! state inc)
                  :style    {:color     "white"
                             :font-size 30}}
         @state]]])))

(defn init []
  ;(dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
