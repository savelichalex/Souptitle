(ns teach-by-friends.parser
	(:require [clojure.string :as string]
						[teach-by-friends.stop-words :refer [stop-words]]
						[clojure.set :as set]))

(def nlp (js/require "nlp_compromise/src/index.js"))

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

(defn parse-sentence [number from to sentence]
	{:number number
	 :from from
	 :to to
	 :sentence sentence
	 :terms (remove exclude (map string/lower-case (re-seq #"[a-zA-Z']+" sentence)))})

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

(defn parse-srt [srt]
	(->> (re-seq time-regex srt) (reduce parse-time-block []) (reduce (fn [acc {:keys [terms]}] (into acc terms)) #{})))