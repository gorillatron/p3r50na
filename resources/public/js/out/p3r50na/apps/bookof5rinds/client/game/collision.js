// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('cljs.core');
p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$intersects_QMARK_(rect_a,rect_b){
var map__31183 = rect_a;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var ax = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var asize = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__31184 = rect_b;
var map__31184__$1 = ((((!((map__31184 == null)))?((((map__31184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31184):map__31184);
var bx = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bsize = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return ((ax > (bx + bsize))) || (((ax + asize) < bx)) || ((ay > (by + bsize))) || (((ay + asize) < by));
});
p3r50na.apps.bookof5rinds.client.game.collision.block_intersections = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections(rect,blocks,blocksize){
var iter__20308__auto__ = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__31191(s__31192){
return (new cljs.core.LazySeq(null,(function (){
var s__31192__$1 = s__31192;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31192__$1);
if(temp__4425__auto__){
var s__31192__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31192__$2)){
var c__20306__auto__ = cljs.core.chunk_first.call(null,s__31192__$2);
var size__20307__auto__ = cljs.core.count.call(null,c__20306__auto__);
var b__31194 = cljs.core.chunk_buffer.call(null,size__20307__auto__);
if((function (){var i__31193 = (0);
while(true){
if((i__31193 < size__20307__auto__)){
var block = cljs.core._nth.call(null,c__20306__auto__,i__31193);
cljs.core.chunk_append.call(null,b__31194,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)));

var G__31195 = (i__31193 + (1));
i__31193 = G__31195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31194),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__31191.call(null,cljs.core.chunk_rest.call(null,s__31192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31194),null);
}
} else {
var block = cljs.core.first.call(null,s__31192__$2);
return cljs.core.cons.call(null,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__31191.call(null,cljs.core.rest.call(null,s__31192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20308__auto__.call(null,blocks);
});
p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_blocks_QMARK_(rect,blocks,blocksize){
var intersections = p3r50na.apps.bookof5rinds.client.game.collision.block_intersections.call(null,rect,blocks,blocksize);
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_boundary_QMARK_(rect,map){
var map__31199 = rect;
var map__31199__$1 = ((((!((map__31199 == null)))?((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31199):map__31199);
var px = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__31200 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(map);
var mw = cljs.core.nth.call(null,vec__31200,(0),null);
var mh = cljs.core.nth.call(null,vec__31200,(1),null);
return ((px < (0))) || ((py < (0))) || (((px + psize) > mw)) || (((py + psize) > mh));
});

//# sourceMappingURL=collision.js.map