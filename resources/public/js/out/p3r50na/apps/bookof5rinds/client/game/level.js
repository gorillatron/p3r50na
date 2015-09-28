// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.level');
goog.require('cljs.core');

/**
* @constructor
* @param {*} blocksize
* @param {*} matrix
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.level.Map = (function (blocksize,matrix,__meta,__extmap,__hash){
this.blocksize = blocksize;
this.matrix = matrix;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20150__auto__,k__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
return cljs.core._lookup.call(null,this__20150__auto____$1,k__20151__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k31114,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__31116 = (((k31114 instanceof cljs.core.Keyword))?k31114.fqn:null);
switch (G__31116) {
case "blocksize":
return self__.blocksize;

break;
case "matrix":
return self__.matrix;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31114,else__20153__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20164__auto__,writer__20165__auto__,opts__20166__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
var pr_pair__20167__auto__ = ((function (this__20164__auto____$1){
return (function (keyval__20168__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,cljs.core.pr_writer,""," ","",opts__20166__auto__,keyval__20168__auto__);
});})(this__20164__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,pr_pair__20167__auto__,"#p3r50na.apps.bookof5rinds.client.game.level.Map{",", ","}",opts__20166__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),self__.blocksize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matrix","matrix",803137200),self__.matrix],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31113){
var self__ = this;
var G__31113__$1 = this;
return (new cljs.core.RecordIter((0),G__31113__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),new cljs.core.Keyword(null,"matrix","matrix",803137200)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20148__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20144__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(self__.blocksize,self__.matrix,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20154__auto__){
var self__ = this;
var this__20154__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
var h__19971__auto__ = self__.__hash;
if(!((h__19971__auto__ == null))){
return h__19971__auto__;
} else {
var h__19971__auto____$1 = cljs.core.hash_imap.call(null,this__20145__auto____$1);
self__.__hash = h__19971__auto____$1;

return h__19971__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20146__auto__,other__20147__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19543__auto__ = other__20147__auto__;
if(cljs.core.truth_(and__19543__auto__)){
var and__19543__auto____$1 = (this__20146__auto____$1.constructor === other__20147__auto__.constructor);
if(and__19543__auto____$1){
return cljs.core.equiv_map.call(null,this__20146__auto____$1,other__20147__auto__);
} else {
return and__19543__auto____$1;
}
} else {
return and__19543__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20159__auto__,k__20160__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matrix","matrix",803137200),null,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),null], null), null),k__20160__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20159__auto____$1),self__.__meta),k__20160__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(self__.blocksize,self__.matrix,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20160__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__31113){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__31117 = cljs.core.keyword_identical_QMARK_;
var expr__31118 = k__20158__auto__;
if(cljs.core.truth_(pred__31117.call(null,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),expr__31118))){
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(G__31113,self__.matrix,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31117.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200),expr__31118))){
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(self__.blocksize,G__31113,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(self__.blocksize,self__.matrix,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__31113),null));
}
}
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),self__.blocksize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matrix","matrix",803137200),self__.matrix],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__31113){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(self__.blocksize,self__.matrix,G__31113,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.level.Map.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20155__auto__,entry__20156__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20156__auto__)){
return cljs.core._assoc.call(null,this__20155__auto____$1,cljs.core._nth.call(null,entry__20156__auto__,(0)),cljs.core._nth.call(null,entry__20156__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20155__auto____$1,entry__20156__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.level.Map.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocksize","blocksize",-97273704,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.level.Map.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.level.Map.cljs$lang$ctorPrSeq = (function (this__20184__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.level/Map");
});

p3r50na.apps.bookof5rinds.client.game.level.Map.cljs$lang$ctorPrWriter = (function (this__20184__auto__,writer__20185__auto__){
return cljs.core._write.call(null,writer__20185__auto__,"p3r50na.apps.bookof5rinds.client.game.level/Map");
});

p3r50na.apps.bookof5rinds.client.game.level.__GT_Map = (function p3r50na$apps$bookof5rinds$client$game$level$__GT_Map(blocksize,matrix){
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(blocksize,matrix,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.level.map__GT_Map = (function p3r50na$apps$bookof5rinds$client$game$level$map__GT_Map(G__31115){
return (new p3r50na.apps.bookof5rinds.client.game.level.Map(new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(G__31115),new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(G__31115),null,cljs.core.dissoc.call(null,G__31115,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),new cljs.core.Keyword(null,"matrix","matrix",803137200)),null));
});

p3r50na.apps.bookof5rinds.client.game.level.map_size = (function p3r50na$apps$bookof5rinds$client$game$level$map_size(map){

var map__31123 = map;
var map__31123__$1 = ((((!((map__31123 == null)))?((((map__31123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31123):map__31123);
var matrix = cljs.core.get.call(null,map__31123__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var blocksize = cljs.core.get.call(null,map__31123__$1,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231));
var x = (blocksize * cljs.core.count.call(null,cljs.core.first.call(null,matrix)));
var y = (blocksize * cljs.core.count.call(null,matrix));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
p3r50na.apps.bookof5rinds.client.game.level.block_of_type = (function p3r50na$apps$bookof5rinds$client$game$level$block_of_type(type,map){

var map__31127 = map;
var map__31127__$1 = ((((!((map__31127 == null)))?((((map__31127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31127):map__31127);
var blocksize = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231));
var matrix = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.map_indexed.call(null,((function (map__31127,map__31127__$1,blocksize,matrix){
return (function (ydx,row){
return cljs.core.map_indexed.call(null,((function (map__31127,map__31127__$1,blocksize,matrix){
return (function (xdx,block){
var y = (ydx * blocksize);
var x = (xdx * blocksize);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
} else {
return null;
}
});})(map__31127,map__31127__$1,blocksize,matrix))
,row);
});})(map__31127,map__31127__$1,blocksize,matrix))
,matrix)));
});
p3r50na.apps.bookof5rinds.client.game.level.walls = (function p3r50na$apps$bookof5rinds$client$game$level$walls(map){

return p3r50na.apps.bookof5rinds.client.game.level.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),map);
});
p3r50na.apps.bookof5rinds.client.game.level.construct_map = (function p3r50na$apps$bookof5rinds$client$game$level$construct_map(blocksize,matrix){

var map = (new p3r50na.apps.bookof5rinds.client.game.level.Map(blocksize,matrix,null,null,null));
return cljs.core.assoc.call(null,map,new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,map));
});

//# sourceMappingURL=level.js.map