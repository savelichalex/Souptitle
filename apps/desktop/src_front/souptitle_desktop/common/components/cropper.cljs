(ns souptitle-desktop.common.components.cropper
  (:require cljsjs.cropper
            [reagent.core :as r]))

(def cropper
  (let [image-ref (atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [_ [_ {:keys [crop-props on-crop]}]]
        (js/Cropper.
         @image-ref
         (-> (or crop-props {})
             (assoc :crop #(when (some? on-crop) (on-crop %)))
             (clj->js))))
      :reagent-render
      (fn [{:keys [src style]}]
        [:div {:style style}
         [:img {:ref #(reset! image-ref %)
                :src src
                :style {:max-width "100%"
                        :align-self "center"}}]])})))
