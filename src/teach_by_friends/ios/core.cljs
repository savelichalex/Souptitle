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

(defn with-slide-and-opacity-transition [& children]
  (let [state (r/atom {:animated   false
                       :height     nil
                       :width      nil
                       :opacity    (ui/animated-value 1)
                       :from-value (ui/animated-value 0)
                       :to-value   (ui/animated-value 0)})]
    (r/create-class
      {:component-will-mount
       (fn []
         (swap! state (fn [s] (merge s {:animated      false
                                        :prev-props    children
                                        :current-props children}))))
       :component-will-receive-props
       (fn [_ [_ & next-props]]
         (let [current-props (:current-props @state)]
           (swap! state (fn [s] (merge s {:animated      true
                                          :prev-props    current-props
                                          :current-props next-props})))))
       :component-did-update
       (fn [_ [_ {:keys [time]}]]
         (when (and (:width @state) (:animated @state))
           (let [from-anim-value (:from-value @state)
                 to-anim-value (:to-value @state)
                 opacity-anim (:opacity @state)
                 width (:width @state)
                 to-value (case (:direction (first (:current-props @state)))
                            :to-left width
                            :to-right (* -1 width))]
             (ui/animated-set-value from-anim-value 0)
             (ui/animated-set-value to-anim-value to-value)
             (-> (ui/animated-parallel
                   (ui/animated-sequence
                     (ui/animated-timing
                       opacity-anim
                       {:toValue  0
                        :duration (/ time 2)})
                     (ui/animated-timing
                       opacity-anim
                       {:toValue  1
                        :duration (/ time 2)}))
                   (ui/animated-timing
                     from-anim-value
                     {:toValue  (* -1 to-value)
                      :duration time})
                   (ui/animated-timing
                     to-anim-value
                     {:toValue  0
                      :duration time}))
                 (ui/start-animated #(swap! state assoc :animated false))))))
       :reagent-render
       (fn [{:keys [root-style style]} & children]
         (if (nil? (:width @state))
           [ui/animated-view {:style     (merge root-style style {:position "relative"})
                              :on-layout #(swap! state (fn [s] (-> s
                                                                   (assoc :width (.. % -nativeEvent -layout -width))
                                                                   (assoc :height (.. % -nativeEvent -layout -height)))))}
            children]
           (if (:animated @state)
             [ui/animated-view {:style (merge root-style {:position "relative"
                                                          :background-color "transparent"
                                                          :overflow "hidden"
                                                          :width (:width @state)
                                                          :height (:height @state)
                                                          :opacity (:opacity @state)})}
              [ui/animated-view {:key   "from"
                                 :style (merge
                                          (:style (first (:prev-props @state)))
                                          {:position "absolute"
                                           :width    (:width @state)
                                           :height   (:height @state)
                                           :left     (:from-value @state)})}
               (rest (:prev-props @state))]
              [ui/animated-view {:key   "to"
                                 :style (merge
                                          style
                                          {:position "absolute"
                                           :width    (:width @state)
                                           :height   (:height @state)
                                           :left     (:to-value @state)})}
               children]]
             [ui/animated-view {:style (merge root-style style {:position "relative"
                                                                :background-color "transparent"})}
              children])))})))

(defn with-slide-transition [& children]
  (let [state (r/atom {:animated   false
                       :height     nil
                       :width      nil
                       :from-value (ui/animated-value 0)
                       :to-value   (ui/animated-value 0)})]
    (r/create-class
      {:component-will-mount
       (fn []
         (swap! state (fn [s] (merge s {:animated      false
                                        :prev-props    children
                                        :current-props children}))))
       :component-will-receive-props
       (fn [_ [_ & next-props]]
         (let [current-props (:current-props @state)]
           (swap! state (fn [s] (merge s {:animated      true
                                          :prev-props    current-props
                                          :current-props next-props})))))
       :component-did-update
       (fn [_ [_ {:keys [time]}]]
         (when (and (:width @state) (:animated @state))
           (let [from-anim-value (:from-value @state)
                 to-anim-value (:to-value @state)
                 width (:width @state)
                 to-value (case (:direction (first (:current-props @state)))
                            :to-left width
                            :to-right (* -1 width))]
             (ui/animated-set-value from-anim-value 0)
             (ui/animated-set-value to-anim-value to-value)
             (-> (ui/animated-parallel
                   (ui/animated-timing
                     from-anim-value
                     {:toValue  (* -1 to-value)
                      :duration time})
                   (ui/animated-timing
                     to-anim-value
                     {:toValue  0
                      :duration time}))
                 (ui/start-animated #(swap! state assoc :animated false))))))
       :reagent-render
       (fn [{:keys [root-style style]} & children]
         (if (nil? (:width @state))
           [ui/view {:style     (merge root-style style {:position "relative"})
                     :on-layout #(swap! state (fn [s] (-> s
                                                          (assoc :width (.. % -nativeEvent -layout -width))
                                                          (assoc :height (.. % -nativeEvent -layout -height)))))}
            children]
           (if (:animated @state)
             [ui/view {:style (merge root-style {:position "relative"})}
              [ui/animated-view {:key   "from"
                                 :style (merge
                                          (:style (first (:prev-props @state)))
                                          {:position "absolute"
                                           :width    (:width @state)
                                           :height   (:height @state)
                                           :left     (:from-value @state)})}
               (rest (:prev-props @state))]
              [ui/animated-view {:key   "to"
                                 :style (merge
                                          style
                                          {:position "absolute"
                                           :width    (:width @state)
                                           :height   (:height @state)
                                           :left     (:to-value @state)})}
               children]]
             [ui/view {:style (merge root-style style {:position "relative"})}
              children])))})))

;(defn app-root []
;  (let [state (r/atom 0)]
;    (fn []
;      [with-opacity-transition {:time 1000}
;       [ui/text {:on-click #(swap! state inc) @state}]])))
(def menu-icon-source (js/require "./images/menu-icon.png"))
(defn menu-icon [{:keys [style]}]
  [ui/image {:source menu-icon-source :style style}])
(defn app-root []
  (let [state (r/atom {:val       0
                       :direction :to-left})]
    (fn []
      [ui/view {:style {:flex 1}}
       [ui/linear-gradient {:colors ["#834d9b" "#48569B"]
                            :start  [1.0 1.0] :end [0.0 0.0]
                            :style  {:height         150
                                     :flex-direction "row"
                                     :align-items    "center"}}
        [with-opacity-transition {:key   "left-menu"
                                  :time  400
                                  :style {:flex        2
                                          :align-items "center"}}
         (if (= (mod (:val @state) 2) 0)
           [ui/text {:key   1
                     :style {:color     "white"
                             :font-size 20}}
            "< Back"]
           [menu-icon {:key 2 :style {:width 25 :height 15}}])]
        [with-slide-and-opacity-transition {:key        "title"
                                            :time       400
                                            :direction  (:direction @state)
                                            :root-style {:flex 5}
                                            :style      {:align-items "center"}}
         [ui/text {:key 1
                   :style {:color     "white"
                           :font-size 30}}
          (:val @state)]]
        [with-opacity-transition {:key   "right-menu"
                                  :time  400
                                  :style {:flex        2
                                          :align-items "center"}}
         [ui/text {:key      1
                   :on-press #(swap! state (fn [s] {:val (inc (:val s)) :direction :to-left}))
                   :style    {:color     "white"
                              :font-size 30}}
          (:val @state)]]]
       [with-slide-transition
        {:time       400
         :direction  (:direction @state)
         :root-style {:flex 1}
         :style      {:flex            1
                      :align-items     "center"
                      :justify-content "center"}}
        [ui/text {:key      "slide-text"
                  :on-press #(swap! state (fn [s] {:val (dec (:val s)) :direction :to-right}))
                  :style    {:font-size 30}}
         (:val @state)]]])))


(defn init []
  ;(dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
