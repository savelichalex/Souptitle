// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('teach_by_friends.consts');
if(typeof teach_by_friends.subs.chapter_word_list !== 'undefined'){
} else {
teach_by_friends.subs.chapter_word_list = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"teach-by-friends.subs","chapter-word-list"),((function (method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__){
return (function (type,_){
return type;
});})(method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
cljs.core._add_method.call(null,teach_by_friends.subs.chapter_word_list,new cljs.core.Keyword(null,"by-rank","by-rank",-1696056256),(function (_,chapter){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"term","term",-1817390416),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),cljs.core.map.call(null,(function (p__18137){
var vec__18138 = p__18137;
var key = cljs.core.nth.call(null,vec__18138,(0),null);
var vec__18139 = cljs.core.nth.call(null,vec__18138,(1),null);
var first_val = cljs.core.nth.call(null,vec__18139,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"term","term",-1817390416),key,new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"overall-number","overall-number",-665407256).cljs$core$IFn$_invoke$arity$1(first_val)], null);
}),chapter)));
}));
cljs.core._add_method.call(null,teach_by_friends.subs.chapter_word_list,new cljs.core.Keyword(null,"by-alphabet","by-alphabet",-1215394575),(function (_,chapter){
return cljs.core.sort_by.call(null,cljs.core.identity,cljs.core.keys.call(null,chapter));
}));
teach_by_friends.subs.term_to_disable = (function teach_by_friends$subs$term_to_disable(term){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),teach_by_friends.consts.DISABLE_TERM,new cljs.core.Keyword(null,"term","term",-1817390416),term], null);
});
teach_by_friends.subs.term_to_active = (function teach_by_friends$subs$term_to_active(term,translate){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),teach_by_friends.consts.ACTIVE_TERM,new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"translate","translate",1336199447),translate], null);
});
teach_by_friends.subs.add_status_keys = (function teach_by_friends$subs$add_status_keys(term_to_translate,term_tranlsate,terms){
var term_processing_fn = (((term_to_translate == null))?teach_by_friends.subs.term_to_disable:(function (p1__18140_SHARP_){
if(cljs.core._EQ_.call(null,p1__18140_SHARP_,term_to_translate)){
return teach_by_friends.subs.term_to_active.call(null,p1__18140_SHARP_,term_tranlsate);
} else {
return teach_by_friends.subs.term_to_disable.call(null,p1__18140_SHARP_);
}
}));
return cljs.core.map.call(null,term_processing_fn,terms);
});
teach_by_friends.subs.filter_terms_by_search_predicate = (function teach_by_friends$subs$filter_terms_by_search_predicate(terms,predicate){
if(cljs.core.empty_QMARK_.call(null,predicate)){
return terms;
} else {
var pattern = (new RegExp([cljs.core.str("^"),cljs.core.str(predicate),cljs.core.str(".+")].join('')));
return cljs.core.filter.call(null,((function (pattern){
return (function (p1__18141_SHARP_){
return pattern.test(p1__18141_SHARP_);
});})(pattern))
,terms);
}
});
teach_by_friends.subs.filter_well_known_words = (function teach_by_friends$subs$filter_well_known_words(terms,well_known_terms){
if(cljs.core.empty_QMARK_.call(null,well_known_terms)){
return terms;
} else {
return cljs.core.filter.call(null,(function (p1__18142_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,well_known_terms,p1__18142_SHARP_));
}),terms);
}
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chapter","get-chapter",1893999781),(function (db,_){
var term_to_translate = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"term-to-translate","term-to-translate",-797183124));
}));
var term_translate = reagent.ratom.make_reaction.call(null,((function (term_to_translate){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054));
});})(term_to_translate))
);
var sort_type = reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate){
return (function (){
return new cljs.core.Keyword(null,"sort-chapter","sort-chapter",-1653976856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(term_to_translate,term_translate))
);
var terms = reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate,sort_type){
return (function (){
return teach_by_friends.subs.chapter_word_list.call(null,cljs.core.deref.call(null,sort_type),cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"chapter","chapter",-238644368)));
});})(term_to_translate,term_translate,sort_type))
);
var well_known_terms = reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate,sort_type,terms){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"well-known-terms","well-known-terms",953034400));
});})(term_to_translate,term_translate,sort_type,terms))
);
var filter_by_well_known_terms = reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate,sort_type,terms,well_known_terms){
return (function (){
return teach_by_friends.subs.filter_well_known_words.call(null,cljs.core.deref.call(null,terms),cljs.core.deref.call(null,well_known_terms));
});})(term_to_translate,term_translate,sort_type,terms,well_known_terms))
);
var search_predicate = reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate,sort_type,terms,well_known_terms,filter_by_well_known_terms){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"search-predicate","search-predicate",-1704442311));
});})(term_to_translate,term_translate,sort_type,terms,well_known_terms,filter_by_well_known_terms))
);
var filtered_terms = reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate,sort_type,terms,well_known_terms,filter_by_well_known_terms,search_predicate){
return (function (){
return teach_by_friends.subs.filter_terms_by_search_predicate.call(null,cljs.core.deref.call(null,filter_by_well_known_terms),cljs.core.deref.call(null,search_predicate));
});})(term_to_translate,term_translate,sort_type,terms,well_known_terms,filter_by_well_known_terms,search_predicate))
);
return reagent.ratom.make_reaction.call(null,((function (term_to_translate,term_translate,sort_type,terms,well_known_terms,filter_by_well_known_terms,search_predicate,filtered_terms){
return (function (){
return teach_by_friends.subs.add_status_keys.call(null,cljs.core.deref.call(null,term_to_translate),cljs.core.deref.call(null,term_translate),cljs.core.deref.call(null,filtered_terms));
});})(term_to_translate,term_translate,sort_type,terms,well_known_terms,filter_by_well_known_terms,search_predicate,filtered_terms))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"serials","serials",-2111163111),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"serials-list","serials-list",741269226));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"seasons","seasons",1033111474),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"seasons-list","seasons-list",1682515118));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"chapters","chapters",-1974673213),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"show-search?","show-search?",684663920));
}));
}));

//# sourceMappingURL=subs.js.map