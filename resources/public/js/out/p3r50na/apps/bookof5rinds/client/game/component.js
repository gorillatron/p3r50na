// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.maps.level1');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('p3r50na.apps.bookof5rinds.client.game.map');
goog.require('quil.core');
goog.require('cljs.core.async');
goog.require('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('quil.middleware');
goog.require('om.core');

/**
* @constructor
* @param {*} player
* @param {*} remote_players
* @param {*} bullets
* @param {*} map
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.component.GameState = (function (player,remote_players,bullets,map,__meta,__extmap,__hash){
this.player = player;
this.remote_players = remote_players;
this.bullets = bullets;
this.map = map;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20150__auto__,k__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
return cljs.core._lookup.call(null,this__20150__auto____$1,k__20151__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k26142,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__26144 = (((k26142 instanceof cljs.core.Keyword))?k26142.fqn:null);
switch (G__26144) {
case "player":
return self__.player;

break;
case "remote-players":
return self__.remote_players;

break;
case "bullets":
return self__.bullets;

break;
case "map":
return self__.map;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26142,else__20153__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20164__auto__,writer__20165__auto__,opts__20166__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
var pr_pair__20167__auto__ = ((function (this__20164__auto____$1){
return (function (keyval__20168__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,cljs.core.pr_writer,""," ","",opts__20166__auto__,keyval__20168__auto__);
});})(this__20164__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,pr_pair__20167__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.GameState{",", ","}",opts__20166__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26141){
var self__ = this;
var G__26141__$1 = this;
return (new cljs.core.RecordIter((0),G__26141__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20148__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20144__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20154__auto__){
var self__ = this;
var this__20154__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20145__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20146__auto__,other__20147__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20159__auto__,k__20160__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bullets","bullets",1734809024),null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),k__20160__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20159__auto____$1),self__.__meta),k__20160__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20160__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__26141){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__26145 = cljs.core.keyword_identical_QMARK_;
var expr__26146 = k__20158__auto__;
if(cljs.core.truth_(pred__26145.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__26146))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__26141,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26145.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__26146))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__26141,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26145.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__26146))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__26141,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26145.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__26146))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__26141,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__26141),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__26141){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__26141,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20155__auto__,entry__20156__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20156__auto__)){
return cljs.core._assoc.call(null,this__20155__auto____$1,cljs.core._nth.call(null,entry__20156__auto__,(0)),cljs.core._nth.call(null,entry__20156__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20155__auto____$1,entry__20156__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"remote-players","remote-players",-1207501111,null),new cljs.core.Symbol(null,"bullets","bullets",-919626745,null),new cljs.core.Symbol(null,"map","map",-1282745308,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$ctorPrSeq = (function (this__20184__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/GameState");
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$ctorPrWriter = (function (this__20184__auto__,writer__20185__auto__){
return cljs.core._write.call(null,writer__20185__auto__,"p3r50na.apps.bookof5rinds.client.game.component/GameState");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_GameState(player,remote_players,bullets,map){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(player,remote_players,bullets,map,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__26143){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__26143),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__26143),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__26143),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__26143),null,cljs.core.dissoc.call(null,G__26143,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
});


/**
* @constructor
* @param {*} name
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
p3r50na.apps.bookof5rinds.client.game.component.Player = (function (name,x,y,size,speed,__meta,__extmap,__hash){
this.name = name;
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
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20150__auto__,k__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
return cljs.core._lookup.call(null,this__20150__auto____$1,k__20151__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k26150,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__26152 = (((k26150 instanceof cljs.core.Keyword))?k26150.fqn:null);
switch (G__26152) {
case "name":
return self__.name;

break;
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
return cljs.core.get.call(null,self__.__extmap,k26150,else__20153__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20164__auto__,writer__20165__auto__,opts__20166__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
var pr_pair__20167__auto__ = ((function (this__20164__auto____$1){
return (function (keyval__20168__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,cljs.core.pr_writer,""," ","",opts__20166__auto__,keyval__20168__auto__);
});})(this__20164__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,pr_pair__20167__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20166__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26149){
var self__ = this;
var G__26149__$1 = this;
return (new cljs.core.RecordIter((0),G__26149__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20148__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20144__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20154__auto__){
var self__ = this;
var this__20154__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20145__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20146__auto__,other__20147__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20159__auto__,k__20160__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20160__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20159__auto____$1),self__.__meta),k__20160__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20160__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__26149){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__26153 = cljs.core.keyword_identical_QMARK_;
var expr__26154 = k__20158__auto__;
if(cljs.core.truth_(pred__26153.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__26154))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__26149,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26153.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__26154))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__26149,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26153.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__26154))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__26149,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26153.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__26154))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__26149,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26153.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__26154))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__26149,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__26149),null));
}
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__26149){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__26149,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20155__auto__,entry__20156__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20156__auto__)){
return cljs.core._assoc.call(null,this__20155__auto____$1,cljs.core._nth.call(null,entry__20156__auto__,(0)),cljs.core._nth.call(null,entry__20156__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20155__auto____$1,entry__20156__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20184__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20184__auto__,writer__20185__auto__){
return cljs.core._write.call(null,writer__20185__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(name,x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(name,x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__26151){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__26151),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__26151),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__26151),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__26151),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__26151),null,cljs.core.dissoc.call(null,G__26151,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.game_simulation = p3r50na.apps.bookof5rinds.client.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player("gorillatron",(5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(60));
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(){
var state = p3r50na.apps.bookof5rinds.client.game.component.next_frame.call(null);
var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);
var walls = p3r50na.apps.bookof5rinds.client.game.map.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__26171_26185 = cljs.core.seq.call(null,walls);
var chunk__26172_26186 = null;
var count__26173_26187 = (0);
var i__26174_26188 = (0);
while(true){
if((i__26174_26188 < count__26173_26187)){
var wall_26189 = cljs.core._nth.call(null,chunk__26172_26186,i__26174_26188);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_26189),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_26189),(20),(20));

var G__26190 = seq__26171_26185;
var G__26191 = chunk__26172_26186;
var G__26192 = count__26173_26187;
var G__26193 = (i__26174_26188 + (1));
seq__26171_26185 = G__26190;
chunk__26172_26186 = G__26191;
count__26173_26187 = G__26192;
i__26174_26188 = G__26193;
continue;
} else {
var temp__4425__auto___26194 = cljs.core.seq.call(null,seq__26171_26185);
if(temp__4425__auto___26194){
var seq__26171_26195__$1 = temp__4425__auto___26194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26171_26195__$1)){
var c__20339__auto___26196 = cljs.core.chunk_first.call(null,seq__26171_26195__$1);
var G__26197 = cljs.core.chunk_rest.call(null,seq__26171_26195__$1);
var G__26198 = c__20339__auto___26196;
var G__26199 = cljs.core.count.call(null,c__20339__auto___26196);
var G__26200 = (0);
seq__26171_26185 = G__26197;
chunk__26172_26186 = G__26198;
count__26173_26187 = G__26199;
i__26174_26188 = G__26200;
continue;
} else {
var wall_26201 = cljs.core.first.call(null,seq__26171_26195__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_26201),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_26201),(20),(20));

var G__26202 = cljs.core.next.call(null,seq__26171_26195__$1);
var G__26203 = null;
var G__26204 = (0);
var G__26205 = (0);
seq__26171_26185 = G__26202;
chunk__26172_26186 = G__26203;
count__26173_26187 = G__26204;
i__26174_26188 = G__26205;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__26175_26206 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__26175_26207__$1 = ((((!((map__26175_26206 == null)))?((((map__26175_26206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26175_26206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26175_26206):map__26175_26206);
var x_26208 = cljs.core.get.call(null,map__26175_26207__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_26209 = cljs.core.get.call(null,map__26175_26207__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_26210 = cljs.core.get.call(null,map__26175_26207__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_26208,y_26209,size_26210,size_26210);

var seq__26177 = cljs.core.seq.call(null,bullets);
var chunk__26178 = null;
var count__26179 = (0);
var i__26180 = (0);
while(true){
if((i__26180 < count__26179)){
var bullet = cljs.core._nth.call(null,chunk__26178,i__26180);
var map__26181_26211 = bullet;
var map__26181_26212__$1 = ((((!((map__26181_26211 == null)))?((((map__26181_26211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26181_26211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26181_26211):map__26181_26211);
var bx_26213 = cljs.core.get.call(null,map__26181_26212__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_26214 = cljs.core.get.call(null,map__26181_26212__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_26215 = cljs.core.get.call(null,map__26181_26212__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_26213,by_26214,size_26215,size_26215);

var G__26216 = seq__26177;
var G__26217 = chunk__26178;
var G__26218 = count__26179;
var G__26219 = (i__26180 + (1));
seq__26177 = G__26216;
chunk__26178 = G__26217;
count__26179 = G__26218;
i__26180 = G__26219;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26177);
if(temp__4425__auto__){
var seq__26177__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26177__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__26177__$1);
var G__26220 = cljs.core.chunk_rest.call(null,seq__26177__$1);
var G__26221 = c__20339__auto__;
var G__26222 = cljs.core.count.call(null,c__20339__auto__);
var G__26223 = (0);
seq__26177 = G__26220;
chunk__26178 = G__26221;
count__26179 = G__26222;
i__26180 = G__26223;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__26177__$1);
var map__26183_26224 = bullet;
var map__26183_26225__$1 = ((((!((map__26183_26224 == null)))?((((map__26183_26224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26183_26224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26183_26224):map__26183_26224);
var bx_26226 = cljs.core.get.call(null,map__26183_26225__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_26227 = cljs.core.get.call(null,map__26183_26225__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_26228 = cljs.core.get.call(null,map__26183_26225__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_26226,by_26227,size_26228,size_26228);

var G__26229 = cljs.core.next.call(null,seq__26177__$1);
var G__26230 = null;
var G__26231 = (0);
var G__26232 = (0);
seq__26177 = G__26229;
chunk__26178 = G__26230;
count__26179 = G__26231;
i__26180 = G__26232;
continue;
}
} else {
return null;
}
}
break;
}
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__26233_SHARP_){
return cljs.core.conj.call(null,p1__26233_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__26234_SHARP_){
return cljs.core.disj.call(null,p1__26234_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(){
var mx = quil.core.mouse_x.call(null);
var my = quil.core.mouse_y.call(null);
var event = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"player-fired-bullet",new cljs.core.Keyword(null,"mx","mx",-199887020),mx,new cljs.core.Keyword(null,"my","my",-1055703269),my], null);
return p3r50na.apps.bookof5rinds.client.game.component.add_event.call(null,event);
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__26235__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__26235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26236__i = 0, G__26236__a = new Array(arguments.length -  0);
while (G__26236__i < G__26236__a.length) {G__26236__a[G__26236__i] = arguments[G__26236__i + 0]; ++G__26236__i;}
  args = new cljs.core.IndexedSeq(G__26236__a,0);
} 
return G__26235__delegate.call(this,args);};
G__26235.cljs$lang$maxFixedArity = 0;
G__26235.cljs$lang$applyTo = (function (arglist__26237){
var args = cljs.core.seq(arglist__26237);
return G__26235__delegate(args);
});
G__26235.cljs$core$IFn$_invoke$arity$variadic = G__26235__delegate;
return G__26235;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.map.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__26238__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__26238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26239__i = 0, G__26239__a = new Array(arguments.length -  0);
while (G__26239__i < G__26239__a.length) {G__26239__a[G__26239__i] = arguments[G__26239__i + 0]; ++G__26239__i;}
  args = new cljs.core.IndexedSeq(G__26239__a,0);
} 
return G__26238__delegate.call(this,args);};
G__26238.cljs$lang$maxFixedArity = 0;
G__26238.cljs$lang$applyTo = (function (arglist__26240){
var args = cljs.core.seq(arglist__26240);
return G__26238__delegate(args);
});
G__26238.cljs$core$IFn$_invoke$arity$variadic = G__26238__delegate;
return G__26238;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__26241__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__26241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26242__i = 0, G__26242__a = new Array(arguments.length -  0);
while (G__26242__i < G__26242__a.length) {G__26242__a[G__26242__i] = arguments[G__26242__i + 0]; ++G__26242__i;}
  args = new cljs.core.IndexedSeq(G__26242__a,0);
} 
return G__26241__delegate.call(this,args);};
G__26241.cljs$lang$maxFixedArity = 0;
G__26241.cljs$lang$applyTo = (function (arglist__26243){
var args = cljs.core.seq(arglist__26243);
return G__26241__delegate(args);
});
G__26241.cljs$core$IFn$_invoke$arity$variadic = G__26241__delegate;
return G__26241;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__26244__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__26244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26245__i = 0, G__26245__a = new Array(arguments.length -  0);
while (G__26245__i < G__26245__a.length) {G__26245__a[G__26245__i] = arguments[G__26245__i + 0]; ++G__26245__i;}
  args = new cljs.core.IndexedSeq(G__26245__a,0);
} 
return G__26244__delegate.call(this,args);};
G__26244.cljs$lang$maxFixedArity = 0;
G__26244.cljs$lang$applyTo = (function (arglist__26246){
var args = cljs.core.seq(arglist__26246);
return G__26244__delegate(args);
});
G__26244.cljs$core$IFn$_invoke$arity$variadic = G__26244__delegate;
return G__26244;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__26247__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__26247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26248__i = 0, G__26248__a = new Array(arguments.length -  0);
while (G__26248__i < G__26248__a.length) {G__26248__a[G__26248__i] = arguments[G__26248__i + 0]; ++G__26248__i;}
  args = new cljs.core.IndexedSeq(G__26248__a,0);
} 
return G__26247__delegate.call(this,args);};
G__26247.cljs$lang$maxFixedArity = 0;
G__26247.cljs$lang$applyTo = (function (arglist__26249){
var args = cljs.core.seq(arglist__26249);
return G__26247__delegate(args);
});
G__26247.cljs$core$IFn$_invoke$arity$variadic = G__26247__delegate;
return G__26247;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23377__23378__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23377__23378__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t26253 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t26253 = (function (game_component,meta26254){
this.game_component = game_component;
this.meta26254 = meta26254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t26253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26255,meta26254__$1){
var self__ = this;
var _26255__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t26253(self__.game_component,meta26254__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t26253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26255){
var self__ = this;
var _26255__$1 = this;
return self__.meta26254;
});

p3r50na.apps.bookof5rinds.client.game.component.t26253.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t26253.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t26253.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t26253.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t26253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta26254","meta26254",-666141533,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t26253.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t26253.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t26253";

p3r50na.apps.bookof5rinds.client.game.component.t26253.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t26253");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t26253 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t26253(game_component__$1,meta26254){
return (new p3r50na.apps.bookof5rinds.client.game.component.t26253(game_component__$1,meta26254));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t26253(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map