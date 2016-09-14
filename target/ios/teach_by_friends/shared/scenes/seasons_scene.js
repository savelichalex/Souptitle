// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.shared.scenes.seasons_scene');
goog.require('cljs.core');
goog.require('teach_by_friends.shared.ui');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('teach_by_friends.shared.components.row');
goog.require('clojure.string');
teach_by_friends.shared.scenes.seasons_scene.ReactNative = require("react-native");
teach_by_friends.shared.scenes.seasons_scene.seasons_ds = (new teach_by_friends.shared.scenes.seasons_scene.ReactNative.ListView.DataSource({"rowHasChanged": cljs.core.not_EQ_}));
teach_by_friends.shared.scenes.seasons_scene.nav_bar = (function teach_by_friends$shared$scenes$seasons_scene$nav_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.linear_gradient,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#834d9b","#48569B"], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),clojure.string.upper_case.call(null,[cljs.core.str("seasons")].join(''))], null)], null)], null);
});
teach_by_friends.shared.scenes.seasons_scene.get_seasons_scene = (function teach_by_friends$shared$scenes$seasons_scene$get_seasons_scene(activity_indicator){
return (function teach_by_friends$shared$scenes$seasons_scene$get_seasons_scene_$_seasons_scene(){
var seasons = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seasons","seasons",1033111474)], null));
return ((function (seasons){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.scenes.seasons_scene.nav_bar], null),((!((cljs.core.deref.call(null,seasons) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.list_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),teach_by_friends.shared.scenes.seasons_scene.seasons_ds.cloneWithRows(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,seasons))),new cljs.core.Keyword(null,"render-row","render-row",630859969),((function (seasons){
return (function (p1__23569_SHARP_){
return reagent.core.as_element.call(null,teach_by_friends.shared.components.row.row.call(null,p1__23569_SHARP_,((function (seasons){
return (function (season){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapters-load","chapters-load",-629452251),season], null));
});})(seasons))
));
});})(seasons))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(13)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(14),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [activity_indicator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(72, 86, 155)"], null)], null)], null))], null);
});
;})(seasons))
});
});

//# sourceMappingURL=seasons_scene.js.map