// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('cljs.core');
p3r50na.apps.bookof5rinds.client.game.collision.block_intersections = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections(player,blocks,blocksize){
var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__34841(s__34842){
return (new cljs.core.LazySeq(null,(function (){
var s__34842__$1 = s__34842;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34842__$1);
if(temp__4425__auto__){
var s__34842__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34842__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__34842__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__34844 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__34843 = (0);
while(true){
if((i__34843 < size__20305__auto__)){
var block = cljs.core._nth.call(null,c__20304__auto__,i__34843);
cljs.core.chunk_append.call(null,b__34844,(function (){var map__34853 = player;
var map__34853__$1 = ((((!((map__34853 == null)))?((((map__34853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34853):map__34853);
var px = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__34854 = block;
var map__34854__$1 = ((((!((map__34854 == null)))?((((map__34854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34854):map__34854);
var wx = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + blocksize))) || (((px + psize) < wx)) || ((py > (wy + blocksize))) || (((py + psize) < wy));
})());

var G__34861 = (i__34843 + (1));
i__34843 = G__34861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34844),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__34841.call(null,cljs.core.chunk_rest.call(null,s__34842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34844),null);
}
} else {
var block = cljs.core.first.call(null,s__34842__$2);
return cljs.core.cons.call(null,(function (){var map__34857 = player;
var map__34857__$1 = ((((!((map__34857 == null)))?((((map__34857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34857):map__34857);
var px = cljs.core.get.call(null,map__34857__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__34857__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__34857__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__34858 = block;
var map__34858__$1 = ((((!((map__34858 == null)))?((((map__34858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34858):map__34858);
var wx = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + blocksize))) || (((px + psize) < wx)) || ((py > (wy + blocksize))) || (((py + psize) < wy));
})(),p3r50na$apps$bookof5rinds$client$game$collision$block_intersections_$_iter__34841.call(null,cljs.core.rest.call(null,s__34842__$2)));
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
p3r50na.apps.bookof5rinds.client.game.collision.player_intersects_blocks_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$player_intersects_blocks_QMARK_(player,blocks,blocksize){
var intersections = p3r50na.apps.bookof5rinds.client.game.collision.block_intersections.call(null,player,blocks,blocksize);
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
p3r50na.apps.bookof5rinds.client.game.collision.player_intersects_boundary_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$collision$player_intersects_boundary_QMARK_(player,map){
var map__34865 = player;
var map__34865__$1 = ((((!((map__34865 == null)))?((((map__34865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34865):map__34865);
var px = cljs.core.get.call(null,map__34865__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__34865__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__34865__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__34866 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(map);
var mw = cljs.core.nth.call(null,vec__34866,(0),null);
var mh = cljs.core.nth.call(null,vec__34866,(1),null);
return ((px < (0))) || ((py < (0))) || (((px + psize) > mw)) || (((py + psize) > mh));
});

//# sourceMappingURL=collision.js.map