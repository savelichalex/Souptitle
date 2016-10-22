(ns teach-by-friends.shared.icons)

(defn import-icon [name]
  (js/require (str "./images/" name ".png")))

(def ^:private icons
  {:back (import-icon "back")
   :close (import-icon "close")
   :episodes (import-icon "episodes")
   :favorites (import-icon "favorites")
   :information (import-icon "information")
   :words (import-icon "words_active")})

(defn get-icon [icon]
  (get icons icon))