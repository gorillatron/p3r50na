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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20150__auto__,k43899,else__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
var G__43901 = (((k43899 instanceof cljs.core.Keyword))?k43899.fqn:null);
switch (G__43901) {
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
return cljs.core.get.call(null,self__.__extmap,k43899,else__20151__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43898){
var self__ = this;
var G__43898__$1 = this;
return (new cljs.core.RecordIter((0),G__43898__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20155__auto__,k__20156__auto__,G__43898){
var self__ = this;
var this__20155__auto____$1 = this;
var pred__43902 = cljs.core.keyword_identical_QMARK_;
var expr__43903 = k__20156__auto__;
if(cljs.core.truth_(pred__43902.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__43903))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__43898,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43902.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__43903))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__43898,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43902.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__43903))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__43898,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43902.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__43903))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__43898,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20156__auto__,G__43898),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20147__auto__,G__43898){
var self__ = this;
var this__20147__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__43898,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__43900){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__43900),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__43900),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__43900),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__43900),null,cljs.core.dissoc.call(null,G__43900,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
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

var seq__43928_43950 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__43929_43951 = null;
var count__43930_43952 = (0);
var i__43931_43953 = (0);
while(true){
if((i__43931_43953 < count__43930_43952)){
var wall_43954 = cljs.core._nth.call(null,chunk__43929_43951,i__43931_43953);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_43954),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_43954),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__43955 = seq__43928_43950;
var G__43956 = chunk__43929_43951;
var G__43957 = count__43930_43952;
var G__43958 = (i__43931_43953 + (1));
seq__43928_43950 = G__43955;
chunk__43929_43951 = G__43956;
count__43930_43952 = G__43957;
i__43931_43953 = G__43958;
continue;
} else {
var temp__4425__auto___43959 = cljs.core.seq.call(null,seq__43928_43950);
if(temp__4425__auto___43959){
var seq__43928_43960__$1 = temp__4425__auto___43959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43928_43960__$1)){
var c__20337__auto___43961 = cljs.core.chunk_first.call(null,seq__43928_43960__$1);
var G__43962 = cljs.core.chunk_rest.call(null,seq__43928_43960__$1);
var G__43963 = c__20337__auto___43961;
var G__43964 = cljs.core.count.call(null,c__20337__auto___43961);
var G__43965 = (0);
seq__43928_43950 = G__43962;
chunk__43929_43951 = G__43963;
count__43930_43952 = G__43964;
i__43931_43953 = G__43965;
continue;
} else {
var wall_43966 = cljs.core.first.call(null,seq__43928_43960__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_43966),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_43966),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__43967 = cljs.core.next.call(null,seq__43928_43960__$1);
var G__43968 = null;
var G__43969 = (0);
var G__43970 = (0);
seq__43928_43950 = G__43967;
chunk__43929_43951 = G__43968;
count__43930_43952 = G__43969;
i__43931_43953 = G__43970;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

var seq__43932_43971 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__43933_43972 = null;
var count__43934_43973 = (0);
var i__43935_43974 = (0);
while(true){
if((i__43935_43974 < count__43934_43973)){
var remote_player_43975 = cljs.core._nth.call(null,chunk__43933_43972,i__43935_43974);
var map__43936_43976 = remote_player_43975;
var map__43936_43977__$1 = ((((!((map__43936_43976 == null)))?((((map__43936_43976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43936_43976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43936_43976):map__43936_43976);
var x_43978 = cljs.core.get.call(null,map__43936_43977__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_43979 = cljs.core.get.call(null,map__43936_43977__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_43980 = cljs.core.get.call(null,map__43936_43977__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_43978,y_43979,size_43980,size_43980);

var G__43981 = seq__43932_43971;
var G__43982 = chunk__43933_43972;
var G__43983 = count__43934_43973;
var G__43984 = (i__43935_43974 + (1));
seq__43932_43971 = G__43981;
chunk__43933_43972 = G__43982;
count__43934_43973 = G__43983;
i__43935_43974 = G__43984;
continue;
} else {
var temp__4425__auto___43985 = cljs.core.seq.call(null,seq__43932_43971);
if(temp__4425__auto___43985){
var seq__43932_43986__$1 = temp__4425__auto___43985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43932_43986__$1)){
var c__20337__auto___43987 = cljs.core.chunk_first.call(null,seq__43932_43986__$1);
var G__43988 = cljs.core.chunk_rest.call(null,seq__43932_43986__$1);
var G__43989 = c__20337__auto___43987;
var G__43990 = cljs.core.count.call(null,c__20337__auto___43987);
var G__43991 = (0);
seq__43932_43971 = G__43988;
chunk__43933_43972 = G__43989;
count__43934_43973 = G__43990;
i__43935_43974 = G__43991;
continue;
} else {
var remote_player_43992 = cljs.core.first.call(null,seq__43932_43986__$1);
var map__43938_43993 = remote_player_43992;
var map__43938_43994__$1 = ((((!((map__43938_43993 == null)))?((((map__43938_43993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43938_43993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43938_43993):map__43938_43993);
var x_43995 = cljs.core.get.call(null,map__43938_43994__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_43996 = cljs.core.get.call(null,map__43938_43994__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_43997 = cljs.core.get.call(null,map__43938_43994__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_43995,y_43996,size_43997,size_43997);

var G__43998 = cljs.core.next.call(null,seq__43932_43986__$1);
var G__43999 = null;
var G__44000 = (0);
var G__44001 = (0);
seq__43932_43971 = G__43998;
chunk__43933_43972 = G__43999;
count__43934_43973 = G__44000;
i__43935_43974 = G__44001;
continue;
}
} else {
}
}
break;
}

var seq__43940_44002 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__43941_44003 = null;
var count__43942_44004 = (0);
var i__43943_44005 = (0);
while(true){
if((i__43943_44005 < count__43942_44004)){
var bullet_44006 = cljs.core._nth.call(null,chunk__43941_44003,i__43943_44005);
var map__43944_44007 = bullet_44006;
var map__43944_44008__$1 = ((((!((map__43944_44007 == null)))?((((map__43944_44007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43944_44007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43944_44007):map__43944_44007);
var bx_44009 = cljs.core.get.call(null,map__43944_44008__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_44010 = cljs.core.get.call(null,map__43944_44008__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_44011 = cljs.core.get.call(null,map__43944_44008__$1,new cljs.core.Keyword(null,"size","size",1098693007));
cljs.core.println.call(null,bullet_44006);

quil.core.rect.call(null,bx_44009,by_44010,size_44011,size_44011);

var G__44012 = seq__43940_44002;
var G__44013 = chunk__43941_44003;
var G__44014 = count__43942_44004;
var G__44015 = (i__43943_44005 + (1));
seq__43940_44002 = G__44012;
chunk__43941_44003 = G__44013;
count__43942_44004 = G__44014;
i__43943_44005 = G__44015;
continue;
} else {
var temp__4425__auto___44016 = cljs.core.seq.call(null,seq__43940_44002);
if(temp__4425__auto___44016){
var seq__43940_44017__$1 = temp__4425__auto___44016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43940_44017__$1)){
var c__20337__auto___44018 = cljs.core.chunk_first.call(null,seq__43940_44017__$1);
var G__44019 = cljs.core.chunk_rest.call(null,seq__43940_44017__$1);
var G__44020 = c__20337__auto___44018;
var G__44021 = cljs.core.count.call(null,c__20337__auto___44018);
var G__44022 = (0);
seq__43940_44002 = G__44019;
chunk__43941_44003 = G__44020;
count__43942_44004 = G__44021;
i__43943_44005 = G__44022;
continue;
} else {
var bullet_44023 = cljs.core.first.call(null,seq__43940_44017__$1);
var map__43946_44024 = bullet_44023;
var map__43946_44025__$1 = ((((!((map__43946_44024 == null)))?((((map__43946_44024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43946_44024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43946_44024):map__43946_44024);
var bx_44026 = cljs.core.get.call(null,map__43946_44025__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_44027 = cljs.core.get.call(null,map__43946_44025__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_44028 = cljs.core.get.call(null,map__43946_44025__$1,new cljs.core.Keyword(null,"size","size",1098693007));
cljs.core.println.call(null,bullet_44023);

quil.core.rect.call(null,bx_44026,by_44027,size_44028,size_44028);

var G__44029 = cljs.core.next.call(null,seq__43940_44017__$1);
var G__44030 = null;
var G__44031 = (0);
var G__44032 = (0);
seq__43940_44002 = G__44029;
chunk__43941_44003 = G__44030;
count__43942_44004 = G__44031;
i__43943_44005 = G__44032;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

var map__43948 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__43948__$1 = ((((!((map__43948 == null)))?((((map__43948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43948):map__43948);
var x = cljs.core.get.call(null,map__43948__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__43948__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__43948__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__44036 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__44036__$1 = ((((!((map__44036 == null)))?((((map__44036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44036):map__44036);
var x = cljs.core.get.call(null,map__44036__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__44036__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__44036__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__44036,map__44036__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__44038 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__44038) {
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
});})(map__44036,map__44036__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.send_player_state = (function p3r50na$apps$bookof5rinds$client$game$component$send_player_state(player_state){
return cljs.core.println.call(null,"send player state");
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__44044 = bullet;
var map__44044__$1 = ((((!((map__44044 == null)))?((((map__44044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44044):map__44044);
var speed = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__44045 = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__44045,(0),null);
var by = cljs.core.nth.call(null,vec__44045,(1),null);
var lx = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__44046 = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__44046,(0),null);
var gy = cljs.core.nth.call(null,vec__44046,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.component.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullets(state){
var new_bullets = cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19553__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19553__auto__)){
return or__19553__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),new_bullets);
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullets.call(null,state));
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
var map__44052 = event;
var map__44052__$1 = ((((!((map__44052 == null)))?((((map__44052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44052):map__44052);
var mx = cljs.core.get.call(null,map__44052__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__44052__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__44053 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__44053__$1 = ((((!((map__44053 == null)))?((((map__44053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44053):map__44053);
var px = cljs.core.get.call(null,map__44053__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__44053__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__44053__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.4,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__44056__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__44056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44057__i = 0, G__44057__a = new Array(arguments.length -  0);
while (G__44057__i < G__44057__a.length) {G__44057__a[G__44057__i] = arguments[G__44057__i + 0]; ++G__44057__i;}
  args = new cljs.core.IndexedSeq(G__44057__a,0);
} 
return G__44056__delegate.call(this,args);};
G__44056.cljs$lang$maxFixedArity = 0;
G__44056.cljs$lang$applyTo = (function (arglist__44058){
var args = cljs.core.seq(arglist__44058);
return G__44056__delegate(args);
});
G__44056.cljs$core$IFn$_invoke$arity$variadic = G__44056__delegate;
return G__44056;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__44059__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__44059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44060__i = 0, G__44060__a = new Array(arguments.length -  0);
while (G__44060__i < G__44060__a.length) {G__44060__a[G__44060__i] = arguments[G__44060__i + 0]; ++G__44060__i;}
  args = new cljs.core.IndexedSeq(G__44060__a,0);
} 
return G__44059__delegate.call(this,args);};
G__44059.cljs$lang$maxFixedArity = 0;
G__44059.cljs$lang$applyTo = (function (arglist__44061){
var args = cljs.core.seq(arglist__44061);
return G__44059__delegate(args);
});
G__44059.cljs$core$IFn$_invoke$arity$variadic = G__44059__delegate;
return G__44059;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__44062__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__44062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44063__i = 0, G__44063__a = new Array(arguments.length -  0);
while (G__44063__i < G__44063__a.length) {G__44063__a[G__44063__i] = arguments[G__44063__i + 0]; ++G__44063__i;}
  args = new cljs.core.IndexedSeq(G__44063__a,0);
} 
return G__44062__delegate.call(this,args);};
G__44062.cljs$lang$maxFixedArity = 0;
G__44062.cljs$lang$applyTo = (function (arglist__44064){
var args = cljs.core.seq(arglist__44064);
return G__44062__delegate(args);
});
G__44062.cljs$core$IFn$_invoke$arity$variadic = G__44062__delegate;
return G__44062;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__44065__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__44065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44066__i = 0, G__44066__a = new Array(arguments.length -  0);
while (G__44066__i < G__44066__a.length) {G__44066__a[G__44066__i] = arguments[G__44066__i + 0]; ++G__44066__i;}
  args = new cljs.core.IndexedSeq(G__44066__a,0);
} 
return G__44065__delegate.call(this,args);};
G__44065.cljs$lang$maxFixedArity = 0;
G__44065.cljs$lang$applyTo = (function (arglist__44067){
var args = cljs.core.seq(arglist__44067);
return G__44065__delegate(args);
});
G__44065.cljs$core$IFn$_invoke$arity$variadic = G__44065__delegate;
return G__44065;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__44068__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__44068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44069__i = 0, G__44069__a = new Array(arguments.length -  0);
while (G__44069__i < G__44069__a.length) {G__44069__a[G__44069__i] = arguments[G__44069__i + 0]; ++G__44069__i;}
  args = new cljs.core.IndexedSeq(G__44069__a,0);
} 
return G__44068__delegate.call(this,args);};
G__44068.cljs$lang$maxFixedArity = 0;
G__44068.cljs$lang$applyTo = (function (arglist__44070){
var args = cljs.core.seq(arglist__44070);
return G__44068__delegate(args);
});
G__44068.cljs$core$IFn$_invoke$arity$variadic = G__44068__delegate;
return G__44068;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__44071__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__44071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44072__i = 0, G__44072__a = new Array(arguments.length -  0);
while (G__44072__i < G__44072__a.length) {G__44072__a[G__44072__i] = arguments[G__44072__i + 0]; ++G__44072__i;}
  args = new cljs.core.IndexedSeq(G__44072__a,0);
} 
return G__44071__delegate.call(this,args);};
G__44071.cljs$lang$maxFixedArity = 0;
G__44071.cljs$lang$applyTo = (function (arglist__44073){
var args = cljs.core.seq(arglist__44073);
return G__44071__delegate(args);
});
G__44071.cljs$core$IFn$_invoke$arity$variadic = G__44071__delegate;
return G__44071;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__44074__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__44074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44075__i = 0, G__44075__a = new Array(arguments.length -  0);
while (G__44075__i < G__44075__a.length) {G__44075__a[G__44075__i] = arguments[G__44075__i + 0]; ++G__44075__i;}
  args = new cljs.core.IndexedSeq(G__44075__a,0);
} 
return G__44074__delegate.call(this,args);};
G__44074.cljs$lang$maxFixedArity = 0;
G__44074.cljs$lang$applyTo = (function (arglist__44076){
var args = cljs.core.seq(arglist__44076);
return G__44074__delegate(args);
});
G__44074.cljs$core$IFn$_invoke$arity$variadic = G__44074__delegate;
return G__44074;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t44080 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t44080 = (function (game_component,socket,meta44081){
this.game_component = game_component;
this.socket = socket;
this.meta44081 = meta44081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t44080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44082,meta44081__$1){
var self__ = this;
var _44082__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t44080(self__.game_component,self__.socket,meta44081__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t44080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44082){
var self__ = this;
var _44082__$1 = this;
return self__.meta44081;
});

p3r50na.apps.bookof5rinds.client.game.component.t44080.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t44080.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t44080.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t44080.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t44080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null)], null)))], null)),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"meta44081","meta44081",371198113,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t44080.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t44080.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t44080";

p3r50na.apps.bookof5rinds.client.game.component.t44080.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t44080");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t44080 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t44080(game_component__$1,socket__$1,meta44081){
return (new p3r50na.apps.bookof5rinds.client.game.component.t44080(game_component__$1,socket__$1,meta44081));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t44080(p3r50na$apps$bookof5rinds$client$game$component$game_component,socket,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map