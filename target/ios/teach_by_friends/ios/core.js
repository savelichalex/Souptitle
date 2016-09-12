// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.ios.core');
goog.require('cljs.core');
goog.require('teach_by_friends.shared.scenes.seasons_scene');
goog.require('teach_by_friends.shared.scenes.serials_scene');
goog.require('teach_by_friends.ios.ui');
goog.require('reagent.core');
goog.require('teach_by_friends.shared.scenes.new_design');
goog.require('teach_by_friends.subs');
goog.require('clojure.string');
goog.require('teach_by_friends.shared.ui');
goog.require('teach_by_friends.handlers');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
teach_by_friends.ios.core.serials_scene = teach_by_friends.shared.scenes.serials_scene.get_serials_scene.call(null,teach_by_friends.ios.ui.activity_indicator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar-style","bar-style",-813064364),"light-content"], null));
teach_by_friends.ios.core.seasons_scene = teach_by_friends.shared.scenes.seasons_scene.get_seasons_scene.call(null,teach_by_friends.ios.ui.activity_indicator);
teach_by_friends.ios.core.new_design_scene = teach_by_friends.shared.scenes.new_design.get_new_design_scene.call(null,teach_by_friends.ios.ui.activity_indicator);
if(typeof teach_by_friends.ios.core.render_scene !== 'undefined'){
} else {
teach_by_friends.ios.core.render_scene = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"teach-by-friends.ios.core","render-scene"),((function (method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__){
return (function (nav){
return new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(nav);
});})(method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
cljs.core._add_method.call(null,teach_by_friends.ios.core.render_scene,new cljs.core.Keyword(null,"serials","serials",-2111163111),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.serials_scene], null);
}));
cljs.core._add_method.call(null,teach_by_friends.ios.core.render_scene,new cljs.core.Keyword(null,"seasons","seasons",1033111474),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.seasons_scene], null);
}));
cljs.core._add_method.call(null,teach_by_friends.ios.core.render_scene,new cljs.core.Keyword(null,"chapter","chapter",-238644368),(function (p__22360){
var map__22361 = p__22360;
var map__22361__$1 = ((((!((map__22361 == null)))?((((map__22361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22361):map__22361);
var title = cljs.core.get.call(null,map__22361__$1,new cljs.core.Keyword(null,"props","props",453281727));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.new_design_scene,title], null);
}));
if(typeof teach_by_friends.ios.core.configure_scene !== 'undefined'){
} else {
teach_by_friends.ios.core.configure_scene = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"teach-by-friends.ios.core","configure-scene"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
cljs.core._add_method.call(null,teach_by_friends.ios.core.configure_scene,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.Keyword(null,"push-from-right","push-from-right",-146070364);
}));
teach_by_friends.ios.core.with_opacity_transition = (function teach_by_friends$ios$core$with_opacity_transition(var_args){
var args__17899__auto__ = [];
var len__17892__auto___22374 = arguments.length;
var i__17893__auto___22375 = (0);
while(true){
if((i__17893__auto___22375 < len__17892__auto___22374)){
args__17899__auto__.push((arguments[i__17893__auto___22375]));

var G__22376 = (i__17893__auto___22375 + (1));
i__17893__auto___22375 = G__22376;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((1) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((1)),(0))):null);
return teach_by_friends.ios.core.with_opacity_transition.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17900__auto__);
});

teach_by_friends.ios.core.with_opacity_transition.cljs$core$IFn$_invoke$arity$variadic = (function (_,children){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animated","animated",129318795),false,new cljs.core.Keyword(null,"fade-value","fade-value",166064315),teach_by_friends.shared.ui.animated_value.call(null,(1))], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (state){
return (function (s){
return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animated","animated",129318795),false,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297),children,new cljs.core.Keyword(null,"current-props","current-props",2134166229),children], null));
});})(state))
);
});})(state))
,new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),((function (state){
return (function (___$1,p__22365){
var vec__22366 = p__22365;
var ___$2 = cljs.core.nth.call(null,vec__22366,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__22366,(1),null);
var next_props = cljs.core.nthnext.call(null,vec__22366,(2));
var current_props = new cljs.core.Keyword(null,"current-props","current-props",2134166229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return cljs.core.swap_BANG_.call(null,state,((function (current_props,vec__22366,___$2,___$3,next_props,state){
return (function (s){
return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animated","animated",129318795),true,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297),current_props,new cljs.core.Keyword(null,"current-props","current-props",2134166229),next_props], null));
});})(current_props,vec__22366,___$2,___$3,next_props,state))
);
});})(state))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (state){
return (function (___$1,p__22367){
var vec__22368 = p__22367;
var ___$2 = cljs.core.nth.call(null,vec__22368,(0),null);
var map__22369 = cljs.core.nth.call(null,vec__22368,(1),null);
var map__22369__$1 = ((((!((map__22369 == null)))?((((map__22369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22369):map__22369);
var time = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(new cljs.core.Keyword(null,"animated","animated",129318795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return teach_by_friends.shared.ui.start_animated_timing.call(null,new cljs.core.Keyword(null,"fade-value","fade-value",166064315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),(time / (2))], null),((function (vec__22368,___$2,map__22369,map__22369__$1,time,state){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"animated","animated",129318795),false);

return teach_by_friends.shared.ui.start_animated_timing.call(null,new cljs.core.Keyword(null,"fade-value","fade-value",166064315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),(time / (2))], null));
});})(vec__22368,___$2,map__22369,map__22369__$1,time,state))
);
} else {
return null;
}
});})(state))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state){
return (function() { 
var G__22377__delegate = function (p__22371,children__$1){
var map__22372 = p__22371;
var map__22372__$1 = ((((!((map__22372 == null)))?((((map__22372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22372):map__22372);
var style = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.animated_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"fade-value","fade-value",166064315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"animated","animated",129318795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?new cljs.core.Keyword(null,"prev-props","prev-props",-558550297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)):children__$1)], null);
};
var G__22377 = function (p__22371,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__22378__i = 0, G__22378__a = new Array(arguments.length -  1);
while (G__22378__i < G__22378__a.length) {G__22378__a[G__22378__i] = arguments[G__22378__i + 1]; ++G__22378__i;}
  children__$1 = new cljs.core.IndexedSeq(G__22378__a,0);
} 
return G__22377__delegate.call(this,p__22371,children__$1);};
G__22377.cljs$lang$maxFixedArity = 1;
G__22377.cljs$lang$applyTo = (function (arglist__22379){
var p__22371 = cljs.core.first(arglist__22379);
var children__$1 = cljs.core.rest(arglist__22379);
return G__22377__delegate(p__22371,children__$1);
});
G__22377.cljs$core$IFn$_invoke$arity$variadic = G__22377__delegate;
return G__22377;
})()
;})(state))
], null));
});

teach_by_friends.ios.core.with_opacity_transition.cljs$lang$maxFixedArity = (1);

teach_by_friends.ios.core.with_opacity_transition.cljs$lang$applyTo = (function (seq22363){
var G__22364 = cljs.core.first.call(null,seq22363);
var seq22363__$1 = cljs.core.next.call(null,seq22363);
return teach_by_friends.ios.core.with_opacity_transition.cljs$core$IFn$_invoke$arity$variadic(G__22364,seq22363__$1);
});
cljs.core.print.call(null,"123");
teach_by_friends.ios.core.app_root = (function teach_by_friends$ios$core$app_root(){
var state = reagent.core.atom.call(null,(0));
return ((function (state){
return (function (){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(50),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(50)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.inc);
});})(state))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(50)], null)], null),cljs.core.deref.call(null,state)], null)], null)], null);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.linear_gradient,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#834d9b","#48569B"], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(150),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"left-menu",new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.inc);
});})(state))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null),"< Back"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"title",new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),clojure.string.upper_case.call(null,[cljs.core.str("serials")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"right-menu",new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.inc);
});})(state))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),cljs.core.deref.call(null,state)], null)], null)], null);
});
;})(state))
});
teach_by_friends.ios.core.init = (function teach_by_friends$ios$core$init(){
return teach_by_friends.shared.ui.app_registry.registerComponent("TeachByFriends",(function (){
return reagent.core.reactify_component.call(null,teach_by_friends.ios.core.app_root);
}));
});

//# sourceMappingURL=core.js.map