// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.shared.components.chapter_row');
goog.require('cljs.core');
goog.require('teach_by_friends.shared.ui');
goog.require('re_frame.core');
teach_by_friends.shared.components.chapter_row.chapter_row = (function teach_by_friends$shared$components$chapter_row$chapter_row(c){
var chapter = cljs.core.js__GT_clj.call(null,c,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#000",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (chapter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapter-load","chapter-load",-1996615859),chapter], null));
});})(chapter))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(chapter)], null)], null);
});

//# sourceMappingURL=chapter_row.js.map