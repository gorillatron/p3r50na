// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.levels.level1');
goog.require('om.dom');
goog.require('quil.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.level');
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k77573,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__77575 = (((k77573 instanceof cljs.core.Keyword))?k77573.fqn:null);
switch (G__77575) {
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
return cljs.core.get.call(null,self__.__extmap,k77573,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77572){
var self__ = this;
var G__77572__$1 = this;
return (new cljs.core.RecordIter((0),G__77572__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__77572){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__77576 = cljs.core.keyword_identical_QMARK_;
var expr__77577 = k__20158__auto__;
if(cljs.core.truth_(pred__77576.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__77577))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__77572,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77576.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__77577))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__77572,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77576.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__77577))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__77572,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77576.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__77577))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__77572,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__77572),null));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__77572){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__77572,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__77574){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__77574),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__77574),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__77574),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__77574),null,cljs.core.dissoc.call(null,G__77574,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k77581,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__77583 = (((k77581 instanceof cljs.core.Keyword))?k77581.fqn:null);
switch (G__77583) {
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
return cljs.core.get.call(null,self__.__extmap,k77581,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77580){
var self__ = this;
var G__77580__$1 = this;
return (new cljs.core.RecordIter((0),G__77580__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__77580){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__77584 = cljs.core.keyword_identical_QMARK_;
var expr__77585 = k__20158__auto__;
if(cljs.core.truth_(pred__77584.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__77585))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__77580,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77584.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__77585))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__77580,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77584.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__77585))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__77580,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77584.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__77585))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__77580,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77584.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__77585))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__77580,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__77580),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__77580){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__77580,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__77582){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__77582),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__77582),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__77582),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__77582),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__77582),null,cljs.core.dissoc.call(null,G__77582,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.game_simulation = p3r50na.apps.bookof5rinds.client.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player([cljs.core.str("gorilla"),cljs.core.str(cljs.core.rand.call(null,(100)))].join(''),(5),(5),(10),(1),null,null,null)),new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.levels.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.update_channel = new cljs.core.Keyword(null,"update-channel","update-channel",579422).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
var c__23302__auto___77618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto___77618){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto___77618){
return (function (state_77602){
var state_val_77603 = (state_77602[(1)]);
if((state_val_77603 === (1))){
var state_77602__$1 = state_77602;
var statearr_77604_77619 = state_77602__$1;
(statearr_77604_77619[(2)] = null);

(statearr_77604_77619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77603 === (2))){
var state_77602__$1 = state_77602;
var statearr_77605_77620 = state_77602__$1;
(statearr_77605_77620[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77603 === (3))){
var inst_77600 = (state_77602[(2)]);
var state_77602__$1 = state_77602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77602__$1,inst_77600);
} else {
if((state_val_77603 === (4))){
var state_77602__$1 = state_77602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77602__$1,(7),p3r50na.apps.bookof5rinds.client.game.component.update_channel);
} else {
if((state_val_77603 === (5))){
var state_77602__$1 = state_77602;
var statearr_77607_77621 = state_77602__$1;
(statearr_77607_77621[(2)] = null);

(statearr_77607_77621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77603 === (6))){
var inst_77598 = (state_77602[(2)]);
var state_77602__$1 = state_77602;
var statearr_77608_77622 = state_77602__$1;
(statearr_77608_77622[(2)] = inst_77598);

(statearr_77608_77622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77603 === (7))){
var inst_77591 = (state_77602[(2)]);
var inst_77592 = cljs.core.clj__GT_js.call(null,inst_77591);
var inst_77593 = JSON.stringify(inst_77592);
var inst_77594 = p3r50na.apps.bookof5rinds.client.game.component.socket.send(inst_77593);
var state_77602__$1 = (function (){var statearr_77609 = state_77602;
(statearr_77609[(7)] = inst_77594);

return statearr_77609;
})();
var statearr_77610_77623 = state_77602__$1;
(statearr_77610_77623[(2)] = null);

(statearr_77610_77623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23302__auto___77618))
;
return ((function (switch__23281__auto__,c__23302__auto___77618){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0 = (function (){
var statearr_77614 = [null,null,null,null,null,null,null,null];
(statearr_77614[(0)] = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__);

(statearr_77614[(1)] = (1));

return statearr_77614;
});
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1 = (function (state_77602){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_77602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e77615){if((e77615 instanceof Object)){
var ex__23285__auto__ = e77615;
var statearr_77616_77624 = state_77602;
(statearr_77616_77624[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77625 = state_77602;
state_77602 = G__77625;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__ = function(state_77602){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1.call(this,state_77602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto___77618))
})();
var state__23304__auto__ = (function (){var statearr_77617 = f__23303__auto__.call(null);
(statearr_77617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto___77618);

return statearr_77617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto___77618))
);

(p3r50na.apps.bookof5rinds.client.game.component.socket["onmessage"] = (function (message){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(message.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return p3r50na.apps.bookof5rinds.client.game.component.add_event.call(null,event);
}));
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(60));
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(){
var state = p3r50na.apps.bookof5rinds.client.game.component.next_frame.call(null);
var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);
var remote_players = cljs.core.vals.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var walls = p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__77656_77686 = cljs.core.seq.call(null,walls);
var chunk__77657_77687 = null;
var count__77658_77688 = (0);
var i__77659_77689 = (0);
while(true){
if((i__77659_77689 < count__77658_77688)){
var wall_77690 = cljs.core._nth.call(null,chunk__77657_77687,i__77659_77689);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_77690),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_77690),(20),(20));

var G__77691 = seq__77656_77686;
var G__77692 = chunk__77657_77687;
var G__77693 = count__77658_77688;
var G__77694 = (i__77659_77689 + (1));
seq__77656_77686 = G__77691;
chunk__77657_77687 = G__77692;
count__77658_77688 = G__77693;
i__77659_77689 = G__77694;
continue;
} else {
var temp__4425__auto___77695 = cljs.core.seq.call(null,seq__77656_77686);
if(temp__4425__auto___77695){
var seq__77656_77696__$1 = temp__4425__auto___77695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77656_77696__$1)){
var c__20339__auto___77697 = cljs.core.chunk_first.call(null,seq__77656_77696__$1);
var G__77698 = cljs.core.chunk_rest.call(null,seq__77656_77696__$1);
var G__77699 = c__20339__auto___77697;
var G__77700 = cljs.core.count.call(null,c__20339__auto___77697);
var G__77701 = (0);
seq__77656_77686 = G__77698;
chunk__77657_77687 = G__77699;
count__77658_77688 = G__77700;
i__77659_77689 = G__77701;
continue;
} else {
var wall_77702 = cljs.core.first.call(null,seq__77656_77696__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_77702),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_77702),(20),(20));

var G__77703 = cljs.core.next.call(null,seq__77656_77696__$1);
var G__77704 = null;
var G__77705 = (0);
var G__77706 = (0);
seq__77656_77686 = G__77703;
chunk__77657_77687 = G__77704;
count__77658_77688 = G__77705;
i__77659_77689 = G__77706;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__77660_77707 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__77660_77708__$1 = ((((!((map__77660_77707 == null)))?((((map__77660_77707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77660_77707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77660_77707):map__77660_77707);
var x_77709 = cljs.core.get.call(null,map__77660_77708__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_77710 = cljs.core.get.call(null,map__77660_77708__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77711 = cljs.core.get.call(null,map__77660_77708__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_77709,y_77710,size_77711,size_77711);

var seq__77662_77712 = cljs.core.seq.call(null,bullets);
var chunk__77663_77713 = null;
var count__77664_77714 = (0);
var i__77665_77715 = (0);
while(true){
if((i__77665_77715 < count__77664_77714)){
var bullet_77716 = cljs.core._nth.call(null,chunk__77663_77713,i__77665_77715);
var map__77666_77717 = bullet_77716;
var map__77666_77718__$1 = ((((!((map__77666_77717 == null)))?((((map__77666_77717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77666_77717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77666_77717):map__77666_77717);
var bx_77719 = cljs.core.get.call(null,map__77666_77718__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_77720 = cljs.core.get.call(null,map__77666_77718__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77721 = cljs.core.get.call(null,map__77666_77718__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_77719,by_77720,size_77721,size_77721);

var G__77722 = seq__77662_77712;
var G__77723 = chunk__77663_77713;
var G__77724 = count__77664_77714;
var G__77725 = (i__77665_77715 + (1));
seq__77662_77712 = G__77722;
chunk__77663_77713 = G__77723;
count__77664_77714 = G__77724;
i__77665_77715 = G__77725;
continue;
} else {
var temp__4425__auto___77726 = cljs.core.seq.call(null,seq__77662_77712);
if(temp__4425__auto___77726){
var seq__77662_77727__$1 = temp__4425__auto___77726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77662_77727__$1)){
var c__20339__auto___77728 = cljs.core.chunk_first.call(null,seq__77662_77727__$1);
var G__77729 = cljs.core.chunk_rest.call(null,seq__77662_77727__$1);
var G__77730 = c__20339__auto___77728;
var G__77731 = cljs.core.count.call(null,c__20339__auto___77728);
var G__77732 = (0);
seq__77662_77712 = G__77729;
chunk__77663_77713 = G__77730;
count__77664_77714 = G__77731;
i__77665_77715 = G__77732;
continue;
} else {
var bullet_77733 = cljs.core.first.call(null,seq__77662_77727__$1);
var map__77668_77734 = bullet_77733;
var map__77668_77735__$1 = ((((!((map__77668_77734 == null)))?((((map__77668_77734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77668_77734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77668_77734):map__77668_77734);
var bx_77736 = cljs.core.get.call(null,map__77668_77735__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_77737 = cljs.core.get.call(null,map__77668_77735__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77738 = cljs.core.get.call(null,map__77668_77735__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_77736,by_77737,size_77738,size_77738);

var G__77739 = cljs.core.next.call(null,seq__77662_77727__$1);
var G__77740 = null;
var G__77741 = (0);
var G__77742 = (0);
seq__77662_77712 = G__77739;
chunk__77663_77713 = G__77740;
count__77664_77714 = G__77741;
i__77665_77715 = G__77742;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(200),(30),(30));

quil.core.stroke.call(null,(200),(30),(30));

var seq__77670_77743 = cljs.core.seq.call(null,remote_players);
var chunk__77671_77744 = null;
var count__77672_77745 = (0);
var i__77673_77746 = (0);
while(true){
if((i__77673_77746 < count__77672_77745)){
var remote_player_77747 = cljs.core._nth.call(null,chunk__77671_77744,i__77673_77746);
var map__77674_77748 = remote_player_77747;
var map__77674_77749__$1 = ((((!((map__77674_77748 == null)))?((((map__77674_77748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77674_77748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77674_77748):map__77674_77748);
var x_77750 = cljs.core.get.call(null,map__77674_77749__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_77751 = cljs.core.get.call(null,map__77674_77749__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77752 = cljs.core.get.call(null,map__77674_77749__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_77750,y_77751,size_77752,size_77752);

var G__77753 = seq__77670_77743;
var G__77754 = chunk__77671_77744;
var G__77755 = count__77672_77745;
var G__77756 = (i__77673_77746 + (1));
seq__77670_77743 = G__77753;
chunk__77671_77744 = G__77754;
count__77672_77745 = G__77755;
i__77673_77746 = G__77756;
continue;
} else {
var temp__4425__auto___77757 = cljs.core.seq.call(null,seq__77670_77743);
if(temp__4425__auto___77757){
var seq__77670_77758__$1 = temp__4425__auto___77757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77670_77758__$1)){
var c__20339__auto___77759 = cljs.core.chunk_first.call(null,seq__77670_77758__$1);
var G__77760 = cljs.core.chunk_rest.call(null,seq__77670_77758__$1);
var G__77761 = c__20339__auto___77759;
var G__77762 = cljs.core.count.call(null,c__20339__auto___77759);
var G__77763 = (0);
seq__77670_77743 = G__77760;
chunk__77671_77744 = G__77761;
count__77672_77745 = G__77762;
i__77673_77746 = G__77763;
continue;
} else {
var remote_player_77764 = cljs.core.first.call(null,seq__77670_77758__$1);
var map__77676_77765 = remote_player_77764;
var map__77676_77766__$1 = ((((!((map__77676_77765 == null)))?((((map__77676_77765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77676_77765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77676_77765):map__77676_77765);
var x_77767 = cljs.core.get.call(null,map__77676_77766__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_77768 = cljs.core.get.call(null,map__77676_77766__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77769 = cljs.core.get.call(null,map__77676_77766__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_77767,y_77768,size_77769,size_77769);

var G__77770 = cljs.core.next.call(null,seq__77670_77758__$1);
var G__77771 = null;
var G__77772 = (0);
var G__77773 = (0);
seq__77670_77743 = G__77770;
chunk__77671_77744 = G__77771;
count__77672_77745 = G__77772;
i__77673_77746 = G__77773;
continue;
}
} else {
}
}
break;
}

var seq__77678 = cljs.core.seq.call(null,remote_bullets);
var chunk__77679 = null;
var count__77680 = (0);
var i__77681 = (0);
while(true){
if((i__77681 < count__77680)){
var bullet = cljs.core._nth.call(null,chunk__77679,i__77681);
var map__77682_77774 = bullet;
var map__77682_77775__$1 = ((((!((map__77682_77774 == null)))?((((map__77682_77774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77682_77774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77682_77774):map__77682_77774);
var bx_77776 = cljs.core.get.call(null,map__77682_77775__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_77777 = cljs.core.get.call(null,map__77682_77775__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77778 = cljs.core.get.call(null,map__77682_77775__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_77776,by_77777,size_77778,size_77778);

var G__77779 = seq__77678;
var G__77780 = chunk__77679;
var G__77781 = count__77680;
var G__77782 = (i__77681 + (1));
seq__77678 = G__77779;
chunk__77679 = G__77780;
count__77680 = G__77781;
i__77681 = G__77782;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__77678);
if(temp__4425__auto__){
var seq__77678__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77678__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__77678__$1);
var G__77783 = cljs.core.chunk_rest.call(null,seq__77678__$1);
var G__77784 = c__20339__auto__;
var G__77785 = cljs.core.count.call(null,c__20339__auto__);
var G__77786 = (0);
seq__77678 = G__77783;
chunk__77679 = G__77784;
count__77680 = G__77785;
i__77681 = G__77786;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__77678__$1);
var map__77684_77787 = bullet;
var map__77684_77788__$1 = ((((!((map__77684_77787 == null)))?((((map__77684_77787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77684_77787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77684_77787):map__77684_77787);
var bx_77789 = cljs.core.get.call(null,map__77684_77788__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_77790 = cljs.core.get.call(null,map__77684_77788__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_77791 = cljs.core.get.call(null,map__77684_77788__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_77789,by_77790,size_77791,size_77791);

var G__77792 = cljs.core.next.call(null,seq__77678__$1);
var G__77793 = null;
var G__77794 = (0);
var G__77795 = (0);
seq__77678 = G__77792;
chunk__77679 = G__77793;
count__77680 = G__77794;
i__77681 = G__77795;
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
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__77796_SHARP_){
return cljs.core.conj.call(null,p1__77796_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__77797_SHARP_){
return cljs.core.disj.call(null,p1__77797_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
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
var G__77798__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__77798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77799__i = 0, G__77799__a = new Array(arguments.length -  0);
while (G__77799__i < G__77799__a.length) {G__77799__a[G__77799__i] = arguments[G__77799__i + 0]; ++G__77799__i;}
  args = new cljs.core.IndexedSeq(G__77799__a,0);
} 
return G__77798__delegate.call(this,args);};
G__77798.cljs$lang$maxFixedArity = 0;
G__77798.cljs$lang$applyTo = (function (arglist__77800){
var args = cljs.core.seq(arglist__77800);
return G__77798__delegate(args);
});
G__77798.cljs$core$IFn$_invoke$arity$variadic = G__77798__delegate;
return G__77798;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__77801__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__77801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77802__i = 0, G__77802__a = new Array(arguments.length -  0);
while (G__77802__i < G__77802__a.length) {G__77802__a[G__77802__i] = arguments[G__77802__i + 0]; ++G__77802__i;}
  args = new cljs.core.IndexedSeq(G__77802__a,0);
} 
return G__77801__delegate.call(this,args);};
G__77801.cljs$lang$maxFixedArity = 0;
G__77801.cljs$lang$applyTo = (function (arglist__77803){
var args = cljs.core.seq(arglist__77803);
return G__77801__delegate(args);
});
G__77801.cljs$core$IFn$_invoke$arity$variadic = G__77801__delegate;
return G__77801;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__77804__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__77804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77805__i = 0, G__77805__a = new Array(arguments.length -  0);
while (G__77805__i < G__77805__a.length) {G__77805__a[G__77805__i] = arguments[G__77805__i + 0]; ++G__77805__i;}
  args = new cljs.core.IndexedSeq(G__77805__a,0);
} 
return G__77804__delegate.call(this,args);};
G__77804.cljs$lang$maxFixedArity = 0;
G__77804.cljs$lang$applyTo = (function (arglist__77806){
var args = cljs.core.seq(arglist__77806);
return G__77804__delegate(args);
});
G__77804.cljs$core$IFn$_invoke$arity$variadic = G__77804__delegate;
return G__77804;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__77807__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__77807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77808__i = 0, G__77808__a = new Array(arguments.length -  0);
while (G__77808__i < G__77808__a.length) {G__77808__a[G__77808__i] = arguments[G__77808__i + 0]; ++G__77808__i;}
  args = new cljs.core.IndexedSeq(G__77808__a,0);
} 
return G__77807__delegate.call(this,args);};
G__77807.cljs$lang$maxFixedArity = 0;
G__77807.cljs$lang$applyTo = (function (arglist__77809){
var args = cljs.core.seq(arglist__77809);
return G__77807__delegate(args);
});
G__77807.cljs$core$IFn$_invoke$arity$variadic = G__77807__delegate;
return G__77807;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__77810__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__77810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77811__i = 0, G__77811__a = new Array(arguments.length -  0);
while (G__77811__i < G__77811__a.length) {G__77811__a[G__77811__i] = arguments[G__77811__i + 0]; ++G__77811__i;}
  args = new cljs.core.IndexedSeq(G__77811__a,0);
} 
return G__77810__delegate.call(this,args);};
G__77810.cljs$lang$maxFixedArity = 0;
G__77810.cljs$lang$applyTo = (function (arglist__77812){
var args = cljs.core.seq(arglist__77812);
return G__77810__delegate(args);
});
G__77810.cljs$core$IFn$_invoke$arity$variadic = G__77810__delegate;
return G__77810;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t77816 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t77816 = (function (game_component,meta77817){
this.game_component = game_component;
this.meta77817 = meta77817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t77816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77818,meta77817__$1){
var self__ = this;
var _77818__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t77816(self__.game_component,meta77817__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t77816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77818){
var self__ = this;
var _77818__$1 = this;
return self__.meta77817;
});

p3r50na.apps.bookof5rinds.client.game.component.t77816.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t77816.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t77816.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t77816.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t77816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta77817","meta77817",1509684588,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t77816.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t77816.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t77816";

p3r50na.apps.bookof5rinds.client.game.component.t77816.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t77816");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t77816 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t77816(game_component__$1,meta77817){
return (new p3r50na.apps.bookof5rinds.client.game.component.t77816(game_component__$1,meta77817));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t77816(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map