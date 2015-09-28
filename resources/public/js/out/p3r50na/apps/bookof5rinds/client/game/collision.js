// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('cljs.core');
p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$intersects_QMARK_(rect_a,rect_b){
var map__49106 = rect_a;
var map__49106__$1 = ((((!((map__49106 == null)))?((((map__49106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49106):map__49106);
var ax = cljs.core.get.call(null,map__49106__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__49106__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var asize = cljs.core.get.call(null,map__49106__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__49107 = rect_b;
var map__49107__$1 = ((((!((map__49107 == null)))?((((map__49107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49107):map__49107);
var bx = cljs.core.get.call(null,map__49107__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__49107__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bsize = cljs.core.get.call(null,map__49107__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return ((ax > (bx + bsize))) || (((ax + asize) < bx)) || ((ay > (by + bsize))) || (((ay + asize) < by));
});
p3r50na.apps.bookof5rinds.client.game.collision.block_intersections = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections(rect,blocks,blocksize){
var iter__20308__auto__ = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__49114(s__49115){
return (new cljs.core.LazySeq(null,(function (){
var s__49115__$1 = s__49115;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__49115__$1);
if(temp__4425__auto__){
var s__49115__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49115__$2)){
var c__20306__auto__ = cljs.core.chunk_first.call(null,s__49115__$2);
var size__20307__auto__ = cljs.core.count.call(null,c__20306__auto__);
var b__49117 = cljs.core.chunk_buffer.call(null,size__20307__auto__);
if((function (){var i__49116 = (0);
while(true){
if((i__49116 < size__20307__auto__)){
var block = cljs.core._nth.call(null,c__20306__auto__,i__49116);
cljs.core.chunk_append.call(null,b__49117,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)));

var G__49118 = (i__49116 + (1));
i__49116 = G__49118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49117),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__49114.call(null,cljs.core.chunk_rest.call(null,s__49115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49117),null);
}
} else {
var block = cljs.core.first.call(null,s__49115__$2);
return cljs.core.cons.call(null,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__49114.call(null,cljs.core.rest.call(null,s__49115__$2)));
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
p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_rects_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_rects_QMARK_(rect,rects){
var intersections = (function (){var iter__20308__auto__ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_rects_QMARK__$_iter__49123(s__49124){
return (new cljs.core.LazySeq(null,(function (){
var s__49124__$1 = s__49124;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__49124__$1);
if(temp__4425__auto__){
var s__49124__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49124__$2)){
var c__20306__auto__ = cljs.core.chunk_first.call(null,s__49124__$2);
var size__20307__auto__ = cljs.core.count.call(null,c__20306__auto__);
var b__49126 = cljs.core.chunk_buffer.call(null,size__20307__auto__);
if((function (){var i__49125 = (0);
while(true){
if((i__49125 < size__20307__auto__)){
var rect_cand = cljs.core._nth.call(null,c__20306__auto__,i__49125);
cljs.core.chunk_append.call(null,b__49126,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,rect_cand));

var G__49127 = (i__49125 + (1));
i__49125 = G__49127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49126),p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_rects_QMARK__$_iter__49123.call(null,cljs.core.chunk_rest.call(null,s__49124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49126),null);
}
} else {
var rect_cand = cljs.core.first.call(null,s__49124__$2);
return cljs.core.cons.call(null,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_.call(null,rect,rect_cand),p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_rects_QMARK__$_iter__49123.call(null,cljs.core.rest.call(null,s__49124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20308__auto__.call(null,rects);
})();
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$rect_intersects_boundary_QMARK_(rect,map){
var map__49131 = rect;
var map__49131__$1 = ((((!((map__49131 == null)))?((((map__49131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49131):map__49131);
var px = cljs.core.get.call(null,map__49131__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__49131__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__49131__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__49132 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(map);
var mw = cljs.core.nth.call(null,vec__49132,(0),null);
var mh = cljs.core.nth.call(null,vec__49132,(1),null);
return ((px < (0))) || ((py < (0))) || (((px + psize) > mw)) || (((py + psize) > mh));
});

//# sourceMappingURL=collision.js.map