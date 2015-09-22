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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20150__auto__,k58096,else__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
var G__58098 = (((k58096 instanceof cljs.core.Keyword))?k58096.fqn:null);
switch (G__58098) {
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
return cljs.core.get.call(null,self__.__extmap,k58096,else__20151__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58095){
var self__ = this;
var G__58095__$1 = this;
return (new cljs.core.RecordIter((0),G__58095__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20155__auto__,k__20156__auto__,G__58095){
var self__ = this;
var this__20155__auto____$1 = this;
var pred__58099 = cljs.core.keyword_identical_QMARK_;
var expr__58100 = k__20156__auto__;
if(cljs.core.truth_(pred__58099.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58100))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__58095,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58099.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58100))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__58095,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58099.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__58100))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__58095,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58099.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__58100))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__58095,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20156__auto__,G__58095),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20147__auto__,G__58095){
var self__ = this;
var this__20147__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__58095,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__58097){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58097),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58097),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__58097),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__58097),null,cljs.core.dissoc.call(null,G__58097,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(120));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((5),(5),(10),(1),null,null,null)),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

var seq__58125_58147 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__58126_58148 = null;
var count__58127_58149 = (0);
var i__58128_58150 = (0);
while(true){
if((i__58128_58150 < count__58127_58149)){
var wall_58151 = cljs.core._nth.call(null,chunk__58126_58148,i__58128_58150);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_58151),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_58151),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__58152 = seq__58125_58147;
var G__58153 = chunk__58126_58148;
var G__58154 = count__58127_58149;
var G__58155 = (i__58128_58150 + (1));
seq__58125_58147 = G__58152;
chunk__58126_58148 = G__58153;
count__58127_58149 = G__58154;
i__58128_58150 = G__58155;
continue;
} else {
var temp__4425__auto___58156 = cljs.core.seq.call(null,seq__58125_58147);
if(temp__4425__auto___58156){
var seq__58125_58157__$1 = temp__4425__auto___58156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58125_58157__$1)){
var c__20337__auto___58158 = cljs.core.chunk_first.call(null,seq__58125_58157__$1);
var G__58159 = cljs.core.chunk_rest.call(null,seq__58125_58157__$1);
var G__58160 = c__20337__auto___58158;
var G__58161 = cljs.core.count.call(null,c__20337__auto___58158);
var G__58162 = (0);
seq__58125_58147 = G__58159;
chunk__58126_58148 = G__58160;
count__58127_58149 = G__58161;
i__58128_58150 = G__58162;
continue;
} else {
var wall_58163 = cljs.core.first.call(null,seq__58125_58157__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_58163),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_58163),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__58164 = cljs.core.next.call(null,seq__58125_58157__$1);
var G__58165 = null;
var G__58166 = (0);
var G__58167 = (0);
seq__58125_58147 = G__58164;
chunk__58126_58148 = G__58165;
count__58127_58149 = G__58166;
i__58128_58150 = G__58167;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

var seq__58129_58168 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__58130_58169 = null;
var count__58131_58170 = (0);
var i__58132_58171 = (0);
while(true){
if((i__58132_58171 < count__58131_58170)){
var remote_player_58172 = cljs.core._nth.call(null,chunk__58130_58169,i__58132_58171);
var map__58133_58173 = remote_player_58172;
var map__58133_58174__$1 = ((((!((map__58133_58173 == null)))?((((map__58133_58173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58133_58173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58133_58173):map__58133_58173);
var x_58175 = cljs.core.get.call(null,map__58133_58174__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_58176 = cljs.core.get.call(null,map__58133_58174__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_58177 = cljs.core.get.call(null,map__58133_58174__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_58175,y_58176,size_58177,size_58177);

var G__58178 = seq__58129_58168;
var G__58179 = chunk__58130_58169;
var G__58180 = count__58131_58170;
var G__58181 = (i__58132_58171 + (1));
seq__58129_58168 = G__58178;
chunk__58130_58169 = G__58179;
count__58131_58170 = G__58180;
i__58132_58171 = G__58181;
continue;
} else {
var temp__4425__auto___58182 = cljs.core.seq.call(null,seq__58129_58168);
if(temp__4425__auto___58182){
var seq__58129_58183__$1 = temp__4425__auto___58182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58129_58183__$1)){
var c__20337__auto___58184 = cljs.core.chunk_first.call(null,seq__58129_58183__$1);
var G__58185 = cljs.core.chunk_rest.call(null,seq__58129_58183__$1);
var G__58186 = c__20337__auto___58184;
var G__58187 = cljs.core.count.call(null,c__20337__auto___58184);
var G__58188 = (0);
seq__58129_58168 = G__58185;
chunk__58130_58169 = G__58186;
count__58131_58170 = G__58187;
i__58132_58171 = G__58188;
continue;
} else {
var remote_player_58189 = cljs.core.first.call(null,seq__58129_58183__$1);
var map__58135_58190 = remote_player_58189;
var map__58135_58191__$1 = ((((!((map__58135_58190 == null)))?((((map__58135_58190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58135_58190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58135_58190):map__58135_58190);
var x_58192 = cljs.core.get.call(null,map__58135_58191__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_58193 = cljs.core.get.call(null,map__58135_58191__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_58194 = cljs.core.get.call(null,map__58135_58191__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_58192,y_58193,size_58194,size_58194);

var G__58195 = cljs.core.next.call(null,seq__58129_58183__$1);
var G__58196 = null;
var G__58197 = (0);
var G__58198 = (0);
seq__58129_58168 = G__58195;
chunk__58130_58169 = G__58196;
count__58131_58170 = G__58197;
i__58132_58171 = G__58198;
continue;
}
} else {
}
}
break;
}

var seq__58137_58199 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__58138_58200 = null;
var count__58139_58201 = (0);
var i__58140_58202 = (0);
while(true){
if((i__58140_58202 < count__58139_58201)){
var bullet_58203 = cljs.core._nth.call(null,chunk__58138_58200,i__58140_58202);
var map__58141_58204 = bullet_58203;
var map__58141_58205__$1 = ((((!((map__58141_58204 == null)))?((((map__58141_58204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58141_58204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58141_58204):map__58141_58204);
var bx_58206 = cljs.core.get.call(null,map__58141_58205__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_58207 = cljs.core.get.call(null,map__58141_58205__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_58208 = cljs.core.get.call(null,map__58141_58205__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_58206,by_58207,size_58208,size_58208);

var G__58209 = seq__58137_58199;
var G__58210 = chunk__58138_58200;
var G__58211 = count__58139_58201;
var G__58212 = (i__58140_58202 + (1));
seq__58137_58199 = G__58209;
chunk__58138_58200 = G__58210;
count__58139_58201 = G__58211;
i__58140_58202 = G__58212;
continue;
} else {
var temp__4425__auto___58213 = cljs.core.seq.call(null,seq__58137_58199);
if(temp__4425__auto___58213){
var seq__58137_58214__$1 = temp__4425__auto___58213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58137_58214__$1)){
var c__20337__auto___58215 = cljs.core.chunk_first.call(null,seq__58137_58214__$1);
var G__58216 = cljs.core.chunk_rest.call(null,seq__58137_58214__$1);
var G__58217 = c__20337__auto___58215;
var G__58218 = cljs.core.count.call(null,c__20337__auto___58215);
var G__58219 = (0);
seq__58137_58199 = G__58216;
chunk__58138_58200 = G__58217;
count__58139_58201 = G__58218;
i__58140_58202 = G__58219;
continue;
} else {
var bullet_58220 = cljs.core.first.call(null,seq__58137_58214__$1);
var map__58143_58221 = bullet_58220;
var map__58143_58222__$1 = ((((!((map__58143_58221 == null)))?((((map__58143_58221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58143_58221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58143_58221):map__58143_58221);
var bx_58223 = cljs.core.get.call(null,map__58143_58222__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_58224 = cljs.core.get.call(null,map__58143_58222__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_58225 = cljs.core.get.call(null,map__58143_58222__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_58223,by_58224,size_58225,size_58225);

var G__58226 = cljs.core.next.call(null,seq__58137_58214__$1);
var G__58227 = null;
var G__58228 = (0);
var G__58229 = (0);
seq__58137_58199 = G__58226;
chunk__58138_58200 = G__58227;
count__58139_58201 = G__58228;
i__58140_58202 = G__58229;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

var map__58145 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__58145__$1 = ((((!((map__58145 == null)))?((((map__58145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58145):map__58145);
var x = cljs.core.get.call(null,map__58145__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__58145__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__58145__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__58233 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__58233__$1 = ((((!((map__58233 == null)))?((((map__58233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58233):map__58233);
var x = cljs.core.get.call(null,map__58233__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__58233__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__58233__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__58233,map__58233__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__58235 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__58235) {
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
});})(map__58233,map__58233__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__58241 = bullet;
var map__58241__$1 = ((((!((map__58241 == null)))?((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58241):map__58241);
var speed = cljs.core.get.call(null,map__58241__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__58242 = cljs.core.get.call(null,map__58241__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__58242,(0),null);
var by = cljs.core.nth.call(null,vec__58242,(1),null);
var lx = cljs.core.get.call(null,map__58241__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__58241__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__58243 = cljs.core.get.call(null,map__58241__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__58243,(0),null);
var gy = cljs.core.nth.call(null,vec__58243,(1),null);
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
var seq__58257 = cljs.core.seq.call(null,players);
var chunk__58258 = null;
var count__58259 = (0);
var i__58260 = (0);
while(true){
if((i__58260 < count__58259)){
var player = cljs.core._nth.call(null,chunk__58258,i__58260);
var seq__58261_58269 = cljs.core.seq.call(null,bullets);
var chunk__58262_58270 = null;
var count__58263_58271 = (0);
var i__58264_58272 = (0);
while(true){
if((i__58264_58272 < count__58263_58271)){
var bullet_58273 = cljs.core._nth.call(null,chunk__58262_58270,i__58264_58272);

var G__58274 = seq__58261_58269;
var G__58275 = chunk__58262_58270;
var G__58276 = count__58263_58271;
var G__58277 = (i__58264_58272 + (1));
seq__58261_58269 = G__58274;
chunk__58262_58270 = G__58275;
count__58263_58271 = G__58276;
i__58264_58272 = G__58277;
continue;
} else {
var temp__4425__auto___58278 = cljs.core.seq.call(null,seq__58261_58269);
if(temp__4425__auto___58278){
var seq__58261_58279__$1 = temp__4425__auto___58278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58261_58279__$1)){
var c__20337__auto___58280 = cljs.core.chunk_first.call(null,seq__58261_58279__$1);
var G__58281 = cljs.core.chunk_rest.call(null,seq__58261_58279__$1);
var G__58282 = c__20337__auto___58280;
var G__58283 = cljs.core.count.call(null,c__20337__auto___58280);
var G__58284 = (0);
seq__58261_58269 = G__58281;
chunk__58262_58270 = G__58282;
count__58263_58271 = G__58283;
i__58264_58272 = G__58284;
continue;
} else {
var bullet_58285 = cljs.core.first.call(null,seq__58261_58279__$1);

var G__58286 = cljs.core.next.call(null,seq__58261_58279__$1);
var G__58287 = null;
var G__58288 = (0);
var G__58289 = (0);
seq__58261_58269 = G__58286;
chunk__58262_58270 = G__58287;
count__58263_58271 = G__58288;
i__58264_58272 = G__58289;
continue;
}
} else {
}
}
break;
}

var G__58290 = seq__58257;
var G__58291 = chunk__58258;
var G__58292 = count__58259;
var G__58293 = (i__58260 + (1));
seq__58257 = G__58290;
chunk__58258 = G__58291;
count__58259 = G__58292;
i__58260 = G__58293;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__58257);
if(temp__4425__auto__){
var seq__58257__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58257__$1)){
var c__20337__auto__ = cljs.core.chunk_first.call(null,seq__58257__$1);
var G__58294 = cljs.core.chunk_rest.call(null,seq__58257__$1);
var G__58295 = c__20337__auto__;
var G__58296 = cljs.core.count.call(null,c__20337__auto__);
var G__58297 = (0);
seq__58257 = G__58294;
chunk__58258 = G__58295;
count__58259 = G__58296;
i__58260 = G__58297;
continue;
} else {
var player = cljs.core.first.call(null,seq__58257__$1);
var seq__58265_58298 = cljs.core.seq.call(null,bullets);
var chunk__58266_58299 = null;
var count__58267_58300 = (0);
var i__58268_58301 = (0);
while(true){
if((i__58268_58301 < count__58267_58300)){
var bullet_58302 = cljs.core._nth.call(null,chunk__58266_58299,i__58268_58301);

var G__58303 = seq__58265_58298;
var G__58304 = chunk__58266_58299;
var G__58305 = count__58267_58300;
var G__58306 = (i__58268_58301 + (1));
seq__58265_58298 = G__58303;
chunk__58266_58299 = G__58304;
count__58267_58300 = G__58305;
i__58268_58301 = G__58306;
continue;
} else {
var temp__4425__auto___58307__$1 = cljs.core.seq.call(null,seq__58265_58298);
if(temp__4425__auto___58307__$1){
var seq__58265_58308__$1 = temp__4425__auto___58307__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58265_58308__$1)){
var c__20337__auto___58309 = cljs.core.chunk_first.call(null,seq__58265_58308__$1);
var G__58310 = cljs.core.chunk_rest.call(null,seq__58265_58308__$1);
var G__58311 = c__20337__auto___58309;
var G__58312 = cljs.core.count.call(null,c__20337__auto___58309);
var G__58313 = (0);
seq__58265_58298 = G__58310;
chunk__58266_58299 = G__58311;
count__58267_58300 = G__58312;
i__58268_58301 = G__58313;
continue;
} else {
var bullet_58314 = cljs.core.first.call(null,seq__58265_58308__$1);

var G__58315 = cljs.core.next.call(null,seq__58265_58308__$1);
var G__58316 = null;
var G__58317 = (0);
var G__58318 = (0);
seq__58265_58298 = G__58315;
chunk__58266_58299 = G__58316;
count__58267_58300 = G__58317;
i__58268_58301 = G__58318;
continue;
}
} else {
}
}
break;
}

var G__58319 = cljs.core.next.call(null,seq__58257__$1);
var G__58320 = null;
var G__58321 = (0);
var G__58322 = (0);
seq__58257 = G__58319;
chunk__58258 = G__58320;
count__58259 = G__58321;
i__58260 = G__58322;
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
var bullethits_58323 = p3r50na.apps.bookof5rinds.client.game.component.player_bullet_hits.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.println.call(null,bullethits_58323);

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
var map__58328 = event;
var map__58328__$1 = ((((!((map__58328 == null)))?((((map__58328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58328):map__58328);
var mx = cljs.core.get.call(null,map__58328__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__58328__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__58329 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__58329__$1 = ((((!((map__58329 == null)))?((((map__58329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58329):map__58329);
var px = cljs.core.get.call(null,map__58329__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__58329__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__58329__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.4,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__58332__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__58332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58333__i = 0, G__58333__a = new Array(arguments.length -  0);
while (G__58333__i < G__58333__a.length) {G__58333__a[G__58333__i] = arguments[G__58333__i + 0]; ++G__58333__i;}
  args = new cljs.core.IndexedSeq(G__58333__a,0);
} 
return G__58332__delegate.call(this,args);};
G__58332.cljs$lang$maxFixedArity = 0;
G__58332.cljs$lang$applyTo = (function (arglist__58334){
var args = cljs.core.seq(arglist__58334);
return G__58332__delegate(args);
});
G__58332.cljs$core$IFn$_invoke$arity$variadic = G__58332__delegate;
return G__58332;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__58335__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__58335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58336__i = 0, G__58336__a = new Array(arguments.length -  0);
while (G__58336__i < G__58336__a.length) {G__58336__a[G__58336__i] = arguments[G__58336__i + 0]; ++G__58336__i;}
  args = new cljs.core.IndexedSeq(G__58336__a,0);
} 
return G__58335__delegate.call(this,args);};
G__58335.cljs$lang$maxFixedArity = 0;
G__58335.cljs$lang$applyTo = (function (arglist__58337){
var args = cljs.core.seq(arglist__58337);
return G__58335__delegate(args);
});
G__58335.cljs$core$IFn$_invoke$arity$variadic = G__58335__delegate;
return G__58335;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__58338__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__58338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58339__i = 0, G__58339__a = new Array(arguments.length -  0);
while (G__58339__i < G__58339__a.length) {G__58339__a[G__58339__i] = arguments[G__58339__i + 0]; ++G__58339__i;}
  args = new cljs.core.IndexedSeq(G__58339__a,0);
} 
return G__58338__delegate.call(this,args);};
G__58338.cljs$lang$maxFixedArity = 0;
G__58338.cljs$lang$applyTo = (function (arglist__58340){
var args = cljs.core.seq(arglist__58340);
return G__58338__delegate(args);
});
G__58338.cljs$core$IFn$_invoke$arity$variadic = G__58338__delegate;
return G__58338;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__58341__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__58341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58342__i = 0, G__58342__a = new Array(arguments.length -  0);
while (G__58342__i < G__58342__a.length) {G__58342__a[G__58342__i] = arguments[G__58342__i + 0]; ++G__58342__i;}
  args = new cljs.core.IndexedSeq(G__58342__a,0);
} 
return G__58341__delegate.call(this,args);};
G__58341.cljs$lang$maxFixedArity = 0;
G__58341.cljs$lang$applyTo = (function (arglist__58343){
var args = cljs.core.seq(arglist__58343);
return G__58341__delegate(args);
});
G__58341.cljs$core$IFn$_invoke$arity$variadic = G__58341__delegate;
return G__58341;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__58344__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__58344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58345__i = 0, G__58345__a = new Array(arguments.length -  0);
while (G__58345__i < G__58345__a.length) {G__58345__a[G__58345__i] = arguments[G__58345__i + 0]; ++G__58345__i;}
  args = new cljs.core.IndexedSeq(G__58345__a,0);
} 
return G__58344__delegate.call(this,args);};
G__58344.cljs$lang$maxFixedArity = 0;
G__58344.cljs$lang$applyTo = (function (arglist__58346){
var args = cljs.core.seq(arglist__58346);
return G__58344__delegate(args);
});
G__58344.cljs$core$IFn$_invoke$arity$variadic = G__58344__delegate;
return G__58344;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__58347__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__58347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58348__i = 0, G__58348__a = new Array(arguments.length -  0);
while (G__58348__i < G__58348__a.length) {G__58348__a[G__58348__i] = arguments[G__58348__i + 0]; ++G__58348__i;}
  args = new cljs.core.IndexedSeq(G__58348__a,0);
} 
return G__58347__delegate.call(this,args);};
G__58347.cljs$lang$maxFixedArity = 0;
G__58347.cljs$lang$applyTo = (function (arglist__58349){
var args = cljs.core.seq(arglist__58349);
return G__58347__delegate(args);
});
G__58347.cljs$core$IFn$_invoke$arity$variadic = G__58347__delegate;
return G__58347;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__58350__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__58350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58351__i = 0, G__58351__a = new Array(arguments.length -  0);
while (G__58351__i < G__58351__a.length) {G__58351__a[G__58351__i] = arguments[G__58351__i + 0]; ++G__58351__i;}
  args = new cljs.core.IndexedSeq(G__58351__a,0);
} 
return G__58350__delegate.call(this,args);};
G__58350.cljs$lang$maxFixedArity = 0;
G__58350.cljs$lang$applyTo = (function (arglist__58352){
var args = cljs.core.seq(arglist__58352);
return G__58350__delegate(args);
});
G__58350.cljs$core$IFn$_invoke$arity$variadic = G__58350__delegate;
return G__58350;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t58356 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t58356 = (function (game_component,socket,meta58357){
this.game_component = game_component;
this.socket = socket;
this.meta58357 = meta58357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t58356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58358,meta58357__$1){
var self__ = this;
var _58358__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t58356(self__.game_component,self__.socket,meta58357__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t58356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58358){
var self__ = this;
var _58358__$1 = this;
return self__.meta58357;
});

p3r50na.apps.bookof5rinds.client.game.component.t58356.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t58356.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t58356.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t58356.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t58356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null)], null)))], null)),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"meta58357","meta58357",-822505846,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t58356.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t58356.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t58356";

p3r50na.apps.bookof5rinds.client.game.component.t58356.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t58356");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t58356 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t58356(game_component__$1,socket__$1,meta58357){
return (new p3r50na.apps.bookof5rinds.client.game.component.t58356(game_component__$1,socket__$1,meta58357));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t58356(p3r50na$apps$bookof5rinds$client$game$component$game_component,socket,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map