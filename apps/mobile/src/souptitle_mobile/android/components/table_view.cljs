(ns souptitle-mobile.android.components.table-view
  (:require [souptitle-mobile.shared.ui :as ui]
            [reagent.core :as r]))

(def table-view-native
  (r/adapt-react-class
   (ui/Animated.createAnimatedComponent
    (ui/require-native-component "TableView" nil))))

(def table-view-native-item
  (r/adapt-react-class
   (ui/Animated.createAnimatedComponent
    (ui/require-native-component "TableViewItem" nil))))

(defn table-view-item [{:keys [row-id render]}]
  (let [inner-row-id (r/atom row-id)
        update-view (fn [event]
                      (let [row-id (. event -rowId)]
                        (when (not= @inner-row-id row-id)
                          (reset! inner-row-id row-id))))]
    (fn [{:keys [row-id render]}]
      [table-view-native-item {:onUpdateView update-view}
       (render row-id)])))

(def ROWS_FOR_RECYCLING 20)

(defn table-view [{:keys [style on-layout render-row row-height num-rows]}]
  [ui/view {:style style
            :on-layout on-layout}
   (into [table-view-native (->> {:style {:flex 1}
                                  :rowHeight row-height
                                  :numRows num-rows}
                                 (filter #(not (nil? (second %))))
                                 (into {}))]
         (->> (range 0 ROWS_FOR_RECYCLING)
              (map #(identity [table-view-item {:key (str "r_" %)
                                                :rowId %
                                                :render render-row}]))))])
