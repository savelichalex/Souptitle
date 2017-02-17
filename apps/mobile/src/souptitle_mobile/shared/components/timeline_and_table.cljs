(ns souptitle-mobile.shared.components.timeline-and-table
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.shared.components.table-view :refer [table-view]]
            [souptitle-mobile.shared.components.timeline :refer [timeline]]
            [souptitle-mobile.shared.components.timeline-label :refer [timeline-label]]
            [reagent.core :as r]))

(def TIMELINE_LINES_COUNT 60)

(defn update-positions [tPosition table-margin-top fullHeight visibleHeight event _]
  (let [timeline-y (.. event -nativeEvent -locationY)
        y-ratio (/ timeline-y @visibleHeight)
        words-list-y-temp (* @fullHeight y-ratio)
        words-list-y (if (> words-list-y-temp (- @fullHeight @visibleHeight))
                       (- @fullHeight @visibleHeight)
                       words-list-y-temp)]
    (ui/animated-set-value tPosition timeline-y)
    (ui/animated-set-value table-margin-top words-list-y)))

(defn update-timeline-position [tPosition fullHeight visibleHeight event]
  (let [words-list-y (aget event "nativeEvent" "contentOffset" "y")
        y-ratio (/ words-list-y @fullHeight)
        timeline-y (* @visibleHeight y-ratio)]
    (ui/animated-set-value tPosition timeline-y)))

(defn update-timeline-position-with-label
  [tPosition table-margin-top fullHeight visibleHeight label show-label? label-top label-height timeline-list event]
  (let [timeline-y-real (.. event -nativeEvent -locationY)
        timeline-y (if (> timeline-y-real 0) timeline-y-real 0)
        y-ratio (/ timeline-y @visibleHeight)
        words-list-y-temp (* @fullHeight y-ratio)
        words-list-y (if (> words-list-y-temp (- @fullHeight @visibleHeight))
                       (- @fullHeight @visibleHeight)
                       words-list-y-temp)
        y-ratio (/ words-list-y @fullHeight)
        timeline-y (* @visibleHeight y-ratio)
        timeline-list-count (count @timeline-list)
        line-position-temp (/ timeline-y (/ @visibleHeight timeline-list-count))
        line-position (js/Math.ceil (if (< line-position-temp 0)
                                      0
                                      (if (> line-position-temp timeline-list-count)
                                        timeline-list-count
                                        line-position-temp)))]
    (ui/animated-set-value tPosition timeline-y)
    (ui/animated-set-value table-margin-top words-list-y)
    (when (false? @show-label?)
      (swap! show-label? (fn [_] true)))
    (ui/animated-set-value label-top (- timeline-y (/ label-height 2)))
    (ui/animated-set-value label (nth @timeline-list line-position))))

(defn close-label [show-label]
  (swap! show-label (fn [_] false)))

(defn calc-words-list-height [chapter term-row-height]
  (* (count chapter) term-row-height))

(defn timeline-and-table [{:keys [chapter term-row-height]}]
  (let [t-position (ui/animated-value 0.0)
        wordsListHeight (atom (calc-words-list-height chapter term-row-height))
        visibleHeight (atom 0)
        table-margin-top (ui/animated-value 0)
        timeline-label-height 25
        show-timeline-label? (r/atom false)
        label (ui/animated-value "")
        timeline-label-top (ui/animated-value 50)
        timeline-list-atom (atom nil)
        update-timeline-position-compiled (partial update-timeline-position t-position wordsListHeight visibleHeight)
        update-timeline-position-with-label-compiled
          (partial update-timeline-position-with-label t-position table-margin-top wordsListHeight visibleHeight label show-timeline-label? timeline-label-top timeline-label-height timeline-list-atom)
        update-table-position-compiled (partial update-positions t-position table-margin-top wordsListHeight visibleHeight)
        close-label-compiled (partial close-label show-timeline-label?)
        pan-responder (ui/create-pan-responder {:onStartShouldSetPanResponder        (fn [_ _] true)
                                                :onStartShouldSetPanResponderCapture (fn [_ _] true)
                                                :onMoveShouldSetPanResponder         (fn [_ _] true)
                                                :onMoveShouldSetPanResponderCapture  (fn [_ _] true)
                                                :onPanResponderTerminationRequest    (fn [_ _] true)
                                                :onPanResponderGrant                 update-table-position-compiled
                                                :onPanResponderMove                  update-timeline-position-with-label-compiled
                                                :onPanResponderEnd                   close-label-compiled
                                                :onPanResponderTerminate             close-label-compiled})]
    (r/create-class
      {:component-will-receive-props
       (fn [_ [_ {:keys [chapter]}]]
         (swap! wordsListHeight (fn [] (calc-words-list-height chapter term-row-height))))
       :reagent-render
       (fn [{:keys [chapter style render-row timeline-list]}]
         (swap! timeline-list-atom (fn [_] timeline-list))
         [ui/view {:style (-> style
                              (assoc :position "relative"))}
          [table-view {:ref        "wordsList"
                       :on-layout  (fn [event _] (swap! visibleHeight (fn [_] (.. event -nativeEvent -layout -height))))
                       :on-scroll  update-timeline-position-compiled
                       :margin-top table-margin-top
                       :num-rows   (count chapter)
                       :row-height term-row-height
                       :render-row render-row
                       :back-color "black"
                       :style      {:flex 1}}]
          [timeline (-> {:tPosition          t-position
                         :countWordsOnScreen 11
                         :timestamps         (clj->js timeline-list)
                         :linesCount         TIMELINE_LINES_COUNT
                         :style              {:width 70
                                              :background-color "black"}
                         :lineColor          "white"}
                        (merge (ui/get-pan-handlers pan-responder)))]
          (when (true? @show-timeline-label?)
            [timeline-label {:height timeline-label-height
                             :top timeline-label-top
                             :label label
                             :right 75}])])})))
