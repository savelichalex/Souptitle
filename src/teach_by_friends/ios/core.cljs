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
            [teach-by-friends.shared.scenes.new-design :refer [get-chapters-scene]]
            [clojure.string :as string]))

(enable-console-print!)

(def serials-scene (get-serials-scene ios-ui/activity-indicator))
(def seasons-scene (get-seasons-scene ios-ui/activity-indicator))
(def chapters-scene (get-chapters-scene ios-ui/activity-indicator))

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
         (print (first (:current-props @state)))
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
             [ui/animated-view {:style (merge root-style {:position         "relative"
                                                          :background-color "transparent"
                                                          :overflow         "hidden"
                                                          :width            (:width @state)
                                                          :height           (:height @state)
                                                          :opacity          (:opacity @state)})}
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
             [ui/animated-view {:style (merge root-style style {:position         "relative"
                                                                :background-color "transparent"
                                                                :width            (:width @state)
                                                                :height           (:height @state)})}
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
           [ui/animated-view {:style (merge root-style style {:position "relative"})
                              :on-layout #(swap! state (fn [s] (-> s
                                                                 (assoc :width (.. % -nativeEvent -layout -width))
                                                                 (assoc :height (.. % -nativeEvent -layout -height)))))}
            children]
           (if (:animated @state)
             [ui/animated-view {:style (merge root-style {:position "relative"
                                                          :width    (:width @state)
                                                          :height   (:height @state)})}
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
                                                                :width    (:width @state)
                                                                :height   (:height @state)})}
              children])))})))

(defn root-layout [{{lb :left-button title :title rb :right-button} :nav-bar content :content} {:keys [direction time]}]
  [ui/view {:style {:flex 1}}
   [ui/status-bar {:bar-style "light-content"}] ; this is only for ios, for andoid need {:background-color "rgb(72, 86, 155)"}
   [ui/linear-gradient {:colors ["#834d9b" "#48569B"]
                        :start  [1.0 1.0] :end [0.0 0.0]
                        :style  {:height         150
                                 :flex-direction "row"
                                 :align-items    "center"}}
    [with-opacity-transition {:key   "left-menu"
                              :time  time
                              :style {:flex        2
                                      :align-items "center"}}
     (when lb
       ^{:key "left-button"} [lb])]
    [with-slide-and-opacity-transition {:key        "title"
                                        :time       time
                                        :direction  direction
                                        :root-style {:flex 5}
                                        :style      {:align-items "center"}}
     (when title
       ^{:key "title"} [title])]
    [with-opacity-transition {:key   "right-menu"
                              :time  time
                              :style {:flex        2
                                      :align-items "center"}}
     (when rb
       ^{:key "right-button"} [rb])]]
   [with-slide-transition
    {:time       time
     :direction  direction
     :root-style {:flex 1}
     :style      {:flex            1
                  :align-items     "center"
                  :justify-content "center"}}
    (when content
      ^{:key "content"} [content])]])

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

(defn navigation [props]
  (let [nav-state (r/atom {:route nil
                           :props nil})
        track-id (atom nil)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (let [id (r/track! (fn []
                              (let [nav (reaction (get @re-frame.db/app-db :nav))
                                    route (:route @nav)
                                    props (:props @nav)
                                    type (:type @nav)]
                                (print route)
                                (cond
                                  (nil? route) nil
                                  (= type :pop) (swap! nav-state (fn [] {:route route :props (assoc props :direction :to-right)}))
                                  (= type :push) (swap! nav-state (fn [] {:route route :props (assoc props :direction :to-left)}))
                                  :else (swap! nav-state (fn [] {:route route}))))))]
           (swap! track-id (fn [_] id))))
       :component-will-unmount
       (fn [this]
         (r/dispose! @track-id))
       :reagent-render
       (fn [{:keys [render-scene]}]
         (when (not (nil? (:route @nav-state)))
           (render-scene @nav-state)))})))

(defn app-root []
  [navigation {:render-scene render-scene}])

(defn init []
  ;(dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
