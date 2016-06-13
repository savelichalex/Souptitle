(ns teach-by-friends.parser
	(:require [clojure.string :as string]
						[teach-by-friends.stop-words :refer [stop-words]]
						[clojure.set :as set]))

(def time-regex #"(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})[\n]([^\n]+)[\n]([^\n]+)")

(defn time-to-ms [time]
	(let [parts (re-seq #"\d+" time)]
		(+
			(* (js/parseInt (nth parts 0) 10) 3600000)
			(* (js/parseInt (nth parts 1) 10) 60000)
			(* (js/parseInt (nth parts 2) 10) 1000)
			(js/parseInt (nth parts 3) 10))))

(def friends-names
	#{"ross"
		"monica"
		"rachel"
		"rach"
		"joey"
		"chandler"
		"phoebe"
		"pheeb"})

(def exclude (set/union stop-words friends-names))

(defn parse-term [sentence number from to index term]
	{:sentence sentence
	 :sentence-number number
	 :in-sentence-number index
	 :from from
	 :to to
	 :raw term
	 :normalized (string/lower-case term)})

(defn parse-to-terms [sentence number from to]
	(->> sentence
			 (re-seq #"the\s[a-zA-Z]+|a\s[a-zA-Z]+|an\s[a-zA-Z]+|[a-zA-Z']+")
			 (map-indexed (partial parse-term sentence number from to))
			 (filter #(not (contains? exclude (:normalized %))))))

(defn parse-sentence [number from to sentence]
	(parse-to-terms sentence number from to))

(defn sentence? [sentence]
	(let [last-three-chars (subs (string/reverse sentence) 0 3)
				last-char (subs last-three-chars 0 1)]
		(if (or (= last-char "!") (= last-char "?"))
			true
			(if (not (= last-char "."))
				false
				(if (= last-three-chars "...")
					false
					true)))))

(defn parse-time-block [acc [_ from to first-sentence second-sentence]]
	(let [acc-count (count acc)]
		(if (string/blank? second-sentence)
			(conj acc (parse-sentence (+ acc-count 1) (time-to-ms from) (time-to-ms to) first-sentence))
			(if (sentence? first-sentence)
				(-> (conj acc (parse-sentence (+ acc-count 1) (time-to-ms from) (time-to-ms to) first-sentence))
						(conj (parse-sentence (+ acc-count 2) (time-to-ms from) (time-to-ms to) second-sentence)))
				(conj acc (parse-sentence (+ acc-count 1) (time-to-ms from) (time-to-ms to) (str first-sentence " " second-sentence)))))))

(defn accumulate-terms [acc term]
	(let [{normalized :normalized} term]
		(if (contains? acc normalized)
			(update acc normalized #(conj % term))
			(assoc acc normalized [term]))))

(defn parse-srt [srt]
	(->> (re-seq time-regex srt)
			 (reduce parse-time-block [])
			 (mapcat identity)
			 (map-indexed (fn [index term] (assoc term :overall-number index)))
			 (reduce accumulate-terms {})))