// Compiled by ClojureScript 1.7.48 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__27943_SHARP_){
return (max === p1__27943_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(){
var args27944 = [];
var len__19579__auto___27950 = arguments.length;
var i__19580__auto___27951 = (0);
while(true){
if((i__19580__auto___27951 < len__19579__auto___27950)){
args27944.push((arguments[i__19580__auto___27951]));

var G__27952 = (i__19580__auto___27951 + (1));
i__19580__auto___27951 = G__27952;
continue;
} else {
}
break;
}

var G__27949 = args27944.length;
switch (G__27949) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19598__auto__ = (new cljs.core.IndexedSeq(args27944.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19598__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq27945){
var G__27946 = cljs.core.first.call(null,seq27945);
var seq27945__$1 = cljs.core.next.call(null,seq27945);
var G__27947 = cljs.core.first.call(null,seq27945__$1);
var seq27945__$2 = cljs.core.next.call(null,seq27945__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__27946,G__27947,seq27945__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(){
var args27955 = [];
var len__19579__auto___27961 = arguments.length;
var i__19580__auto___27962 = (0);
while(true){
if((i__19580__auto___27962 < len__19579__auto___27961)){
args27955.push((arguments[i__19580__auto___27962]));

var G__27963 = (i__19580__auto___27962 + (1));
i__19580__auto___27962 = G__27963;
continue;
} else {
}
break;
}

var G__27960 = args27955.length;
switch (G__27960) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19598__auto__ = (new cljs.core.IndexedSeq(args27955.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19598__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__27965 = s2;
var G__27966 = s1;
s1 = G__27965;
s2 = G__27966;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__27954_SHARP_){
return (- cljs.core.count.call(null,p1__27954_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq27956){
var G__27957 = cljs.core.first.call(null,seq27956);
var seq27956__$1 = cljs.core.next.call(null,seq27956);
var G__27958 = cljs.core.first.call(null,seq27956__$1);
var seq27956__$2 = cljs.core.next.call(null,seq27956__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__27957,G__27958,seq27956__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(){
var args27967 = [];
var len__19579__auto___27973 = arguments.length;
var i__19580__auto___27974 = (0);
while(true){
if((i__19580__auto___27974 < len__19579__auto___27973)){
args27967.push((arguments[i__19580__auto___27974]));

var G__27975 = (i__19580__auto___27974 + (1));
i__19580__auto___27974 = G__27975;
continue;
} else {
}
break;
}

var G__27972 = args27967.length;
switch (G__27972) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19598__auto__ = (new cljs.core.IndexedSeq(args27967.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19598__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq27968){
var G__27969 = cljs.core.first.call(null,seq27968);
var seq27968__$1 = cljs.core.next.call(null,seq27968);
var G__27970 = cljs.core.first.call(null,seq27968__$1);
var seq27968__$2 = cljs.core.next.call(null,seq27968__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__27969,G__27970,seq27968__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27977_SHARP_){
return cljs.core.select_keys.call(null,p1__27977_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__27980){
var vec__27981 = p__27980;
var old = cljs.core.nth.call(null,vec__27981,(0),null);
var new$ = cljs.core.nth.call(null,vec__27981,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27982_SHARP_){
return clojure.set.rename_keys.call(null,p1__27982_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__27985){
var vec__27986 = p__27985;
var k = cljs.core.nth.call(null,vec__27986,(0),null);
var v = cljs.core.nth.call(null,vec__27986,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function clojure$set$join(){
var args27991 = [];
var len__19579__auto___27996 = arguments.length;
var i__19580__auto___27997 = (0);
while(true){
if((i__19580__auto___27997 < len__19579__auto___27996)){
args27991.push((arguments[i__19580__auto___27997]));

var G__27998 = (i__19580__auto___27997 + (1));
i__19580__auto___27997 = G__27998;
continue;
} else {
}
break;
}

var G__27993 = args27991.length;
switch (G__27993) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27991.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__27994 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__27994,(0),null);
var s = cljs.core.nth.call(null,vec__27994,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__27994,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__27994,r,s,idx){
return (function (p1__27987_SHARP_,p2__27988_SHARP_){
return cljs.core.conj.call(null,p1__27987_SHARP_,cljs.core.merge.call(null,p2__27988_SHARP_,x));
});})(found,ks,vec__27994,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__27994,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__27995 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__27995,(0),null);
var s = cljs.core.nth.call(null,vec__27995,(1),null);
var k = cljs.core.nth.call(null,vec__27995,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__27995,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__27995,r,s,k,idx){
return (function (p1__27989_SHARP_,p2__27990_SHARP_){
return cljs.core.conj.call(null,p1__27989_SHARP_,cljs.core.merge.call(null,p2__27990_SHARP_,x));
});})(found,vec__27995,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__27995,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__28000_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__28000_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__28001_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__28001_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map