(ns souptitle-mobile.shared.animations
  (:require [reagent.core :as r]
            [souptitle-mobile.shared.ui :as ui]))

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
           [ui/animated-view {:style     (merge root-style style {:position "relative"})
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
