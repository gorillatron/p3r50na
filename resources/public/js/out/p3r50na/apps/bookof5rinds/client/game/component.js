// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.maps.level1');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('p3r50na.apps.bookof5rinds.client.game.map');
goog.require('quil.core');
goog.require('cljs.core.async');
goog.require('quil.middleware');
goog.require('om.core');

/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} size
* @param {*} speed
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.component.Player = (function (x,y,size,speed,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.size = size;
this.speed = speed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20148__auto__,k__20149__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return cljs.core._lookup.call(null,this__20148__auto____$1,k__20149__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20150__auto__,k57730,else__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
var G__57732 = (((k57730 instanceof cljs.core.Keyword))?k57730.fqn:null);
switch (G__57732) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "size":
return self__.size;

break;
case "speed":
return self__.speed;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k57730,else__20151__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20162__auto__,writer__20163__auto__,opts__20164__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
var pr_pair__20165__auto__ = ((function (this__20162__auto____$1){
return (function (keyval__20166__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20163__auto__,cljs.core.pr_writer,""," ","",opts__20164__auto__,keyval__20166__auto__);
});})(this__20162__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20163__auto__,pr_pair__20165__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20164__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57729){
var self__ = this;
var G__57729__$1 = this;
return (new cljs.core.RecordIter((0),G__57729__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20146__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20142__auto__){
var self__ = this;
var this__20142__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20152__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20143__auto__){
var self__ = this;
var this__20143__auto____$1 = this;
var h__19969__auto__ = self__.__hash;
if(!((h__19969__auto__ == null))){
return h__19969__auto__;
} else {
var h__19969__auto____$1 = cljs.core.hash_imap.call(null,this__20143__auto____$1);
self__.__hash = h__19969__auto____$1;

return h__19969__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20144__auto__,other__20145__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19541__auto__ = other__20145__auto__;
if(cljs.core.truth_(and__19541__auto__)){
var and__19541__auto____$1 = (this__20144__auto____$1.constructor === other__20145__auto__.constructor);
if(and__19541__auto____$1){
return cljs.core.equiv_map.call(null,this__20144__auto____$1,other__20145__auto__);
} else {
return and__19541__auto____$1;
}
} else {
return and__19541__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20157__auto__,k__20158__auto__){
var self__ = this;
var this__20157__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20158__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20157__auto____$1),self__.__meta),k__20158__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20158__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20155__auto__,k__20156__auto__,G__57729){
var self__ = this;
var this__20155__auto____$1 = this;
var pred__57733 = cljs.core.keyword_identical_QMARK_;
var expr__57734 = k__20156__auto__;
if(cljs.core.truth_(pred__57733.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__57734))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__57729,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57733.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__57734))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__57729,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57733.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__57734))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__57729,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57733.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__57734))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__57729,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20156__auto__,G__57729),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20160__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20147__auto__,G__57729){
var self__ = this;
var this__20147__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__57729,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20153__auto__,entry__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20154__auto__)){
return cljs.core._assoc.call(null,this__20153__auto____$1,cljs.core._nth.call(null,entry__20154__auto__,(0)),cljs.core._nth.call(null,entry__20154__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20153__auto____$1,entry__20154__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20182__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20182__auto__,writer__20183__auto__){
return cljs.core._write.call(null,writer__20183__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__57731){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__57731),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__57731),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__57731),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__57731),null,cljs.core.dissoc.call(null,G__57731,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(120));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((5),(5),(10),(1),null,null,null)),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new p3r50na.apps.bookof5rinds.client.game.component.Player((30),(40),(10),(2),null,null,null))], null),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

var seq__57759_57781 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__57760_57782 = null;
var count__57761_57783 = (0);
var i__57762_57784 = (0);
while(true){
if((i__57762_57784 < count__57761_57783)){
var wall_57785 = cljs.core._nth.call(null,chunk__57760_57782,i__57762_57784);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_57785),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_57785),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__57786 = seq__57759_57781;
var G__57787 = chunk__57760_57782;
var G__57788 = count__57761_57783;
var G__57789 = (i__57762_57784 + (1));
seq__57759_57781 = G__57786;
chunk__57760_57782 = G__57787;
count__57761_57783 = G__57788;
i__57762_57784 = G__57789;
continue;
} else {
var temp__4425__auto___57790 = cljs.core.seq.call(null,seq__57759_57781);
if(temp__4425__auto___57790){
var seq__57759_57791__$1 = temp__4425__auto___57790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57759_57791__$1)){
var c__20337__auto___57792 = cljs.core.chunk_first.call(null,seq__57759_57791__$1);
var G__57793 = cljs.core.chunk_rest.call(null,seq__57759_57791__$1);
var G__57794 = c__20337__auto___57792;
var G__57795 = cljs.core.count.call(null,c__20337__auto___57792);
var G__57796 = (0);
seq__57759_57781 = G__57793;
chunk__57760_57782 = G__57794;
count__57761_57783 = G__57795;
i__57762_57784 = G__57796;
continue;
} else {
var wall_57797 = cljs.core.first.call(null,seq__57759_57791__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_57797),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_57797),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__57798 = cljs.core.next.call(null,seq__57759_57791__$1);
var G__57799 = null;
var G__57800 = (0);
var G__57801 = (0);
seq__57759_57781 = G__57798;
chunk__57760_57782 = G__57799;
count__57761_57783 = G__57800;
i__57762_57784 = G__57801;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

var seq__57763_57802 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__57764_57803 = null;
var count__57765_57804 = (0);
var i__57766_57805 = (0);
while(true){
if((i__57766_57805 < count__57765_57804)){
var remote_player_57806 = cljs.core._nth.call(null,chunk__57764_57803,i__57766_57805);
var map__57767_57807 = remote_player_57806;
var map__57767_57808__$1 = ((((!((map__57767_57807 == null)))?((((map__57767_57807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57767_57807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57767_57807):map__57767_57807);
var x_57809 = cljs.core.get.call(null,map__57767_57808__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_57810 = cljs.core.get.call(null,map__57767_57808__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_57811 = cljs.core.get.call(null,map__57767_57808__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_57809,y_57810,size_57811,size_57811);

var G__57812 = seq__57763_57802;
var G__57813 = chunk__57764_57803;
var G__57814 = count__57765_57804;
var G__57815 = (i__57766_57805 + (1));
seq__57763_57802 = G__57812;
chunk__57764_57803 = G__57813;
count__57765_57804 = G__57814;
i__57766_57805 = G__57815;
continue;
} else {
var temp__4425__auto___57816 = cljs.core.seq.call(null,seq__57763_57802);
if(temp__4425__auto___57816){
var seq__57763_57817__$1 = temp__4425__auto___57816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57763_57817__$1)){
var c__20337__auto___57818 = cljs.core.chunk_first.call(null,seq__57763_57817__$1);
var G__57819 = cljs.core.chunk_rest.call(null,seq__57763_57817__$1);
var G__57820 = c__20337__auto___57818;
var G__57821 = cljs.core.count.call(null,c__20337__auto___57818);
var G__57822 = (0);
seq__57763_57802 = G__57819;
chunk__57764_57803 = G__57820;
count__57765_57804 = G__57821;
i__57766_57805 = G__57822;
continue;
} else {
var remote_player_57823 = cljs.core.first.call(null,seq__57763_57817__$1);
var map__57769_57824 = remote_player_57823;
var map__57769_57825__$1 = ((((!((map__57769_57824 == null)))?((((map__57769_57824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57769_57824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57769_57824):map__57769_57824);
var x_57826 = cljs.core.get.call(null,map__57769_57825__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_57827 = cljs.core.get.call(null,map__57769_57825__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_57828 = cljs.core.get.call(null,map__57769_57825__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_57826,y_57827,size_57828,size_57828);

var G__57829 = cljs.core.next.call(null,seq__57763_57817__$1);
var G__57830 = null;
var G__57831 = (0);
var G__57832 = (0);
seq__57763_57802 = G__57829;
chunk__57764_57803 = G__57830;
count__57765_57804 = G__57831;
i__57766_57805 = G__57832;
continue;
}
} else {
}
}
break;
}

var seq__57771_57833 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__57772_57834 = null;
var count__57773_57835 = (0);
var i__57774_57836 = (0);
while(true){
if((i__57774_57836 < count__57773_57835)){
var bullet_57837 = cljs.core._nth.call(null,chunk__57772_57834,i__57774_57836);
var map__57775_57838 = bullet_57837;
var map__57775_57839__$1 = ((((!((map__57775_57838 == null)))?((((map__57775_57838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57775_57838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57775_57838):map__57775_57838);
var bx_57840 = cljs.core.get.call(null,map__57775_57839__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_57841 = cljs.core.get.call(null,map__57775_57839__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_57842 = cljs.core.get.call(null,map__57775_57839__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_57840,by_57841,size_57842,size_57842);

var G__57843 = seq__57771_57833;
var G__57844 = chunk__57772_57834;
var G__57845 = count__57773_57835;
var G__57846 = (i__57774_57836 + (1));
seq__57771_57833 = G__57843;
chunk__57772_57834 = G__57844;
count__57773_57835 = G__57845;
i__57774_57836 = G__57846;
continue;
} else {
var temp__4425__auto___57847 = cljs.core.seq.call(null,seq__57771_57833);
if(temp__4425__auto___57847){
var seq__57771_57848__$1 = temp__4425__auto___57847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57771_57848__$1)){
var c__20337__auto___57849 = cljs.core.chunk_first.call(null,seq__57771_57848__$1);
var G__57850 = cljs.core.chunk_rest.call(null,seq__57771_57848__$1);
var G__57851 = c__20337__auto___57849;
var G__57852 = cljs.core.count.call(null,c__20337__auto___57849);
var G__57853 = (0);
seq__57771_57833 = G__57850;
chunk__57772_57834 = G__57851;
count__57773_57835 = G__57852;
i__57774_57836 = G__57853;
continue;
} else {
var bullet_57854 = cljs.core.first.call(null,seq__57771_57848__$1);
var map__57777_57855 = bullet_57854;
var map__57777_57856__$1 = ((((!((map__57777_57855 == null)))?((((map__57777_57855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57777_57855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57777_57855):map__57777_57855);
var bx_57857 = cljs.core.get.call(null,map__57777_57856__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_57858 = cljs.core.get.call(null,map__57777_57856__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_57859 = cljs.core.get.call(null,map__57777_57856__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_57857,by_57858,size_57859,size_57859);

var G__57860 = cljs.core.next.call(null,seq__57771_57848__$1);
var G__57861 = null;
var G__57862 = (0);
var G__57863 = (0);
seq__57771_57833 = G__57860;
chunk__57772_57834 = G__57861;
count__57773_57835 = G__57862;
i__57774_57836 = G__57863;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

var map__57779 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__57779__$1 = ((((!((map__57779 == null)))?((((map__57779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57779):map__57779);
var x = cljs.core.get.call(null,map__57779__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__57779__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__57779__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__57867 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__57867__$1 = ((((!((map__57867 == null)))?((((map__57867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57867):map__57867);
var x = cljs.core.get.call(null,map__57867__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__57867__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__57867__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__57867,map__57867__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__57869 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__57869) {
case "w":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,speed);

break;
case "s":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,speed);

break;
case "a":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,speed);

break;
case "d":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,speed);

break;
default:
return state__$1;

}
})();
if(cljs.core.truth_((function (){var or__19553__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19553__auto__)){
return or__19553__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__57867,map__57867__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__57875 = bullet;
var map__57875__$1 = ((((!((map__57875 == null)))?((((map__57875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57875):map__57875);
var speed = cljs.core.get.call(null,map__57875__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__57876 = cljs.core.get.call(null,map__57875__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__57876,(0),null);
var by = cljs.core.nth.call(null,vec__57876,(1),null);
var lx = cljs.core.get.call(null,map__57875__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__57875__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__57877 = cljs.core.get.call(null,map__57875__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__57877,(0),null);
var gy = cljs.core.nth.call(null,vec__57877,(1),null);
var dx = (gx - bx);
var dy = (gy - by);
var goal_dist = Math.sqrt(((dx * dx) + (dy * dy)));
var ratio = (speed / goal_dist);
var xm = (ratio * dx);
var ym = (ratio * dy);
var nx = (xm + lx);
var ny = (ym + ly);
return cljs.core.assoc.call(null,bullet,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny);
});
p3r50na.apps.bookof5rinds.client.game.component.bullet_hit_player = (function p3r50na$apps$bookof5rinds$client$game$component$bullet_hit_player(bullet){
return cljs.core._EQ_.call(null,null,new cljs.core.Keyword(null,"has-hit-player","has-hit-player",-909237383).cljs$core$IFn$_invoke$arity$1(bullet));
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_locations(state){
var new_bullets = cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19553__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19553__auto__)){
return or__19553__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location,cljs.core.filter.call(null,p3r50na.apps.bookof5rinds.client.game.component.bullet_hit_player,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state))));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),new_bullets);
});
p3r50na.apps.bookof5rinds.client.game.component.player_bullet_hits = (function p3r50na$apps$bookof5rinds$client$game$component$player_bullet_hits(players,bullets){
var seq__57891 = cljs.core.seq.call(null,players);
var chunk__57892 = null;
var count__57893 = (0);
var i__57894 = (0);
while(true){
if((i__57894 < count__57893)){
var player = cljs.core._nth.call(null,chunk__57892,i__57894);
var seq__57895_57903 = cljs.core.seq.call(null,bullets);
var chunk__57896_57904 = null;
var count__57897_57905 = (0);
var i__57898_57906 = (0);
while(true){
if((i__57898_57906 < count__57897_57905)){
var bullet_57907 = cljs.core._nth.call(null,chunk__57896_57904,i__57898_57906);

var G__57908 = seq__57895_57903;
var G__57909 = chunk__57896_57904;
var G__57910 = count__57897_57905;
var G__57911 = (i__57898_57906 + (1));
seq__57895_57903 = G__57908;
chunk__57896_57904 = G__57909;
count__57897_57905 = G__57910;
i__57898_57906 = G__57911;
continue;
} else {
var temp__4425__auto___57912 = cljs.core.seq.call(null,seq__57895_57903);
if(temp__4425__auto___57912){
var seq__57895_57913__$1 = temp__4425__auto___57912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57895_57913__$1)){
var c__20337__auto___57914 = cljs.core.chunk_first.call(null,seq__57895_57913__$1);
var G__57915 = cljs.core.chunk_rest.call(null,seq__57895_57913__$1);
var G__57916 = c__20337__auto___57914;
var G__57917 = cljs.core.count.call(null,c__20337__auto___57914);
var G__57918 = (0);
seq__57895_57903 = G__57915;
chunk__57896_57904 = G__57916;
count__57897_57905 = G__57917;
i__57898_57906 = G__57918;
continue;
} else {
var bullet_57919 = cljs.core.first.call(null,seq__57895_57913__$1);

var G__57920 = cljs.core.next.call(null,seq__57895_57913__$1);
var G__57921 = null;
var G__57922 = (0);
var G__57923 = (0);
seq__57895_57903 = G__57920;
chunk__57896_57904 = G__57921;
count__57897_57905 = G__57922;
i__57898_57906 = G__57923;
continue;
}
} else {
}
}
break;
}

var G__57924 = seq__57891;
var G__57925 = chunk__57892;
var G__57926 = count__57893;
var G__57927 = (i__57894 + (1));
seq__57891 = G__57924;
chunk__57892 = G__57925;
count__57893 = G__57926;
i__57894 = G__57927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__57891);
if(temp__4425__auto__){
var seq__57891__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57891__$1)){
var c__20337__auto__ = cljs.core.chunk_first.call(null,seq__57891__$1);
var G__57928 = cljs.core.chunk_rest.call(null,seq__57891__$1);
var G__57929 = c__20337__auto__;
var G__57930 = cljs.core.count.call(null,c__20337__auto__);
var G__57931 = (0);
seq__57891 = G__57928;
chunk__57892 = G__57929;
count__57893 = G__57930;
i__57894 = G__57931;
continue;
} else {
var player = cljs.core.first.call(null,seq__57891__$1);
var seq__57899_57932 = cljs.core.seq.call(null,bullets);
var chunk__57900_57933 = null;
var count__57901_57934 = (0);
var i__57902_57935 = (0);
while(true){
if((i__57902_57935 < count__57901_57934)){
var bullet_57936 = cljs.core._nth.call(null,chunk__57900_57933,i__57902_57935);

var G__57937 = seq__57899_57932;
var G__57938 = chunk__57900_57933;
var G__57939 = count__57901_57934;
var G__57940 = (i__57902_57935 + (1));
seq__57899_57932 = G__57937;
chunk__57900_57933 = G__57938;
count__57901_57934 = G__57939;
i__57902_57935 = G__57940;
continue;
} else {
var temp__4425__auto___57941__$1 = cljs.core.seq.call(null,seq__57899_57932);
if(temp__4425__auto___57941__$1){
var seq__57899_57942__$1 = temp__4425__auto___57941__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57899_57942__$1)){
var c__20337__auto___57943 = cljs.core.chunk_first.call(null,seq__57899_57942__$1);
var G__57944 = cljs.core.chunk_rest.call(null,seq__57899_57942__$1);
var G__57945 = c__20337__auto___57943;
var G__57946 = cljs.core.count.call(null,c__20337__auto___57943);
var G__57947 = (0);
seq__57899_57932 = G__57944;
chunk__57900_57933 = G__57945;
count__57901_57934 = G__57946;
i__57902_57935 = G__57947;
continue;
} else {
var bullet_57948 = cljs.core.first.call(null,seq__57899_57942__$1);

var G__57949 = cljs.core.next.call(null,seq__57899_57942__$1);
var G__57950 = null;
var G__57951 = (0);
var G__57952 = (0);
seq__57899_57932 = G__57949;
chunk__57900_57933 = G__57950;
count__57901_57934 = G__57951;
i__57902_57935 = G__57952;
continue;
}
} else {
}
}
break;
}

var G__57953 = cljs.core.next.call(null,seq__57891__$1);
var G__57954 = null;
var G__57955 = (0);
var G__57956 = (0);
seq__57891 = G__57953;
chunk__57892 = G__57954;
count__57893 = G__57955;
i__57894 = G__57956;
continue;
}
} else {
return null;
}
}
break;
}
});
p3r50na.apps.bookof5rinds.client.game.component.apply_player_bullet_hits = (function p3r50na$apps$bookof5rinds$client$game$component$apply_player_bullet_hits(state){
var bullethits_57957 = p3r50na.apps.bookof5rinds.client.game.component.player_bullet_hits.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.println.call(null,bullethits_57957);

return state;
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations.call(null,p3r50na.apps.bookof5rinds.client.game.component.apply_player_bullet_hits.call(null,state)));
return newstate;
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(state,event){
var keycode = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.conj,keycode);
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(state){
var keycode = quil.core.key_as_keyword.call(null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.disj,keycode);
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(state,event){
var map__57962 = event;
var map__57962__$1 = ((((!((map__57962 == null)))?((((map__57962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57962):map__57962);
var mx = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__57963 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__57963__$1 = ((((!((map__57963 == null)))?((((map__57963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57963):map__57963);
var px = cljs.core.get.call(null,map__57963__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__57963__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__57963__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.4,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__57966__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__57966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57967__i = 0, G__57967__a = new Array(arguments.length -  0);
while (G__57967__i < G__57967__a.length) {G__57967__a[G__57967__i] = arguments[G__57967__i + 0]; ++G__57967__i;}
  args = new cljs.core.IndexedSeq(G__57967__a,0);
} 
return G__57966__delegate.call(this,args);};
G__57966.cljs$lang$maxFixedArity = 0;
G__57966.cljs$lang$applyTo = (function (arglist__57968){
var args = cljs.core.seq(arglist__57968);
return G__57966__delegate(args);
});
G__57966.cljs$core$IFn$_invoke$arity$variadic = G__57966__delegate;
return G__57966;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__57969__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__57969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57970__i = 0, G__57970__a = new Array(arguments.length -  0);
while (G__57970__i < G__57970__a.length) {G__57970__a[G__57970__i] = arguments[G__57970__i + 0]; ++G__57970__i;}
  args = new cljs.core.IndexedSeq(G__57970__a,0);
} 
return G__57969__delegate.call(this,args);};
G__57969.cljs$lang$maxFixedArity = 0;
G__57969.cljs$lang$applyTo = (function (arglist__57971){
var args = cljs.core.seq(arglist__57971);
return G__57969__delegate(args);
});
G__57969.cljs$core$IFn$_invoke$arity$variadic = G__57969__delegate;
return G__57969;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__57972__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__57972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57973__i = 0, G__57973__a = new Array(arguments.length -  0);
while (G__57973__i < G__57973__a.length) {G__57973__a[G__57973__i] = arguments[G__57973__i + 0]; ++G__57973__i;}
  args = new cljs.core.IndexedSeq(G__57973__a,0);
} 
return G__57972__delegate.call(this,args);};
G__57972.cljs$lang$maxFixedArity = 0;
G__57972.cljs$lang$applyTo = (function (arglist__57974){
var args = cljs.core.seq(arglist__57974);
return G__57972__delegate(args);
});
G__57972.cljs$core$IFn$_invoke$arity$variadic = G__57972__delegate;
return G__57972;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__57975__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__57975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57976__i = 0, G__57976__a = new Array(arguments.length -  0);
while (G__57976__i < G__57976__a.length) {G__57976__a[G__57976__i] = arguments[G__57976__i + 0]; ++G__57976__i;}
  args = new cljs.core.IndexedSeq(G__57976__a,0);
} 
return G__57975__delegate.call(this,args);};
G__57975.cljs$lang$maxFixedArity = 0;
G__57975.cljs$lang$applyTo = (function (arglist__57977){
var args = cljs.core.seq(arglist__57977);
return G__57975__delegate(args);
});
G__57975.cljs$core$IFn$_invoke$arity$variadic = G__57975__delegate;
return G__57975;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__57978__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__57978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57979__i = 0, G__57979__a = new Array(arguments.length -  0);
while (G__57979__i < G__57979__a.length) {G__57979__a[G__57979__i] = arguments[G__57979__i + 0]; ++G__57979__i;}
  args = new cljs.core.IndexedSeq(G__57979__a,0);
} 
return G__57978__delegate.call(this,args);};
G__57978.cljs$lang$maxFixedArity = 0;
G__57978.cljs$lang$applyTo = (function (arglist__57980){
var args = cljs.core.seq(arglist__57980);
return G__57978__delegate(args);
});
G__57978.cljs$core$IFn$_invoke$arity$variadic = G__57978__delegate;
return G__57978;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__57981__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__57981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57982__i = 0, G__57982__a = new Array(arguments.length -  0);
while (G__57982__i < G__57982__a.length) {G__57982__a[G__57982__i] = arguments[G__57982__i + 0]; ++G__57982__i;}
  args = new cljs.core.IndexedSeq(G__57982__a,0);
} 
return G__57981__delegate.call(this,args);};
G__57981.cljs$lang$maxFixedArity = 0;
G__57981.cljs$lang$applyTo = (function (arglist__57983){
var args = cljs.core.seq(arglist__57983);
return G__57981__delegate(args);
});
G__57981.cljs$core$IFn$_invoke$arity$variadic = G__57981__delegate;
return G__57981;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__57984__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__57984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57985__i = 0, G__57985__a = new Array(arguments.length -  0);
while (G__57985__i < G__57985__a.length) {G__57985__a[G__57985__i] = arguments[G__57985__i + 0]; ++G__57985__i;}
  args = new cljs.core.IndexedSeq(G__57985__a,0);
} 
return G__57984__delegate.call(this,args);};
G__57984.cljs$lang$maxFixedArity = 0;
G__57984.cljs$lang$applyTo = (function (arglist__57986){
var args = cljs.core.seq(arglist__57986);
return G__57984__delegate(args);
});
G__57984.cljs$core$IFn$_invoke$arity$variadic = G__57984__delegate;
return G__57984;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23407__23408__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23407__23408__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(socket){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t57990 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t57990 = (function (game_component,socket,meta57991){
this.game_component = game_component;
this.socket = socket;
this.meta57991 = meta57991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t57990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57992,meta57991__$1){
var self__ = this;
var _57992__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t57990(self__.game_component,self__.socket,meta57991__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t57990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57992){
var self__ = this;
var _57992__$1 = this;
return self__.meta57991;
});

p3r50na.apps.bookof5rinds.client.game.component.t57990.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t57990.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t57990.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t57990.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t57990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null)], null)))], null)),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"meta57991","meta57991",602391333,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t57990.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t57990.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t57990";

p3r50na.apps.bookof5rinds.client.game.component.t57990.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t57990");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t57990 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t57990(game_component__$1,socket__$1,meta57991){
return (new p3r50na.apps.bookof5rinds.client.game.component.t57990(game_component__$1,socket__$1,meta57991));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t57990(p3r50na$apps$bookof5rinds$client$game$component$game_component,socket,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map