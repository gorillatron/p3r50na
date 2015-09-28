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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k115836,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__115838 = (((k115836 instanceof cljs.core.Keyword))?k115836.fqn:null);
switch (G__115838) {
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
return cljs.core.get.call(null,self__.__extmap,k115836,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__115835){
var self__ = this;
var G__115835__$1 = this;
return (new cljs.core.RecordIter((0),G__115835__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__115835){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__115839 = cljs.core.keyword_identical_QMARK_;
var expr__115840 = k__20158__auto__;
if(cljs.core.truth_(pred__115839.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__115840))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__115835,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115839.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__115840))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__115835,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115839.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__115840))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__115835,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115839.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__115840))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__115835,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__115835),null));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__115835){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__115835,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__115837){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__115837),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__115837),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__115837),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__115837),null,cljs.core.dissoc.call(null,G__115837,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k115844,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__115846 = (((k115844 instanceof cljs.core.Keyword))?k115844.fqn:null);
switch (G__115846) {
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
return cljs.core.get.call(null,self__.__extmap,k115844,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__115843){
var self__ = this;
var G__115843__$1 = this;
return (new cljs.core.RecordIter((0),G__115843__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__115843){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__115847 = cljs.core.keyword_identical_QMARK_;
var expr__115848 = k__20158__auto__;
if(cljs.core.truth_(pred__115847.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__115848))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__115843,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115847.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__115848))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__115843,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115847.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__115848))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__115843,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115847.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__115848))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__115843,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115847.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__115848))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__115843,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__115843),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__115843){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__115843,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__115845){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__115845),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__115845),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__115845),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__115845),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__115845),null,cljs.core.dissoc.call(null,G__115845,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.game_simulation = p3r50na.apps.bookof5rinds.client.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player([cljs.core.str("gorilla"),cljs.core.str(cljs.core.rand.call(null,(100)))].join(''),cljs.core.rand.call(null,(100)),cljs.core.rand.call(null,(100)),(10),(1),null,null,null)),new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.levels.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.update_channel = new cljs.core.Keyword(null,"update-channel","update-channel",579422).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
var c__23302__auto___115881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto___115881){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto___115881){
return (function (state_115865){
var state_val_115866 = (state_115865[(1)]);
if((state_val_115866 === (1))){
var state_115865__$1 = state_115865;
var statearr_115867_115882 = state_115865__$1;
(statearr_115867_115882[(2)] = null);

(statearr_115867_115882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115866 === (2))){
var state_115865__$1 = state_115865;
var statearr_115868_115883 = state_115865__$1;
(statearr_115868_115883[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115866 === (3))){
var inst_115863 = (state_115865[(2)]);
var state_115865__$1 = state_115865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115865__$1,inst_115863);
} else {
if((state_val_115866 === (4))){
var state_115865__$1 = state_115865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115865__$1,(7),p3r50na.apps.bookof5rinds.client.game.component.update_channel);
} else {
if((state_val_115866 === (5))){
var state_115865__$1 = state_115865;
var statearr_115870_115884 = state_115865__$1;
(statearr_115870_115884[(2)] = null);

(statearr_115870_115884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115866 === (6))){
var inst_115861 = (state_115865[(2)]);
var state_115865__$1 = state_115865;
var statearr_115871_115885 = state_115865__$1;
(statearr_115871_115885[(2)] = inst_115861);

(statearr_115871_115885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115866 === (7))){
var inst_115854 = (state_115865[(2)]);
var inst_115855 = cljs.core.clj__GT_js.call(null,inst_115854);
var inst_115856 = JSON.stringify(inst_115855);
var inst_115857 = p3r50na.apps.bookof5rinds.client.game.component.socket.send(inst_115856);
var state_115865__$1 = (function (){var statearr_115872 = state_115865;
(statearr_115872[(7)] = inst_115857);

return statearr_115872;
})();
var statearr_115873_115886 = state_115865__$1;
(statearr_115873_115886[(2)] = null);

(statearr_115873_115886[(1)] = (2));


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
});})(c__23302__auto___115881))
;
return ((function (switch__23281__auto__,c__23302__auto___115881){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0 = (function (){
var statearr_115877 = [null,null,null,null,null,null,null,null];
(statearr_115877[(0)] = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__);

(statearr_115877[(1)] = (1));

return statearr_115877;
});
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1 = (function (state_115865){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_115865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e115878){if((e115878 instanceof Object)){
var ex__23285__auto__ = e115878;
var statearr_115879_115887 = state_115865;
(statearr_115879_115887[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e115878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115888 = state_115865;
state_115865 = G__115888;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__ = function(state_115865){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1.call(this,state_115865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto___115881))
})();
var state__23304__auto__ = (function (){var statearr_115880 = f__23303__auto__.call(null);
(statearr_115880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto___115881);

return statearr_115880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto___115881))
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
var hits_taken_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"hits-taken","hits-taken",2058952709).cljs$core$IFn$_invoke$arity$1(state));
var life = ((150) - ((4) * hits_taken_count));
var walls = p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
if((life < (0))){
quil.core.background.call(null,(230),(40),(40));

quil.core.text_size.call(null,(40));

return quil.core.text.call(null,"GAME OVER",(100),(100));
} else {
quil.core.background.call(null,(255));

quil.core.stroke.call(null,(50),(200),(50));

quil.core.fill.call(null,(80),(250),(80));

quil.core.rect.call(null,(5),(350),life,(5));

quil.core.stroke.call(null,(0),(0),(0));

quil.core.fill.call(null,(200),(200),(200));

var seq__115919_115949 = cljs.core.seq.call(null,walls);
var chunk__115920_115950 = null;
var count__115921_115951 = (0);
var i__115922_115952 = (0);
while(true){
if((i__115922_115952 < count__115921_115951)){
var wall_115953 = cljs.core._nth.call(null,chunk__115920_115950,i__115922_115952);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_115953),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_115953),(20),(20));

var G__115954 = seq__115919_115949;
var G__115955 = chunk__115920_115950;
var G__115956 = count__115921_115951;
var G__115957 = (i__115922_115952 + (1));
seq__115919_115949 = G__115954;
chunk__115920_115950 = G__115955;
count__115921_115951 = G__115956;
i__115922_115952 = G__115957;
continue;
} else {
var temp__4425__auto___115958 = cljs.core.seq.call(null,seq__115919_115949);
if(temp__4425__auto___115958){
var seq__115919_115959__$1 = temp__4425__auto___115958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115919_115959__$1)){
var c__20339__auto___115960 = cljs.core.chunk_first.call(null,seq__115919_115959__$1);
var G__115961 = cljs.core.chunk_rest.call(null,seq__115919_115959__$1);
var G__115962 = c__20339__auto___115960;
var G__115963 = cljs.core.count.call(null,c__20339__auto___115960);
var G__115964 = (0);
seq__115919_115949 = G__115961;
chunk__115920_115950 = G__115962;
count__115921_115951 = G__115963;
i__115922_115952 = G__115964;
continue;
} else {
var wall_115965 = cljs.core.first.call(null,seq__115919_115959__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_115965),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_115965),(20),(20));

var G__115966 = cljs.core.next.call(null,seq__115919_115959__$1);
var G__115967 = null;
var G__115968 = (0);
var G__115969 = (0);
seq__115919_115949 = G__115966;
chunk__115920_115950 = G__115967;
count__115921_115951 = G__115968;
i__115922_115952 = G__115969;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__115923_115970 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__115923_115971__$1 = ((((!((map__115923_115970 == null)))?((((map__115923_115970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115923_115970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115923_115970):map__115923_115970);
var x_115972 = cljs.core.get.call(null,map__115923_115971__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_115973 = cljs.core.get.call(null,map__115923_115971__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115974 = cljs.core.get.call(null,map__115923_115971__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_115972,y_115973,size_115974,size_115974);

var seq__115925_115975 = cljs.core.seq.call(null,bullets);
var chunk__115926_115976 = null;
var count__115927_115977 = (0);
var i__115928_115978 = (0);
while(true){
if((i__115928_115978 < count__115927_115977)){
var bullet_115979 = cljs.core._nth.call(null,chunk__115926_115976,i__115928_115978);
var map__115929_115980 = bullet_115979;
var map__115929_115981__$1 = ((((!((map__115929_115980 == null)))?((((map__115929_115980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115929_115980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115929_115980):map__115929_115980);
var bx_115982 = cljs.core.get.call(null,map__115929_115981__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_115983 = cljs.core.get.call(null,map__115929_115981__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115984 = cljs.core.get.call(null,map__115929_115981__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_115982,by_115983,size_115984,size_115984);

var G__115985 = seq__115925_115975;
var G__115986 = chunk__115926_115976;
var G__115987 = count__115927_115977;
var G__115988 = (i__115928_115978 + (1));
seq__115925_115975 = G__115985;
chunk__115926_115976 = G__115986;
count__115927_115977 = G__115987;
i__115928_115978 = G__115988;
continue;
} else {
var temp__4425__auto___115989 = cljs.core.seq.call(null,seq__115925_115975);
if(temp__4425__auto___115989){
var seq__115925_115990__$1 = temp__4425__auto___115989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115925_115990__$1)){
var c__20339__auto___115991 = cljs.core.chunk_first.call(null,seq__115925_115990__$1);
var G__115992 = cljs.core.chunk_rest.call(null,seq__115925_115990__$1);
var G__115993 = c__20339__auto___115991;
var G__115994 = cljs.core.count.call(null,c__20339__auto___115991);
var G__115995 = (0);
seq__115925_115975 = G__115992;
chunk__115926_115976 = G__115993;
count__115927_115977 = G__115994;
i__115928_115978 = G__115995;
continue;
} else {
var bullet_115996 = cljs.core.first.call(null,seq__115925_115990__$1);
var map__115931_115997 = bullet_115996;
var map__115931_115998__$1 = ((((!((map__115931_115997 == null)))?((((map__115931_115997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115931_115997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115931_115997):map__115931_115997);
var bx_115999 = cljs.core.get.call(null,map__115931_115998__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_116000 = cljs.core.get.call(null,map__115931_115998__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_116001 = cljs.core.get.call(null,map__115931_115998__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_115999,by_116000,size_116001,size_116001);

var G__116002 = cljs.core.next.call(null,seq__115925_115990__$1);
var G__116003 = null;
var G__116004 = (0);
var G__116005 = (0);
seq__115925_115975 = G__116002;
chunk__115926_115976 = G__116003;
count__115927_115977 = G__116004;
i__115928_115978 = G__116005;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(200),(30),(30));

quil.core.stroke.call(null,(200),(30),(30));

var seq__115933_116006 = cljs.core.seq.call(null,remote_players);
var chunk__115934_116007 = null;
var count__115935_116008 = (0);
var i__115936_116009 = (0);
while(true){
if((i__115936_116009 < count__115935_116008)){
var remote_player_116010 = cljs.core._nth.call(null,chunk__115934_116007,i__115936_116009);
var map__115937_116011 = remote_player_116010;
var map__115937_116012__$1 = ((((!((map__115937_116011 == null)))?((((map__115937_116011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115937_116011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115937_116011):map__115937_116011);
var x_116013 = cljs.core.get.call(null,map__115937_116012__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_116014 = cljs.core.get.call(null,map__115937_116012__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_116015 = cljs.core.get.call(null,map__115937_116012__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_116013,y_116014,size_116015,size_116015);

var G__116016 = seq__115933_116006;
var G__116017 = chunk__115934_116007;
var G__116018 = count__115935_116008;
var G__116019 = (i__115936_116009 + (1));
seq__115933_116006 = G__116016;
chunk__115934_116007 = G__116017;
count__115935_116008 = G__116018;
i__115936_116009 = G__116019;
continue;
} else {
var temp__4425__auto___116020 = cljs.core.seq.call(null,seq__115933_116006);
if(temp__4425__auto___116020){
var seq__115933_116021__$1 = temp__4425__auto___116020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115933_116021__$1)){
var c__20339__auto___116022 = cljs.core.chunk_first.call(null,seq__115933_116021__$1);
var G__116023 = cljs.core.chunk_rest.call(null,seq__115933_116021__$1);
var G__116024 = c__20339__auto___116022;
var G__116025 = cljs.core.count.call(null,c__20339__auto___116022);
var G__116026 = (0);
seq__115933_116006 = G__116023;
chunk__115934_116007 = G__116024;
count__115935_116008 = G__116025;
i__115936_116009 = G__116026;
continue;
} else {
var remote_player_116027 = cljs.core.first.call(null,seq__115933_116021__$1);
var map__115939_116028 = remote_player_116027;
var map__115939_116029__$1 = ((((!((map__115939_116028 == null)))?((((map__115939_116028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115939_116028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115939_116028):map__115939_116028);
var x_116030 = cljs.core.get.call(null,map__115939_116029__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_116031 = cljs.core.get.call(null,map__115939_116029__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_116032 = cljs.core.get.call(null,map__115939_116029__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_116030,y_116031,size_116032,size_116032);

var G__116033 = cljs.core.next.call(null,seq__115933_116021__$1);
var G__116034 = null;
var G__116035 = (0);
var G__116036 = (0);
seq__115933_116006 = G__116033;
chunk__115934_116007 = G__116034;
count__115935_116008 = G__116035;
i__115936_116009 = G__116036;
continue;
}
} else {
}
}
break;
}

var seq__115941 = cljs.core.seq.call(null,remote_bullets);
var chunk__115942 = null;
var count__115943 = (0);
var i__115944 = (0);
while(true){
if((i__115944 < count__115943)){
var bullet = cljs.core._nth.call(null,chunk__115942,i__115944);
var map__115945_116037 = bullet;
var map__115945_116038__$1 = ((((!((map__115945_116037 == null)))?((((map__115945_116037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115945_116037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115945_116037):map__115945_116037);
var bx_116039 = cljs.core.get.call(null,map__115945_116038__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_116040 = cljs.core.get.call(null,map__115945_116038__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_116041 = cljs.core.get.call(null,map__115945_116038__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_116039,by_116040,size_116041,size_116041);

var G__116042 = seq__115941;
var G__116043 = chunk__115942;
var G__116044 = count__115943;
var G__116045 = (i__115944 + (1));
seq__115941 = G__116042;
chunk__115942 = G__116043;
count__115943 = G__116044;
i__115944 = G__116045;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__115941);
if(temp__4425__auto__){
var seq__115941__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115941__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__115941__$1);
var G__116046 = cljs.core.chunk_rest.call(null,seq__115941__$1);
var G__116047 = c__20339__auto__;
var G__116048 = cljs.core.count.call(null,c__20339__auto__);
var G__116049 = (0);
seq__115941 = G__116046;
chunk__115942 = G__116047;
count__115943 = G__116048;
i__115944 = G__116049;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__115941__$1);
var map__115947_116050 = bullet;
var map__115947_116051__$1 = ((((!((map__115947_116050 == null)))?((((map__115947_116050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115947_116050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115947_116050):map__115947_116050);
var bx_116052 = cljs.core.get.call(null,map__115947_116051__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_116053 = cljs.core.get.call(null,map__115947_116051__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_116054 = cljs.core.get.call(null,map__115947_116051__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_116052,by_116053,size_116054,size_116054);

var G__116055 = cljs.core.next.call(null,seq__115941__$1);
var G__116056 = null;
var G__116057 = (0);
var G__116058 = (0);
seq__115941 = G__116055;
chunk__115942 = G__116056;
count__115943 = G__116057;
i__115944 = G__116058;
continue;
}
} else {
return null;
}
}
break;
}
}
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__116059_SHARP_){
return cljs.core.conj.call(null,p1__116059_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__116060_SHARP_){
return cljs.core.disj.call(null,p1__116060_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
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
var G__116061__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__116061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116062__i = 0, G__116062__a = new Array(arguments.length -  0);
while (G__116062__i < G__116062__a.length) {G__116062__a[G__116062__i] = arguments[G__116062__i + 0]; ++G__116062__i;}
  args = new cljs.core.IndexedSeq(G__116062__a,0);
} 
return G__116061__delegate.call(this,args);};
G__116061.cljs$lang$maxFixedArity = 0;
G__116061.cljs$lang$applyTo = (function (arglist__116063){
var args = cljs.core.seq(arglist__116063);
return G__116061__delegate(args);
});
G__116061.cljs$core$IFn$_invoke$arity$variadic = G__116061__delegate;
return G__116061;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__116064__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__116064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116065__i = 0, G__116065__a = new Array(arguments.length -  0);
while (G__116065__i < G__116065__a.length) {G__116065__a[G__116065__i] = arguments[G__116065__i + 0]; ++G__116065__i;}
  args = new cljs.core.IndexedSeq(G__116065__a,0);
} 
return G__116064__delegate.call(this,args);};
G__116064.cljs$lang$maxFixedArity = 0;
G__116064.cljs$lang$applyTo = (function (arglist__116066){
var args = cljs.core.seq(arglist__116066);
return G__116064__delegate(args);
});
G__116064.cljs$core$IFn$_invoke$arity$variadic = G__116064__delegate;
return G__116064;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__116067__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__116067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116068__i = 0, G__116068__a = new Array(arguments.length -  0);
while (G__116068__i < G__116068__a.length) {G__116068__a[G__116068__i] = arguments[G__116068__i + 0]; ++G__116068__i;}
  args = new cljs.core.IndexedSeq(G__116068__a,0);
} 
return G__116067__delegate.call(this,args);};
G__116067.cljs$lang$maxFixedArity = 0;
G__116067.cljs$lang$applyTo = (function (arglist__116069){
var args = cljs.core.seq(arglist__116069);
return G__116067__delegate(args);
});
G__116067.cljs$core$IFn$_invoke$arity$variadic = G__116067__delegate;
return G__116067;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__116070__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__116070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116071__i = 0, G__116071__a = new Array(arguments.length -  0);
while (G__116071__i < G__116071__a.length) {G__116071__a[G__116071__i] = arguments[G__116071__i + 0]; ++G__116071__i;}
  args = new cljs.core.IndexedSeq(G__116071__a,0);
} 
return G__116070__delegate.call(this,args);};
G__116070.cljs$lang$maxFixedArity = 0;
G__116070.cljs$lang$applyTo = (function (arglist__116072){
var args = cljs.core.seq(arglist__116072);
return G__116070__delegate(args);
});
G__116070.cljs$core$IFn$_invoke$arity$variadic = G__116070__delegate;
return G__116070;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__116073__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__116073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116074__i = 0, G__116074__a = new Array(arguments.length -  0);
while (G__116074__i < G__116074__a.length) {G__116074__a[G__116074__i] = arguments[G__116074__i + 0]; ++G__116074__i;}
  args = new cljs.core.IndexedSeq(G__116074__a,0);
} 
return G__116073__delegate.call(this,args);};
G__116073.cljs$lang$maxFixedArity = 0;
G__116073.cljs$lang$applyTo = (function (arglist__116075){
var args = cljs.core.seq(arglist__116075);
return G__116073__delegate(args);
});
G__116073.cljs$core$IFn$_invoke$arity$variadic = G__116073__delegate;
return G__116073;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t116079 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t116079 = (function (game_component,meta116080){
this.game_component = game_component;
this.meta116080 = meta116080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t116079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116081,meta116080__$1){
var self__ = this;
var _116081__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t116079(self__.game_component,meta116080__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t116079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116081){
var self__ = this;
var _116081__$1 = this;
return self__.meta116080;
});

p3r50na.apps.bookof5rinds.client.game.component.t116079.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t116079.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t116079.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t116079.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t116079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta116080","meta116080",-2039132017,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t116079.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t116079.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t116079";

p3r50na.apps.bookof5rinds.client.game.component.t116079.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t116079");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t116079 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t116079(game_component__$1,meta116080){
return (new p3r50na.apps.bookof5rinds.client.game.component.t116079(game_component__$1,meta116080));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t116079(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map