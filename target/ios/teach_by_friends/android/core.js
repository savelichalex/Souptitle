// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.android.core');
goog.require('cljs.core');
goog.require('teach_by_friends.shared.scenes.seasons_scene');
goog.require('teach_by_friends.shared.scenes.serials_scene');
goog.require('reagent.core');
goog.require('teach_by_friends.shared.scenes.new_design');
goog.require('teach_by_friends.android.ui');
goog.require('teach_by_friends.subs');
goog.require('teach_by_friends.shared.ui');
goog.require('teach_by_friends.handlers');
goog.require('re_frame.core');
teach_by_friends.android.core.serials_scene = teach_by_friends.shared.scenes.serials_scene.get_serials_scene.call(null,teach_by_friends.android.ui.activity_indicator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(72, 86, 155)"], null));
teach_by_friends.android.core.seasons_scene = teach_by_friends.shared.scenes.seasons_scene.get_seasons_scene.call(null,teach_by_friends.android.ui.activity_indicator);
teach_by_friends.android.core.new_design_scene = teach_by_friends.shared.scenes.new_design.get_new_design_scene.call(null,teach_by_friends.android.ui.activity_indicator);
if(typeof teach_by_friends.android.core.render_scene !== 'undefined'){
} else {
teach_by_friends.android.core.render_scene = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"teach-by-friends.android.core","render-scene"),((function (method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__){
return (function (nav){
return new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(nav);
});})(method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
cljs.core._add_method.call(null,teach_by_friends.android.core.render_scene,new cljs.core.Keyword(null,"serials","serials",-2111163111),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.android.core.serials_scene], null);
}));
cljs.core._add_method.call(null,teach_by_friends.android.core.render_scene,new cljs.core.Keyword(null,"seasons","seasons",1033111474),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.android.core.seasons_scene], null);
}));
cljs.core._add_method.call(null,teach_by_friends.android.core.render_scene,new cljs.core.Keyword(null,"chapter","chapter",-238644368),(function (p__23701){
var map__23702 = p__23701;
var map__23702__$1 = ((((!((map__23702 == null)))?((((map__23702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23702):map__23702);
var title = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"props","props",453281727));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.android.core.new_design_scene,title], null);
}));
if(typeof teach_by_friends.android.core.configure_scene !== 'undefined'){
} else {
teach_by_friends.android.core.configure_scene = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"teach-by-friends.android.core","configure-scene"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
cljs.core._add_method.call(null,teach_by_friends.android.core.configure_scene,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.Keyword(null,"push-from-right","push-from-right",-146070364);
}));
teach_by_friends.android.core.app_root = (function teach_by_friends$android$core$app_root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.navigation,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),new cljs.core.Keyword(null,"serials","serials",-2111163111),new cljs.core.Keyword(null,"render-scene","render-scene",-471969412),teach_by_friends.android.core.render_scene,new cljs.core.Keyword(null,"configure-scene","configure-scene",-1674748709),teach_by_friends.android.core.configure_scene], null)], null);
});
teach_by_friends.android.core.init = (function teach_by_friends$android$core$init(){
return teach_by_friends.shared.ui.app_registry.registerComponent("TeachByFriends",(function (){
return reagent.core.reactify_component.call(null,teach_by_friends.android.core.app_root);
}));
});

//# sourceMappingURL=core.js.map