(ns teach-by-friends.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [teach-by-friends.consts :as const]))

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

(defn term-to-disable [term]
  {:status const/DISABLE_TERM
   :term   term})

(defn term-to-active [term translate]
  {:status    const/ACTIVE_TERM
   :term      term
   :translate translate})

(defn add-status-keys [term-to-translate term-tranlsate terms]
  (let [term-processing-fn (if (nil? term-to-translate)
                             term-to-disable
                             #(if (= % term-to-translate)
                               (term-to-active % term-tranlsate)
                               (term-to-disable %)))]
    (->> terms
         (map term-processing-fn))))

(register-sub
  :get-chapter
  (fn [db _]
    (let [term-to-translate (reaction (get @db :term-to-translate))
          term-translate (reaction (get @db :term-translate))
          sort-type (reaction (:sort-chapter @db))]
      (reaction (->> (get @db :chapter)
                     (chapter-word-list @sort-type)         ;todo: move this to reaction
                     (add-status-keys @term-to-translate @term-translate))))))

(register-sub
  :term-translate
  (fn [db _]
    (reaction (get @db :term-translate))))

(register-sub
  :seasons
  (fn [db _]
    (reaction (get @db :seasons-list))))

(register-sub
  :chapters
  (fn [db _]
    (reaction (get @db :chapters-list))))