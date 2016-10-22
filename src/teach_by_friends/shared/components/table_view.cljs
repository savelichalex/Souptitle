(ns teach-by-friends.shared.components.table-view
  (:require [teach-by-friends.shared.ui :as ui]
            [reagent.core :as r]))

(def table-view-native
  (r/adapt-react-class
    (ui/Animated.createAnimatedComponent
      (ui/require-native-component "STTableView" nil))))

(def rebound-renderer
  (r/create-class
    {:should-component-update
     (fn [_ [_ {new-bound :bound-to}] [_ {old-bound :bound-to}]]
       (not (= new-bound old-bound)))
     :reagent-render
     (fn [{:keys [render bound-to]}]
       (render bound-to))}))

(def ROWS_FOR_RECYCLING 20)

(defn table-view []
  (let [bindings (vec (range 0 ROWS_FOR_RECYCLING))
        state (r/atom bindings)
        on-bind (fn [event]
                  (let [nativeEvent (.-nativeEvent event)
                        child-index (int (.-childIndex nativeEvent))
                        row-id (int (.-rowId nativeEvent))]
                    (swap! state (fn [s] (assoc s child-index row-id)))))]
    (fn table-view-comp [{:keys [style on-layout on-scroll render-row row-height num-rows margin-top back-color]}]
      [ui/view {:style style
                :on-layout on-layout}
       (into [table-view-native (->> {:style {:flex 1}
                                      :scrollPositionOffset margin-top
                                      :onChange on-bind
                                      :onScroll on-scroll
                                      :rowHeight row-height
                                      :numRows num-rows
                                      :backColor back-color}
                                     (filter #(not (nil? (second %))))
                                     (into {}))]
         (->> (range 0 ROWS_FOR_RECYCLING)
              (map #(identity [rebound-renderer {:key (str "r_" %)
                                                 :bound-to (nth @state %)
                                                 :render render-row}]))))])))
