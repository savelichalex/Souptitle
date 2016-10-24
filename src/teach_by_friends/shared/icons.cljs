(ns teach-by-friends.shared.icons)

(def back (js/require "./images/back.png"))
(def close (js/require "./images/close.png"))
(def episodes (js/require "./images/episodes.png"))
(def favorites (js/require "./images/favorites.png"))
(def favorites-active (js/require "./images/favorites_active.png"))
(def favorites-fill (js/require "./images/favorites_fill.png"))
(def information (js/require "./images/info.png"))
(def information-active (js/require "./images/info_active.png"))
(def words (js/require "./images/words.png"))
(def words-active (js/require "./images/words_active.png"))

(def ^:private icons
  {:back back
   :close close
   :episodes episodes
   :favorites favorites
   :favorites-active favorites-active
   :favorites-fill favorites-fill
   :information information
   :information-active information-active
   :words words
   :words-active words-active})

(defn get-icon [icon]
  (get icons icon))