(ns souptitle-mobile.shared.navigation
  (:require-macros [souptitle-mobile.shared.navigation :refer [defscreen]]
                   [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [souptitle-mobile.shared.ui :as ui]))

(def Navigation (.. (js/require "react-native-navigation") -Navigation))

(defn register-component [name comp]
  (.registerComponent Navigation name comp))

(defmulti on-route (fn [nav] (:route nav)))
(defmethod on-route :default [_] nil)

(def ^:private current-navigator (atom nil))
(defn set-current-navigator [nav]
  (swap! current-navigator (fn [_] nav)))
(defn get-current-navigator []
  @current-navigator)

(defn wrap-screen [screen]
  (fn [props]
    (let [navigator (:navigator (r/props (r/current-component)))]
      (set-current-navigator navigator)
      [screen (assoc props :navigator navigator)])))

(defprotocol IScreen
  (get-name [self] "Return screen name")
  (get-component [self] "Return current component")
  (get-settings [self] [self props] "Return settings")
  (call-and-set-component! [self args]))

(deftype Screen [name ^:mutable component settings]
  IScreen
  (get-name [_] name)
  (get-component [_] (wrap-screen component))
  (get-settings [_] (settings))
  (get-settings [_ props] (settings props))
  (call-and-set-component! [_ args] (set! component (apply component args))))

(defn tab-to-rnn-option [[screen settings]]
  (clj->js
    (merge {:screen (get-name screen)} settings (get-settings screen))))

(defn tabs-to-rnn-options [tabs]
  (->> tabs
       (map tab-to-rnn-option)
       (clj->js)))

(defn navigation-tabs [settings & tabs]
  (. Navigation
     (startTabBasedApp
       (->> {:tabs (tabs-to-rnn-options tabs)}
            (merge settings)
            (clj->js)))))

(defn push! [nav route props]
  (when-let [screen (on-route {:route route})]
    (.push nav (-> {:screen (get-name screen)}
                   (merge (get-settings screen props))
                   (clj->js)))))

(defn pop!
  ([nav]
   (pop! nav true))
  ([nav animated]
   (.pop nav (-> {:animated animated}
                 (clj->js)))))

(defn show-modal!
  ([nav route]
   (show-modal! nav route {}))
  ([nav route props]
   (when-let [screen (on-route {:route route})]
     (.showModal nav (-> {:screen (get-name screen)
                          :passProps props}
                         (merge (get-settings screen props))
                         (clj->js))))))

(defn dismiss-modal! [nav animation]
  (.dismissModal nav (clj->js {:animationType animation})))
