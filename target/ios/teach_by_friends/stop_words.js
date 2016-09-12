// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.stop_words');
goog.require('cljs.core');
goog.require('clojure.string');
teach_by_friends.stop_words.stop_words_raw = "a\nabout\nabove\nafter\nagain\nagainst\nall\nam\nan\nand\nany\nare\naren't\nas\nat\nahem\nbe\nbecause\nbeen\nbefore\nbeing\nbelow\nbetween\nboth\nbut\nby\ncan't\ncannot\ncould\ncouldn't\ndid\ndidn't\ndo\ndoes\ndoesn't\ndoing\ndon't\ndown\nduring\ndr\neach\neverybody\neverybody's\nfew\nfor\nfrom\nfurther\nha\nhad\nhadn't\nhas\nhasn't\nhave\nhaven't\nhaving\nhe\nhe'd\nhe'll\nhe's\nher\nhere\nhere's\nhers\nherself\nhim\nhimself\nhis\nhow\nhow's\nhuh\nhey\ni\ni'd\ni'll\ni'm\ni've\nif\nin\ninto\nis\nisn't\nit\nit's\nit'd\nits\nitself\nlet's\nme\nmore\nmost\nmustn't\nmy\nmyself\nno\nnor\nnot\nooh\nof\noff\non\nonce\nonly\nor\nother\nought\nour\nours\nourselves\nout\nover\nown\nsame\nshan't\nshe\nshe'd\nshe'll\nshe's\nshould\nshouldn't\nso\nsome\nsuch\nthan\nthat\nthat's\nthe\ntheir\ntheirs\nthem\nthemselves\nthen\nthere\nthere's\nthese\nthey\nthey'd\nthey'll\nthey're\nthey've\nthis\nthose\nthrough\nto\ntoo\nunder\nuntil\nup\nuh\num\nvery\nwas\nwasn't\nwe\nwe'd\nwe'll\nwe're\nwe've\nwere\nweren't\nwhat\nwhat's\nwhen\nwhen's\nwhere\nwhere's\nwhich\nwhile\nwho\nwho's\nwhom\nwhy\nwhy's\nwith\nwon't\nwould\nwouldn't\nyou\nyou'd\nyou'll\nyou're\nyou've\nyour\nyours\nyourself\nyourselves";
teach_by_friends.stop_words.stop_words = cljs.core.set.call(null,clojure.string.split.call(null,teach_by_friends.stop_words.stop_words_raw,"\n"));

//# sourceMappingURL=stop_words.js.map