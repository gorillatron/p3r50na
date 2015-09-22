// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('cljs.core');
p3r50na.apps.bookof5rinds.client.game.collision.block_intersections = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections(rect,blocks,blocksize){
var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__42147(s__42148){
return (new cljs.core.LazySeq(null,(function (){
var s__42148__$1 = s__42148;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42148__$1);
if(temp__4425__auto__){
var s__42148__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42148__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__42148__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__42150 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__42149 = (0);
while(true){
if((i__42149 < size__20305__auto__)){
var block = cljs.core._nth.call(null,c__20304__auto__,i__42149);
cljs.core.chunk_append.call(null,b__42150,(function (){var map__42159 = rect;
var map__42159__$1 = ((((!((map__42159 == null)))?((((map__42159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42159):map__42159);
var px = cljs.core.get.call(null,map__42159__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__42159__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__42159__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__42160 = block;
var map__42160__$1 = ((((!((map__42160 == null)))?((((map__42160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42160):map__42160);
var wx = cljs.core.get.call(null,map__42160__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__42160__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + blocksize))) || (((px + psize) < wx)) || ((py > (wy + blocksize))) || (((py + psize) < wy));
})());

var G__42167 = (i__42149 + (1));
i__42149 = G__42167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42150),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__42147.call(null,cljs.core.chunk_rest.call(null,s__42148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42150),null);
}
} else {
var block = cljs.core.first.call(null,s__42148__$2);
return cljs.core.cons.call(null,(function (){var map__42163 = rect;
var map__42163__$1 = ((((!((map__42163 == null)))?((((map__42163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42163):map__42163);
var px = cljs.core.get.call(null,map__42163__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__42163__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__42163__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__42164 = block;
var map__42164__$1 = ((((!((map__42164 == null)))?((((map__42164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42164):map__42164);
var wx = cljs.core.get.call(null,map__42164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__42164__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + blocksize))) || (((px + psize) < wx)) || ((py > (wy + blocksize))) || (((py + psize) < wy));
})(),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__42147.call(null,cljs.core.rest.call(null,s__42148__$2)));
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
var map__42171 = rect;
var map__42171__$1 = ((((!((map__42171 == null)))?((((map__42171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42171):map__42171);
var px = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__42171__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__42172 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(map);
var mw = cljs.core.nth.call(null,vec__42172,(0),null);
var mh = cljs.core.nth.call(null,vec__42172,(1),null);
return ((px < (0))) || ((py < (0))) || (((px + psize) > mw)) || (((py + psize) > mh));
});

//# sourceMappingURL=collision.js.map