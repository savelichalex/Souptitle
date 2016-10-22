(ns teach-by-friends.shared.icons)

(def back (js/require "./images/back.png"))
(def close (js/require "./images/close.png"))
(def episodes (js/require "./images/episodes.png"))
(def favorites (js/require "./images/favorites.png"))
(def information (js/require "./images/information.png"))
(def words (js/require "./images/words_active.png"))

(def ^:private icons
  {:back back
   :close close
   :episodes episodes
   :favorites favorites
   :information information
   :words words})

(defn get-icon [icon]
  (get icons icon))