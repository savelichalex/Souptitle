(ns souptitle-mobile.stop-words
  (:require [clojure.string :as string]))

(def stop-words-raw
  "a\nabout\nabove\nah\nafter\nagain\nagainst\nall\nam\nan\nand\nany\nare\naren't\nas\nat\nbe\nbecause\nbeen\nbefore\nbeing\nbelow\nbetween\nboth\nbut\nby\ncan't\ncannot\ncould\ncouldn't\ndid\ndidn't\ndo\ndoes\ndoesn't\ndoing\ndon't\ndown\nduring\neach\neverybody\neverybody's\nfew\nfor\nfrom\nfurther\nhad\nhadn't\nhas\nhasn't\nhave\nhaven't\nhaving\nhe\nhe'd\nhe'll\nhe's\nher\nhere\nhere's\nhers\nherself\nhim\nhimself\nhis\nhow\nhow's\ni\ni'd\ni'll\ni'm\ni've\nif\nin\ninto\nis\nisn't\nit\nit's\nits\nitself\nlet's\nmm\nme\nmore\nmost\nmustn't\nmy\nmyself\nno\nnor\nnot\noh\nof\noff\non\nonce\nonly\nor\nother\nought\nour\nours\nourselves\nout\nover\nown\nsame\nshan't\nshe\nshe'd\nshe'll\nshe's\nshould\nshouldn't\nso\nsome\nsuch\nthan\nthat\nthat's\nthe\ntheir\ntheirs\nthem\nthemselves\nthen\nthere\nthere's\nthese\nthey\nthey'd\nthey'll\nthey're\nthey've\nthis\nthose\nthrough\nto\ntoo\nunder\nuntil\nup\nvery\nwas\nwasn't\nwe\nwe'd\nwe'll\nwe're\nwe've\nwere\nweren't\nwhat\nwhat's\nwhen\nwhen's\nwhere\nwhere's\nwhich\nwhile\nwho\nwho's\nwhom\nwhy\nwhy's\nwith\nwon't\nwould\nwouldn't\nyou\nyou'd\nyou'll\nyou're\nyou've\nyour\nyours\nyourself\nyourselves")

(def stop-words (set (string/split stop-words-raw "\n")))
