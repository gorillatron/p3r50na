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
var or__18540__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18540__auto__){
return or__18540__auto__;
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
var or__18540__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26934_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26934_SHARP_));
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
var seq__26939 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26940 = null;
var count__26941 = (0);
var i__26942 = (0);
while(true){
if((i__26942 < count__26941)){
var n = cljs.core._nth.call(null,chunk__26940,i__26942);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26943 = seq__26939;
var G__26944 = chunk__26940;
var G__26945 = count__26941;
var G__26946 = (i__26942 + (1));
seq__26939 = G__26943;
chunk__26940 = G__26944;
count__26941 = G__26945;
i__26942 = G__26946;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26939);
if(temp__4425__auto__){
var seq__26939__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26939__$1)){
var c__19324__auto__ = cljs.core.chunk_first.call(null,seq__26939__$1);
var G__26947 = cljs.core.chunk_rest.call(null,seq__26939__$1);
var G__26948 = c__19324__auto__;
var G__26949 = cljs.core.count.call(null,c__19324__auto__);
var G__26950 = (0);
seq__26939 = G__26947;
chunk__26940 = G__26948;
count__26941 = G__26949;
i__26942 = G__26950;
continue;
} else {
var n = cljs.core.first.call(null,seq__26939__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26951 = cljs.core.next.call(null,seq__26939__$1);
var G__26952 = null;
var G__26953 = (0);
var G__26954 = (0);
seq__26939 = G__26951;
chunk__26940 = G__26952;
count__26941 = G__26953;
i__26942 = G__26954;
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

var seq__26993_27000 = cljs.core.seq.call(null,deps);
var chunk__26994_27001 = null;
var count__26995_27002 = (0);
var i__26996_27003 = (0);
while(true){
if((i__26996_27003 < count__26995_27002)){
var dep_27004 = cljs.core._nth.call(null,chunk__26994_27001,i__26996_27003);
topo_sort_helper_STAR_.call(null,dep_27004,(depth + (1)),state);

var G__27005 = seq__26993_27000;
var G__27006 = chunk__26994_27001;
var G__27007 = count__26995_27002;
var G__27008 = (i__26996_27003 + (1));
seq__26993_27000 = G__27005;
chunk__26994_27001 = G__27006;
count__26995_27002 = G__27007;
i__26996_27003 = G__27008;
continue;
} else {
var temp__4425__auto___27009 = cljs.core.seq.call(null,seq__26993_27000);
if(temp__4425__auto___27009){
var seq__26993_27010__$1 = temp__4425__auto___27009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26993_27010__$1)){
var c__19324__auto___27011 = cljs.core.chunk_first.call(null,seq__26993_27010__$1);
var G__27012 = cljs.core.chunk_rest.call(null,seq__26993_27010__$1);
var G__27013 = c__19324__auto___27011;
var G__27014 = cljs.core.count.call(null,c__19324__auto___27011);
var G__27015 = (0);
seq__26993_27000 = G__27012;
chunk__26994_27001 = G__27013;
count__26995_27002 = G__27014;
i__26996_27003 = G__27015;
continue;
} else {
var dep_27016 = cljs.core.first.call(null,seq__26993_27010__$1);
topo_sort_helper_STAR_.call(null,dep_27016,(depth + (1)),state);

var G__27017 = cljs.core.next.call(null,seq__26993_27010__$1);
var G__27018 = null;
var G__27019 = (0);
var G__27020 = (0);
seq__26993_27000 = G__27017;
chunk__26994_27001 = G__27018;
count__26995_27002 = G__27019;
i__26996_27003 = G__27020;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26997){
var vec__26999 = p__26997;
var x = cljs.core.nth.call(null,vec__26999,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26999,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26999,x,xs,get_deps__$1){
return (function (p1__26955_SHARP_){
return clojure.set.difference.call(null,p1__26955_SHARP_,x);
});})(vec__26999,x,xs,get_deps__$1))
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
var seq__27033 = cljs.core.seq.call(null,provides);
var chunk__27034 = null;
var count__27035 = (0);
var i__27036 = (0);
while(true){
if((i__27036 < count__27035)){
var prov = cljs.core._nth.call(null,chunk__27034,i__27036);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27037_27045 = cljs.core.seq.call(null,requires);
var chunk__27038_27046 = null;
var count__27039_27047 = (0);
var i__27040_27048 = (0);
while(true){
if((i__27040_27048 < count__27039_27047)){
var req_27049 = cljs.core._nth.call(null,chunk__27038_27046,i__27040_27048);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27049,prov);

var G__27050 = seq__27037_27045;
var G__27051 = chunk__27038_27046;
var G__27052 = count__27039_27047;
var G__27053 = (i__27040_27048 + (1));
seq__27037_27045 = G__27050;
chunk__27038_27046 = G__27051;
count__27039_27047 = G__27052;
i__27040_27048 = G__27053;
continue;
} else {
var temp__4425__auto___27054 = cljs.core.seq.call(null,seq__27037_27045);
if(temp__4425__auto___27054){
var seq__27037_27055__$1 = temp__4425__auto___27054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27037_27055__$1)){
var c__19324__auto___27056 = cljs.core.chunk_first.call(null,seq__27037_27055__$1);
var G__27057 = cljs.core.chunk_rest.call(null,seq__27037_27055__$1);
var G__27058 = c__19324__auto___27056;
var G__27059 = cljs.core.count.call(null,c__19324__auto___27056);
var G__27060 = (0);
seq__27037_27045 = G__27057;
chunk__27038_27046 = G__27058;
count__27039_27047 = G__27059;
i__27040_27048 = G__27060;
continue;
} else {
var req_27061 = cljs.core.first.call(null,seq__27037_27055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27061,prov);

var G__27062 = cljs.core.next.call(null,seq__27037_27055__$1);
var G__27063 = null;
var G__27064 = (0);
var G__27065 = (0);
seq__27037_27045 = G__27062;
chunk__27038_27046 = G__27063;
count__27039_27047 = G__27064;
i__27040_27048 = G__27065;
continue;
}
} else {
}
}
break;
}

var G__27066 = seq__27033;
var G__27067 = chunk__27034;
var G__27068 = count__27035;
var G__27069 = (i__27036 + (1));
seq__27033 = G__27066;
chunk__27034 = G__27067;
count__27035 = G__27068;
i__27036 = G__27069;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27033);
if(temp__4425__auto__){
var seq__27033__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27033__$1)){
var c__19324__auto__ = cljs.core.chunk_first.call(null,seq__27033__$1);
var G__27070 = cljs.core.chunk_rest.call(null,seq__27033__$1);
var G__27071 = c__19324__auto__;
var G__27072 = cljs.core.count.call(null,c__19324__auto__);
var G__27073 = (0);
seq__27033 = G__27070;
chunk__27034 = G__27071;
count__27035 = G__27072;
i__27036 = G__27073;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27033__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27041_27074 = cljs.core.seq.call(null,requires);
var chunk__27042_27075 = null;
var count__27043_27076 = (0);
var i__27044_27077 = (0);
while(true){
if((i__27044_27077 < count__27043_27076)){
var req_27078 = cljs.core._nth.call(null,chunk__27042_27075,i__27044_27077);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27078,prov);

var G__27079 = seq__27041_27074;
var G__27080 = chunk__27042_27075;
var G__27081 = count__27043_27076;
var G__27082 = (i__27044_27077 + (1));
seq__27041_27074 = G__27079;
chunk__27042_27075 = G__27080;
count__27043_27076 = G__27081;
i__27044_27077 = G__27082;
continue;
} else {
var temp__4425__auto___27083__$1 = cljs.core.seq.call(null,seq__27041_27074);
if(temp__4425__auto___27083__$1){
var seq__27041_27084__$1 = temp__4425__auto___27083__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27041_27084__$1)){
var c__19324__auto___27085 = cljs.core.chunk_first.call(null,seq__27041_27084__$1);
var G__27086 = cljs.core.chunk_rest.call(null,seq__27041_27084__$1);
var G__27087 = c__19324__auto___27085;
var G__27088 = cljs.core.count.call(null,c__19324__auto___27085);
var G__27089 = (0);
seq__27041_27074 = G__27086;
chunk__27042_27075 = G__27087;
count__27043_27076 = G__27088;
i__27044_27077 = G__27089;
continue;
} else {
var req_27090 = cljs.core.first.call(null,seq__27041_27084__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27090,prov);

var G__27091 = cljs.core.next.call(null,seq__27041_27084__$1);
var G__27092 = null;
var G__27093 = (0);
var G__27094 = (0);
seq__27041_27074 = G__27091;
chunk__27042_27075 = G__27092;
count__27043_27076 = G__27093;
i__27044_27077 = G__27094;
continue;
}
} else {
}
}
break;
}

var G__27095 = cljs.core.next.call(null,seq__27033__$1);
var G__27096 = null;
var G__27097 = (0);
var G__27098 = (0);
seq__27033 = G__27095;
chunk__27034 = G__27096;
count__27035 = G__27097;
i__27036 = G__27098;
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
var seq__27103_27107 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27104_27108 = null;
var count__27105_27109 = (0);
var i__27106_27110 = (0);
while(true){
if((i__27106_27110 < count__27105_27109)){
var ns_27111 = cljs.core._nth.call(null,chunk__27104_27108,i__27106_27110);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27111);

var G__27112 = seq__27103_27107;
var G__27113 = chunk__27104_27108;
var G__27114 = count__27105_27109;
var G__27115 = (i__27106_27110 + (1));
seq__27103_27107 = G__27112;
chunk__27104_27108 = G__27113;
count__27105_27109 = G__27114;
i__27106_27110 = G__27115;
continue;
} else {
var temp__4425__auto___27116 = cljs.core.seq.call(null,seq__27103_27107);
if(temp__4425__auto___27116){
var seq__27103_27117__$1 = temp__4425__auto___27116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27103_27117__$1)){
var c__19324__auto___27118 = cljs.core.chunk_first.call(null,seq__27103_27117__$1);
var G__27119 = cljs.core.chunk_rest.call(null,seq__27103_27117__$1);
var G__27120 = c__19324__auto___27118;
var G__27121 = cljs.core.count.call(null,c__19324__auto___27118);
var G__27122 = (0);
seq__27103_27107 = G__27119;
chunk__27104_27108 = G__27120;
count__27105_27109 = G__27121;
i__27106_27110 = G__27122;
continue;
} else {
var ns_27123 = cljs.core.first.call(null,seq__27103_27117__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27123);

var G__27124 = cljs.core.next.call(null,seq__27103_27117__$1);
var G__27125 = null;
var G__27126 = (0);
var G__27127 = (0);
seq__27103_27107 = G__27124;
chunk__27104_27108 = G__27125;
count__27105_27109 = G__27126;
i__27106_27110 = G__27127;
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
goog.require_figwheel_backup_ = (function (){var or__18540__auto__ = goog.require__;
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
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
var G__27128__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27129__i = 0, G__27129__a = new Array(arguments.length -  0);
while (G__27129__i < G__27129__a.length) {G__27129__a[G__27129__i] = arguments[G__27129__i + 0]; ++G__27129__i;}
  args = new cljs.core.IndexedSeq(G__27129__a,0);
} 
return G__27128__delegate.call(this,args);};
G__27128.cljs$lang$maxFixedArity = 0;
G__27128.cljs$lang$applyTo = (function (arglist__27130){
var args = cljs.core.seq(arglist__27130);
return G__27128__delegate(args);
});
G__27128.cljs$core$IFn$_invoke$arity$variadic = G__27128__delegate;
return G__27128;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27131 = cljs.core._EQ_;
var expr__27132 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27131.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27132))){
return ((function (pred__27131,expr__27132){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27134){if((e27134 instanceof Error)){
var e = e27134;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27134;

}
}})());
});
;})(pred__27131,expr__27132))
} else {
if(cljs.core.truth_(pred__27131.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27132))){
return ((function (pred__27131,expr__27132){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27131,expr__27132){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27131,expr__27132))
);

return deferred.addErrback(((function (deferred,pred__27131,expr__27132){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27131,expr__27132))
);
});
;})(pred__27131,expr__27132))
} else {
return ((function (pred__27131,expr__27132){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27131,expr__27132))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27135,callback){
var map__27138 = p__27135;
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var file_msg = map__27138__$1;
var request_url = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27138,map__27138__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27138,map__27138__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__){
return (function (state_27162){
var state_val_27163 = (state_27162[(1)]);
if((state_val_27163 === (7))){
var inst_27158 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27164_27184 = state_27162__$1;
(statearr_27164_27184[(2)] = inst_27158);

(statearr_27164_27184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (1))){
var state_27162__$1 = state_27162;
var statearr_27165_27185 = state_27162__$1;
(statearr_27165_27185[(2)] = null);

(statearr_27165_27185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (4))){
var inst_27142 = (state_27162[(7)]);
var inst_27142__$1 = (state_27162[(2)]);
var state_27162__$1 = (function (){var statearr_27166 = state_27162;
(statearr_27166[(7)] = inst_27142__$1);

return statearr_27166;
})();
if(cljs.core.truth_(inst_27142__$1)){
var statearr_27167_27186 = state_27162__$1;
(statearr_27167_27186[(1)] = (5));

} else {
var statearr_27168_27187 = state_27162__$1;
(statearr_27168_27187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (6))){
var state_27162__$1 = state_27162;
var statearr_27169_27188 = state_27162__$1;
(statearr_27169_27188[(2)] = null);

(statearr_27169_27188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (3))){
var inst_27160 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27162__$1,inst_27160);
} else {
if((state_val_27163 === (2))){
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27163 === (11))){
var inst_27154 = (state_27162[(2)]);
var state_27162__$1 = (function (){var statearr_27170 = state_27162;
(statearr_27170[(8)] = inst_27154);

return statearr_27170;
})();
var statearr_27171_27189 = state_27162__$1;
(statearr_27171_27189[(2)] = null);

(statearr_27171_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (9))){
var inst_27148 = (state_27162[(9)]);
var inst_27146 = (state_27162[(10)]);
var inst_27150 = inst_27148.call(null,inst_27146);
var state_27162__$1 = state_27162;
var statearr_27172_27190 = state_27162__$1;
(statearr_27172_27190[(2)] = inst_27150);

(statearr_27172_27190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (5))){
var inst_27142 = (state_27162[(7)]);
var inst_27144 = figwheel.client.file_reloading.blocking_load.call(null,inst_27142);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(8),inst_27144);
} else {
if((state_val_27163 === (10))){
var inst_27146 = (state_27162[(10)]);
var inst_27152 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27146);
var state_27162__$1 = state_27162;
var statearr_27173_27191 = state_27162__$1;
(statearr_27173_27191[(2)] = inst_27152);

(statearr_27173_27191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (8))){
var inst_27148 = (state_27162[(9)]);
var inst_27142 = (state_27162[(7)]);
var inst_27146 = (state_27162[(2)]);
var inst_27147 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27148__$1 = cljs.core.get.call(null,inst_27147,inst_27142);
var state_27162__$1 = (function (){var statearr_27174 = state_27162;
(statearr_27174[(9)] = inst_27148__$1);

(statearr_27174[(10)] = inst_27146);

return statearr_27174;
})();
if(cljs.core.truth_(inst_27148__$1)){
var statearr_27175_27192 = state_27162__$1;
(statearr_27175_27192[(1)] = (9));

} else {
var statearr_27176_27193 = state_27162__$1;
(statearr_27176_27193[(1)] = (10));

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
});})(c__21723__auto__))
;
return ((function (switch__21658__auto__,c__21723__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21659__auto__ = null;
var figwheel$client$file_reloading$state_machine__21659__auto____0 = (function (){
var statearr_27180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27180[(0)] = figwheel$client$file_reloading$state_machine__21659__auto__);

(statearr_27180[(1)] = (1));

return statearr_27180;
});
var figwheel$client$file_reloading$state_machine__21659__auto____1 = (function (state_27162){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_27162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e27181){if((e27181 instanceof Object)){
var ex__21662__auto__ = e27181;
var statearr_27182_27194 = state_27162;
(statearr_27182_27194[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27195 = state_27162;
state_27162 = G__27195;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21659__auto__ = function(state_27162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21659__auto____1.call(this,state_27162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21659__auto____0;
figwheel$client$file_reloading$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21659__auto____1;
return figwheel$client$file_reloading$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__))
})();
var state__21725__auto__ = (function (){var statearr_27183 = f__21724__auto__.call(null);
(statearr_27183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_27183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__))
);

return c__21723__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27196,callback){
var map__27199 = p__27196;
var map__27199__$1 = ((((!((map__27199 == null)))?((((map__27199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27199):map__27199);
var file_msg = map__27199__$1;
var namespace = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27199,map__27199__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27199,map__27199__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27201){
var map__27204 = p__27201;
var map__27204__$1 = ((((!((map__27204 == null)))?((((map__27204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27204):map__27204);
var file_msg = map__27204__$1;
var namespace = cljs.core.get.call(null,map__27204__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18528__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18528__auto__){
var or__18540__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
var or__18540__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18540__auto____$1)){
return or__18540__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18528__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27206,callback){
var map__27209 = p__27206;
var map__27209__$1 = ((((!((map__27209 == null)))?((((map__27209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27209):map__27209);
var file_msg = map__27209__$1;
var request_url = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21723__auto___27297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___27297,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___27297,out){
return (function (state_27279){
var state_val_27280 = (state_27279[(1)]);
if((state_val_27280 === (1))){
var inst_27257 = cljs.core.nth.call(null,files,(0),null);
var inst_27258 = cljs.core.nthnext.call(null,files,(1));
var inst_27259 = files;
var state_27279__$1 = (function (){var statearr_27281 = state_27279;
(statearr_27281[(7)] = inst_27259);

(statearr_27281[(8)] = inst_27257);

(statearr_27281[(9)] = inst_27258);

return statearr_27281;
})();
var statearr_27282_27298 = state_27279__$1;
(statearr_27282_27298[(2)] = null);

(statearr_27282_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (2))){
var inst_27259 = (state_27279[(7)]);
var inst_27262 = (state_27279[(10)]);
var inst_27262__$1 = cljs.core.nth.call(null,inst_27259,(0),null);
var inst_27263 = cljs.core.nthnext.call(null,inst_27259,(1));
var inst_27264 = (inst_27262__$1 == null);
var inst_27265 = cljs.core.not.call(null,inst_27264);
var state_27279__$1 = (function (){var statearr_27283 = state_27279;
(statearr_27283[(11)] = inst_27263);

(statearr_27283[(10)] = inst_27262__$1);

return statearr_27283;
})();
if(inst_27265){
var statearr_27284_27299 = state_27279__$1;
(statearr_27284_27299[(1)] = (4));

} else {
var statearr_27285_27300 = state_27279__$1;
(statearr_27285_27300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (3))){
var inst_27277 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27279__$1,inst_27277);
} else {
if((state_val_27280 === (4))){
var inst_27262 = (state_27279[(10)]);
var inst_27267 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27262);
var state_27279__$1 = state_27279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27279__$1,(7),inst_27267);
} else {
if((state_val_27280 === (5))){
var inst_27273 = cljs.core.async.close_BANG_.call(null,out);
var state_27279__$1 = state_27279;
var statearr_27286_27301 = state_27279__$1;
(statearr_27286_27301[(2)] = inst_27273);

(statearr_27286_27301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (6))){
var inst_27275 = (state_27279[(2)]);
var state_27279__$1 = state_27279;
var statearr_27287_27302 = state_27279__$1;
(statearr_27287_27302[(2)] = inst_27275);

(statearr_27287_27302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27280 === (7))){
var inst_27263 = (state_27279[(11)]);
var inst_27269 = (state_27279[(2)]);
var inst_27270 = cljs.core.async.put_BANG_.call(null,out,inst_27269);
var inst_27259 = inst_27263;
var state_27279__$1 = (function (){var statearr_27288 = state_27279;
(statearr_27288[(12)] = inst_27270);

(statearr_27288[(7)] = inst_27259);

return statearr_27288;
})();
var statearr_27289_27303 = state_27279__$1;
(statearr_27289_27303[(2)] = null);

(statearr_27289_27303[(1)] = (2));


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
});})(c__21723__auto___27297,out))
;
return ((function (switch__21658__auto__,c__21723__auto___27297,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto____0 = (function (){
var statearr_27293 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27293[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto__);

(statearr_27293[(1)] = (1));

return statearr_27293;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto____1 = (function (state_27279){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_27279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e27294){if((e27294 instanceof Object)){
var ex__21662__auto__ = e27294;
var statearr_27295_27304 = state_27279;
(statearr_27295_27304[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27305 = state_27279;
state_27279 = G__27305;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto__ = function(state_27279){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto____1.call(this,state_27279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___27297,out))
})();
var state__21725__auto__ = (function (){var statearr_27296 = f__21724__auto__.call(null);
(statearr_27296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___27297);

return statearr_27296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___27297,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27306,opts){
var map__27310 = p__27306;
var map__27310__$1 = ((((!((map__27310 == null)))?((((map__27310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27310):map__27310);
var eval_body__$1 = cljs.core.get.call(null,map__27310__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18528__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18528__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18528__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27312){var e = e27312;
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
return (function (p1__27313_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27313_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27318){
var vec__27319 = p__27318;
var k = cljs.core.nth.call(null,vec__27319,(0),null);
var v = cljs.core.nth.call(null,vec__27319,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27320){
var vec__27321 = p__27320;
var k = cljs.core.nth.call(null,vec__27321,(0),null);
var v = cljs.core.nth.call(null,vec__27321,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27325,p__27326){
var map__27573 = p__27325;
var map__27573__$1 = ((((!((map__27573 == null)))?((((map__27573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);
var opts = map__27573__$1;
var before_jsload = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27574 = p__27326;
var map__27574__$1 = ((((!((map__27574 == null)))?((((map__27574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27574):map__27574);
var msg = map__27574__$1;
var files = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27727){
var state_val_27728 = (state_27727[(1)]);
if((state_val_27728 === (7))){
var inst_27590 = (state_27727[(7)]);
var inst_27588 = (state_27727[(8)]);
var inst_27589 = (state_27727[(9)]);
var inst_27591 = (state_27727[(10)]);
var inst_27596 = cljs.core._nth.call(null,inst_27589,inst_27591);
var inst_27597 = figwheel.client.file_reloading.eval_body.call(null,inst_27596,opts);
var inst_27598 = (inst_27591 + (1));
var tmp27729 = inst_27590;
var tmp27730 = inst_27588;
var tmp27731 = inst_27589;
var inst_27588__$1 = tmp27730;
var inst_27589__$1 = tmp27731;
var inst_27590__$1 = tmp27729;
var inst_27591__$1 = inst_27598;
var state_27727__$1 = (function (){var statearr_27732 = state_27727;
(statearr_27732[(7)] = inst_27590__$1);

(statearr_27732[(8)] = inst_27588__$1);

(statearr_27732[(9)] = inst_27589__$1);

(statearr_27732[(10)] = inst_27591__$1);

(statearr_27732[(11)] = inst_27597);

return statearr_27732;
})();
var statearr_27733_27819 = state_27727__$1;
(statearr_27733_27819[(2)] = null);

(statearr_27733_27819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (20))){
var inst_27631 = (state_27727[(12)]);
var inst_27639 = figwheel.client.file_reloading.sort_files.call(null,inst_27631);
var state_27727__$1 = state_27727;
var statearr_27734_27820 = state_27727__$1;
(statearr_27734_27820[(2)] = inst_27639);

(statearr_27734_27820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (27))){
var state_27727__$1 = state_27727;
var statearr_27735_27821 = state_27727__$1;
(statearr_27735_27821[(2)] = null);

(statearr_27735_27821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (1))){
var inst_27580 = (state_27727[(13)]);
var inst_27577 = before_jsload.call(null,files);
var inst_27578 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27579 = (function (){return ((function (inst_27580,inst_27577,inst_27578,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27322_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27322_SHARP_);
});
;})(inst_27580,inst_27577,inst_27578,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27580__$1 = cljs.core.filter.call(null,inst_27579,files);
var inst_27581 = cljs.core.not_empty.call(null,inst_27580__$1);
var state_27727__$1 = (function (){var statearr_27736 = state_27727;
(statearr_27736[(14)] = inst_27577);

(statearr_27736[(15)] = inst_27578);

(statearr_27736[(13)] = inst_27580__$1);

return statearr_27736;
})();
if(cljs.core.truth_(inst_27581)){
var statearr_27737_27822 = state_27727__$1;
(statearr_27737_27822[(1)] = (2));

} else {
var statearr_27738_27823 = state_27727__$1;
(statearr_27738_27823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (24))){
var state_27727__$1 = state_27727;
var statearr_27739_27824 = state_27727__$1;
(statearr_27739_27824[(2)] = null);

(statearr_27739_27824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (39))){
var inst_27681 = (state_27727[(16)]);
var state_27727__$1 = state_27727;
var statearr_27740_27825 = state_27727__$1;
(statearr_27740_27825[(2)] = inst_27681);

(statearr_27740_27825[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (46))){
var inst_27722 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27741_27826 = state_27727__$1;
(statearr_27741_27826[(2)] = inst_27722);

(statearr_27741_27826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (4))){
var inst_27625 = (state_27727[(2)]);
var inst_27626 = cljs.core.List.EMPTY;
var inst_27627 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27626);
var inst_27628 = (function (){return ((function (inst_27625,inst_27626,inst_27627,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27323_SHARP_){
var and__18528__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27323_SHARP_);
if(cljs.core.truth_(and__18528__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27323_SHARP_));
} else {
return and__18528__auto__;
}
});
;})(inst_27625,inst_27626,inst_27627,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27629 = cljs.core.filter.call(null,inst_27628,files);
var inst_27630 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27631 = cljs.core.concat.call(null,inst_27629,inst_27630);
var state_27727__$1 = (function (){var statearr_27742 = state_27727;
(statearr_27742[(12)] = inst_27631);

(statearr_27742[(17)] = inst_27625);

(statearr_27742[(18)] = inst_27627);

return statearr_27742;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27743_27827 = state_27727__$1;
(statearr_27743_27827[(1)] = (16));

} else {
var statearr_27744_27828 = state_27727__$1;
(statearr_27744_27828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (15))){
var inst_27615 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27745_27829 = state_27727__$1;
(statearr_27745_27829[(2)] = inst_27615);

(statearr_27745_27829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (21))){
var inst_27641 = (state_27727[(19)]);
var inst_27641__$1 = (state_27727[(2)]);
var inst_27642 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27641__$1);
var state_27727__$1 = (function (){var statearr_27746 = state_27727;
(statearr_27746[(19)] = inst_27641__$1);

return statearr_27746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27727__$1,(22),inst_27642);
} else {
if((state_val_27728 === (31))){
var inst_27725 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27727__$1,inst_27725);
} else {
if((state_val_27728 === (32))){
var inst_27681 = (state_27727[(16)]);
var inst_27686 = inst_27681.cljs$lang$protocol_mask$partition0$;
var inst_27687 = (inst_27686 & (64));
var inst_27688 = inst_27681.cljs$core$ISeq$;
var inst_27689 = (inst_27687) || (inst_27688);
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27689)){
var statearr_27747_27830 = state_27727__$1;
(statearr_27747_27830[(1)] = (35));

} else {
var statearr_27748_27831 = state_27727__$1;
(statearr_27748_27831[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (40))){
var inst_27702 = (state_27727[(20)]);
var inst_27701 = (state_27727[(2)]);
var inst_27702__$1 = cljs.core.get.call(null,inst_27701,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27703 = cljs.core.get.call(null,inst_27701,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27704 = cljs.core.not_empty.call(null,inst_27702__$1);
var state_27727__$1 = (function (){var statearr_27749 = state_27727;
(statearr_27749[(20)] = inst_27702__$1);

(statearr_27749[(21)] = inst_27703);

return statearr_27749;
})();
if(cljs.core.truth_(inst_27704)){
var statearr_27750_27832 = state_27727__$1;
(statearr_27750_27832[(1)] = (41));

} else {
var statearr_27751_27833 = state_27727__$1;
(statearr_27751_27833[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (33))){
var state_27727__$1 = state_27727;
var statearr_27752_27834 = state_27727__$1;
(statearr_27752_27834[(2)] = false);

(statearr_27752_27834[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (13))){
var inst_27601 = (state_27727[(22)]);
var inst_27605 = cljs.core.chunk_first.call(null,inst_27601);
var inst_27606 = cljs.core.chunk_rest.call(null,inst_27601);
var inst_27607 = cljs.core.count.call(null,inst_27605);
var inst_27588 = inst_27606;
var inst_27589 = inst_27605;
var inst_27590 = inst_27607;
var inst_27591 = (0);
var state_27727__$1 = (function (){var statearr_27753 = state_27727;
(statearr_27753[(7)] = inst_27590);

(statearr_27753[(8)] = inst_27588);

(statearr_27753[(9)] = inst_27589);

(statearr_27753[(10)] = inst_27591);

return statearr_27753;
})();
var statearr_27754_27835 = state_27727__$1;
(statearr_27754_27835[(2)] = null);

(statearr_27754_27835[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (22))){
var inst_27644 = (state_27727[(23)]);
var inst_27649 = (state_27727[(24)]);
var inst_27641 = (state_27727[(19)]);
var inst_27645 = (state_27727[(25)]);
var inst_27644__$1 = (state_27727[(2)]);
var inst_27645__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27644__$1);
var inst_27646 = (function (){var all_files = inst_27641;
var res_SINGLEQUOTE_ = inst_27644__$1;
var res = inst_27645__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27644,inst_27649,inst_27641,inst_27645,inst_27644__$1,inst_27645__$1,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27324_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27324_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27644,inst_27649,inst_27641,inst_27645,inst_27644__$1,inst_27645__$1,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27647 = cljs.core.filter.call(null,inst_27646,inst_27644__$1);
var inst_27648 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27649__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27648);
var inst_27650 = cljs.core.not_empty.call(null,inst_27649__$1);
var state_27727__$1 = (function (){var statearr_27755 = state_27727;
(statearr_27755[(23)] = inst_27644__$1);

(statearr_27755[(24)] = inst_27649__$1);

(statearr_27755[(26)] = inst_27647);

(statearr_27755[(25)] = inst_27645__$1);

return statearr_27755;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27756_27836 = state_27727__$1;
(statearr_27756_27836[(1)] = (23));

} else {
var statearr_27757_27837 = state_27727__$1;
(statearr_27757_27837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (36))){
var state_27727__$1 = state_27727;
var statearr_27758_27838 = state_27727__$1;
(statearr_27758_27838[(2)] = false);

(statearr_27758_27838[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (41))){
var inst_27702 = (state_27727[(20)]);
var inst_27706 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27707 = cljs.core.map.call(null,inst_27706,inst_27702);
var inst_27708 = cljs.core.pr_str.call(null,inst_27707);
var inst_27709 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27708)].join('');
var inst_27710 = figwheel.client.utils.log.call(null,inst_27709);
var state_27727__$1 = state_27727;
var statearr_27759_27839 = state_27727__$1;
(statearr_27759_27839[(2)] = inst_27710);

(statearr_27759_27839[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (43))){
var inst_27703 = (state_27727[(21)]);
var inst_27713 = (state_27727[(2)]);
var inst_27714 = cljs.core.not_empty.call(null,inst_27703);
var state_27727__$1 = (function (){var statearr_27760 = state_27727;
(statearr_27760[(27)] = inst_27713);

return statearr_27760;
})();
if(cljs.core.truth_(inst_27714)){
var statearr_27761_27840 = state_27727__$1;
(statearr_27761_27840[(1)] = (44));

} else {
var statearr_27762_27841 = state_27727__$1;
(statearr_27762_27841[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (29))){
var inst_27681 = (state_27727[(16)]);
var inst_27644 = (state_27727[(23)]);
var inst_27649 = (state_27727[(24)]);
var inst_27647 = (state_27727[(26)]);
var inst_27641 = (state_27727[(19)]);
var inst_27645 = (state_27727[(25)]);
var inst_27677 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27680 = (function (){var all_files = inst_27641;
var res_SINGLEQUOTE_ = inst_27644;
var res = inst_27645;
var files_not_loaded = inst_27647;
var dependencies_that_loaded = inst_27649;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27677,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27679){
var map__27763 = p__27679;
var map__27763__$1 = ((((!((map__27763 == null)))?((((map__27763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27763):map__27763);
var namespace = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27681,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27677,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27681__$1 = cljs.core.group_by.call(null,inst_27680,inst_27647);
var inst_27683 = (inst_27681__$1 == null);
var inst_27684 = cljs.core.not.call(null,inst_27683);
var state_27727__$1 = (function (){var statearr_27765 = state_27727;
(statearr_27765[(16)] = inst_27681__$1);

(statearr_27765[(28)] = inst_27677);

return statearr_27765;
})();
if(inst_27684){
var statearr_27766_27842 = state_27727__$1;
(statearr_27766_27842[(1)] = (32));

} else {
var statearr_27767_27843 = state_27727__$1;
(statearr_27767_27843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (44))){
var inst_27703 = (state_27727[(21)]);
var inst_27716 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27703);
var inst_27717 = cljs.core.pr_str.call(null,inst_27716);
var inst_27718 = [cljs.core.str("not required: "),cljs.core.str(inst_27717)].join('');
var inst_27719 = figwheel.client.utils.log.call(null,inst_27718);
var state_27727__$1 = state_27727;
var statearr_27768_27844 = state_27727__$1;
(statearr_27768_27844[(2)] = inst_27719);

(statearr_27768_27844[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (6))){
var inst_27622 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27769_27845 = state_27727__$1;
(statearr_27769_27845[(2)] = inst_27622);

(statearr_27769_27845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (28))){
var inst_27647 = (state_27727[(26)]);
var inst_27674 = (state_27727[(2)]);
var inst_27675 = cljs.core.not_empty.call(null,inst_27647);
var state_27727__$1 = (function (){var statearr_27770 = state_27727;
(statearr_27770[(29)] = inst_27674);

return statearr_27770;
})();
if(cljs.core.truth_(inst_27675)){
var statearr_27771_27846 = state_27727__$1;
(statearr_27771_27846[(1)] = (29));

} else {
var statearr_27772_27847 = state_27727__$1;
(statearr_27772_27847[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (25))){
var inst_27645 = (state_27727[(25)]);
var inst_27661 = (state_27727[(2)]);
var inst_27662 = cljs.core.not_empty.call(null,inst_27645);
var state_27727__$1 = (function (){var statearr_27773 = state_27727;
(statearr_27773[(30)] = inst_27661);

return statearr_27773;
})();
if(cljs.core.truth_(inst_27662)){
var statearr_27774_27848 = state_27727__$1;
(statearr_27774_27848[(1)] = (26));

} else {
var statearr_27775_27849 = state_27727__$1;
(statearr_27775_27849[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (34))){
var inst_27696 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27696)){
var statearr_27776_27850 = state_27727__$1;
(statearr_27776_27850[(1)] = (38));

} else {
var statearr_27777_27851 = state_27727__$1;
(statearr_27777_27851[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (17))){
var state_27727__$1 = state_27727;
var statearr_27778_27852 = state_27727__$1;
(statearr_27778_27852[(2)] = recompile_dependents);

(statearr_27778_27852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (3))){
var state_27727__$1 = state_27727;
var statearr_27779_27853 = state_27727__$1;
(statearr_27779_27853[(2)] = null);

(statearr_27779_27853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (12))){
var inst_27618 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27780_27854 = state_27727__$1;
(statearr_27780_27854[(2)] = inst_27618);

(statearr_27780_27854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (2))){
var inst_27580 = (state_27727[(13)]);
var inst_27587 = cljs.core.seq.call(null,inst_27580);
var inst_27588 = inst_27587;
var inst_27589 = null;
var inst_27590 = (0);
var inst_27591 = (0);
var state_27727__$1 = (function (){var statearr_27781 = state_27727;
(statearr_27781[(7)] = inst_27590);

(statearr_27781[(8)] = inst_27588);

(statearr_27781[(9)] = inst_27589);

(statearr_27781[(10)] = inst_27591);

return statearr_27781;
})();
var statearr_27782_27855 = state_27727__$1;
(statearr_27782_27855[(2)] = null);

(statearr_27782_27855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (23))){
var inst_27644 = (state_27727[(23)]);
var inst_27649 = (state_27727[(24)]);
var inst_27647 = (state_27727[(26)]);
var inst_27641 = (state_27727[(19)]);
var inst_27645 = (state_27727[(25)]);
var inst_27652 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27654 = (function (){var all_files = inst_27641;
var res_SINGLEQUOTE_ = inst_27644;
var res = inst_27645;
var files_not_loaded = inst_27647;
var dependencies_that_loaded = inst_27649;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27652,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27653){
var map__27783 = p__27653;
var map__27783__$1 = ((((!((map__27783 == null)))?((((map__27783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783):map__27783);
var request_url = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27652,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27655 = cljs.core.reverse.call(null,inst_27649);
var inst_27656 = cljs.core.map.call(null,inst_27654,inst_27655);
var inst_27657 = cljs.core.pr_str.call(null,inst_27656);
var inst_27658 = figwheel.client.utils.log.call(null,inst_27657);
var state_27727__$1 = (function (){var statearr_27785 = state_27727;
(statearr_27785[(31)] = inst_27652);

return statearr_27785;
})();
var statearr_27786_27856 = state_27727__$1;
(statearr_27786_27856[(2)] = inst_27658);

(statearr_27786_27856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (35))){
var state_27727__$1 = state_27727;
var statearr_27787_27857 = state_27727__$1;
(statearr_27787_27857[(2)] = true);

(statearr_27787_27857[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (19))){
var inst_27631 = (state_27727[(12)]);
var inst_27637 = figwheel.client.file_reloading.expand_files.call(null,inst_27631);
var state_27727__$1 = state_27727;
var statearr_27788_27858 = state_27727__$1;
(statearr_27788_27858[(2)] = inst_27637);

(statearr_27788_27858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (11))){
var state_27727__$1 = state_27727;
var statearr_27789_27859 = state_27727__$1;
(statearr_27789_27859[(2)] = null);

(statearr_27789_27859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (9))){
var inst_27620 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27790_27860 = state_27727__$1;
(statearr_27790_27860[(2)] = inst_27620);

(statearr_27790_27860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (5))){
var inst_27590 = (state_27727[(7)]);
var inst_27591 = (state_27727[(10)]);
var inst_27593 = (inst_27591 < inst_27590);
var inst_27594 = inst_27593;
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27594)){
var statearr_27791_27861 = state_27727__$1;
(statearr_27791_27861[(1)] = (7));

} else {
var statearr_27792_27862 = state_27727__$1;
(statearr_27792_27862[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (14))){
var inst_27601 = (state_27727[(22)]);
var inst_27610 = cljs.core.first.call(null,inst_27601);
var inst_27611 = figwheel.client.file_reloading.eval_body.call(null,inst_27610,opts);
var inst_27612 = cljs.core.next.call(null,inst_27601);
var inst_27588 = inst_27612;
var inst_27589 = null;
var inst_27590 = (0);
var inst_27591 = (0);
var state_27727__$1 = (function (){var statearr_27793 = state_27727;
(statearr_27793[(7)] = inst_27590);

(statearr_27793[(8)] = inst_27588);

(statearr_27793[(9)] = inst_27589);

(statearr_27793[(10)] = inst_27591);

(statearr_27793[(32)] = inst_27611);

return statearr_27793;
})();
var statearr_27794_27863 = state_27727__$1;
(statearr_27794_27863[(2)] = null);

(statearr_27794_27863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (45))){
var state_27727__$1 = state_27727;
var statearr_27795_27864 = state_27727__$1;
(statearr_27795_27864[(2)] = null);

(statearr_27795_27864[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (26))){
var inst_27644 = (state_27727[(23)]);
var inst_27649 = (state_27727[(24)]);
var inst_27647 = (state_27727[(26)]);
var inst_27641 = (state_27727[(19)]);
var inst_27645 = (state_27727[(25)]);
var inst_27664 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27666 = (function (){var all_files = inst_27641;
var res_SINGLEQUOTE_ = inst_27644;
var res = inst_27645;
var files_not_loaded = inst_27647;
var dependencies_that_loaded = inst_27649;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27664,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27665){
var map__27796 = p__27665;
var map__27796__$1 = ((((!((map__27796 == null)))?((((map__27796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);
var namespace = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27664,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27667 = cljs.core.map.call(null,inst_27666,inst_27645);
var inst_27668 = cljs.core.pr_str.call(null,inst_27667);
var inst_27669 = figwheel.client.utils.log.call(null,inst_27668);
var inst_27670 = (function (){var all_files = inst_27641;
var res_SINGLEQUOTE_ = inst_27644;
var res = inst_27645;
var files_not_loaded = inst_27647;
var dependencies_that_loaded = inst_27649;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27664,inst_27666,inst_27667,inst_27668,inst_27669,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27644,inst_27649,inst_27647,inst_27641,inst_27645,inst_27664,inst_27666,inst_27667,inst_27668,inst_27669,state_val_27728,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27671 = setTimeout(inst_27670,(10));
var state_27727__$1 = (function (){var statearr_27798 = state_27727;
(statearr_27798[(33)] = inst_27664);

(statearr_27798[(34)] = inst_27669);

return statearr_27798;
})();
var statearr_27799_27865 = state_27727__$1;
(statearr_27799_27865[(2)] = inst_27671);

(statearr_27799_27865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (16))){
var state_27727__$1 = state_27727;
var statearr_27800_27866 = state_27727__$1;
(statearr_27800_27866[(2)] = reload_dependents);

(statearr_27800_27866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (38))){
var inst_27681 = (state_27727[(16)]);
var inst_27698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27681);
var state_27727__$1 = state_27727;
var statearr_27801_27867 = state_27727__$1;
(statearr_27801_27867[(2)] = inst_27698);

(statearr_27801_27867[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (30))){
var state_27727__$1 = state_27727;
var statearr_27802_27868 = state_27727__$1;
(statearr_27802_27868[(2)] = null);

(statearr_27802_27868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (10))){
var inst_27601 = (state_27727[(22)]);
var inst_27603 = cljs.core.chunked_seq_QMARK_.call(null,inst_27601);
var state_27727__$1 = state_27727;
if(inst_27603){
var statearr_27803_27869 = state_27727__$1;
(statearr_27803_27869[(1)] = (13));

} else {
var statearr_27804_27870 = state_27727__$1;
(statearr_27804_27870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (18))){
var inst_27635 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
if(cljs.core.truth_(inst_27635)){
var statearr_27805_27871 = state_27727__$1;
(statearr_27805_27871[(1)] = (19));

} else {
var statearr_27806_27872 = state_27727__$1;
(statearr_27806_27872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (42))){
var state_27727__$1 = state_27727;
var statearr_27807_27873 = state_27727__$1;
(statearr_27807_27873[(2)] = null);

(statearr_27807_27873[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (37))){
var inst_27693 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27808_27874 = state_27727__$1;
(statearr_27808_27874[(2)] = inst_27693);

(statearr_27808_27874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (8))){
var inst_27588 = (state_27727[(8)]);
var inst_27601 = (state_27727[(22)]);
var inst_27601__$1 = cljs.core.seq.call(null,inst_27588);
var state_27727__$1 = (function (){var statearr_27809 = state_27727;
(statearr_27809[(22)] = inst_27601__$1);

return statearr_27809;
})();
if(inst_27601__$1){
var statearr_27810_27875 = state_27727__$1;
(statearr_27810_27875[(1)] = (10));

} else {
var statearr_27811_27876 = state_27727__$1;
(statearr_27811_27876[(1)] = (11));

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
});})(c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21658__auto__,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27815[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto____1 = (function (state_27727){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_27727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__21662__auto__ = e27816;
var statearr_27817_27877 = state_27727;
(statearr_27817_27877[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27727;
state_27727 = G__27878;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto__ = function(state_27727){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto____1.call(this,state_27727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21725__auto__ = (function (){var statearr_27818 = f__21724__auto__.call(null);
(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__,map__27573,map__27573__$1,opts,before_jsload,on_jsload,reload_dependents,map__27574,map__27574__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21723__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27881,link){
var map__27884 = p__27881;
var map__27884__$1 = ((((!((map__27884 == null)))?((((map__27884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27884):map__27884);
var file = cljs.core.get.call(null,map__27884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27884,map__27884__$1,file){
return (function (p1__27879_SHARP_,p2__27880_SHARP_){
if(cljs.core._EQ_.call(null,p1__27879_SHARP_,p2__27880_SHARP_)){
return p1__27879_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27884,map__27884__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27890){
var map__27891 = p__27890;
var map__27891__$1 = ((((!((map__27891 == null)))?((((map__27891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27891):map__27891);
var match_length = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27886_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27886_SHARP_);
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
var args27893 = [];
var len__19579__auto___27896 = arguments.length;
var i__19580__auto___27897 = (0);
while(true){
if((i__19580__auto___27897 < len__19579__auto___27896)){
args27893.push((arguments[i__19580__auto___27897]));

var G__27898 = (i__19580__auto___27897 + (1));
i__19580__auto___27897 = G__27898;
continue;
} else {
}
break;
}

var G__27895 = args27893.length;
switch (G__27895) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27893.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27900_SHARP_,p2__27901_SHARP_){
return cljs.core.assoc.call(null,p1__27900_SHARP_,cljs.core.get.call(null,p2__27901_SHARP_,key),p2__27901_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27902){
var map__27905 = p__27902;
var map__27905__$1 = ((((!((map__27905 == null)))?((((map__27905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27905):map__27905);
var f_data = map__27905__$1;
var file = cljs.core.get.call(null,map__27905__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27907,files_msg){
var map__27914 = p__27907;
var map__27914__$1 = ((((!((map__27914 == null)))?((((map__27914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27914):map__27914);
var opts = map__27914__$1;
var on_cssload = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27916_27920 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27917_27921 = null;
var count__27918_27922 = (0);
var i__27919_27923 = (0);
while(true){
if((i__27919_27923 < count__27918_27922)){
var f_27924 = cljs.core._nth.call(null,chunk__27917_27921,i__27919_27923);
figwheel.client.file_reloading.reload_css_file.call(null,f_27924);

var G__27925 = seq__27916_27920;
var G__27926 = chunk__27917_27921;
var G__27927 = count__27918_27922;
var G__27928 = (i__27919_27923 + (1));
seq__27916_27920 = G__27925;
chunk__27917_27921 = G__27926;
count__27918_27922 = G__27927;
i__27919_27923 = G__27928;
continue;
} else {
var temp__4425__auto___27929 = cljs.core.seq.call(null,seq__27916_27920);
if(temp__4425__auto___27929){
var seq__27916_27930__$1 = temp__4425__auto___27929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27916_27930__$1)){
var c__19324__auto___27931 = cljs.core.chunk_first.call(null,seq__27916_27930__$1);
var G__27932 = cljs.core.chunk_rest.call(null,seq__27916_27930__$1);
var G__27933 = c__19324__auto___27931;
var G__27934 = cljs.core.count.call(null,c__19324__auto___27931);
var G__27935 = (0);
seq__27916_27920 = G__27932;
chunk__27917_27921 = G__27933;
count__27918_27922 = G__27934;
i__27919_27923 = G__27935;
continue;
} else {
var f_27936 = cljs.core.first.call(null,seq__27916_27930__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27936);

var G__27937 = cljs.core.next.call(null,seq__27916_27930__$1);
var G__27938 = null;
var G__27939 = (0);
var G__27940 = (0);
seq__27916_27920 = G__27937;
chunk__27917_27921 = G__27938;
count__27918_27922 = G__27939;
i__27919_27923 = G__27940;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27914,map__27914__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27914,map__27914__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map