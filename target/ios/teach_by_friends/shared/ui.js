// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.shared.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
teach_by_friends.shared.ui.React = require("react");
teach_by_friends.shared.ui.ReactNative = require("react-native");
teach_by_friends.shared.ui.LinearGradient = require("react-native-linear-gradient").default;
teach_by_friends.shared.ui.linear_gradient = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.LinearGradient);
teach_by_friends.shared.ui.DataSource = teach_by_friends.shared.ui.ReactNative.ListView.DataSource;
teach_by_friends.shared.ui.app_registry = teach_by_friends.shared.ui.ReactNative.AppRegistry;
teach_by_friends.shared.ui.text = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.Text);
teach_by_friends.shared.ui.view = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.View);
teach_by_friends.shared.ui.image = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.Image);
teach_by_friends.shared.ui.touchable_highlight = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.TouchableHighlight);
teach_by_friends.shared.ui.touchable_opacity = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.TouchableOpacity);
teach_by_friends.shared.ui.list_view = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.ListView);
teach_by_friends.shared.ui.scroll_view = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.ScrollView);
teach_by_friends.shared.ui.text_input = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.TextInput);
teach_by_friends.shared.ui.status_bar = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.StatusBar);
teach_by_friends.shared.ui.alert = (function teach_by_friends$shared$ui$alert(title){
return teach_by_friends.shared.ui.ReactNative.Alert.alert(title);
});
teach_by_friends.shared.ui.Animated = teach_by_friends.shared.ui.ReactNative.Animated;
teach_by_friends.shared.ui.AnimatedValue = teach_by_friends.shared.ui.Animated.Value;
teach_by_friends.shared.ui.animated_value = (function teach_by_friends$shared$ui$animated_value(val){
return (new teach_by_friends.shared.ui.AnimatedValue(val));
});
teach_by_friends.shared.ui.animated_set_value = (function teach_by_friends$shared$ui$animated_set_value(an,val){
return an.setValue(val);
});
teach_by_friends.shared.ui.animated_parallel = (function teach_by_friends$shared$ui$animated_parallel(var_args){
var args__17899__auto__ = [];
var len__17892__auto___23542 = arguments.length;
var i__17893__auto___23543 = (0);
while(true){
if((i__17893__auto___23543 < len__17892__auto___23542)){
args__17899__auto__.push((arguments[i__17893__auto___23543]));

var G__23544 = (i__17893__auto___23543 + (1));
i__17893__auto___23543 = G__23544;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return teach_by_friends.shared.ui.animated_parallel.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

teach_by_friends.shared.ui.animated_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (animations){
return teach_by_friends.shared.ui.Animated.parallel(cljs.core.clj__GT_js.call(null,animations));
});

teach_by_friends.shared.ui.animated_parallel.cljs$lang$maxFixedArity = (0);

teach_by_friends.shared.ui.animated_parallel.cljs$lang$applyTo = (function (seq23541){
return teach_by_friends.shared.ui.animated_parallel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23541));
});
teach_by_friends.shared.ui.animated_timing = (function teach_by_friends$shared$ui$animated_timing(animated_value,config){
return teach_by_friends.shared.ui.Animated.timing(animated_value,cljs.core.clj__GT_js.call(null,config));
});
teach_by_friends.shared.ui.start_animated = (function teach_by_friends$shared$ui$start_animated(var_args){
var args23545 = [];
var len__17892__auto___23548 = arguments.length;
var i__17893__auto___23549 = (0);
while(true){
if((i__17893__auto___23549 < len__17892__auto___23548)){
args23545.push((arguments[i__17893__auto___23549]));

var G__23550 = (i__17893__auto___23549 + (1));
i__17893__auto___23549 = G__23550;
continue;
} else {
}
break;
}

var G__23547 = args23545.length;
switch (G__23547) {
case 1:
return teach_by_friends.shared.ui.start_animated.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teach_by_friends.shared.ui.start_animated.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23545.length)].join('')));

}
});

teach_by_friends.shared.ui.start_animated.cljs$core$IFn$_invoke$arity$1 = (function (animated){
return animated.start();
});

teach_by_friends.shared.ui.start_animated.cljs$core$IFn$_invoke$arity$2 = (function (animated,end_cb){
return animated.start(end_cb);
});

teach_by_friends.shared.ui.start_animated.cljs$lang$maxFixedArity = 2;
teach_by_friends.shared.ui.start_animated_timing = (function teach_by_friends$shared$ui$start_animated_timing(var_args){
var args23552 = [];
var len__17892__auto___23555 = arguments.length;
var i__17893__auto___23556 = (0);
while(true){
if((i__17893__auto___23556 < len__17892__auto___23555)){
args23552.push((arguments[i__17893__auto___23556]));

var G__23557 = (i__17893__auto___23556 + (1));
i__17893__auto___23556 = G__23557;
continue;
} else {
}
break;
}

var G__23554 = args23552.length;
switch (G__23554) {
case 2:
return teach_by_friends.shared.ui.start_animated_timing.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return teach_by_friends.shared.ui.start_animated_timing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23552.length)].join('')));

}
});

teach_by_friends.shared.ui.start_animated_timing.cljs$core$IFn$_invoke$arity$2 = (function (animated_value,config){
return teach_by_friends.shared.ui.start_animated.call(null,teach_by_friends.shared.ui.animated_timing.call(null,animated_value,config));
});

teach_by_friends.shared.ui.start_animated_timing.cljs$core$IFn$_invoke$arity$3 = (function (animated_value,config,end_cb){
return teach_by_friends.shared.ui.start_animated.call(null,teach_by_friends.shared.ui.animated_timing.call(null,animated_value,config),end_cb);
});

teach_by_friends.shared.ui.start_animated_timing.cljs$lang$maxFixedArity = 3;
teach_by_friends.shared.ui.animated_view = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.Animated.View);
teach_by_friends.shared.ui.InteractionManager = teach_by_friends.shared.ui.ReactNative.InteractionManager;
teach_by_friends.shared.ui.run_after_interaction = (function teach_by_friends$shared$ui$run_after_interaction(cb){
return teach_by_friends.shared.ui.InteractionManager.runAfterInteractions(cb.call(null));
});
teach_by_friends.shared.ui.navigator = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.Navigator);
teach_by_friends.shared.ui.navigation_bar = reagent.core.adapt_react_class.call(null,teach_by_friends.shared.ui.ReactNative.Navigator.NavigationBar);
teach_by_friends.shared.ui.get_navigation_bar_height = (function teach_by_friends$shared$ui$get_navigation_bar_height(){
return teach_by_friends.shared.ui.ReactNative.Navigator.NavigationBar.Styles.General.TotalNavHeight;
});
teach_by_friends.shared.ui.choose_scene = (function teach_by_friends$shared$ui$choose_scene(render_scene){
return (function (route,_){
return reagent.core.as_element.call(null,render_scene.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.keyword.call(null,route.name),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.js__GT_clj.call(null,route.passProps,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null)));
});
});
teach_by_friends.shared.ui.choose_scene_transition = (function teach_by_friends$shared$ui$choose_scene_transition(renderer){
var Config = teach_by_friends.shared.ui.ReactNative.Navigator.SceneConfigs;
var types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"push-from-right","push-from-right",-146070364),new cljs.core.Keyword(null,"horizontal-swipe-jump","horizontal-swipe-jump",-1514650775),new cljs.core.Keyword(null,"float-from-right","float-from-right",-1381921683),new cljs.core.Keyword(null,"vertical-up-swipe-jump","vertical-up-swipe-jump",682400910),new cljs.core.Keyword(null,"float-from-bottom","float-from-bottom",453353870),new cljs.core.Keyword(null,"vertical-down-swipe-jump","vertical-down-swipe-jump",1511251570),new cljs.core.Keyword(null,"horizontal-swipe-jump-from-right","horizontal-swipe-jump-from-right",1447394740),new cljs.core.Keyword(null,"float-from-left","float-from-left",-986606023),new cljs.core.Keyword(null,"fade-android","fade-android",-1041544327),new cljs.core.Keyword(null,"float-from-bottom-android","float-from-bottom-android",268021887)],[Config.PushFromRight,Config.HorizontalSwipeJump,Config.FloatFromRight,Config.VerticalUpSwipeJump,Config.FloatFromBottom,Config.VerticalDownSwipeJump,Config.HorizontalSwipeJumpFromRight,Config.FloatFromLeft,Config.FadeAndroid,Config.FloatFromBottomAndroid]);
return ((function (Config,types){
return (function (route,_){
var type = renderer.call(null,cljs.core.keyword.call(null,route.name));
if(cljs.core.contains_QMARK_.call(null,types,type)){
return type.call(null,types);
} else {
return new cljs.core.Keyword(null,"push-from-right","push-from-right",-146070364).cljs$core$IFn$_invoke$arity$1(types);
}
});
;})(Config,types))
});
teach_by_friends.shared.ui.navigation_mapper = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"LeftButton","LeftButton",583501915),(function (route,navigator,index,nav_state){
if(!(cljs.core._EQ_.call(null,index,(0)))){
var prev_route = (nav_state["routeStack"][(index - (1))]["name"]);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(10),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (prev_route){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","pop","nav/pop",-1734698693),cljs.core.keyword.call(null,prev_route)], null));
});})(prev_route))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#373E4D"], null)], null),"Back"], null)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"RightButton","RightButton",100651067),(function (){
return null;
}),new cljs.core.Keyword(null,"Title","Title",1956715563),(function (route,navigator,index,nav_state){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10)], null)], null),"Title"], null));
})], null);
teach_by_friends.shared.ui.navigation = (function teach_by_friends$shared$ui$navigation(props){
var track_id = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (track_id){
return (function (this$){
var id = reagent.core.track_BANG_.call(null,((function (track_id){
return (function (){
var nav = reagent.ratom.make_reaction.call(null,((function (track_id){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.Keyword(null,"nav","nav",719540477));
});})(track_id))
);
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nav));
var props__$1 = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nav));
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nav));
if((route == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pop","pop",-1734778776))){
return this$.refs.navigator.pop();
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"push","push",799791267))){
return this$.refs.navigator.push(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,route),new cljs.core.Keyword(null,"passProps","passProps",1958475054),props__$1], null)));
} else {
return null;
}
}
}
});})(track_id))
);
return cljs.core.swap_BANG_.call(null,track_id,((function (id,track_id){
return (function (_){
return id;
});})(id,track_id))
);
});})(track_id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (track_id){
return (function (this$){
return reagent.core.dispose_BANG_.call(null,cljs.core.deref.call(null,track_id));
});})(track_id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (track_id){
return (function (p__23562){
var map__23563 = p__23562;
var map__23563__$1 = ((((!((map__23563 == null)))?((((map__23563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23563):map__23563);
var initial_route = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"initial-route","initial-route",-622635808));
var render_scene = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"render-scene","render-scene",-471969412));
var configure_scene = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"configure-scene","configure-scene",-1674748709));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teach_by_friends.shared.ui.navigator,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"navigator",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,initial_route)], null),new cljs.core.Keyword(null,"render-scene","render-scene",-471969412),teach_by_friends.shared.ui.choose_scene.call(null,render_scene),new cljs.core.Keyword(null,"configure-scene","configure-scene",-1674748709),teach_by_friends.shared.ui.choose_scene_transition.call(null,configure_scene)], null)], null);
});})(track_id))
], null));
});

//# sourceMappingURL=ui.js.map