// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('teach_by_friends.stop_words');
goog.require('clojure.set');
teach_by_friends.parser.time_regex = /(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\r?\n([^\r\n]+)\r?\n([^\r\n]*)/;
teach_by_friends.parser.time_to_ms = (function teach_by_friends$parser$time_to_ms(time){
var parts = cljs.core.re_seq.call(null,/\d+/,time);
return ((((parseInt(cljs.core.nth.call(null,parts,(0)),(10)) * (3600000)) + (parseInt(cljs.core.nth.call(null,parts,(1)),(10)) * (60000))) + (parseInt(cljs.core.nth.call(null,parts,(2)),(10)) * (1000))) + parseInt(cljs.core.nth.call(null,parts,(3)),(10)));
});
teach_by_friends.parser.friends_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["monica",null,"ross",null,"phoebe",null,"rachel",null,"joey",null,"rach",null,"chandler",null,"pheeb",null], null), null);
teach_by_friends.parser.exclude = clojure.set.union.call(null,teach_by_friends.stop_words.stop_words,teach_by_friends.parser.friends_names);
teach_by_friends.parser.parse_term = (function teach_by_friends$parser$parse_term(sentence,number,from,to,index,term){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sentence","sentence",2033657256),sentence,new cljs.core.Keyword(null,"sentence-number","sentence-number",38372961),number,new cljs.core.Keyword(null,"in-sentence-number","in-sentence-number",245605516),index,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"raw","raw",1604651272),term,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),clojure.string.lower_case.call(null,term)], null);
});
teach_by_friends.parser.parse_to_terms = (function teach_by_friends$parser$parse_to_terms(sentence,number,from,to){
return cljs.core.filter.call(null,(function (p1__18157_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,teach_by_friends.parser.exclude,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(p1__18157_SHARP_)));
}),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,teach_by_friends.parser.parse_term,sentence,number,from,to),cljs.core.re_seq.call(null,/the\s[a-zA-Z]+[a-zA-Z'-]*|a\s[a-zA-Z]+[a-zA-Z'-]*|an\s[a-zA-Z]+[a-zA-Z'-]*|[a-zA-Z]+[a-zA-Z'-]*/,sentence)));
});
teach_by_friends.parser.parse_sentence = (function teach_by_friends$parser$parse_sentence(number,from,to,sentence){
return teach_by_friends.parser.parse_to_terms.call(null,sentence,number,from,to);
});
teach_by_friends.parser.sentence_QMARK_ = (function teach_by_friends$parser$sentence_QMARK_(sentence){
var last_three_chars = cljs.core.subs.call(null,clojure.string.reverse.call(null,sentence),(0),(3));
var last_char = cljs.core.subs.call(null,last_three_chars,(0),(1));
if((cljs.core._EQ_.call(null,last_char,"!")) || (cljs.core._EQ_.call(null,last_char,"?"))){
return true;
} else {
if(!(cljs.core._EQ_.call(null,last_char,"."))){
return false;
} else {
if(cljs.core._EQ_.call(null,last_three_chars,"...")){
return false;
} else {
return true;
}
}
}
});
teach_by_friends.parser.parse_time_block = (function teach_by_friends$parser$parse_time_block(acc,p__18158){
var vec__18160 = p__18158;
var _ = cljs.core.nth.call(null,vec__18160,(0),null);
var from = cljs.core.nth.call(null,vec__18160,(1),null);
var to = cljs.core.nth.call(null,vec__18160,(2),null);
var first_sentence = cljs.core.nth.call(null,vec__18160,(3),null);
var second_sentence = cljs.core.nth.call(null,vec__18160,(4),null);
var acc_count = cljs.core.count.call(null,acc);
if(clojure.string.blank_QMARK_.call(null,second_sentence)){
return cljs.core.conj.call(null,acc,teach_by_friends.parser.parse_sentence.call(null,(acc_count + (1)),teach_by_friends.parser.time_to_ms.call(null,from),teach_by_friends.parser.time_to_ms.call(null,to),first_sentence));
} else {
if(cljs.core.truth_(teach_by_friends.parser.sentence_QMARK_.call(null,first_sentence))){
return cljs.core.conj.call(null,cljs.core.conj.call(null,acc,teach_by_friends.parser.parse_sentence.call(null,(acc_count + (1)),teach_by_friends.parser.time_to_ms.call(null,from),teach_by_friends.parser.time_to_ms.call(null,to),first_sentence)),teach_by_friends.parser.parse_sentence.call(null,(acc_count + (2)),teach_by_friends.parser.time_to_ms.call(null,from),teach_by_friends.parser.time_to_ms.call(null,to),second_sentence));
} else {
return cljs.core.conj.call(null,acc,teach_by_friends.parser.parse_sentence.call(null,(acc_count + (1)),teach_by_friends.parser.time_to_ms.call(null,from),teach_by_friends.parser.time_to_ms.call(null,to),[cljs.core.str(first_sentence),cljs.core.str(" "),cljs.core.str(second_sentence)].join('')));
}
}
});
teach_by_friends.parser.accumulate_terms = (function teach_by_friends$parser$accumulate_terms(acc,term){
var map__18164 = term;
var map__18164__$1 = ((((!((map__18164 == null)))?((((map__18164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18164):map__18164);
var normalized = cljs.core.get.call(null,map__18164__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
if(cljs.core.contains_QMARK_.call(null,acc,normalized)){
return cljs.core.update.call(null,acc,normalized,((function (map__18164,map__18164__$1,normalized){
return (function (p1__18161_SHARP_){
return cljs.core.conj.call(null,p1__18161_SHARP_,term);
});})(map__18164,map__18164__$1,normalized))
);
} else {
return cljs.core.assoc.call(null,acc,normalized,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null));
}
});
teach_by_friends.parser.parse_srt = (function teach_by_friends$parser$parse_srt(srt){
return cljs.core.reduce.call(null,teach_by_friends.parser.accumulate_terms,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (index,term){
return cljs.core.assoc.call(null,term,new cljs.core.Keyword(null,"overall-number","overall-number",-665407256),index);
}),cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.reduce.call(null,teach_by_friends.parser.parse_time_block,cljs.core.PersistentVector.EMPTY,cljs.core.re_seq.call(null,teach_by_friends.parser.time_regex,srt)))));
});

//# sourceMappingURL=parser.js.map