(ns souptitle-desktop.common.components.inputview
  (:require [reagent.core :as r]))

(defn inputview [{:keys [value]}]
  (let [state (r/atom (or value ""))]
    (r/create-class
     {:component-will-receive-props
      (fn [_ [_ {:keys [value]}]]
        (reset! state value))
      :reagent-render
      (fn [{:keys [style on-blur autofocus]}]
        [:input {:style style
                 :value @state
                 :on-change #(reset! state (.. % -target -value))
                 :on-blur #(on-blur @state)
                 :auto-focus (or autofocus false)}])})))
