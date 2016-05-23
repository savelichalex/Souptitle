(ns teach-friends.core
  (:gen-class)
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [clojure.set :as set]))

(defn get-srt []
  (set (re-seq #"[a-zA-Z']+" (slurp "resources/Friends.S02E05.srt"))))

(defn get-stopwords []
  (set (re-seq #"[a-zA-Z']+" (slurp "resources/stopwords.res"))))

(defn get-idioms []
  (map #(nth (string/split % #"-") 0) (string/split-lines (slurp "resources/idioms.res"))))

(def friends-names
  #{"ross"
    "monica"
    "rachel"
    "rach"
    "joye"
    "chandler"
    "phoebe"
    "pheeb"})

(defn remove-names-from-srt [names srt]
  (set/difference srt names))

(defn remove-stopwords-from-srt [stopwords srt]
  (set/difference srt stopwords))

(defn get-all-words-from-srt [srt stopwords]
  (->> (set (map string/lower-case srt))
       (remove-names-from-srt friends-names)
       (remove-stopwords-from-srt stopwords))
  )

(defn insert-phrase-into-tree [tree phrase]
  (if (= phrase ())
    tree
    (let [character (first phrase)
          tail (get tree character)]
      (assoc tree character (insert-phrase-into-tree tail (rest phrase))))))

(defn make-search-tree [phrases]
  (reduce (fn [acc phrase] (insert-phrase-into-tree acc phrase)) {} phrases))

(def CHAR #"[a-zA-Z']")
(def END_OF_WORD #"\s,\n")
(def LINE_BREAKER #"\n")

(defn character? [x] )

(defn analyze-symbol [])

(defn lexer [] )

(def time-regex #"(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})[\r\n]([^\r]+)[\r\n]([^\r]+)")

(defn time-to-ms [time]
  (let [parts (re-seq #"\d+" time)]
    (+
      (* (Integer. (nth parts 0)) 3600000)
      (* (Integer. (nth parts 1)) 60000)
      (* (Integer. (nth parts 2)) 1000)
         (Integer. (nth parts 3)))))

(defn parse-sentence [number from to sentence]
  {:number number
   :from from
   :to to
   :sentence sentence})

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

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  ;(println (string/split (slurp "resources/Friends.S02E05.srt") time-regex)))
  ;(println (->> (re-seq time-regex (slurp "resources/Friends.S02E05.srt")) (take 4))))
  (println (->> (re-seq time-regex (slurp "resources/Friends.S02E05.srt")) (take 5) (reduce parse-time-block []))))
  ;(println (make-search-tree (get-stopwords))))
  ;(println (string/join "\n" (get-all-words-from-srt (get-srt) (get-stopwords)))))
  ;(println (set/intersection (set (get-stopwords)) (get-all-words-from-srt (get-srt) (get-stopwords)))))
