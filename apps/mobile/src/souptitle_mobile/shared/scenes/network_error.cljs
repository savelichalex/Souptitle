(ns souptitle-mobile.shared.scenes.network-error
  (:require [souptitle-mobile.shared.ui :as ui]
            [re-frame.core :refer [subscribe dispatch]]
            [souptitle-mobile.shared.navigation :as nav]))

(def inet-error-image (js/require "./images/internet_error.png"))

(defn network-error []
  (let [show-error? (subscribe [:show-network-error?])]
    (fn [{:keys [navigation]}]
      [ui/modal
       {:visible @show-error?
        :animation-type "fade"}
       [ui/view {:style {:flex 1
                         :flex-direction "column"
                         :align-items "center"
                         :justify-content "center"
                         :background-color "#000"}}
        [ui/image {:source inet-error-image
                   :style {:width 120
                           :height 72
                           :margin-top -100
                           :margin-bottom 40}}]
        [ui/text {:style {:color "rgb(151,151,151)"
                          :font-size 18
                          :text-align "center"}}
         "Oops!\n Looks like Internet is not working"]
        [ui/touchable-opacity {:on-press (fn [_]
                                           (do
                                             (dispatch [:call-last-api])))}
         [ui/text {:style {:color "white"
                           :font-size 20
                           :margin-top 20}}
          "TRY AGAIN"]]]])))

(defn get-network-error-screen []
  (nav/create-screen
   network-error))
