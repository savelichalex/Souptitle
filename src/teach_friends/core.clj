(ns teach-friends.core
  (:gen-class)
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [clojure.set :as set]))

(defn get-srt []
  (set (re-seq #"[a-zA-Z']+" (slurp "resources/Friends.S02E05.srt"))))

(defn get-stopwords []
  (set (re-seq #"[a-zA-Z']+" (slurp "resources/stopwords.res"))))

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

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println (string/join "\n" (get-all-words-from-srt (get-srt) (get-stopwords)))))
  ;(println (set/intersection (set (get-stopwords)) (get-all-words-from-srt (get-srt) (get-stopwords)))))
