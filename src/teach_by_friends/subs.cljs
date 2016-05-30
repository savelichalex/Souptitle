(ns teach-by-friends.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

(defmulti chapter-word-list (fn [type _] type))
(defmethod chapter-word-list :by-rank
  [_ chapter]
  (->> chapter
       (map (fn [[key [first-val]]] {:term key :rank (:overall-number first-val)}))
       (sort-by :rank)
       (map :term)))

(defmethod chapter-word-list :by-alphabet
  [_ chapter]
  (->> chapter
       (keys)
       (sort-by identity)))

(register-sub
  :get-chapter
  (fn [db _]
    (let [sort-type (reaction (:sort-chapter @db))]
			(reaction
				(chapter-word-list
					@sort-type
					(get @db :chapter))))))

(register-sub
	:term-translate
	(fn [db _]
		(reaction (get @db :term-translate))))