(ns teach-by-friends.shared.scenes.new-design
	(:require [teach-by-friends.shared.ui :as ui]
						[clojure.string :as string]
						[reagent.core :as r]
						[re-frame.core :refer [subscribe dispatch]]))

(def menu-icon-source (js/require "./images/friends-menu-icon.svg"))
(defn menu-icon [{:keys [style]}]
	[ui/image {:source menu-icon-source :style style}])

(defn nav-bar [title]
	[ui/view {:style {:flex             3
										:flex-direction   "row"
										:align-items      "center"
										:background-color "rgb(72, 86, 155)"}}
	 [ui/touchable-opacity {:style {:flex        1
										 :align-items "center"}}
		[ui/text {:style {:color "white"}} "M"]]
	 [ui/view {:style {:flex        5
										 :align-items "center"}}
		[ui/text {:style {:color     "white"
											:font-size 30}}
		 (string/upper-case
			 (str "season " title))]]
	 [ui/view {:style {:flex        1
										 :align-items "center"}}
		[ui/text {:style {:color "white"}} "S"]]])

(defn season-bar-item [style number last-number item on-change]
	[ui/touchable-opacity {:style    {:justify-content  "center"
																		:align-items      "center"
																		:padding-left     10
																		:padding-right    10
																		:margin-right     (when (not= (dec last-number) number)
																												25)
																		:background-color "transparent"}
												 :on-press #(on-change number item)}
	 [ui/text {:style (-> style
												(merge {:font-size 25}))}
		(inc number)]])

(defn seasons-bar [seasons-list on-change]
	(let [last-number (count seasons-list)]
		[ui/view {:style {:flex             1
											:border-radius    15
											:margin-top       -15
											:background-color "rgb(132, 145, 206)"}}
		 (into [ui/scroll-view {:horizontal                     true
														:showsHorizontalScrollIndicator false
														:content-container-style        {:flex          1
																														 :align-items   "stretch"
																														 :padding-left  15
																														 :padding-right 15}}]
					 (map-indexed
						 (fn [index item] (if (:active? item)
																[season-bar-item
																 {:color "rgb(72, 86, 155)"}
																 index
																 last-number
																 item
																 on-change]
																[season-bar-item
																 {:color "white"}
																 index
																 last-number
																 item
																 on-change]))
						 seasons-list))]))

(def ReactNative (js/require "react-native"))

(def chapter-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn term-row [term]
	[ui/touchable-opacity {:style    {:border-bottom-width 1
																		:border-color        "rgba(0,0,0,.1)"
																		:padding-top         20
																		:padding-bottom      20
																		:padding-left        30}
												 :on-press #(dispatch [:nav/term term])}
	 [ui/text {:style {:font-size 20 :color "rgb(72, 86, 155)"}} term]])

(defn get-new-design-scene [activity-indicator]
	(fn new-design-scene [title]
		(let [chapters (subscribe [:chapters])
					chapter (subscribe [:get-chapter])]
			(fn []
				[ui/view {:style {:flex           1
													:flex-direction "column"
													:align-items    "stretch"}}
				 [nav-bar title]
				 (when (not (nil? @chapters))
					 [seasons-bar @chapters
						#(dispatch [:chapter-load %1 %2])])
				 (if (not (nil? @chapter))
					 [ui/list-view {:dataSource            (.cloneWithRows chapter-ds (clj->js @chapter))
													:enable-empty-sections true
													:render-row            #(r/as-element (term-row %))
													:style                 {:flex             12
																									:background-color "white"}}]
					 [ui/view {:style {:flex             12
														 :background-color "white"
														 :justify-content  "center"
														 :align-items      "center"}}
						[activity-indicator {:color "rgb(72, 86, 155)"}]])]))))
