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

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println (make-search-tree (get-stopwords))))
  ;(println (string/join "\n" (get-all-words-from-srt (get-srt) (get-stopwords)))))
  ;(println (set/intersection (set (get-stopwords)) (get-all-words-from-srt (get-srt) (get-stopwords)))))
