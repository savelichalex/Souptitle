(ns teach-by-friends.shared.components.timeline-and-table
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.shared.components.table-view :refer [table-view]]
            [teach-by-friends.shared.components.timeline :refer [timeline]]
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

(defn calc-words-list-height [chapter term-row-height]
  (* (count chapter) term-row-height))

(defn timeline-and-table [{:keys [chapter term-row-height]}]
  (let [t-position (ui/animated-value 0.0)
        wordsListHeight (atom (calc-words-list-height chapter term-row-height))
        visibleHeight (atom 0)
        table-margin-top (ui/animated-value 0)
        update-timeline-position-compiled (partial update-timeline-position t-position wordsListHeight visibleHeight)
        update-table-position-compiled (partial update-positions t-position table-margin-top wordsListHeight visibleHeight)
        pan-responder (ui/create-pan-responder {:onStartShouldSetPanResponder        (fn [_ _] true)
                                                :onStartShouldSetPanResponderCapture (fn [_ _] true)
                                                :onMoveShouldSetPanResponder         (fn [_ _] true)
                                                :onMoveShouldSetPanResponderCapture  (fn [_ _] true)
                                                :onPanResponderTerminationRequest    (fn [_ _] true)
                                                :onPanResponderGrant                 update-table-position-compiled
                                                :onPanResponderMove                  update-table-position-compiled})]
    (r/create-class
      {:component-will-receive-props
       (fn [_ [_ {:keys [chapter]}]]
         (swap! wordsListHeight (fn [] (calc-words-list-height chapter term-row-height))))
       :reagent-render
       (fn [{:keys [chapter style render-row timeline-list]}]
         [ui/view {:style style}
          [table-view {:ref        "wordsList"
                       :on-layout  (fn [event _] (swap! visibleHeight (fn [_] (.. event -nativeEvent -layout -height))))
                       :on-scroll  update-timeline-position-compiled
                       :margin-top table-margin-top
                       :num-rows   (count chapter)
                       :row-height term-row-height
                       :render-row render-row
                       :back-color "black"
                       :style      {:flex 5}}]
          [timeline (-> {:tPosition          t-position
                         :countWordsOnScreen 11
                         :timestamps         (clj->js timeline-list)
                         :linesCount         TIMELINE_LINES_COUNT
                         :style              {:flex             1
                                              :background-color "black"}
                         :lineColor          "white"}
                        (merge (ui/get-pan-handlers pan-responder)))]])})))