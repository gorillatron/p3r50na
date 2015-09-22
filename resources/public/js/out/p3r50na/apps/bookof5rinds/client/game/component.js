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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20150__auto__,k39727,else__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
var G__39729 = (((k39727 instanceof cljs.core.Keyword))?k39727.fqn:null);
switch (G__39729) {
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
return cljs.core.get.call(null,self__.__extmap,k39727,else__20151__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39726){
var self__ = this;
var G__39726__$1 = this;
return (new cljs.core.RecordIter((0),G__39726__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20155__auto__,k__20156__auto__,G__39726){
var self__ = this;
var this__20155__auto____$1 = this;
var pred__39730 = cljs.core.keyword_identical_QMARK_;
var expr__39731 = k__20156__auto__;
if(cljs.core.truth_(pred__39730.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39731))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__39726,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39730.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39731))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__39726,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39730.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__39731))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__39726,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39730.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__39731))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__39726,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20156__auto__,G__39726),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20147__auto__,G__39726){
var self__ = this;
var this__20147__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__39726,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__39728){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39728),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39728),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__39728),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__39728),null,cljs.core.dissoc.call(null,G__39728,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(watr){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new p3r50na.apps.bookof5rinds.client.game.component.Player((30),(40),(10),(2),null,null,null))], null),new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

var seq__39748_39762 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__39749_39763 = null;
var count__39750_39764 = (0);
var i__39751_39765 = (0);
while(true){
if((i__39751_39765 < count__39750_39764)){
var wall_39766 = cljs.core._nth.call(null,chunk__39749_39763,i__39751_39765);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_39766),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_39766),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__39767 = seq__39748_39762;
var G__39768 = chunk__39749_39763;
var G__39769 = count__39750_39764;
var G__39770 = (i__39751_39765 + (1));
seq__39748_39762 = G__39767;
chunk__39749_39763 = G__39768;
count__39750_39764 = G__39769;
i__39751_39765 = G__39770;
continue;
} else {
var temp__4425__auto___39771 = cljs.core.seq.call(null,seq__39748_39762);
if(temp__4425__auto___39771){
var seq__39748_39772__$1 = temp__4425__auto___39771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39748_39772__$1)){
var c__20337__auto___39773 = cljs.core.chunk_first.call(null,seq__39748_39772__$1);
var G__39774 = cljs.core.chunk_rest.call(null,seq__39748_39772__$1);
var G__39775 = c__20337__auto___39773;
var G__39776 = cljs.core.count.call(null,c__20337__auto___39773);
var G__39777 = (0);
seq__39748_39762 = G__39774;
chunk__39749_39763 = G__39775;
count__39750_39764 = G__39776;
i__39751_39765 = G__39777;
continue;
} else {
var wall_39778 = cljs.core.first.call(null,seq__39748_39772__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_39778),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_39778),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__39779 = cljs.core.next.call(null,seq__39748_39772__$1);
var G__39780 = null;
var G__39781 = (0);
var G__39782 = (0);
seq__39748_39762 = G__39779;
chunk__39749_39763 = G__39780;
count__39750_39764 = G__39781;
i__39751_39765 = G__39782;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

var seq__39752_39783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__39753_39784 = null;
var count__39754_39785 = (0);
var i__39755_39786 = (0);
while(true){
if((i__39755_39786 < count__39754_39785)){
var remote_player_39787 = cljs.core._nth.call(null,chunk__39753_39784,i__39755_39786);
var map__39756_39788 = remote_player_39787;
var map__39756_39789__$1 = ((((!((map__39756_39788 == null)))?((((map__39756_39788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39756_39788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39756_39788):map__39756_39788);
var x_39790 = cljs.core.get.call(null,map__39756_39789__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_39791 = cljs.core.get.call(null,map__39756_39789__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_39792 = cljs.core.get.call(null,map__39756_39789__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_39790,y_39791,size_39792,size_39792);

var G__39793 = seq__39752_39783;
var G__39794 = chunk__39753_39784;
var G__39795 = count__39754_39785;
var G__39796 = (i__39755_39786 + (1));
seq__39752_39783 = G__39793;
chunk__39753_39784 = G__39794;
count__39754_39785 = G__39795;
i__39755_39786 = G__39796;
continue;
} else {
var temp__4425__auto___39797 = cljs.core.seq.call(null,seq__39752_39783);
if(temp__4425__auto___39797){
var seq__39752_39798__$1 = temp__4425__auto___39797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39752_39798__$1)){
var c__20337__auto___39799 = cljs.core.chunk_first.call(null,seq__39752_39798__$1);
var G__39800 = cljs.core.chunk_rest.call(null,seq__39752_39798__$1);
var G__39801 = c__20337__auto___39799;
var G__39802 = cljs.core.count.call(null,c__20337__auto___39799);
var G__39803 = (0);
seq__39752_39783 = G__39800;
chunk__39753_39784 = G__39801;
count__39754_39785 = G__39802;
i__39755_39786 = G__39803;
continue;
} else {
var remote_player_39804 = cljs.core.first.call(null,seq__39752_39798__$1);
var map__39758_39805 = remote_player_39804;
var map__39758_39806__$1 = ((((!((map__39758_39805 == null)))?((((map__39758_39805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39758_39805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39758_39805):map__39758_39805);
var x_39807 = cljs.core.get.call(null,map__39758_39806__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_39808 = cljs.core.get.call(null,map__39758_39806__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_39809 = cljs.core.get.call(null,map__39758_39806__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_39807,y_39808,size_39809,size_39809);

var G__39810 = cljs.core.next.call(null,seq__39752_39798__$1);
var G__39811 = null;
var G__39812 = (0);
var G__39813 = (0);
seq__39752_39783 = G__39810;
chunk__39753_39784 = G__39811;
count__39754_39785 = G__39812;
i__39755_39786 = G__39813;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

var map__39760 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__39760__$1 = ((((!((map__39760 == null)))?((((map__39760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39760):map__39760);
var x = cljs.core.get.call(null,map__39760__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__39760__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__39760__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__39817 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__39817__$1 = ((((!((map__39817 == null)))?((((map__39817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39817):map__39817);
var x = cljs.core.get.call(null,map__39817__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__39817__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__39817__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__39817,map__39817__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__39819 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__39819) {
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
if(cljs.core.truth_((function (){var or__19553__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.player_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19553__auto__)){
return or__19553__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.player_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__39817,map__39817__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.send_player_state = (function p3r50na$apps$bookof5rinds$client$game$component$send_player_state(state){
return cljs.core.println.call(null,"send player state");
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,state);
if(cljs.core.not_EQ_.call(null,oldstate,newstate)){
p3r50na.apps.bookof5rinds.client.game.component.send_player_state.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate));
} else {
}

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
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__39821__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__39821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39822__i = 0, G__39822__a = new Array(arguments.length -  0);
while (G__39822__i < G__39822__a.length) {G__39822__a[G__39822__i] = arguments[G__39822__i + 0]; ++G__39822__i;}
  args = new cljs.core.IndexedSeq(G__39822__a,0);
} 
return G__39821__delegate.call(this,args);};
G__39821.cljs$lang$maxFixedArity = 0;
G__39821.cljs$lang$applyTo = (function (arglist__39823){
var args = cljs.core.seq(arglist__39823);
return G__39821__delegate(args);
});
G__39821.cljs$core$IFn$_invoke$arity$variadic = G__39821__delegate;
return G__39821;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__39824__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__39824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39825__i = 0, G__39825__a = new Array(arguments.length -  0);
while (G__39825__i < G__39825__a.length) {G__39825__a[G__39825__i] = arguments[G__39825__i + 0]; ++G__39825__i;}
  args = new cljs.core.IndexedSeq(G__39825__a,0);
} 
return G__39824__delegate.call(this,args);};
G__39824.cljs$lang$maxFixedArity = 0;
G__39824.cljs$lang$applyTo = (function (arglist__39826){
var args = cljs.core.seq(arglist__39826);
return G__39824__delegate(args);
});
G__39824.cljs$core$IFn$_invoke$arity$variadic = G__39824__delegate;
return G__39824;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__39827__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__39827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39828__i = 0, G__39828__a = new Array(arguments.length -  0);
while (G__39828__i < G__39828__a.length) {G__39828__a[G__39828__i] = arguments[G__39828__i + 0]; ++G__39828__i;}
  args = new cljs.core.IndexedSeq(G__39828__a,0);
} 
return G__39827__delegate.call(this,args);};
G__39827.cljs$lang$maxFixedArity = 0;
G__39827.cljs$lang$applyTo = (function (arglist__39829){
var args = cljs.core.seq(arglist__39829);
return G__39827__delegate(args);
});
G__39827.cljs$core$IFn$_invoke$arity$variadic = G__39827__delegate;
return G__39827;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__39830__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__39830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39831__i = 0, G__39831__a = new Array(arguments.length -  0);
while (G__39831__i < G__39831__a.length) {G__39831__a[G__39831__i] = arguments[G__39831__i + 0]; ++G__39831__i;}
  args = new cljs.core.IndexedSeq(G__39831__a,0);
} 
return G__39830__delegate.call(this,args);};
G__39830.cljs$lang$maxFixedArity = 0;
G__39830.cljs$lang$applyTo = (function (arglist__39832){
var args = cljs.core.seq(arglist__39832);
return G__39830__delegate(args);
});
G__39830.cljs$core$IFn$_invoke$arity$variadic = G__39830__delegate;
return G__39830;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__39833__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__39833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39834__i = 0, G__39834__a = new Array(arguments.length -  0);
while (G__39834__i < G__39834__a.length) {G__39834__a[G__39834__i] = arguments[G__39834__i + 0]; ++G__39834__i;}
  args = new cljs.core.IndexedSeq(G__39834__a,0);
} 
return G__39833__delegate.call(this,args);};
G__39833.cljs$lang$maxFixedArity = 0;
G__39833.cljs$lang$applyTo = (function (arglist__39835){
var args = cljs.core.seq(arglist__39835);
return G__39833__delegate(args);
});
G__39833.cljs$core$IFn$_invoke$arity$variadic = G__39833__delegate;
return G__39833;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__39836__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__39836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39837__i = 0, G__39837__a = new Array(arguments.length -  0);
while (G__39837__i < G__39837__a.length) {G__39837__a[G__39837__i] = arguments[G__39837__i + 0]; ++G__39837__i;}
  args = new cljs.core.IndexedSeq(G__39837__a,0);
} 
return G__39836__delegate.call(this,args);};
G__39836.cljs$lang$maxFixedArity = 0;
G__39836.cljs$lang$applyTo = (function (arglist__39838){
var args = cljs.core.seq(arglist__39838);
return G__39836__delegate(args);
});
G__39836.cljs$core$IFn$_invoke$arity$variadic = G__39836__delegate;
return G__39836;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25944__25945__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25944__25945__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(socket){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t39842 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t39842 = (function (game_component,socket,meta39843){
this.game_component = game_component;
this.socket = socket;
this.meta39843 = meta39843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t39842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39844,meta39843__$1){
var self__ = this;
var _39844__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t39842(self__.game_component,self__.socket,meta39843__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t39842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39844){
var self__ = this;
var _39844__$1 = this;
return self__.meta39843;
});

p3r50na.apps.bookof5rinds.client.game.component.t39842.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t39842.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t39842.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t39842.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t39842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null)], null)))], null)),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"meta39843","meta39843",-1606867790,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t39842.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t39842.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t39842";

p3r50na.apps.bookof5rinds.client.game.component.t39842.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t39842");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t39842 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t39842(game_component__$1,socket__$1,meta39843){
return (new p3r50na.apps.bookof5rinds.client.game.component.t39842(game_component__$1,socket__$1,meta39843));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t39842(p3r50na$apps$bookof5rinds$client$game$component$game_component,socket,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map