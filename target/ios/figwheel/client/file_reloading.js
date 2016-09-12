// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16834__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16834__auto__){
return or__16834__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16834__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29679_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29679_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29684 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29685 = null;
var count__29686 = (0);
var i__29687 = (0);
while(true){
if((i__29687 < count__29686)){
var n = cljs.core._nth.call(null,chunk__29685,i__29687);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29688 = seq__29684;
var G__29689 = chunk__29685;
var G__29690 = count__29686;
var G__29691 = (i__29687 + (1));
seq__29684 = G__29688;
chunk__29685 = G__29689;
count__29686 = G__29690;
i__29687 = G__29691;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29684);
if(temp__4425__auto__){
var seq__29684__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29684__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__29684__$1);
var G__29692 = cljs.core.chunk_rest.call(null,seq__29684__$1);
var G__29693 = c__17637__auto__;
var G__29694 = cljs.core.count.call(null,c__17637__auto__);
var G__29695 = (0);
seq__29684 = G__29692;
chunk__29685 = G__29693;
count__29686 = G__29694;
i__29687 = G__29695;
continue;
} else {
var n = cljs.core.first.call(null,seq__29684__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29696 = cljs.core.next.call(null,seq__29684__$1);
var G__29697 = null;
var G__29698 = (0);
var G__29699 = (0);
seq__29684 = G__29696;
chunk__29685 = G__29697;
count__29686 = G__29698;
i__29687 = G__29699;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29738_29745 = cljs.core.seq.call(null,deps);
var chunk__29739_29746 = null;
var count__29740_29747 = (0);
var i__29741_29748 = (0);
while(true){
if((i__29741_29748 < count__29740_29747)){
var dep_29749 = cljs.core._nth.call(null,chunk__29739_29746,i__29741_29748);
topo_sort_helper_STAR_.call(null,dep_29749,(depth + (1)),state);

var G__29750 = seq__29738_29745;
var G__29751 = chunk__29739_29746;
var G__29752 = count__29740_29747;
var G__29753 = (i__29741_29748 + (1));
seq__29738_29745 = G__29750;
chunk__29739_29746 = G__29751;
count__29740_29747 = G__29752;
i__29741_29748 = G__29753;
continue;
} else {
var temp__4425__auto___29754 = cljs.core.seq.call(null,seq__29738_29745);
if(temp__4425__auto___29754){
var seq__29738_29755__$1 = temp__4425__auto___29754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29738_29755__$1)){
var c__17637__auto___29756 = cljs.core.chunk_first.call(null,seq__29738_29755__$1);
var G__29757 = cljs.core.chunk_rest.call(null,seq__29738_29755__$1);
var G__29758 = c__17637__auto___29756;
var G__29759 = cljs.core.count.call(null,c__17637__auto___29756);
var G__29760 = (0);
seq__29738_29745 = G__29757;
chunk__29739_29746 = G__29758;
count__29740_29747 = G__29759;
i__29741_29748 = G__29760;
continue;
} else {
var dep_29761 = cljs.core.first.call(null,seq__29738_29755__$1);
topo_sort_helper_STAR_.call(null,dep_29761,(depth + (1)),state);

var G__29762 = cljs.core.next.call(null,seq__29738_29755__$1);
var G__29763 = null;
var G__29764 = (0);
var G__29765 = (0);
seq__29738_29745 = G__29762;
chunk__29739_29746 = G__29763;
count__29740_29747 = G__29764;
i__29741_29748 = G__29765;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29742){
var vec__29744 = p__29742;
var x = cljs.core.nth.call(null,vec__29744,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29744,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29744,x,xs,get_deps__$1){
return (function (p1__29700_SHARP_){
return clojure.set.difference.call(null,p1__29700_SHARP_,x);
});})(vec__29744,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29778 = cljs.core.seq.call(null,provides);
var chunk__29779 = null;
var count__29780 = (0);
var i__29781 = (0);
while(true){
if((i__29781 < count__29780)){
var prov = cljs.core._nth.call(null,chunk__29779,i__29781);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29782_29790 = cljs.core.seq.call(null,requires);
var chunk__29783_29791 = null;
var count__29784_29792 = (0);
var i__29785_29793 = (0);
while(true){
if((i__29785_29793 < count__29784_29792)){
var req_29794 = cljs.core._nth.call(null,chunk__29783_29791,i__29785_29793);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29794,prov);

var G__29795 = seq__29782_29790;
var G__29796 = chunk__29783_29791;
var G__29797 = count__29784_29792;
var G__29798 = (i__29785_29793 + (1));
seq__29782_29790 = G__29795;
chunk__29783_29791 = G__29796;
count__29784_29792 = G__29797;
i__29785_29793 = G__29798;
continue;
} else {
var temp__4425__auto___29799 = cljs.core.seq.call(null,seq__29782_29790);
if(temp__4425__auto___29799){
var seq__29782_29800__$1 = temp__4425__auto___29799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29782_29800__$1)){
var c__17637__auto___29801 = cljs.core.chunk_first.call(null,seq__29782_29800__$1);
var G__29802 = cljs.core.chunk_rest.call(null,seq__29782_29800__$1);
var G__29803 = c__17637__auto___29801;
var G__29804 = cljs.core.count.call(null,c__17637__auto___29801);
var G__29805 = (0);
seq__29782_29790 = G__29802;
chunk__29783_29791 = G__29803;
count__29784_29792 = G__29804;
i__29785_29793 = G__29805;
continue;
} else {
var req_29806 = cljs.core.first.call(null,seq__29782_29800__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29806,prov);

var G__29807 = cljs.core.next.call(null,seq__29782_29800__$1);
var G__29808 = null;
var G__29809 = (0);
var G__29810 = (0);
seq__29782_29790 = G__29807;
chunk__29783_29791 = G__29808;
count__29784_29792 = G__29809;
i__29785_29793 = G__29810;
continue;
}
} else {
}
}
break;
}

var G__29811 = seq__29778;
var G__29812 = chunk__29779;
var G__29813 = count__29780;
var G__29814 = (i__29781 + (1));
seq__29778 = G__29811;
chunk__29779 = G__29812;
count__29780 = G__29813;
i__29781 = G__29814;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29778);
if(temp__4425__auto__){
var seq__29778__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29778__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__29778__$1);
var G__29815 = cljs.core.chunk_rest.call(null,seq__29778__$1);
var G__29816 = c__17637__auto__;
var G__29817 = cljs.core.count.call(null,c__17637__auto__);
var G__29818 = (0);
seq__29778 = G__29815;
chunk__29779 = G__29816;
count__29780 = G__29817;
i__29781 = G__29818;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29778__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29786_29819 = cljs.core.seq.call(null,requires);
var chunk__29787_29820 = null;
var count__29788_29821 = (0);
var i__29789_29822 = (0);
while(true){
if((i__29789_29822 < count__29788_29821)){
var req_29823 = cljs.core._nth.call(null,chunk__29787_29820,i__29789_29822);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29823,prov);

var G__29824 = seq__29786_29819;
var G__29825 = chunk__29787_29820;
var G__29826 = count__29788_29821;
var G__29827 = (i__29789_29822 + (1));
seq__29786_29819 = G__29824;
chunk__29787_29820 = G__29825;
count__29788_29821 = G__29826;
i__29789_29822 = G__29827;
continue;
} else {
var temp__4425__auto___29828__$1 = cljs.core.seq.call(null,seq__29786_29819);
if(temp__4425__auto___29828__$1){
var seq__29786_29829__$1 = temp__4425__auto___29828__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29786_29829__$1)){
var c__17637__auto___29830 = cljs.core.chunk_first.call(null,seq__29786_29829__$1);
var G__29831 = cljs.core.chunk_rest.call(null,seq__29786_29829__$1);
var G__29832 = c__17637__auto___29830;
var G__29833 = cljs.core.count.call(null,c__17637__auto___29830);
var G__29834 = (0);
seq__29786_29819 = G__29831;
chunk__29787_29820 = G__29832;
count__29788_29821 = G__29833;
i__29789_29822 = G__29834;
continue;
} else {
var req_29835 = cljs.core.first.call(null,seq__29786_29829__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29835,prov);

var G__29836 = cljs.core.next.call(null,seq__29786_29829__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__29786_29819 = G__29836;
chunk__29787_29820 = G__29837;
count__29788_29821 = G__29838;
i__29789_29822 = G__29839;
continue;
}
} else {
}
}
break;
}

var G__29840 = cljs.core.next.call(null,seq__29778__$1);
var G__29841 = null;
var G__29842 = (0);
var G__29843 = (0);
seq__29778 = G__29840;
chunk__29779 = G__29841;
count__29780 = G__29842;
i__29781 = G__29843;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29848_29852 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29849_29853 = null;
var count__29850_29854 = (0);
var i__29851_29855 = (0);
while(true){
if((i__29851_29855 < count__29850_29854)){
var ns_29856 = cljs.core._nth.call(null,chunk__29849_29853,i__29851_29855);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29856);

var G__29857 = seq__29848_29852;
var G__29858 = chunk__29849_29853;
var G__29859 = count__29850_29854;
var G__29860 = (i__29851_29855 + (1));
seq__29848_29852 = G__29857;
chunk__29849_29853 = G__29858;
count__29850_29854 = G__29859;
i__29851_29855 = G__29860;
continue;
} else {
var temp__4425__auto___29861 = cljs.core.seq.call(null,seq__29848_29852);
if(temp__4425__auto___29861){
var seq__29848_29862__$1 = temp__4425__auto___29861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29848_29862__$1)){
var c__17637__auto___29863 = cljs.core.chunk_first.call(null,seq__29848_29862__$1);
var G__29864 = cljs.core.chunk_rest.call(null,seq__29848_29862__$1);
var G__29865 = c__17637__auto___29863;
var G__29866 = cljs.core.count.call(null,c__17637__auto___29863);
var G__29867 = (0);
seq__29848_29852 = G__29864;
chunk__29849_29853 = G__29865;
count__29850_29854 = G__29866;
i__29851_29855 = G__29867;
continue;
} else {
var ns_29868 = cljs.core.first.call(null,seq__29848_29862__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29868);

var G__29869 = cljs.core.next.call(null,seq__29848_29862__$1);
var G__29870 = null;
var G__29871 = (0);
var G__29872 = (0);
seq__29848_29852 = G__29869;
chunk__29849_29853 = G__29870;
count__29850_29854 = G__29871;
i__29851_29855 = G__29872;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16834__auto__ = goog.require__;
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29873__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29874__i = 0, G__29874__a = new Array(arguments.length -  0);
while (G__29874__i < G__29874__a.length) {G__29874__a[G__29874__i] = arguments[G__29874__i + 0]; ++G__29874__i;}
  args = new cljs.core.IndexedSeq(G__29874__a,0);
} 
return G__29873__delegate.call(this,args);};
G__29873.cljs$lang$maxFixedArity = 0;
G__29873.cljs$lang$applyTo = (function (arglist__29875){
var args = cljs.core.seq(arglist__29875);
return G__29873__delegate(args);
});
G__29873.cljs$core$IFn$_invoke$arity$variadic = G__29873__delegate;
return G__29873;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29877 = cljs.core._EQ_;
var expr__29878 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29877.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29878))){
var path_parts = ((function (pred__29877,expr__29878){
return (function (p1__29876_SHARP_){
return clojure.string.split.call(null,p1__29876_SHARP_,/[\/\\]/);
});})(pred__29877,expr__29878))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29877,expr__29878){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29880){if((e29880 instanceof Error)){
var e = e29880;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29880;

}
}})());
});
;})(path_parts,sep,root,pred__29877,expr__29878))
} else {
if(cljs.core.truth_(pred__29877.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29878))){
return ((function (pred__29877,expr__29878){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29877,expr__29878){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29877,expr__29878))
);

return deferred.addErrback(((function (deferred,pred__29877,expr__29878){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29877,expr__29878))
);
});
;})(pred__29877,expr__29878))
} else {
return ((function (pred__29877,expr__29878){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29877,expr__29878))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29881,callback){
var map__29884 = p__29881;
var map__29884__$1 = ((((!((map__29884 == null)))?((((map__29884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29884):map__29884);
var file_msg = map__29884__$1;
var request_url = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29884,map__29884__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29884,map__29884__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__){
return (function (state_29908){
var state_val_29909 = (state_29908[(1)]);
if((state_val_29909 === (7))){
var inst_29904 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29910_29930 = state_29908__$1;
(statearr_29910_29930[(2)] = inst_29904);

(statearr_29910_29930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (1))){
var state_29908__$1 = state_29908;
var statearr_29911_29931 = state_29908__$1;
(statearr_29911_29931[(2)] = null);

(statearr_29911_29931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (4))){
var inst_29888 = (state_29908[(7)]);
var inst_29888__$1 = (state_29908[(2)]);
var state_29908__$1 = (function (){var statearr_29912 = state_29908;
(statearr_29912[(7)] = inst_29888__$1);

return statearr_29912;
})();
if(cljs.core.truth_(inst_29888__$1)){
var statearr_29913_29932 = state_29908__$1;
(statearr_29913_29932[(1)] = (5));

} else {
var statearr_29914_29933 = state_29908__$1;
(statearr_29914_29933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (6))){
var state_29908__$1 = state_29908;
var statearr_29915_29934 = state_29908__$1;
(statearr_29915_29934[(2)] = null);

(statearr_29915_29934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (3))){
var inst_29906 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29908__$1,inst_29906);
} else {
if((state_val_29909 === (2))){
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29908__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29909 === (11))){
var inst_29900 = (state_29908[(2)]);
var state_29908__$1 = (function (){var statearr_29916 = state_29908;
(statearr_29916[(8)] = inst_29900);

return statearr_29916;
})();
var statearr_29917_29935 = state_29908__$1;
(statearr_29917_29935[(2)] = null);

(statearr_29917_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (9))){
var inst_29894 = (state_29908[(9)]);
var inst_29892 = (state_29908[(10)]);
var inst_29896 = inst_29894.call(null,inst_29892);
var state_29908__$1 = state_29908;
var statearr_29918_29936 = state_29908__$1;
(statearr_29918_29936[(2)] = inst_29896);

(statearr_29918_29936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (5))){
var inst_29888 = (state_29908[(7)]);
var inst_29890 = figwheel.client.file_reloading.blocking_load.call(null,inst_29888);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29908__$1,(8),inst_29890);
} else {
if((state_val_29909 === (10))){
var inst_29892 = (state_29908[(10)]);
var inst_29898 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29892);
var state_29908__$1 = state_29908;
var statearr_29919_29937 = state_29908__$1;
(statearr_29919_29937[(2)] = inst_29898);

(statearr_29919_29937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (8))){
var inst_29888 = (state_29908[(7)]);
var inst_29894 = (state_29908[(9)]);
var inst_29892 = (state_29908[(2)]);
var inst_29893 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29894__$1 = cljs.core.get.call(null,inst_29893,inst_29888);
var state_29908__$1 = (function (){var statearr_29920 = state_29908;
(statearr_29920[(9)] = inst_29894__$1);

(statearr_29920[(10)] = inst_29892);

return statearr_29920;
})();
if(cljs.core.truth_(inst_29894__$1)){
var statearr_29921_29938 = state_29908__$1;
(statearr_29921_29938[(1)] = (9));

} else {
var statearr_29922_29939 = state_29908__$1;
(statearr_29922_29939[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20811__auto__))
;
return ((function (switch__20790__auto__,c__20811__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20791__auto__ = null;
var figwheel$client$file_reloading$state_machine__20791__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29926[(0)] = figwheel$client$file_reloading$state_machine__20791__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var figwheel$client$file_reloading$state_machine__20791__auto____1 = (function (state_29908){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object)){
var ex__20794__auto__ = e29927;
var statearr_29928_29940 = state_29908;
(statearr_29928_29940[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29941 = state_29908;
state_29908 = G__29941;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20791__auto__ = function(state_29908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20791__auto____1.call(this,state_29908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20791__auto____0;
figwheel$client$file_reloading$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20791__auto____1;
return figwheel$client$file_reloading$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__))
})();
var state__20813__auto__ = (function (){var statearr_29929 = f__20812__auto__.call(null);
(statearr_29929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__))
);

return c__20811__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29942,callback){
var map__29945 = p__29942;
var map__29945__$1 = ((((!((map__29945 == null)))?((((map__29945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29945):map__29945);
var file_msg = map__29945__$1;
var namespace = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29945,map__29945__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29945,map__29945__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29947){
var map__29950 = p__29947;
var map__29950__$1 = ((((!((map__29950 == null)))?((((map__29950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29950):map__29950);
var file_msg = map__29950__$1;
var namespace = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16822__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16822__auto__){
var or__16834__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
var or__16834__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16834__auto____$1)){
return or__16834__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16822__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29952,callback){
var map__29955 = p__29952;
var map__29955__$1 = ((((!((map__29955 == null)))?((((map__29955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29955):map__29955);
var file_msg = map__29955__$1;
var request_url = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20811__auto___30043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___30043,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___30043,out){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (1))){
var inst_30003 = cljs.core.nth.call(null,files,(0),null);
var inst_30004 = cljs.core.nthnext.call(null,files,(1));
var inst_30005 = files;
var state_30025__$1 = (function (){var statearr_30027 = state_30025;
(statearr_30027[(7)] = inst_30004);

(statearr_30027[(8)] = inst_30005);

(statearr_30027[(9)] = inst_30003);

return statearr_30027;
})();
var statearr_30028_30044 = state_30025__$1;
(statearr_30028_30044[(2)] = null);

(statearr_30028_30044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (2))){
var inst_30005 = (state_30025[(8)]);
var inst_30008 = (state_30025[(10)]);
var inst_30008__$1 = cljs.core.nth.call(null,inst_30005,(0),null);
var inst_30009 = cljs.core.nthnext.call(null,inst_30005,(1));
var inst_30010 = (inst_30008__$1 == null);
var inst_30011 = cljs.core.not.call(null,inst_30010);
var state_30025__$1 = (function (){var statearr_30029 = state_30025;
(statearr_30029[(10)] = inst_30008__$1);

(statearr_30029[(11)] = inst_30009);

return statearr_30029;
})();
if(inst_30011){
var statearr_30030_30045 = state_30025__$1;
(statearr_30030_30045[(1)] = (4));

} else {
var statearr_30031_30046 = state_30025__$1;
(statearr_30031_30046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (4))){
var inst_30008 = (state_30025[(10)]);
var inst_30013 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30008);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(7),inst_30013);
} else {
if((state_val_30026 === (5))){
var inst_30019 = cljs.core.async.close_BANG_.call(null,out);
var state_30025__$1 = state_30025;
var statearr_30032_30047 = state_30025__$1;
(statearr_30032_30047[(2)] = inst_30019);

(statearr_30032_30047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30033_30048 = state_30025__$1;
(statearr_30033_30048[(2)] = inst_30021);

(statearr_30033_30048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (7))){
var inst_30009 = (state_30025[(11)]);
var inst_30015 = (state_30025[(2)]);
var inst_30016 = cljs.core.async.put_BANG_.call(null,out,inst_30015);
var inst_30005 = inst_30009;
var state_30025__$1 = (function (){var statearr_30034 = state_30025;
(statearr_30034[(12)] = inst_30016);

(statearr_30034[(8)] = inst_30005);

return statearr_30034;
})();
var statearr_30035_30049 = state_30025__$1;
(statearr_30035_30049[(2)] = null);

(statearr_30035_30049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20811__auto___30043,out))
;
return ((function (switch__20790__auto__,c__20811__auto___30043,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto____0 = (function (){
var statearr_30039 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30039[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto__);

(statearr_30039[(1)] = (1));

return statearr_30039;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto____1 = (function (state_30025){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e30040){if((e30040 instanceof Object)){
var ex__20794__auto__ = e30040;
var statearr_30041_30050 = state_30025;
(statearr_30041_30050[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30051 = state_30025;
state_30025 = G__30051;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___30043,out))
})();
var state__20813__auto__ = (function (){var statearr_30042 = f__20812__auto__.call(null);
(statearr_30042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___30043);

return statearr_30042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___30043,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30052,opts){
var map__30056 = p__30052;
var map__30056__$1 = ((((!((map__30056 == null)))?((((map__30056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);
var eval_body__$1 = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16822__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16822__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16822__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30058){var e = e30058;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30059_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30059_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30064){
var vec__30065 = p__30064;
var k = cljs.core.nth.call(null,vec__30065,(0),null);
var v = cljs.core.nth.call(null,vec__30065,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30066){
var vec__30067 = p__30066;
var k = cljs.core.nth.call(null,vec__30067,(0),null);
var v = cljs.core.nth.call(null,vec__30067,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30071,p__30072){
var map__30319 = p__30071;
var map__30319__$1 = ((((!((map__30319 == null)))?((((map__30319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30319):map__30319);
var opts = map__30319__$1;
var before_jsload = cljs.core.get.call(null,map__30319__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30319__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30319__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30320 = p__30072;
var map__30320__$1 = ((((!((map__30320 == null)))?((((map__30320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30320):map__30320);
var msg = map__30320__$1;
var files = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30473){
var state_val_30474 = (state_30473[(1)]);
if((state_val_30474 === (7))){
var inst_30335 = (state_30473[(7)]);
var inst_30337 = (state_30473[(8)]);
var inst_30336 = (state_30473[(9)]);
var inst_30334 = (state_30473[(10)]);
var inst_30342 = cljs.core._nth.call(null,inst_30335,inst_30337);
var inst_30343 = figwheel.client.file_reloading.eval_body.call(null,inst_30342,opts);
var inst_30344 = (inst_30337 + (1));
var tmp30475 = inst_30335;
var tmp30476 = inst_30336;
var tmp30477 = inst_30334;
var inst_30334__$1 = tmp30477;
var inst_30335__$1 = tmp30475;
var inst_30336__$1 = tmp30476;
var inst_30337__$1 = inst_30344;
var state_30473__$1 = (function (){var statearr_30478 = state_30473;
(statearr_30478[(7)] = inst_30335__$1);

(statearr_30478[(8)] = inst_30337__$1);

(statearr_30478[(11)] = inst_30343);

(statearr_30478[(9)] = inst_30336__$1);

(statearr_30478[(10)] = inst_30334__$1);

return statearr_30478;
})();
var statearr_30479_30565 = state_30473__$1;
(statearr_30479_30565[(2)] = null);

(statearr_30479_30565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (20))){
var inst_30377 = (state_30473[(12)]);
var inst_30385 = figwheel.client.file_reloading.sort_files.call(null,inst_30377);
var state_30473__$1 = state_30473;
var statearr_30480_30566 = state_30473__$1;
(statearr_30480_30566[(2)] = inst_30385);

(statearr_30480_30566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (27))){
var state_30473__$1 = state_30473;
var statearr_30481_30567 = state_30473__$1;
(statearr_30481_30567[(2)] = null);

(statearr_30481_30567[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (1))){
var inst_30326 = (state_30473[(13)]);
var inst_30323 = before_jsload.call(null,files);
var inst_30324 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30325 = (function (){return ((function (inst_30326,inst_30323,inst_30324,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30068_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30068_SHARP_);
});
;})(inst_30326,inst_30323,inst_30324,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30326__$1 = cljs.core.filter.call(null,inst_30325,files);
var inst_30327 = cljs.core.not_empty.call(null,inst_30326__$1);
var state_30473__$1 = (function (){var statearr_30482 = state_30473;
(statearr_30482[(13)] = inst_30326__$1);

(statearr_30482[(14)] = inst_30323);

(statearr_30482[(15)] = inst_30324);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30327)){
var statearr_30483_30568 = state_30473__$1;
(statearr_30483_30568[(1)] = (2));

} else {
var statearr_30484_30569 = state_30473__$1;
(statearr_30484_30569[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (24))){
var state_30473__$1 = state_30473;
var statearr_30485_30570 = state_30473__$1;
(statearr_30485_30570[(2)] = null);

(statearr_30485_30570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (39))){
var inst_30427 = (state_30473[(16)]);
var state_30473__$1 = state_30473;
var statearr_30486_30571 = state_30473__$1;
(statearr_30486_30571[(2)] = inst_30427);

(statearr_30486_30571[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (46))){
var inst_30468 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30487_30572 = state_30473__$1;
(statearr_30487_30572[(2)] = inst_30468);

(statearr_30487_30572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (4))){
var inst_30371 = (state_30473[(2)]);
var inst_30372 = cljs.core.List.EMPTY;
var inst_30373 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30372);
var inst_30374 = (function (){return ((function (inst_30371,inst_30372,inst_30373,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30069_SHARP_){
var and__16822__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30069_SHARP_);
if(cljs.core.truth_(and__16822__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30069_SHARP_));
} else {
return and__16822__auto__;
}
});
;})(inst_30371,inst_30372,inst_30373,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30375 = cljs.core.filter.call(null,inst_30374,files);
var inst_30376 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30377 = cljs.core.concat.call(null,inst_30375,inst_30376);
var state_30473__$1 = (function (){var statearr_30488 = state_30473;
(statearr_30488[(12)] = inst_30377);

(statearr_30488[(17)] = inst_30371);

(statearr_30488[(18)] = inst_30373);

return statearr_30488;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30489_30573 = state_30473__$1;
(statearr_30489_30573[(1)] = (16));

} else {
var statearr_30490_30574 = state_30473__$1;
(statearr_30490_30574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (15))){
var inst_30361 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30491_30575 = state_30473__$1;
(statearr_30491_30575[(2)] = inst_30361);

(statearr_30491_30575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (21))){
var inst_30387 = (state_30473[(19)]);
var inst_30387__$1 = (state_30473[(2)]);
var inst_30388 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30387__$1);
var state_30473__$1 = (function (){var statearr_30492 = state_30473;
(statearr_30492[(19)] = inst_30387__$1);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30473__$1,(22),inst_30388);
} else {
if((state_val_30474 === (31))){
var inst_30471 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30473__$1,inst_30471);
} else {
if((state_val_30474 === (32))){
var inst_30427 = (state_30473[(16)]);
var inst_30432 = inst_30427.cljs$lang$protocol_mask$partition0$;
var inst_30433 = (inst_30432 & (64));
var inst_30434 = inst_30427.cljs$core$ISeq$;
var inst_30435 = (inst_30433) || (inst_30434);
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30435)){
var statearr_30493_30576 = state_30473__$1;
(statearr_30493_30576[(1)] = (35));

} else {
var statearr_30494_30577 = state_30473__$1;
(statearr_30494_30577[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (40))){
var inst_30448 = (state_30473[(20)]);
var inst_30447 = (state_30473[(2)]);
var inst_30448__$1 = cljs.core.get.call(null,inst_30447,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30449 = cljs.core.get.call(null,inst_30447,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30450 = cljs.core.not_empty.call(null,inst_30448__$1);
var state_30473__$1 = (function (){var statearr_30495 = state_30473;
(statearr_30495[(21)] = inst_30449);

(statearr_30495[(20)] = inst_30448__$1);

return statearr_30495;
})();
if(cljs.core.truth_(inst_30450)){
var statearr_30496_30578 = state_30473__$1;
(statearr_30496_30578[(1)] = (41));

} else {
var statearr_30497_30579 = state_30473__$1;
(statearr_30497_30579[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (33))){
var state_30473__$1 = state_30473;
var statearr_30498_30580 = state_30473__$1;
(statearr_30498_30580[(2)] = false);

(statearr_30498_30580[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (13))){
var inst_30347 = (state_30473[(22)]);
var inst_30351 = cljs.core.chunk_first.call(null,inst_30347);
var inst_30352 = cljs.core.chunk_rest.call(null,inst_30347);
var inst_30353 = cljs.core.count.call(null,inst_30351);
var inst_30334 = inst_30352;
var inst_30335 = inst_30351;
var inst_30336 = inst_30353;
var inst_30337 = (0);
var state_30473__$1 = (function (){var statearr_30499 = state_30473;
(statearr_30499[(7)] = inst_30335);

(statearr_30499[(8)] = inst_30337);

(statearr_30499[(9)] = inst_30336);

(statearr_30499[(10)] = inst_30334);

return statearr_30499;
})();
var statearr_30500_30581 = state_30473__$1;
(statearr_30500_30581[(2)] = null);

(statearr_30500_30581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (22))){
var inst_30387 = (state_30473[(19)]);
var inst_30390 = (state_30473[(23)]);
var inst_30391 = (state_30473[(24)]);
var inst_30395 = (state_30473[(25)]);
var inst_30390__$1 = (state_30473[(2)]);
var inst_30391__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30390__$1);
var inst_30392 = (function (){var all_files = inst_30387;
var res_SINGLEQUOTE_ = inst_30390__$1;
var res = inst_30391__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30387,inst_30390,inst_30391,inst_30395,inst_30390__$1,inst_30391__$1,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30070_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30070_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30387,inst_30390,inst_30391,inst_30395,inst_30390__$1,inst_30391__$1,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30393 = cljs.core.filter.call(null,inst_30392,inst_30390__$1);
var inst_30394 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30395__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30394);
var inst_30396 = cljs.core.not_empty.call(null,inst_30395__$1);
var state_30473__$1 = (function (){var statearr_30501 = state_30473;
(statearr_30501[(26)] = inst_30393);

(statearr_30501[(23)] = inst_30390__$1);

(statearr_30501[(24)] = inst_30391__$1);

(statearr_30501[(25)] = inst_30395__$1);

return statearr_30501;
})();
if(cljs.core.truth_(inst_30396)){
var statearr_30502_30582 = state_30473__$1;
(statearr_30502_30582[(1)] = (23));

} else {
var statearr_30503_30583 = state_30473__$1;
(statearr_30503_30583[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (36))){
var state_30473__$1 = state_30473;
var statearr_30504_30584 = state_30473__$1;
(statearr_30504_30584[(2)] = false);

(statearr_30504_30584[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (41))){
var inst_30448 = (state_30473[(20)]);
var inst_30452 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30453 = cljs.core.map.call(null,inst_30452,inst_30448);
var inst_30454 = cljs.core.pr_str.call(null,inst_30453);
var inst_30455 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30454)].join('');
var inst_30456 = figwheel.client.utils.log.call(null,inst_30455);
var state_30473__$1 = state_30473;
var statearr_30505_30585 = state_30473__$1;
(statearr_30505_30585[(2)] = inst_30456);

(statearr_30505_30585[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (43))){
var inst_30449 = (state_30473[(21)]);
var inst_30459 = (state_30473[(2)]);
var inst_30460 = cljs.core.not_empty.call(null,inst_30449);
var state_30473__$1 = (function (){var statearr_30506 = state_30473;
(statearr_30506[(27)] = inst_30459);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30460)){
var statearr_30507_30586 = state_30473__$1;
(statearr_30507_30586[(1)] = (44));

} else {
var statearr_30508_30587 = state_30473__$1;
(statearr_30508_30587[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (29))){
var inst_30387 = (state_30473[(19)]);
var inst_30393 = (state_30473[(26)]);
var inst_30390 = (state_30473[(23)]);
var inst_30427 = (state_30473[(16)]);
var inst_30391 = (state_30473[(24)]);
var inst_30395 = (state_30473[(25)]);
var inst_30423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30426 = (function (){var all_files = inst_30387;
var res_SINGLEQUOTE_ = inst_30390;
var res = inst_30391;
var files_not_loaded = inst_30393;
var dependencies_that_loaded = inst_30395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30427,inst_30391,inst_30395,inst_30423,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30425){
var map__30509 = p__30425;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var namespace = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30427,inst_30391,inst_30395,inst_30423,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30427__$1 = cljs.core.group_by.call(null,inst_30426,inst_30393);
var inst_30429 = (inst_30427__$1 == null);
var inst_30430 = cljs.core.not.call(null,inst_30429);
var state_30473__$1 = (function (){var statearr_30511 = state_30473;
(statearr_30511[(28)] = inst_30423);

(statearr_30511[(16)] = inst_30427__$1);

return statearr_30511;
})();
if(inst_30430){
var statearr_30512_30588 = state_30473__$1;
(statearr_30512_30588[(1)] = (32));

} else {
var statearr_30513_30589 = state_30473__$1;
(statearr_30513_30589[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (44))){
var inst_30449 = (state_30473[(21)]);
var inst_30462 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30449);
var inst_30463 = cljs.core.pr_str.call(null,inst_30462);
var inst_30464 = [cljs.core.str("not required: "),cljs.core.str(inst_30463)].join('');
var inst_30465 = figwheel.client.utils.log.call(null,inst_30464);
var state_30473__$1 = state_30473;
var statearr_30514_30590 = state_30473__$1;
(statearr_30514_30590[(2)] = inst_30465);

(statearr_30514_30590[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (6))){
var inst_30368 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30515_30591 = state_30473__$1;
(statearr_30515_30591[(2)] = inst_30368);

(statearr_30515_30591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (28))){
var inst_30393 = (state_30473[(26)]);
var inst_30420 = (state_30473[(2)]);
var inst_30421 = cljs.core.not_empty.call(null,inst_30393);
var state_30473__$1 = (function (){var statearr_30516 = state_30473;
(statearr_30516[(29)] = inst_30420);

return statearr_30516;
})();
if(cljs.core.truth_(inst_30421)){
var statearr_30517_30592 = state_30473__$1;
(statearr_30517_30592[(1)] = (29));

} else {
var statearr_30518_30593 = state_30473__$1;
(statearr_30518_30593[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (25))){
var inst_30391 = (state_30473[(24)]);
var inst_30407 = (state_30473[(2)]);
var inst_30408 = cljs.core.not_empty.call(null,inst_30391);
var state_30473__$1 = (function (){var statearr_30519 = state_30473;
(statearr_30519[(30)] = inst_30407);

return statearr_30519;
})();
if(cljs.core.truth_(inst_30408)){
var statearr_30520_30594 = state_30473__$1;
(statearr_30520_30594[(1)] = (26));

} else {
var statearr_30521_30595 = state_30473__$1;
(statearr_30521_30595[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (34))){
var inst_30442 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30442)){
var statearr_30522_30596 = state_30473__$1;
(statearr_30522_30596[(1)] = (38));

} else {
var statearr_30523_30597 = state_30473__$1;
(statearr_30523_30597[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (17))){
var state_30473__$1 = state_30473;
var statearr_30524_30598 = state_30473__$1;
(statearr_30524_30598[(2)] = recompile_dependents);

(statearr_30524_30598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (3))){
var state_30473__$1 = state_30473;
var statearr_30525_30599 = state_30473__$1;
(statearr_30525_30599[(2)] = null);

(statearr_30525_30599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (12))){
var inst_30364 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30526_30600 = state_30473__$1;
(statearr_30526_30600[(2)] = inst_30364);

(statearr_30526_30600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (2))){
var inst_30326 = (state_30473[(13)]);
var inst_30333 = cljs.core.seq.call(null,inst_30326);
var inst_30334 = inst_30333;
var inst_30335 = null;
var inst_30336 = (0);
var inst_30337 = (0);
var state_30473__$1 = (function (){var statearr_30527 = state_30473;
(statearr_30527[(7)] = inst_30335);

(statearr_30527[(8)] = inst_30337);

(statearr_30527[(9)] = inst_30336);

(statearr_30527[(10)] = inst_30334);

return statearr_30527;
})();
var statearr_30528_30601 = state_30473__$1;
(statearr_30528_30601[(2)] = null);

(statearr_30528_30601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (23))){
var inst_30387 = (state_30473[(19)]);
var inst_30393 = (state_30473[(26)]);
var inst_30390 = (state_30473[(23)]);
var inst_30391 = (state_30473[(24)]);
var inst_30395 = (state_30473[(25)]);
var inst_30398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30400 = (function (){var all_files = inst_30387;
var res_SINGLEQUOTE_ = inst_30390;
var res = inst_30391;
var files_not_loaded = inst_30393;
var dependencies_that_loaded = inst_30395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30391,inst_30395,inst_30398,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30399){
var map__30529 = p__30399;
var map__30529__$1 = ((((!((map__30529 == null)))?((((map__30529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);
var request_url = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30391,inst_30395,inst_30398,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30401 = cljs.core.reverse.call(null,inst_30395);
var inst_30402 = cljs.core.map.call(null,inst_30400,inst_30401);
var inst_30403 = cljs.core.pr_str.call(null,inst_30402);
var inst_30404 = figwheel.client.utils.log.call(null,inst_30403);
var state_30473__$1 = (function (){var statearr_30531 = state_30473;
(statearr_30531[(31)] = inst_30398);

return statearr_30531;
})();
var statearr_30532_30602 = state_30473__$1;
(statearr_30532_30602[(2)] = inst_30404);

(statearr_30532_30602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (35))){
var state_30473__$1 = state_30473;
var statearr_30533_30603 = state_30473__$1;
(statearr_30533_30603[(2)] = true);

(statearr_30533_30603[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (19))){
var inst_30377 = (state_30473[(12)]);
var inst_30383 = figwheel.client.file_reloading.expand_files.call(null,inst_30377);
var state_30473__$1 = state_30473;
var statearr_30534_30604 = state_30473__$1;
(statearr_30534_30604[(2)] = inst_30383);

(statearr_30534_30604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (11))){
var state_30473__$1 = state_30473;
var statearr_30535_30605 = state_30473__$1;
(statearr_30535_30605[(2)] = null);

(statearr_30535_30605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (9))){
var inst_30366 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30536_30606 = state_30473__$1;
(statearr_30536_30606[(2)] = inst_30366);

(statearr_30536_30606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (5))){
var inst_30337 = (state_30473[(8)]);
var inst_30336 = (state_30473[(9)]);
var inst_30339 = (inst_30337 < inst_30336);
var inst_30340 = inst_30339;
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30340)){
var statearr_30537_30607 = state_30473__$1;
(statearr_30537_30607[(1)] = (7));

} else {
var statearr_30538_30608 = state_30473__$1;
(statearr_30538_30608[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (14))){
var inst_30347 = (state_30473[(22)]);
var inst_30356 = cljs.core.first.call(null,inst_30347);
var inst_30357 = figwheel.client.file_reloading.eval_body.call(null,inst_30356,opts);
var inst_30358 = cljs.core.next.call(null,inst_30347);
var inst_30334 = inst_30358;
var inst_30335 = null;
var inst_30336 = (0);
var inst_30337 = (0);
var state_30473__$1 = (function (){var statearr_30539 = state_30473;
(statearr_30539[(7)] = inst_30335);

(statearr_30539[(8)] = inst_30337);

(statearr_30539[(32)] = inst_30357);

(statearr_30539[(9)] = inst_30336);

(statearr_30539[(10)] = inst_30334);

return statearr_30539;
})();
var statearr_30540_30609 = state_30473__$1;
(statearr_30540_30609[(2)] = null);

(statearr_30540_30609[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (45))){
var state_30473__$1 = state_30473;
var statearr_30541_30610 = state_30473__$1;
(statearr_30541_30610[(2)] = null);

(statearr_30541_30610[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (26))){
var inst_30387 = (state_30473[(19)]);
var inst_30393 = (state_30473[(26)]);
var inst_30390 = (state_30473[(23)]);
var inst_30391 = (state_30473[(24)]);
var inst_30395 = (state_30473[(25)]);
var inst_30410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30412 = (function (){var all_files = inst_30387;
var res_SINGLEQUOTE_ = inst_30390;
var res = inst_30391;
var files_not_loaded = inst_30393;
var dependencies_that_loaded = inst_30395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30391,inst_30395,inst_30410,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30411){
var map__30542 = p__30411;
var map__30542__$1 = ((((!((map__30542 == null)))?((((map__30542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30542):map__30542);
var namespace = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30391,inst_30395,inst_30410,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30413 = cljs.core.map.call(null,inst_30412,inst_30391);
var inst_30414 = cljs.core.pr_str.call(null,inst_30413);
var inst_30415 = figwheel.client.utils.log.call(null,inst_30414);
var inst_30416 = (function (){var all_files = inst_30387;
var res_SINGLEQUOTE_ = inst_30390;
var res = inst_30391;
var files_not_loaded = inst_30393;
var dependencies_that_loaded = inst_30395;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30391,inst_30395,inst_30410,inst_30412,inst_30413,inst_30414,inst_30415,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30387,inst_30393,inst_30390,inst_30391,inst_30395,inst_30410,inst_30412,inst_30413,inst_30414,inst_30415,state_val_30474,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30417 = setTimeout(inst_30416,(10));
var state_30473__$1 = (function (){var statearr_30544 = state_30473;
(statearr_30544[(33)] = inst_30415);

(statearr_30544[(34)] = inst_30410);

return statearr_30544;
})();
var statearr_30545_30611 = state_30473__$1;
(statearr_30545_30611[(2)] = inst_30417);

(statearr_30545_30611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (16))){
var state_30473__$1 = state_30473;
var statearr_30546_30612 = state_30473__$1;
(statearr_30546_30612[(2)] = reload_dependents);

(statearr_30546_30612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (38))){
var inst_30427 = (state_30473[(16)]);
var inst_30444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30427);
var state_30473__$1 = state_30473;
var statearr_30547_30613 = state_30473__$1;
(statearr_30547_30613[(2)] = inst_30444);

(statearr_30547_30613[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (30))){
var state_30473__$1 = state_30473;
var statearr_30548_30614 = state_30473__$1;
(statearr_30548_30614[(2)] = null);

(statearr_30548_30614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (10))){
var inst_30347 = (state_30473[(22)]);
var inst_30349 = cljs.core.chunked_seq_QMARK_.call(null,inst_30347);
var state_30473__$1 = state_30473;
if(inst_30349){
var statearr_30549_30615 = state_30473__$1;
(statearr_30549_30615[(1)] = (13));

} else {
var statearr_30550_30616 = state_30473__$1;
(statearr_30550_30616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (18))){
var inst_30381 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30381)){
var statearr_30551_30617 = state_30473__$1;
(statearr_30551_30617[(1)] = (19));

} else {
var statearr_30552_30618 = state_30473__$1;
(statearr_30552_30618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (42))){
var state_30473__$1 = state_30473;
var statearr_30553_30619 = state_30473__$1;
(statearr_30553_30619[(2)] = null);

(statearr_30553_30619[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (37))){
var inst_30439 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30554_30620 = state_30473__$1;
(statearr_30554_30620[(2)] = inst_30439);

(statearr_30554_30620[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (8))){
var inst_30334 = (state_30473[(10)]);
var inst_30347 = (state_30473[(22)]);
var inst_30347__$1 = cljs.core.seq.call(null,inst_30334);
var state_30473__$1 = (function (){var statearr_30555 = state_30473;
(statearr_30555[(22)] = inst_30347__$1);

return statearr_30555;
})();
if(inst_30347__$1){
var statearr_30556_30621 = state_30473__$1;
(statearr_30556_30621[(1)] = (10));

} else {
var statearr_30557_30622 = state_30473__$1;
(statearr_30557_30622[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20790__auto__,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto____0 = (function (){
var statearr_30561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30561[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto__);

(statearr_30561[(1)] = (1));

return statearr_30561;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto____1 = (function (state_30473){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_30473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e30562){if((e30562 instanceof Object)){
var ex__20794__auto__ = e30562;
var statearr_30563_30623 = state_30473;
(statearr_30563_30623[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30624 = state_30473;
state_30473 = G__30624;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto__ = function(state_30473){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto____1.call(this,state_30473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20813__auto__ = (function (){var statearr_30564 = f__20812__auto__.call(null);
(statearr_30564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__,map__30319,map__30319__$1,opts,before_jsload,on_jsload,reload_dependents,map__30320,map__30320__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20811__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30627,link){
var map__30630 = p__30627;
var map__30630__$1 = ((((!((map__30630 == null)))?((((map__30630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30630):map__30630);
var file = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30630,map__30630__$1,file){
return (function (p1__30625_SHARP_,p2__30626_SHARP_){
if(cljs.core._EQ_.call(null,p1__30625_SHARP_,p2__30626_SHARP_)){
return p1__30625_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30630,map__30630__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30636){
var map__30637 = p__30636;
var map__30637__$1 = ((((!((map__30637 == null)))?((((map__30637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30637):map__30637);
var match_length = cljs.core.get.call(null,map__30637__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30637__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30632_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30632_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30639 = [];
var len__17892__auto___30642 = arguments.length;
var i__17893__auto___30643 = (0);
while(true){
if((i__17893__auto___30643 < len__17892__auto___30642)){
args30639.push((arguments[i__17893__auto___30643]));

var G__30644 = (i__17893__auto___30643 + (1));
i__17893__auto___30643 = G__30644;
continue;
} else {
}
break;
}

var G__30641 = args30639.length;
switch (G__30641) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30639.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30646_SHARP_,p2__30647_SHARP_){
return cljs.core.assoc.call(null,p1__30646_SHARP_,cljs.core.get.call(null,p2__30647_SHARP_,key),p2__30647_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30648){
var map__30651 = p__30648;
var map__30651__$1 = ((((!((map__30651 == null)))?((((map__30651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30651):map__30651);
var f_data = map__30651__$1;
var file = cljs.core.get.call(null,map__30651__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30653,files_msg){
var map__30660 = p__30653;
var map__30660__$1 = ((((!((map__30660 == null)))?((((map__30660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30660):map__30660);
var opts = map__30660__$1;
var on_cssload = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30662_30666 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30663_30667 = null;
var count__30664_30668 = (0);
var i__30665_30669 = (0);
while(true){
if((i__30665_30669 < count__30664_30668)){
var f_30670 = cljs.core._nth.call(null,chunk__30663_30667,i__30665_30669);
figwheel.client.file_reloading.reload_css_file.call(null,f_30670);

var G__30671 = seq__30662_30666;
var G__30672 = chunk__30663_30667;
var G__30673 = count__30664_30668;
var G__30674 = (i__30665_30669 + (1));
seq__30662_30666 = G__30671;
chunk__30663_30667 = G__30672;
count__30664_30668 = G__30673;
i__30665_30669 = G__30674;
continue;
} else {
var temp__4425__auto___30675 = cljs.core.seq.call(null,seq__30662_30666);
if(temp__4425__auto___30675){
var seq__30662_30676__$1 = temp__4425__auto___30675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30662_30676__$1)){
var c__17637__auto___30677 = cljs.core.chunk_first.call(null,seq__30662_30676__$1);
var G__30678 = cljs.core.chunk_rest.call(null,seq__30662_30676__$1);
var G__30679 = c__17637__auto___30677;
var G__30680 = cljs.core.count.call(null,c__17637__auto___30677);
var G__30681 = (0);
seq__30662_30666 = G__30678;
chunk__30663_30667 = G__30679;
count__30664_30668 = G__30680;
i__30665_30669 = G__30681;
continue;
} else {
var f_30682 = cljs.core.first.call(null,seq__30662_30676__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30682);

var G__30683 = cljs.core.next.call(null,seq__30662_30676__$1);
var G__30684 = null;
var G__30685 = (0);
var G__30686 = (0);
seq__30662_30666 = G__30683;
chunk__30663_30667 = G__30684;
count__30664_30668 = G__30685;
i__30665_30669 = G__30686;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30660,map__30660__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30660,map__30660__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map