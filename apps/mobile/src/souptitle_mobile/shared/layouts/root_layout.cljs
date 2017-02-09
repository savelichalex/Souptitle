(ns souptitle-mobile.shared.layouts.root-layout
  (:require [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.shared.animations :as anim]))

(defn create-root-layout [nav-bar-config]
  (fn root-layout [{{lb :left-button title :title rb :right-button} :nav-bar content :content} {:keys [direction time]}]
    [ui/view {:style {:flex 1}}
     [ui/status-bar nav-bar-config]
     [ui/linear-gradient {:colors ["#834d9b" "#48569B"]
                          :start  [1.0 1.0] :end [0.0 0.0]
                          :style  {:height         150
                                   :flex-direction "row"
                                   :align-items    "center"}}
      [anim/with-opacity-transition {:key   "left-menu"
                                     :time  time
                                     :style {:flex        2
                                             :align-items "center"}}
       (when lb
         ^{:key "left-button"} [lb])]
      [anim/with-slide-and-opacity-transition {:key        "title"
                                               :time       time
                                               :direction  direction
                                               :root-style {:flex 9}
                                               :style      {:align-items "center"}}
       (when title
         ^{:key "title"} [title])]
      [anim/with-opacity-transition {:key   "right-menu"
                                     :time  time
                                     :style {:flex        2
                                             :align-items "center"}}
       (when rb
         ^{:key "right-button"} [rb])]]
     [anim/with-slide-transition
      {:time       time
       :direction  direction
       :root-style {:flex 1}
       :style      {:flex            1
                    :align-items     "center"
                    :justify-content "center"}}
      (when content
        ^{:key "content"} [content])]]))
