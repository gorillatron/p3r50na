// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('cljs.core');
p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$intersects_QMARK_(rect_a,rect_b){
var map__46854 = rect_a;
var map__46854__$1 = ((((!((map__46854 == null)))?((((map__46854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46854):map__46854);
var ax = cljs.core.get.call(null,map__46854__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__46854__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var asize = cljs.core.get.call(null,map__46854__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__46855 = rect_b;
var map__46855__$1 = ((((!((map__46855 == null)))?((((map__46855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46855):map__46855);
var bx = cljs.core.get.call(null,map__46855__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__46855__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bsize = cljs.core.get.call(null,map__46855__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return ((ax > (bx + bsize))) || (((ax + asize) < bx)) || ((ay > (by + bsize))) || (((ay + asize) < by));
});
p3r50na.apps.bookof5rinds.client.game.collision.block_intersections = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections(rect,blocks,blocksize){
var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__46862(s__46863){
return (new cljs.core.LazySeq(null,(function (){
var s__46863__$1 = s__46863;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46863__$1);
if(temp__4425__auto__){
var s__46863__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46863__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__46863__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__46865 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__46864 = (0);
while(true){
if((i__46864 < size__20305__auto__)){
var block = cljs.core._nth.call(null,c__20304__auto__,i__46864);
cljs.core.chunk_append.call(null,b__46865,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)));

var G__46866 = (i__46864 + (1));
i__46864 = G__46866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46865),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__46862.call(null,cljs.core.chunk_rest.call(null,s__46863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46865),null);
}
} else {
var block = cljs.core.first.call(null,s__46863__$2);
return cljs.core.cons.call(null,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__46862.call(null,cljs.core.rest.call(null,s__46863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20306__auto__.call(null,blocks);
});
p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_blocks_QMARK_(rect,blocks,blocksize){
var intersections = p3r50na.apps.bookof5rinds.client.game.collision.block_intersections.call(null,rect,blocks,blocksize);
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_boundary_QMARK_(rect,map){
var map__46870 = rect;
var map__46870__$1 = ((((!((map__46870 == null)))?((((map__46870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46870):map__46870);
var px = cljs.core.get.call(null,map__46870__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__46870__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__46870__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__46871 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(map);
var mw = cljs.core.nth.call(null,vec__46871,(0),null);
var mh = cljs.core.nth.call(null,vec__46871,(1),null);
return ((px < (0))) || ((py < (0))) || (((px + psize) > mw)) || (((py + psize) > mh));
});

//# sourceMappingURL=collision.js.map