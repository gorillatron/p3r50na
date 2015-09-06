// Compiled by ClojureScript 1.7.48 {}
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
var or__19571__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19571__auto__){
return or__19571__auto__;
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
var or__19571__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30428_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30428_SHARP_));
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
var seq__30433 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30434 = null;
var count__30435 = (0);
var i__30436 = (0);
while(true){
if((i__30436 < count__30435)){
var n = cljs.core._nth.call(null,chunk__30434,i__30436);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30437 = seq__30433;
var G__30438 = chunk__30434;
var G__30439 = count__30435;
var G__30440 = (i__30436 + (1));
seq__30433 = G__30437;
chunk__30434 = G__30438;
count__30435 = G__30439;
i__30436 = G__30440;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30433);
if(temp__4425__auto__){
var seq__30433__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30433__$1)){
var c__20355__auto__ = cljs.core.chunk_first.call(null,seq__30433__$1);
var G__30441 = cljs.core.chunk_rest.call(null,seq__30433__$1);
var G__30442 = c__20355__auto__;
var G__30443 = cljs.core.count.call(null,c__20355__auto__);
var G__30444 = (0);
seq__30433 = G__30441;
chunk__30434 = G__30442;
count__30435 = G__30443;
i__30436 = G__30444;
continue;
} else {
var n = cljs.core.first.call(null,seq__30433__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30445 = cljs.core.next.call(null,seq__30433__$1);
var G__30446 = null;
var G__30447 = (0);
var G__30448 = (0);
seq__30433 = G__30445;
chunk__30434 = G__30446;
count__30435 = G__30447;
i__30436 = G__30448;
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

var seq__30487_30494 = cljs.core.seq.call(null,deps);
var chunk__30488_30495 = null;
var count__30489_30496 = (0);
var i__30490_30497 = (0);
while(true){
if((i__30490_30497 < count__30489_30496)){
var dep_30498 = cljs.core._nth.call(null,chunk__30488_30495,i__30490_30497);
topo_sort_helper_STAR_.call(null,dep_30498,(depth + (1)),state);

var G__30499 = seq__30487_30494;
var G__30500 = chunk__30488_30495;
var G__30501 = count__30489_30496;
var G__30502 = (i__30490_30497 + (1));
seq__30487_30494 = G__30499;
chunk__30488_30495 = G__30500;
count__30489_30496 = G__30501;
i__30490_30497 = G__30502;
continue;
} else {
var temp__4425__auto___30503 = cljs.core.seq.call(null,seq__30487_30494);
if(temp__4425__auto___30503){
var seq__30487_30504__$1 = temp__4425__auto___30503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30487_30504__$1)){
var c__20355__auto___30505 = cljs.core.chunk_first.call(null,seq__30487_30504__$1);
var G__30506 = cljs.core.chunk_rest.call(null,seq__30487_30504__$1);
var G__30507 = c__20355__auto___30505;
var G__30508 = cljs.core.count.call(null,c__20355__auto___30505);
var G__30509 = (0);
seq__30487_30494 = G__30506;
chunk__30488_30495 = G__30507;
count__30489_30496 = G__30508;
i__30490_30497 = G__30509;
continue;
} else {
var dep_30510 = cljs.core.first.call(null,seq__30487_30504__$1);
topo_sort_helper_STAR_.call(null,dep_30510,(depth + (1)),state);

var G__30511 = cljs.core.next.call(null,seq__30487_30504__$1);
var G__30512 = null;
var G__30513 = (0);
var G__30514 = (0);
seq__30487_30494 = G__30511;
chunk__30488_30495 = G__30512;
count__30489_30496 = G__30513;
i__30490_30497 = G__30514;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30491){
var vec__30493 = p__30491;
var x = cljs.core.nth.call(null,vec__30493,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30493,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30493,x,xs,get_deps__$1){
return (function (p1__30449_SHARP_){
return clojure.set.difference.call(null,p1__30449_SHARP_,x);
});})(vec__30493,x,xs,get_deps__$1))
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
var seq__30527 = cljs.core.seq.call(null,provides);
var chunk__30528 = null;
var count__30529 = (0);
var i__30530 = (0);
while(true){
if((i__30530 < count__30529)){
var prov = cljs.core._nth.call(null,chunk__30528,i__30530);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30531_30539 = cljs.core.seq.call(null,requires);
var chunk__30532_30540 = null;
var count__30533_30541 = (0);
var i__30534_30542 = (0);
while(true){
if((i__30534_30542 < count__30533_30541)){
var req_30543 = cljs.core._nth.call(null,chunk__30532_30540,i__30534_30542);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30543,prov);

var G__30544 = seq__30531_30539;
var G__30545 = chunk__30532_30540;
var G__30546 = count__30533_30541;
var G__30547 = (i__30534_30542 + (1));
seq__30531_30539 = G__30544;
chunk__30532_30540 = G__30545;
count__30533_30541 = G__30546;
i__30534_30542 = G__30547;
continue;
} else {
var temp__4425__auto___30548 = cljs.core.seq.call(null,seq__30531_30539);
if(temp__4425__auto___30548){
var seq__30531_30549__$1 = temp__4425__auto___30548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30531_30549__$1)){
var c__20355__auto___30550 = cljs.core.chunk_first.call(null,seq__30531_30549__$1);
var G__30551 = cljs.core.chunk_rest.call(null,seq__30531_30549__$1);
var G__30552 = c__20355__auto___30550;
var G__30553 = cljs.core.count.call(null,c__20355__auto___30550);
var G__30554 = (0);
seq__30531_30539 = G__30551;
chunk__30532_30540 = G__30552;
count__30533_30541 = G__30553;
i__30534_30542 = G__30554;
continue;
} else {
var req_30555 = cljs.core.first.call(null,seq__30531_30549__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30555,prov);

var G__30556 = cljs.core.next.call(null,seq__30531_30549__$1);
var G__30557 = null;
var G__30558 = (0);
var G__30559 = (0);
seq__30531_30539 = G__30556;
chunk__30532_30540 = G__30557;
count__30533_30541 = G__30558;
i__30534_30542 = G__30559;
continue;
}
} else {
}
}
break;
}

var G__30560 = seq__30527;
var G__30561 = chunk__30528;
var G__30562 = count__30529;
var G__30563 = (i__30530 + (1));
seq__30527 = G__30560;
chunk__30528 = G__30561;
count__30529 = G__30562;
i__30530 = G__30563;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30527);
if(temp__4425__auto__){
var seq__30527__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30527__$1)){
var c__20355__auto__ = cljs.core.chunk_first.call(null,seq__30527__$1);
var G__30564 = cljs.core.chunk_rest.call(null,seq__30527__$1);
var G__30565 = c__20355__auto__;
var G__30566 = cljs.core.count.call(null,c__20355__auto__);
var G__30567 = (0);
seq__30527 = G__30564;
chunk__30528 = G__30565;
count__30529 = G__30566;
i__30530 = G__30567;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30527__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30535_30568 = cljs.core.seq.call(null,requires);
var chunk__30536_30569 = null;
var count__30537_30570 = (0);
var i__30538_30571 = (0);
while(true){
if((i__30538_30571 < count__30537_30570)){
var req_30572 = cljs.core._nth.call(null,chunk__30536_30569,i__30538_30571);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30572,prov);

var G__30573 = seq__30535_30568;
var G__30574 = chunk__30536_30569;
var G__30575 = count__30537_30570;
var G__30576 = (i__30538_30571 + (1));
seq__30535_30568 = G__30573;
chunk__30536_30569 = G__30574;
count__30537_30570 = G__30575;
i__30538_30571 = G__30576;
continue;
} else {
var temp__4425__auto___30577__$1 = cljs.core.seq.call(null,seq__30535_30568);
if(temp__4425__auto___30577__$1){
var seq__30535_30578__$1 = temp__4425__auto___30577__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30535_30578__$1)){
var c__20355__auto___30579 = cljs.core.chunk_first.call(null,seq__30535_30578__$1);
var G__30580 = cljs.core.chunk_rest.call(null,seq__30535_30578__$1);
var G__30581 = c__20355__auto___30579;
var G__30582 = cljs.core.count.call(null,c__20355__auto___30579);
var G__30583 = (0);
seq__30535_30568 = G__30580;
chunk__30536_30569 = G__30581;
count__30537_30570 = G__30582;
i__30538_30571 = G__30583;
continue;
} else {
var req_30584 = cljs.core.first.call(null,seq__30535_30578__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30584,prov);

var G__30585 = cljs.core.next.call(null,seq__30535_30578__$1);
var G__30586 = null;
var G__30587 = (0);
var G__30588 = (0);
seq__30535_30568 = G__30585;
chunk__30536_30569 = G__30586;
count__30537_30570 = G__30587;
i__30538_30571 = G__30588;
continue;
}
} else {
}
}
break;
}

var G__30589 = cljs.core.next.call(null,seq__30527__$1);
var G__30590 = null;
var G__30591 = (0);
var G__30592 = (0);
seq__30527 = G__30589;
chunk__30528 = G__30590;
count__30529 = G__30591;
i__30530 = G__30592;
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
var seq__30597_30601 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30598_30602 = null;
var count__30599_30603 = (0);
var i__30600_30604 = (0);
while(true){
if((i__30600_30604 < count__30599_30603)){
var ns_30605 = cljs.core._nth.call(null,chunk__30598_30602,i__30600_30604);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30605);

var G__30606 = seq__30597_30601;
var G__30607 = chunk__30598_30602;
var G__30608 = count__30599_30603;
var G__30609 = (i__30600_30604 + (1));
seq__30597_30601 = G__30606;
chunk__30598_30602 = G__30607;
count__30599_30603 = G__30608;
i__30600_30604 = G__30609;
continue;
} else {
var temp__4425__auto___30610 = cljs.core.seq.call(null,seq__30597_30601);
if(temp__4425__auto___30610){
var seq__30597_30611__$1 = temp__4425__auto___30610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30597_30611__$1)){
var c__20355__auto___30612 = cljs.core.chunk_first.call(null,seq__30597_30611__$1);
var G__30613 = cljs.core.chunk_rest.call(null,seq__30597_30611__$1);
var G__30614 = c__20355__auto___30612;
var G__30615 = cljs.core.count.call(null,c__20355__auto___30612);
var G__30616 = (0);
seq__30597_30601 = G__30613;
chunk__30598_30602 = G__30614;
count__30599_30603 = G__30615;
i__30600_30604 = G__30616;
continue;
} else {
var ns_30617 = cljs.core.first.call(null,seq__30597_30611__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30617);

var G__30618 = cljs.core.next.call(null,seq__30597_30611__$1);
var G__30619 = null;
var G__30620 = (0);
var G__30621 = (0);
seq__30597_30601 = G__30618;
chunk__30598_30602 = G__30619;
count__30599_30603 = G__30620;
i__30600_30604 = G__30621;
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
 * in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19571__auto__ = goog.require__;
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
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
var G__30622__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30623__i = 0, G__30623__a = new Array(arguments.length -  0);
while (G__30623__i < G__30623__a.length) {G__30623__a[G__30623__i] = arguments[G__30623__i + 0]; ++G__30623__i;}
  args = new cljs.core.IndexedSeq(G__30623__a,0);
} 
return G__30622__delegate.call(this,args);};
G__30622.cljs$lang$maxFixedArity = 0;
G__30622.cljs$lang$applyTo = (function (arglist__30624){
var args = cljs.core.seq(arglist__30624);
return G__30622__delegate(args);
});
G__30622.cljs$core$IFn$_invoke$arity$variadic = G__30622__delegate;
return G__30622;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30625 = cljs.core._EQ_;
var expr__30626 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30625.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30626))){
return ((function (pred__30625,expr__30626){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30628){if((e30628 instanceof Error)){
var e = e30628;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30628;

}
}})());
});
;})(pred__30625,expr__30626))
} else {
if(cljs.core.truth_(pred__30625.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30626))){
return ((function (pred__30625,expr__30626){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30625,expr__30626){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30625,expr__30626))
);

return deferred.addErrback(((function (deferred,pred__30625,expr__30626){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30625,expr__30626))
);
});
;})(pred__30625,expr__30626))
} else {
return ((function (pred__30625,expr__30626){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30625,expr__30626))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30629,callback){
var map__30632 = p__30629;
var map__30632__$1 = ((((!((map__30632 == null)))?((((map__30632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);
var file_msg = map__30632__$1;
var request_url = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30632,map__30632__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30632,map__30632__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__){
return (function (state_30656){
var state_val_30657 = (state_30656[(1)]);
if((state_val_30657 === (7))){
var inst_30652 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
var statearr_30658_30678 = state_30656__$1;
(statearr_30658_30678[(2)] = inst_30652);

(statearr_30658_30678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (1))){
var state_30656__$1 = state_30656;
var statearr_30659_30679 = state_30656__$1;
(statearr_30659_30679[(2)] = null);

(statearr_30659_30679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (4))){
var inst_30636 = (state_30656[(7)]);
var inst_30636__$1 = (state_30656[(2)]);
var state_30656__$1 = (function (){var statearr_30660 = state_30656;
(statearr_30660[(7)] = inst_30636__$1);

return statearr_30660;
})();
if(cljs.core.truth_(inst_30636__$1)){
var statearr_30661_30680 = state_30656__$1;
(statearr_30661_30680[(1)] = (5));

} else {
var statearr_30662_30681 = state_30656__$1;
(statearr_30662_30681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (6))){
var state_30656__$1 = state_30656;
var statearr_30663_30682 = state_30656__$1;
(statearr_30663_30682[(2)] = null);

(statearr_30663_30682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (3))){
var inst_30654 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30656__$1,inst_30654);
} else {
if((state_val_30657 === (2))){
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30656__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30657 === (11))){
var inst_30648 = (state_30656[(2)]);
var state_30656__$1 = (function (){var statearr_30664 = state_30656;
(statearr_30664[(8)] = inst_30648);

return statearr_30664;
})();
var statearr_30665_30683 = state_30656__$1;
(statearr_30665_30683[(2)] = null);

(statearr_30665_30683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (9))){
var inst_30640 = (state_30656[(9)]);
var inst_30642 = (state_30656[(10)]);
var inst_30644 = inst_30642.call(null,inst_30640);
var state_30656__$1 = state_30656;
var statearr_30666_30684 = state_30656__$1;
(statearr_30666_30684[(2)] = inst_30644);

(statearr_30666_30684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (5))){
var inst_30636 = (state_30656[(7)]);
var inst_30638 = figwheel.client.file_reloading.blocking_load.call(null,inst_30636);
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30656__$1,(8),inst_30638);
} else {
if((state_val_30657 === (10))){
var inst_30640 = (state_30656[(9)]);
var inst_30646 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30640);
var state_30656__$1 = state_30656;
var statearr_30667_30685 = state_30656__$1;
(statearr_30667_30685[(2)] = inst_30646);

(statearr_30667_30685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (8))){
var inst_30636 = (state_30656[(7)]);
var inst_30642 = (state_30656[(10)]);
var inst_30640 = (state_30656[(2)]);
var inst_30641 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30642__$1 = cljs.core.get.call(null,inst_30641,inst_30636);
var state_30656__$1 = (function (){var statearr_30668 = state_30656;
(statearr_30668[(9)] = inst_30640);

(statearr_30668[(10)] = inst_30642__$1);

return statearr_30668;
})();
if(cljs.core.truth_(inst_30642__$1)){
var statearr_30669_30686 = state_30656__$1;
(statearr_30669_30686[(1)] = (9));

} else {
var statearr_30670_30687 = state_30656__$1;
(statearr_30670_30687[(1)] = (10));

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
});})(c__24018__auto__))
;
return ((function (switch__23953__auto__,c__24018__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23954__auto__ = null;
var figwheel$client$file_reloading$state_machine__23954__auto____0 = (function (){
var statearr_30674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30674[(0)] = figwheel$client$file_reloading$state_machine__23954__auto__);

(statearr_30674[(1)] = (1));

return statearr_30674;
});
var figwheel$client$file_reloading$state_machine__23954__auto____1 = (function (state_30656){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_30656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e30675){if((e30675 instanceof Object)){
var ex__23957__auto__ = e30675;
var statearr_30676_30688 = state_30656;
(statearr_30676_30688[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30689 = state_30656;
state_30656 = G__30689;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23954__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23954__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23954__auto____0;
figwheel$client$file_reloading$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23954__auto____1;
return figwheel$client$file_reloading$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_30677 = f__24019__auto__.call(null);
(statearr_30677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30690,callback){
var map__30693 = p__30690;
var map__30693__$1 = ((((!((map__30693 == null)))?((((map__30693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30693):map__30693);
var file_msg = map__30693__$1;
var namespace = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30693,map__30693__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30693,map__30693__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30695){
var map__30698 = p__30695;
var map__30698__$1 = ((((!((map__30698 == null)))?((((map__30698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30698):map__30698);
var file_msg = map__30698__$1;
var namespace = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19559__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19559__auto__){
var or__19571__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
var or__19571__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19571__auto____$1)){
return or__19571__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19559__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30700,callback){
var map__30703 = p__30700;
var map__30703__$1 = ((((!((map__30703 == null)))?((((map__30703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30703):map__30703);
var file_msg = map__30703__$1;
var request_url = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24018__auto___30791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___30791,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___30791,out){
return (function (state_30773){
var state_val_30774 = (state_30773[(1)]);
if((state_val_30774 === (1))){
var inst_30751 = cljs.core.nth.call(null,files,(0),null);
var inst_30752 = cljs.core.nthnext.call(null,files,(1));
var inst_30753 = files;
var state_30773__$1 = (function (){var statearr_30775 = state_30773;
(statearr_30775[(7)] = inst_30753);

(statearr_30775[(8)] = inst_30752);

(statearr_30775[(9)] = inst_30751);

return statearr_30775;
})();
var statearr_30776_30792 = state_30773__$1;
(statearr_30776_30792[(2)] = null);

(statearr_30776_30792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (2))){
var inst_30753 = (state_30773[(7)]);
var inst_30756 = (state_30773[(10)]);
var inst_30756__$1 = cljs.core.nth.call(null,inst_30753,(0),null);
var inst_30757 = cljs.core.nthnext.call(null,inst_30753,(1));
var inst_30758 = (inst_30756__$1 == null);
var inst_30759 = cljs.core.not.call(null,inst_30758);
var state_30773__$1 = (function (){var statearr_30777 = state_30773;
(statearr_30777[(11)] = inst_30757);

(statearr_30777[(10)] = inst_30756__$1);

return statearr_30777;
})();
if(inst_30759){
var statearr_30778_30793 = state_30773__$1;
(statearr_30778_30793[(1)] = (4));

} else {
var statearr_30779_30794 = state_30773__$1;
(statearr_30779_30794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (3))){
var inst_30771 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30773__$1,inst_30771);
} else {
if((state_val_30774 === (4))){
var inst_30756 = (state_30773[(10)]);
var inst_30761 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30756);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30773__$1,(7),inst_30761);
} else {
if((state_val_30774 === (5))){
var inst_30767 = cljs.core.async.close_BANG_.call(null,out);
var state_30773__$1 = state_30773;
var statearr_30780_30795 = state_30773__$1;
(statearr_30780_30795[(2)] = inst_30767);

(statearr_30780_30795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (6))){
var inst_30769 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30781_30796 = state_30773__$1;
(statearr_30781_30796[(2)] = inst_30769);

(statearr_30781_30796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (7))){
var inst_30757 = (state_30773[(11)]);
var inst_30763 = (state_30773[(2)]);
var inst_30764 = cljs.core.async.put_BANG_.call(null,out,inst_30763);
var inst_30753 = inst_30757;
var state_30773__$1 = (function (){var statearr_30782 = state_30773;
(statearr_30782[(7)] = inst_30753);

(statearr_30782[(12)] = inst_30764);

return statearr_30782;
})();
var statearr_30783_30797 = state_30773__$1;
(statearr_30783_30797[(2)] = null);

(statearr_30783_30797[(1)] = (2));


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
});})(c__24018__auto___30791,out))
;
return ((function (switch__23953__auto__,c__24018__auto___30791,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto____0 = (function (){
var statearr_30787 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30787[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto__);

(statearr_30787[(1)] = (1));

return statearr_30787;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto____1 = (function (state_30773){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_30773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e30788){if((e30788 instanceof Object)){
var ex__23957__auto__ = e30788;
var statearr_30789_30798 = state_30773;
(statearr_30789_30798[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30799 = state_30773;
state_30773 = G__30799;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto__ = function(state_30773){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto____1.call(this,state_30773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___30791,out))
})();
var state__24020__auto__ = (function (){var statearr_30790 = f__24019__auto__.call(null);
(statearr_30790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___30791);

return statearr_30790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___30791,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30800,opts){
var map__30804 = p__30800;
var map__30804__$1 = ((((!((map__30804 == null)))?((((map__30804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);
var eval_body__$1 = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19559__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19559__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19559__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30806){var e = e30806;
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
return (function (p1__30807_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30807_SHARP_),n);
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
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30812){
var vec__30813 = p__30812;
var k = cljs.core.nth.call(null,vec__30813,(0),null);
var v = cljs.core.nth.call(null,vec__30813,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30814){
var vec__30815 = p__30814;
var k = cljs.core.nth.call(null,vec__30815,(0),null);
var v = cljs.core.nth.call(null,vec__30815,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30819,p__30820){
var map__31067 = p__30819;
var map__31067__$1 = ((((!((map__31067 == null)))?((((map__31067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31067):map__31067);
var opts = map__31067__$1;
var before_jsload = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31068 = p__30820;
var map__31068__$1 = ((((!((map__31068 == null)))?((((map__31068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31068):map__31068);
var msg = map__31068__$1;
var files = cljs.core.get.call(null,map__31068__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31068__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31068__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31221){
var state_val_31222 = (state_31221[(1)]);
if((state_val_31222 === (7))){
var inst_31083 = (state_31221[(7)]);
var inst_31084 = (state_31221[(8)]);
var inst_31085 = (state_31221[(9)]);
var inst_31082 = (state_31221[(10)]);
var inst_31090 = cljs.core._nth.call(null,inst_31083,inst_31085);
var inst_31091 = figwheel.client.file_reloading.eval_body.call(null,inst_31090,opts);
var inst_31092 = (inst_31085 + (1));
var tmp31223 = inst_31083;
var tmp31224 = inst_31084;
var tmp31225 = inst_31082;
var inst_31082__$1 = tmp31225;
var inst_31083__$1 = tmp31223;
var inst_31084__$1 = tmp31224;
var inst_31085__$1 = inst_31092;
var state_31221__$1 = (function (){var statearr_31226 = state_31221;
(statearr_31226[(11)] = inst_31091);

(statearr_31226[(7)] = inst_31083__$1);

(statearr_31226[(8)] = inst_31084__$1);

(statearr_31226[(9)] = inst_31085__$1);

(statearr_31226[(10)] = inst_31082__$1);

return statearr_31226;
})();
var statearr_31227_31313 = state_31221__$1;
(statearr_31227_31313[(2)] = null);

(statearr_31227_31313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (20))){
var inst_31125 = (state_31221[(12)]);
var inst_31133 = figwheel.client.file_reloading.sort_files.call(null,inst_31125);
var state_31221__$1 = state_31221;
var statearr_31228_31314 = state_31221__$1;
(statearr_31228_31314[(2)] = inst_31133);

(statearr_31228_31314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (27))){
var state_31221__$1 = state_31221;
var statearr_31229_31315 = state_31221__$1;
(statearr_31229_31315[(2)] = null);

(statearr_31229_31315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (1))){
var inst_31074 = (state_31221[(13)]);
var inst_31071 = before_jsload.call(null,files);
var inst_31072 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31073 = (function (){return ((function (inst_31074,inst_31071,inst_31072,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30816_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30816_SHARP_);
});
;})(inst_31074,inst_31071,inst_31072,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31074__$1 = cljs.core.filter.call(null,inst_31073,files);
var inst_31075 = cljs.core.not_empty.call(null,inst_31074__$1);
var state_31221__$1 = (function (){var statearr_31230 = state_31221;
(statearr_31230[(14)] = inst_31072);

(statearr_31230[(15)] = inst_31071);

(statearr_31230[(13)] = inst_31074__$1);

return statearr_31230;
})();
if(cljs.core.truth_(inst_31075)){
var statearr_31231_31316 = state_31221__$1;
(statearr_31231_31316[(1)] = (2));

} else {
var statearr_31232_31317 = state_31221__$1;
(statearr_31232_31317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (24))){
var state_31221__$1 = state_31221;
var statearr_31233_31318 = state_31221__$1;
(statearr_31233_31318[(2)] = null);

(statearr_31233_31318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (39))){
var inst_31175 = (state_31221[(16)]);
var state_31221__$1 = state_31221;
var statearr_31234_31319 = state_31221__$1;
(statearr_31234_31319[(2)] = inst_31175);

(statearr_31234_31319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (46))){
var inst_31216 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31235_31320 = state_31221__$1;
(statearr_31235_31320[(2)] = inst_31216);

(statearr_31235_31320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (4))){
var inst_31119 = (state_31221[(2)]);
var inst_31120 = cljs.core.List.EMPTY;
var inst_31121 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31120);
var inst_31122 = (function (){return ((function (inst_31119,inst_31120,inst_31121,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30817_SHARP_){
var and__19559__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30817_SHARP_);
if(cljs.core.truth_(and__19559__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30817_SHARP_));
} else {
return and__19559__auto__;
}
});
;})(inst_31119,inst_31120,inst_31121,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31123 = cljs.core.filter.call(null,inst_31122,files);
var inst_31124 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31125 = cljs.core.concat.call(null,inst_31123,inst_31124);
var state_31221__$1 = (function (){var statearr_31236 = state_31221;
(statearr_31236[(17)] = inst_31119);

(statearr_31236[(18)] = inst_31121);

(statearr_31236[(12)] = inst_31125);

return statearr_31236;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31237_31321 = state_31221__$1;
(statearr_31237_31321[(1)] = (16));

} else {
var statearr_31238_31322 = state_31221__$1;
(statearr_31238_31322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (15))){
var inst_31109 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31239_31323 = state_31221__$1;
(statearr_31239_31323[(2)] = inst_31109);

(statearr_31239_31323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (21))){
var inst_31135 = (state_31221[(19)]);
var inst_31135__$1 = (state_31221[(2)]);
var inst_31136 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31135__$1);
var state_31221__$1 = (function (){var statearr_31240 = state_31221;
(statearr_31240[(19)] = inst_31135__$1);

return statearr_31240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31221__$1,(22),inst_31136);
} else {
if((state_val_31222 === (31))){
var inst_31219 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31221__$1,inst_31219);
} else {
if((state_val_31222 === (32))){
var inst_31175 = (state_31221[(16)]);
var inst_31180 = inst_31175.cljs$lang$protocol_mask$partition0$;
var inst_31181 = (inst_31180 & (64));
var inst_31182 = inst_31175.cljs$core$ISeq$;
var inst_31183 = (inst_31181) || (inst_31182);
var state_31221__$1 = state_31221;
if(cljs.core.truth_(inst_31183)){
var statearr_31241_31324 = state_31221__$1;
(statearr_31241_31324[(1)] = (35));

} else {
var statearr_31242_31325 = state_31221__$1;
(statearr_31242_31325[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (40))){
var inst_31196 = (state_31221[(20)]);
var inst_31195 = (state_31221[(2)]);
var inst_31196__$1 = cljs.core.get.call(null,inst_31195,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31197 = cljs.core.get.call(null,inst_31195,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31198 = cljs.core.not_empty.call(null,inst_31196__$1);
var state_31221__$1 = (function (){var statearr_31243 = state_31221;
(statearr_31243[(21)] = inst_31197);

(statearr_31243[(20)] = inst_31196__$1);

return statearr_31243;
})();
if(cljs.core.truth_(inst_31198)){
var statearr_31244_31326 = state_31221__$1;
(statearr_31244_31326[(1)] = (41));

} else {
var statearr_31245_31327 = state_31221__$1;
(statearr_31245_31327[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (33))){
var state_31221__$1 = state_31221;
var statearr_31246_31328 = state_31221__$1;
(statearr_31246_31328[(2)] = false);

(statearr_31246_31328[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (13))){
var inst_31095 = (state_31221[(22)]);
var inst_31099 = cljs.core.chunk_first.call(null,inst_31095);
var inst_31100 = cljs.core.chunk_rest.call(null,inst_31095);
var inst_31101 = cljs.core.count.call(null,inst_31099);
var inst_31082 = inst_31100;
var inst_31083 = inst_31099;
var inst_31084 = inst_31101;
var inst_31085 = (0);
var state_31221__$1 = (function (){var statearr_31247 = state_31221;
(statearr_31247[(7)] = inst_31083);

(statearr_31247[(8)] = inst_31084);

(statearr_31247[(9)] = inst_31085);

(statearr_31247[(10)] = inst_31082);

return statearr_31247;
})();
var statearr_31248_31329 = state_31221__$1;
(statearr_31248_31329[(2)] = null);

(statearr_31248_31329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (22))){
var inst_31139 = (state_31221[(23)]);
var inst_31135 = (state_31221[(19)]);
var inst_31143 = (state_31221[(24)]);
var inst_31138 = (state_31221[(25)]);
var inst_31138__$1 = (state_31221[(2)]);
var inst_31139__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31138__$1);
var inst_31140 = (function (){var all_files = inst_31135;
var res_SINGLEQUOTE_ = inst_31138__$1;
var res = inst_31139__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31139,inst_31135,inst_31143,inst_31138,inst_31138__$1,inst_31139__$1,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30818_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30818_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31139,inst_31135,inst_31143,inst_31138,inst_31138__$1,inst_31139__$1,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31141 = cljs.core.filter.call(null,inst_31140,inst_31138__$1);
var inst_31142 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31143__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31142);
var inst_31144 = cljs.core.not_empty.call(null,inst_31143__$1);
var state_31221__$1 = (function (){var statearr_31249 = state_31221;
(statearr_31249[(23)] = inst_31139__$1);

(statearr_31249[(24)] = inst_31143__$1);

(statearr_31249[(25)] = inst_31138__$1);

(statearr_31249[(26)] = inst_31141);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31144)){
var statearr_31250_31330 = state_31221__$1;
(statearr_31250_31330[(1)] = (23));

} else {
var statearr_31251_31331 = state_31221__$1;
(statearr_31251_31331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (36))){
var state_31221__$1 = state_31221;
var statearr_31252_31332 = state_31221__$1;
(statearr_31252_31332[(2)] = false);

(statearr_31252_31332[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (41))){
var inst_31196 = (state_31221[(20)]);
var inst_31200 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31201 = cljs.core.map.call(null,inst_31200,inst_31196);
var inst_31202 = cljs.core.pr_str.call(null,inst_31201);
var inst_31203 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31202)].join('');
var inst_31204 = figwheel.client.utils.log.call(null,inst_31203);
var state_31221__$1 = state_31221;
var statearr_31253_31333 = state_31221__$1;
(statearr_31253_31333[(2)] = inst_31204);

(statearr_31253_31333[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (43))){
var inst_31197 = (state_31221[(21)]);
var inst_31207 = (state_31221[(2)]);
var inst_31208 = cljs.core.not_empty.call(null,inst_31197);
var state_31221__$1 = (function (){var statearr_31254 = state_31221;
(statearr_31254[(27)] = inst_31207);

return statearr_31254;
})();
if(cljs.core.truth_(inst_31208)){
var statearr_31255_31334 = state_31221__$1;
(statearr_31255_31334[(1)] = (44));

} else {
var statearr_31256_31335 = state_31221__$1;
(statearr_31256_31335[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (29))){
var inst_31139 = (state_31221[(23)]);
var inst_31135 = (state_31221[(19)]);
var inst_31143 = (state_31221[(24)]);
var inst_31138 = (state_31221[(25)]);
var inst_31141 = (state_31221[(26)]);
var inst_31175 = (state_31221[(16)]);
var inst_31171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31174 = (function (){var all_files = inst_31135;
var res_SINGLEQUOTE_ = inst_31138;
var res = inst_31139;
var files_not_loaded = inst_31141;
var dependencies_that_loaded = inst_31143;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31175,inst_31171,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31173){
var map__31257 = p__31173;
var map__31257__$1 = ((((!((map__31257 == null)))?((((map__31257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);
var namespace = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31175,inst_31171,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31175__$1 = cljs.core.group_by.call(null,inst_31174,inst_31141);
var inst_31177 = (inst_31175__$1 == null);
var inst_31178 = cljs.core.not.call(null,inst_31177);
var state_31221__$1 = (function (){var statearr_31259 = state_31221;
(statearr_31259[(28)] = inst_31171);

(statearr_31259[(16)] = inst_31175__$1);

return statearr_31259;
})();
if(inst_31178){
var statearr_31260_31336 = state_31221__$1;
(statearr_31260_31336[(1)] = (32));

} else {
var statearr_31261_31337 = state_31221__$1;
(statearr_31261_31337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (44))){
var inst_31197 = (state_31221[(21)]);
var inst_31210 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31197);
var inst_31211 = cljs.core.pr_str.call(null,inst_31210);
var inst_31212 = [cljs.core.str("not required: "),cljs.core.str(inst_31211)].join('');
var inst_31213 = figwheel.client.utils.log.call(null,inst_31212);
var state_31221__$1 = state_31221;
var statearr_31262_31338 = state_31221__$1;
(statearr_31262_31338[(2)] = inst_31213);

(statearr_31262_31338[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (6))){
var inst_31116 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31263_31339 = state_31221__$1;
(statearr_31263_31339[(2)] = inst_31116);

(statearr_31263_31339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (28))){
var inst_31141 = (state_31221[(26)]);
var inst_31168 = (state_31221[(2)]);
var inst_31169 = cljs.core.not_empty.call(null,inst_31141);
var state_31221__$1 = (function (){var statearr_31264 = state_31221;
(statearr_31264[(29)] = inst_31168);

return statearr_31264;
})();
if(cljs.core.truth_(inst_31169)){
var statearr_31265_31340 = state_31221__$1;
(statearr_31265_31340[(1)] = (29));

} else {
var statearr_31266_31341 = state_31221__$1;
(statearr_31266_31341[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (25))){
var inst_31139 = (state_31221[(23)]);
var inst_31155 = (state_31221[(2)]);
var inst_31156 = cljs.core.not_empty.call(null,inst_31139);
var state_31221__$1 = (function (){var statearr_31267 = state_31221;
(statearr_31267[(30)] = inst_31155);

return statearr_31267;
})();
if(cljs.core.truth_(inst_31156)){
var statearr_31268_31342 = state_31221__$1;
(statearr_31268_31342[(1)] = (26));

} else {
var statearr_31269_31343 = state_31221__$1;
(statearr_31269_31343[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (34))){
var inst_31190 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
if(cljs.core.truth_(inst_31190)){
var statearr_31270_31344 = state_31221__$1;
(statearr_31270_31344[(1)] = (38));

} else {
var statearr_31271_31345 = state_31221__$1;
(statearr_31271_31345[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (17))){
var state_31221__$1 = state_31221;
var statearr_31272_31346 = state_31221__$1;
(statearr_31272_31346[(2)] = recompile_dependents);

(statearr_31272_31346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (3))){
var state_31221__$1 = state_31221;
var statearr_31273_31347 = state_31221__$1;
(statearr_31273_31347[(2)] = null);

(statearr_31273_31347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (12))){
var inst_31112 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31274_31348 = state_31221__$1;
(statearr_31274_31348[(2)] = inst_31112);

(statearr_31274_31348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (2))){
var inst_31074 = (state_31221[(13)]);
var inst_31081 = cljs.core.seq.call(null,inst_31074);
var inst_31082 = inst_31081;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31221__$1 = (function (){var statearr_31275 = state_31221;
(statearr_31275[(7)] = inst_31083);

(statearr_31275[(8)] = inst_31084);

(statearr_31275[(9)] = inst_31085);

(statearr_31275[(10)] = inst_31082);

return statearr_31275;
})();
var statearr_31276_31349 = state_31221__$1;
(statearr_31276_31349[(2)] = null);

(statearr_31276_31349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (23))){
var inst_31139 = (state_31221[(23)]);
var inst_31135 = (state_31221[(19)]);
var inst_31143 = (state_31221[(24)]);
var inst_31138 = (state_31221[(25)]);
var inst_31141 = (state_31221[(26)]);
var inst_31146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31148 = (function (){var all_files = inst_31135;
var res_SINGLEQUOTE_ = inst_31138;
var res = inst_31139;
var files_not_loaded = inst_31141;
var dependencies_that_loaded = inst_31143;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31146,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31147){
var map__31277 = p__31147;
var map__31277__$1 = ((((!((map__31277 == null)))?((((map__31277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31277):map__31277);
var request_url = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31146,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31149 = cljs.core.reverse.call(null,inst_31143);
var inst_31150 = cljs.core.map.call(null,inst_31148,inst_31149);
var inst_31151 = cljs.core.pr_str.call(null,inst_31150);
var inst_31152 = figwheel.client.utils.log.call(null,inst_31151);
var state_31221__$1 = (function (){var statearr_31279 = state_31221;
(statearr_31279[(31)] = inst_31146);

return statearr_31279;
})();
var statearr_31280_31350 = state_31221__$1;
(statearr_31280_31350[(2)] = inst_31152);

(statearr_31280_31350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (35))){
var state_31221__$1 = state_31221;
var statearr_31281_31351 = state_31221__$1;
(statearr_31281_31351[(2)] = true);

(statearr_31281_31351[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (19))){
var inst_31125 = (state_31221[(12)]);
var inst_31131 = figwheel.client.file_reloading.expand_files.call(null,inst_31125);
var state_31221__$1 = state_31221;
var statearr_31282_31352 = state_31221__$1;
(statearr_31282_31352[(2)] = inst_31131);

(statearr_31282_31352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (11))){
var state_31221__$1 = state_31221;
var statearr_31283_31353 = state_31221__$1;
(statearr_31283_31353[(2)] = null);

(statearr_31283_31353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (9))){
var inst_31114 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31284_31354 = state_31221__$1;
(statearr_31284_31354[(2)] = inst_31114);

(statearr_31284_31354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (5))){
var inst_31084 = (state_31221[(8)]);
var inst_31085 = (state_31221[(9)]);
var inst_31087 = (inst_31085 < inst_31084);
var inst_31088 = inst_31087;
var state_31221__$1 = state_31221;
if(cljs.core.truth_(inst_31088)){
var statearr_31285_31355 = state_31221__$1;
(statearr_31285_31355[(1)] = (7));

} else {
var statearr_31286_31356 = state_31221__$1;
(statearr_31286_31356[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (14))){
var inst_31095 = (state_31221[(22)]);
var inst_31104 = cljs.core.first.call(null,inst_31095);
var inst_31105 = figwheel.client.file_reloading.eval_body.call(null,inst_31104,opts);
var inst_31106 = cljs.core.next.call(null,inst_31095);
var inst_31082 = inst_31106;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31221__$1 = (function (){var statearr_31287 = state_31221;
(statearr_31287[(7)] = inst_31083);

(statearr_31287[(8)] = inst_31084);

(statearr_31287[(32)] = inst_31105);

(statearr_31287[(9)] = inst_31085);

(statearr_31287[(10)] = inst_31082);

return statearr_31287;
})();
var statearr_31288_31357 = state_31221__$1;
(statearr_31288_31357[(2)] = null);

(statearr_31288_31357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (45))){
var state_31221__$1 = state_31221;
var statearr_31289_31358 = state_31221__$1;
(statearr_31289_31358[(2)] = null);

(statearr_31289_31358[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (26))){
var inst_31139 = (state_31221[(23)]);
var inst_31135 = (state_31221[(19)]);
var inst_31143 = (state_31221[(24)]);
var inst_31138 = (state_31221[(25)]);
var inst_31141 = (state_31221[(26)]);
var inst_31158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31160 = (function (){var all_files = inst_31135;
var res_SINGLEQUOTE_ = inst_31138;
var res = inst_31139;
var files_not_loaded = inst_31141;
var dependencies_that_loaded = inst_31143;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31158,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31159){
var map__31290 = p__31159;
var map__31290__$1 = ((((!((map__31290 == null)))?((((map__31290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31290):map__31290);
var namespace = cljs.core.get.call(null,map__31290__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31290__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31158,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31161 = cljs.core.map.call(null,inst_31160,inst_31139);
var inst_31162 = cljs.core.pr_str.call(null,inst_31161);
var inst_31163 = figwheel.client.utils.log.call(null,inst_31162);
var inst_31164 = (function (){var all_files = inst_31135;
var res_SINGLEQUOTE_ = inst_31138;
var res = inst_31139;
var files_not_loaded = inst_31141;
var dependencies_that_loaded = inst_31143;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31158,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31139,inst_31135,inst_31143,inst_31138,inst_31141,inst_31158,inst_31160,inst_31161,inst_31162,inst_31163,state_val_31222,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31165 = setTimeout(inst_31164,(10));
var state_31221__$1 = (function (){var statearr_31292 = state_31221;
(statearr_31292[(33)] = inst_31163);

(statearr_31292[(34)] = inst_31158);

return statearr_31292;
})();
var statearr_31293_31359 = state_31221__$1;
(statearr_31293_31359[(2)] = inst_31165);

(statearr_31293_31359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (16))){
var state_31221__$1 = state_31221;
var statearr_31294_31360 = state_31221__$1;
(statearr_31294_31360[(2)] = reload_dependents);

(statearr_31294_31360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (38))){
var inst_31175 = (state_31221[(16)]);
var inst_31192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31175);
var state_31221__$1 = state_31221;
var statearr_31295_31361 = state_31221__$1;
(statearr_31295_31361[(2)] = inst_31192);

(statearr_31295_31361[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (30))){
var state_31221__$1 = state_31221;
var statearr_31296_31362 = state_31221__$1;
(statearr_31296_31362[(2)] = null);

(statearr_31296_31362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (10))){
var inst_31095 = (state_31221[(22)]);
var inst_31097 = cljs.core.chunked_seq_QMARK_.call(null,inst_31095);
var state_31221__$1 = state_31221;
if(inst_31097){
var statearr_31297_31363 = state_31221__$1;
(statearr_31297_31363[(1)] = (13));

} else {
var statearr_31298_31364 = state_31221__$1;
(statearr_31298_31364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (18))){
var inst_31129 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
if(cljs.core.truth_(inst_31129)){
var statearr_31299_31365 = state_31221__$1;
(statearr_31299_31365[(1)] = (19));

} else {
var statearr_31300_31366 = state_31221__$1;
(statearr_31300_31366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (42))){
var state_31221__$1 = state_31221;
var statearr_31301_31367 = state_31221__$1;
(statearr_31301_31367[(2)] = null);

(statearr_31301_31367[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (37))){
var inst_31187 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31302_31368 = state_31221__$1;
(statearr_31302_31368[(2)] = inst_31187);

(statearr_31302_31368[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (8))){
var inst_31095 = (state_31221[(22)]);
var inst_31082 = (state_31221[(10)]);
var inst_31095__$1 = cljs.core.seq.call(null,inst_31082);
var state_31221__$1 = (function (){var statearr_31303 = state_31221;
(statearr_31303[(22)] = inst_31095__$1);

return statearr_31303;
})();
if(inst_31095__$1){
var statearr_31304_31369 = state_31221__$1;
(statearr_31304_31369[(1)] = (10));

} else {
var statearr_31305_31370 = state_31221__$1;
(statearr_31305_31370[(1)] = (11));

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
});})(c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23953__auto__,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31309[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto____1 = (function (state_31221){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31310){if((e31310 instanceof Object)){
var ex__23957__auto__ = e31310;
var statearr_31311_31371 = state_31221;
(statearr_31311_31371[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31372 = state_31221;
state_31221 = G__31372;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto__ = function(state_31221){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto____1.call(this,state_31221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24020__auto__ = (function (){var statearr_31312 = f__24019__auto__.call(null);
(statearr_31312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__,map__31067,map__31067__$1,opts,before_jsload,on_jsload,reload_dependents,map__31068,map__31068__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24018__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31375,link){
var map__31378 = p__31375;
var map__31378__$1 = ((((!((map__31378 == null)))?((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var file = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31378,map__31378__$1,file){
return (function (p1__31373_SHARP_,p2__31374_SHARP_){
if(cljs.core._EQ_.call(null,p1__31373_SHARP_,p2__31374_SHARP_)){
return p1__31373_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31378,map__31378__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31384){
var map__31385 = p__31384;
var map__31385__$1 = ((((!((map__31385 == null)))?((((map__31385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31385):map__31385);
var match_length = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31380_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31380_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args31387 = [];
var len__20610__auto___31390 = arguments.length;
var i__20611__auto___31391 = (0);
while(true){
if((i__20611__auto___31391 < len__20610__auto___31390)){
args31387.push((arguments[i__20611__auto___31391]));

var G__31392 = (i__20611__auto___31391 + (1));
i__20611__auto___31391 = G__31392;
continue;
} else {
}
break;
}

var G__31389 = args31387.length;
switch (G__31389) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31387.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31394_SHARP_,p2__31395_SHARP_){
return cljs.core.assoc.call(null,p1__31394_SHARP_,cljs.core.get.call(null,p2__31395_SHARP_,key),p2__31395_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31396){
var map__31399 = p__31396;
var map__31399__$1 = ((((!((map__31399 == null)))?((((map__31399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31399):map__31399);
var f_data = map__31399__$1;
var file = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31401,files_msg){
var map__31408 = p__31401;
var map__31408__$1 = ((((!((map__31408 == null)))?((((map__31408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408):map__31408);
var opts = map__31408__$1;
var on_cssload = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31410_31414 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31411_31415 = null;
var count__31412_31416 = (0);
var i__31413_31417 = (0);
while(true){
if((i__31413_31417 < count__31412_31416)){
var f_31418 = cljs.core._nth.call(null,chunk__31411_31415,i__31413_31417);
figwheel.client.file_reloading.reload_css_file.call(null,f_31418);

var G__31419 = seq__31410_31414;
var G__31420 = chunk__31411_31415;
var G__31421 = count__31412_31416;
var G__31422 = (i__31413_31417 + (1));
seq__31410_31414 = G__31419;
chunk__31411_31415 = G__31420;
count__31412_31416 = G__31421;
i__31413_31417 = G__31422;
continue;
} else {
var temp__4425__auto___31423 = cljs.core.seq.call(null,seq__31410_31414);
if(temp__4425__auto___31423){
var seq__31410_31424__$1 = temp__4425__auto___31423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31410_31424__$1)){
var c__20355__auto___31425 = cljs.core.chunk_first.call(null,seq__31410_31424__$1);
var G__31426 = cljs.core.chunk_rest.call(null,seq__31410_31424__$1);
var G__31427 = c__20355__auto___31425;
var G__31428 = cljs.core.count.call(null,c__20355__auto___31425);
var G__31429 = (0);
seq__31410_31414 = G__31426;
chunk__31411_31415 = G__31427;
count__31412_31416 = G__31428;
i__31413_31417 = G__31429;
continue;
} else {
var f_31430 = cljs.core.first.call(null,seq__31410_31424__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31430);

var G__31431 = cljs.core.next.call(null,seq__31410_31424__$1);
var G__31432 = null;
var G__31433 = (0);
var G__31434 = (0);
seq__31410_31414 = G__31431;
chunk__31411_31415 = G__31432;
count__31412_31416 = G__31433;
i__31413_31417 = G__31434;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31408,map__31408__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31408,map__31408__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map