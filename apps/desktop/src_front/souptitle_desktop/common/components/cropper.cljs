(ns souptitle-desktop.common.components.cropper
  (:require cljsjs.cropper
            [reagent.core :as r]
            [souptitle-desktop.common.utils.debounce :refer [debounce]]))

(defn get-crop-data-from-event [event]
  (-> event
      .-detail
      (js->clj :keywordize-keys true)))

(def cropper
  (let [image-ref (atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [[_ {:keys [crop-props on-crop]}] (r/argv this)]
          (js/Cropper.
           @image-ref
           (-> (or crop-props {})
               (assoc
                :crop
                (debounce
                 #(when (fn? on-crop)
                    (on-crop (get-crop-data-from-event %)))
                 500))
               (clj->js)))))
      :reagent-render
      (fn [{:keys [src style]}]
        [:div {:style style}
         [:img {:ref #(reset! image-ref %)
                :src src
                :style {:max-width "100%"
                        :align-self "center"}}]])})))
