(ns teach-by-friends.shared.well-known-words-service
  (:require [teach-by-friends.shared.ui :as ui]
            [cognitect.transit :as transit]))

(def AsyncStorage (. ui/ReactNative -AsyncStorage))

(defn get-async-storage-item
  ([key]
   (.getItem AsyncStorage key))
  ([key cb]
   (.then (.getItem AsyncStorage key) cb)))

(defn set-async-storage-item [key value]
  (.setItem AsyncStorage key value))

(def WELL_KNOWN_STORAGE_KEY "@SOUPTITLE_WELL_KNOWN_WORDS")

(def writer (transit/writer :json))
(def reader (transit/reader :json))

(defn save-well-known-words [new-words]
  (set-async-storage-item WELL_KNOWN_STORAGE_KEY (transit/write writer new-words)))

(defn restore-well-known-words []
  (-> (get-async-storage-item WELL_KNOWN_STORAGE_KEY)
      (.then #(transit/read reader %))))