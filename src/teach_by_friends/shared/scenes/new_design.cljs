(ns teach-by-friends.shared.scenes.new-design
	(:require [teach-by-friends.shared.ui :as ui]
						[clojure.string :as string]
						[reagent.core :as r]))

(defn nav-bar [seasons]
	[ui/view {:style {:flex             3
										:flex-direction   "row"
										:align-items      "center"
										:background-color "rgb(72, 86, 155)"}}
	 [ui/view {:style {:flex        1
										 :align-items "center"}}
		[ui/text {:style {:color "white"}} "M"]]
	 [ui/view {:style {:flex        5
										 :align-items "center"}}
		[ui/text {:style {:color     "white"
											:font-size 30}}
		 (string/upper-case
			 (str "season " (:title (first (filter #(:active? %) seasons)))))]]
	 [ui/view {:style {:flex        1
										 :align-items "center"}}
		[ui/text {:style {:color "white"}} "S"]]])

(defn season-bar-item [style number last-number on-change]
	[ui/touchable-opacity {:style {:justify-content "center"
																 :align-items     "center"
																 :padding-left 10
																 :padding-right 10
																 :margin-right    (when (not= last-number number)
																										25)
																 :background-color "transparent"}
												 :on-press #(on-change number)}
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
																														 :align-items   "center"
																														 :padding-left  15
																														 :padding-right 15}}]
					 (map-indexed
						 (fn [index item] (if (:active? item)
																[season-bar-item
																 {:color "rgb(72, 86, 155)"}
																 index
																 last-number
																 on-change]
																[season-bar-item
																 {:color "white"}
																 index
																 last-number
																 on-change]))
						 seasons-list))]))

(defn new-design-scene []
	(let [seasons (r/atom '({:active? false
													 :title   "one"}
													 {:active? false
														:title   "two"}
													 {:active? false
														:title   "three"}
													 {:active? true
														:title   "four"}
													 {:active? false
														:title   "five"}
													 {:active? false
														:title   "six"}
													 {:active? false
														:title   "seven"}
													 {:active? false
														:title   "eight"}
													 {:active? false
														:title   "nine"}
													 {:active? false
														:title   "ten"}))]
		(fn []
			[ui/view {:style {:flex           1
												:flex-direction "column"
												:align-items    "stretch"}}
			 [nav-bar @seasons]
			 [seasons-bar @seasons #(swap! seasons (fn [a]
																							 (->> a
																										(map-indexed (fn [index i] (assoc i :active? (= index %)))))))]
			 [ui/scroll-view {:style {:flex 12}}]])))
