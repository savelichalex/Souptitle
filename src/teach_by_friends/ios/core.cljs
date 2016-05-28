(ns teach-by-friends.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]))

(enable-console-print!)

(def React (js/require "react"))
(def ReactNative (js/require "react-native"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def list-view (r/adapt-react-class (.-ListView ReactNative)))

(defn alert [title]
      (.alert (.-Alert ReactNative) title))

(def ds (ReactNative.ListView.DataSource. #js{:rowHasChanged (fn[a b] false)}))

(def row-comp
	(r/reactify-component
		(fn [props]
			(let [row (:row props)]
				[touchable-highlight {:style {:border-top-width 1
																			:border-color "#000"
																			:padding-top 10
																			:padding-bottom 10
																			:align-items "center"}
															:on-press #(alert (. js/JSON (stringify row)))}
				 [text {:style {:font-size 20 :color "#000"}} row]]))))

(defn app-root []
  (let [chapter (subscribe [:get-chapter])]
    (fn []
      [list-view {:dataSource (.cloneWithRows ds (clj->js
																									 (->> @chapter
																												(map (fn [[key [first-val]]] {:term key :rank (:overall-number first-val)}))
																												(sort-by :rank)
																												(map :term))))
									:render-row (fn [row] (.createElement React row-comp #js{:row row}))
									:style {:flex 1}}])))

(defn init []
      (dispatch-sync [:initialize-db])
      (.registerComponent app-registry "TeachByFriends" #(r/reactify-component app-root)))
