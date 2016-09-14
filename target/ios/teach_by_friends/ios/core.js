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
cljs.core._add_method.call(null,teach_by_friends.ios.core.render_scene,new cljs.core.Keyword(null,"chapter","chapter",-238644368),(function (p__24027){
var map__24028 = p__24027;
var map__24028__$1 = ((((!((map__24028 == null)))?((((map__24028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24028):map__24028);
var title = cljs.core.get.call(null,map__24028__$1,new cljs.core.Keyword(null,"props","props",453281727));
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
var len__17892__auto___24041 = arguments.length;
var i__17893__auto___24042 = (0);
while(true){
if((i__17893__auto___24042 < len__17892__auto___24041)){
args__17899__auto__.push((arguments[i__17893__auto___24042]));

var G__24043 = (i__17893__auto___24042 + (1));
i__17893__auto___24042 = G__24043;
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
return (function (___$1,p__24032){
var vec__24033 = p__24032;
var ___$2 = cljs.core.nth.call(null,vec__24033,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__24033,(1),null);
var next_props = cljs.core.nthnext.call(null,vec__24033,(2));
var current_props = new cljs.core.Keyword(null,"current-props","current-props",2134166229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return cljs.core.swap_BANG_.call(null,state,((function (current_props,vec__24033,___$2,___$3,next_props,state){
return (function (s){
return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animated","animated",129318795),true,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297),current_props,new cljs.core.Keyword(null,"current-props","current-props",2134166229),next_props], null));
});})(current_props,vec__24033,___$2,___$3,next_props,state))
);
});})(state))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (state){
return (function (___$1,p__24034){
var vec__24035 = p__24034;
var ___$2 = cljs.core.nth.call(null,vec__24035,(0),null);
var map__24036 = cljs.core.nth.call(null,vec__24035,(1),null);
var map__24036__$1 = ((((!((map__24036 == null)))?((((map__24036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24036):map__24036);
var time = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(new cljs.core.Keyword(null,"animated","animated",129318795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return teach_by_friends.shared.ui.start_animated_timing.call(null,new cljs.core.Keyword(null,"fade-value","fade-value",166064315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),(time / (2))], null),((function (vec__24035,___$2,map__24036,map__24036__$1,time,state){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"animated","animated",129318795),false);

return teach_by_friends.shared.ui.start_animated_timing.call(null,new cljs.core.Keyword(null,"fade-value","fade-value",166064315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),(time / (2))], null));
});})(vec__24035,___$2,map__24036,map__24036__$1,time,state))
);
} else {
return null;
}
});})(state))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state){
return (function() { 
var G__24044__delegate = function (p__24038,children__$1){
var map__24039 = p__24038;
var map__24039__$1 = ((((!((map__24039 == null)))?((((map__24039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24039):map__24039);
var style = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.animated_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"fade-value","fade-value",166064315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"animated","animated",129318795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?new cljs.core.Keyword(null,"prev-props","prev-props",-558550297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)):children__$1)], null);
};
var G__24044 = function (p__24038,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__24045__i = 0, G__24045__a = new Array(arguments.length -  1);
while (G__24045__i < G__24045__a.length) {G__24045__a[G__24045__i] = arguments[G__24045__i + 1]; ++G__24045__i;}
  children__$1 = new cljs.core.IndexedSeq(G__24045__a,0);
} 
return G__24044__delegate.call(this,p__24038,children__$1);};
G__24044.cljs$lang$maxFixedArity = 1;
G__24044.cljs$lang$applyTo = (function (arglist__24046){
var p__24038 = cljs.core.first(arglist__24046);
var children__$1 = cljs.core.rest(arglist__24046);
return G__24044__delegate(p__24038,children__$1);
});
G__24044.cljs$core$IFn$_invoke$arity$variadic = G__24044__delegate;
return G__24044;
})()
;})(state))
], null));
});

teach_by_friends.ios.core.with_opacity_transition.cljs$lang$maxFixedArity = (1);

teach_by_friends.ios.core.with_opacity_transition.cljs$lang$applyTo = (function (seq24030){
var G__24031 = cljs.core.first.call(null,seq24030);
var seq24030__$1 = cljs.core.next.call(null,seq24030);
return teach_by_friends.ios.core.with_opacity_transition.cljs$core$IFn$_invoke$arity$variadic(G__24031,seq24030__$1);
});
teach_by_friends.ios.core.with_slide_transition = (function teach_by_friends$ios$core$with_slide_transition(var_args){
var args__17899__auto__ = [];
var len__17892__auto___24059 = arguments.length;
var i__17893__auto___24060 = (0);
while(true){
if((i__17893__auto___24060 < len__17892__auto___24059)){
args__17899__auto__.push((arguments[i__17893__auto___24060]));

var G__24061 = (i__17893__auto___24060 + (1));
i__17893__auto___24060 = G__24061;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return teach_by_friends.ios.core.with_slide_transition.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

teach_by_friends.ios.core.with_slide_transition.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animated","animated",129318795),false,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"from-value","from-value",307812029),teach_by_friends.shared.ui.animated_value.call(null,(0)),new cljs.core.Keyword(null,"to-value","to-value",-922290522),teach_by_friends.shared.ui.animated_value.call(null,(100))], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (state){
return (function (s){
return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animated","animated",129318795),false,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297),children,new cljs.core.Keyword(null,"current-props","current-props",2134166229),children], null));
});})(state))
);
});})(state))
,new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),((function (state){
return (function (_,p__24049){
var vec__24050 = p__24049;
var ___$1 = cljs.core.nth.call(null,vec__24050,(0),null);
var next_props = cljs.core.nthnext.call(null,vec__24050,(1));
var current_props = new cljs.core.Keyword(null,"current-props","current-props",2134166229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return cljs.core.swap_BANG_.call(null,state,((function (current_props,vec__24050,___$1,next_props,state){
return (function (s){
return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animated","animated",129318795),true,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297),current_props,new cljs.core.Keyword(null,"current-props","current-props",2134166229),next_props], null));
});})(current_props,vec__24050,___$1,next_props,state))
);
});})(state))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (state){
return (function (_,p__24051){
var vec__24052 = p__24051;
var ___$1 = cljs.core.nth.call(null,vec__24052,(0),null);
var map__24053 = cljs.core.nth.call(null,vec__24052,(1),null);
var map__24053__$1 = ((((!((map__24053 == null)))?((((map__24053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24053):map__24053);
var time = cljs.core.get.call(null,map__24053__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_((function (){var and__16822__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(and__16822__auto__)){
return new cljs.core.Keyword(null,"animated","animated",129318795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
} else {
return and__16822__auto__;
}
})())){
var from_anim_value = new cljs.core.Keyword(null,"from-value","from-value",307812029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var to_anim_value = new cljs.core.Keyword(null,"to-value","to-value",-922290522).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var to_value = (function (){var G__24055 = (((new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"current-props","current-props",2134166229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"current-props","current-props",2134166229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))).fqn:null);
switch (G__24055) {
case "to-left":
return width;

break;
case "to-right":
return ((-1) * width);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"current-props","current-props",2134166229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))))].join('')));

}
})();
teach_by_friends.shared.ui.animated_set_value.call(null,from_anim_value,(0));

teach_by_friends.shared.ui.animated_set_value.call(null,to_anim_value,to_value);

return teach_by_friends.shared.ui.start_animated.call(null,teach_by_friends.shared.ui.animated_parallel.call(null,teach_by_friends.shared.ui.animated_timing.call(null,from_anim_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toValue","toValue",730500269),((-1) * to_value),new cljs.core.Keyword(null,"duration","duration",1444101068),time], null)),teach_by_friends.shared.ui.animated_timing.call(null,to_anim_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toValue","toValue",730500269),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),time], null))),((function (from_anim_value,to_anim_value,width,to_value,vec__24052,___$1,map__24053,map__24053__$1,time,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"animated","animated",129318795),false);
});})(from_anim_value,to_anim_value,width,to_value,vec__24052,___$1,map__24053,map__24053__$1,time,state))
);
} else {
return null;
}
});})(state))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state){
return (function() { 
var G__24063__delegate = function (p__24056,children__$1){
var map__24057 = p__24056;
var map__24057__$1 = ((((!((map__24057 == null)))?((((map__24057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24057):map__24057);
var root_style = cljs.core.get.call(null,map__24057__$1,new cljs.core.Keyword(null,"root-style","root-style",855918884));
var style = cljs.core.get.call(null,map__24057__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,root_style,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)),new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),((function (map__24057,map__24057__$1,root_style,style,state){
return (function (p1__24047_SHARP_){
return cljs.core.swap_BANG_.call(null,state,((function (map__24057,map__24057__$1,root_style,style,state){
return (function (s){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"width","width",-384071477),p1__24047_SHARP_.nativeEvent.layout.width),new cljs.core.Keyword(null,"height","height",1025178622),p1__24047_SHARP_.nativeEvent.layout.height);
});})(map__24057,map__24057__$1,root_style,style,state))
);
});})(map__24057,map__24057__$1,root_style,style,state))
], null),children__$1], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"animated","animated",129318795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,root_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.animated_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"from",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"from-value","from-value",307812029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null))], null),cljs.core.rest.call(null,new cljs.core.Keyword(null,"prev-props","prev-props",-558550297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.animated_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"to",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"to-value","to-value",-922290522).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null))], null),children__$1], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,root_style,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null))], null),children__$1], null);
}
}
};
var G__24063 = function (p__24056,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__24064__i = 0, G__24064__a = new Array(arguments.length -  1);
while (G__24064__i < G__24064__a.length) {G__24064__a[G__24064__i] = arguments[G__24064__i + 1]; ++G__24064__i;}
  children__$1 = new cljs.core.IndexedSeq(G__24064__a,0);
} 
return G__24063__delegate.call(this,p__24056,children__$1);};
G__24063.cljs$lang$maxFixedArity = 1;
G__24063.cljs$lang$applyTo = (function (arglist__24065){
var p__24056 = cljs.core.first(arglist__24065);
var children__$1 = cljs.core.rest(arglist__24065);
return G__24063__delegate(p__24056,children__$1);
});
G__24063.cljs$core$IFn$_invoke$arity$variadic = G__24063__delegate;
return G__24063;
})()
;})(state))
], null));
});

teach_by_friends.ios.core.with_slide_transition.cljs$lang$maxFixedArity = (0);

teach_by_friends.ios.core.with_slide_transition.cljs$lang$applyTo = (function (seq24048){
return teach_by_friends.ios.core.with_slide_transition.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24048));
});
teach_by_friends.ios.core.app_root = (function teach_by_friends$ios$core$app_root(){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),(0),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"to-left","to-left",113072661)], null));
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.linear_gradient,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#834d9b","#48569B"], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(150),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"left-menu",new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null),"< Back"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"title",new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),clojure.string.upper_case.call(null,[cljs.core.str("serials")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_opacity_transition,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"right-menu",new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (state){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(s) + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"to-left","to-left",113072661)], null);
});})(state))
);
});})(state))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.ios.core.with_slide_transition,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(400),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"root-style","root-style",855918884),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"slide-text",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (state){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(s) - (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"to-right","to-right",1176468608)], null);
});})(state))
);
});})(state))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null);
});
;})(state))
});
teach_by_friends.ios.core.init = (function teach_by_friends$ios$core$init(){
return teach_by_friends.shared.ui.app_registry.registerComponent("TeachByFriends",(function (){
return reagent.core.reactify_component.call(null,teach_by_friends.ios.core.app_root);
}));
});

//# sourceMappingURL=core.js.map