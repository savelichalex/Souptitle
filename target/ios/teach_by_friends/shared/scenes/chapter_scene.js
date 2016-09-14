// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.shared.scenes.chapter_scene');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('teach_by_friends.shared.ui');
goog.require('re_frame.core');
goog.require('teach_by_friends.shared.components.term_row');
teach_by_friends.shared.scenes.chapter_scene.ReactNative = require("react-native");
teach_by_friends.shared.scenes.chapter_scene.chapter_ds = (new teach_by_friends.shared.scenes.chapter_scene.ReactNative.ListView.DataSource({"rowHasChanged": cljs.core.not_EQ_}));
teach_by_friends.shared.scenes.chapter_scene.get_chapter_scene = (function teach_by_friends$shared$scenes$chapter_scene$get_chapter_scene(activity_indicator){
return (function teach_by_friends$shared$scenes$chapter_scene$get_chapter_scene_$_chapter_scene(){
var chapter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chapter","get-chapter",1893999781)], null));
return ((function (chapter){
return (function (){
if(!((cljs.core.deref.call(null,chapter) == null))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),teach_by_friends.shared.ui.get_navigation_bar_height.call(null),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (chapter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resort-chapter","resort-chapter",-606074972),new cljs.core.Keyword(null,"by-rank","by-rank",-1696056256)], null));
});})(chapter))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,"In time order"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (chapter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resort-chapter","resort-chapter",-606074972),new cljs.core.Keyword(null,"by-alphabet","by-alphabet",-1215394575)], null));
});})(chapter))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,"In alph order"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.list_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),teach_by_friends.shared.scenes.chapter_scene.chapter_ds.cloneWithRows(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,chapter))),new cljs.core.Keyword(null,"render-row","render-row",630859969),((function (chapter){
return (function (p1__23708_SHARP_){
return reagent.core.as_element.call(null,teach_by_friends.shared.components.term_row.term_row.call(null,p1__23708_SHARP_));
});})(chapter))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(9)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [activity_indicator], null)], null);
}
});
;})(chapter))
});
});

//# sourceMappingURL=chapter_scene.js.map