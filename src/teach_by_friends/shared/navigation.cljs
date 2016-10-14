(ns teach-by-friends.shared.navigation
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen get-component-name]]
                   [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]))

(def Navigation (.. (js/require "react-native-navigation") -Navigation))

(def register-component (.-registerComponent Navigation))

(defmulti on-route (fn [nav] (:route nav)))

(defn tab-to-rnn-option [screen settings]
  (print (get-component-name screen))
  (clj->js
    (merge {:screen (get-component-name screen)} settings)))

(defn tabs-to-rnn-options [tabs]
  (->> tabs
       (map tab-to-rnn-option)
       (clj->js)))

(defn track-route-state [nav-state]
  (r/track! (fn []
              (let [nav (reaction (get @re-frame.db/app-db :nav))
                    route (:route @nav)
                    props (:props @nav)
                    type (:type @nav)]
                (cond
                  (nil? route) nil
                  (= type :pop) (swap! nav-state (fn [] {:route route :props (assoc props :direction :to-right)}))
                  (= type :push) (swap! nav-state (fn [] {:route route :props (assoc props :direction :to-left)}))
                  :else (swap! nav-state (fn [] {:route route})))))))

(defn navigation-tabs [settings & tabs]
  (let [nav-state (r/atom {:route nil
                           :props nil})
        track-id (atom nil)]
    (. Navigation
       (startTabBasedApp
         (->> {:tabs (tabs-to-rnn-options tabs)}
              (merge settings)
              (clj->js))))
    (swap! track-id (fn [_] (track-route-state nav-state)))))
