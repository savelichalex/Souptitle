(ns souptitle-mobile.shared.navigation
  (:refer-clojure :exclude [pop!])
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [souptitle-mobile.shared.utils :refer [transform-params]]
            [reagent.core :as r]))

(def Navigation (js/require "react-navigation"))
(def StackNavigator (. Navigation -StackNavigator))
(def TabNavigator (. Navigation -TabNavigator))

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

(defn create-stack-navigator [params]
  (r/adapt-react-class (StackNavigator (clj->js (transform-params params)))))

(defn create-tab-navigator
  ([params]
   (create-tab-navigator params {}))
  ([params tab-config]
   (r/adapt-react-class
    (TabNavigator
     (clj->js (transform-params params))
     (clj->js (transform-params tab-config))))))


(defn push!
  ([a b c]))
(defn pop! [a])
(defn show-modal!
  ([a b])
  ([a b c]))
(defn dismiss-modal! [a b])
(defn get-current-navigator [])
