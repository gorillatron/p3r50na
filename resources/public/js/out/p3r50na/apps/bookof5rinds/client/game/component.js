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
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k27489,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__27491 = (((k27489 instanceof cljs.core.Keyword))?k27489.fqn:null);
switch (G__27491) {
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
return cljs.core.get.call(null,self__.__extmap,k27489,else__20154__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20165__auto__,writer__20166__auto__,opts__20167__auto__){
var self__ = this;
var this__20165__auto____$1 = this;
var pr_pair__20168__auto__ = ((function (this__20165__auto____$1){
return (function (keyval__20169__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,cljs.core.pr_writer,""," ","",opts__20167__auto__,keyval__20169__auto__);
});})(this__20165__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27488){
var self__ = this;
var G__27488__$1 = this;
return (new cljs.core.RecordIter((0),G__27488__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20146__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
var h__19972__auto__ = self__.__hash;
if(!((h__19972__auto__ == null))){
return h__19972__auto__;
} else {
var h__19972__auto____$1 = cljs.core.hash_imap.call(null,this__20146__auto____$1);
self__.__hash = h__19972__auto____$1;

return h__19972__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20147__auto__,other__20148__auto__){
var self__ = this;
var this__20147__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19544__auto__ = other__20148__auto__;
if(cljs.core.truth_(and__19544__auto__)){
var and__19544__auto____$1 = (this__20147__auto____$1.constructor === other__20148__auto__.constructor);
if(and__19544__auto____$1){
return cljs.core.equiv_map.call(null,this__20147__auto____$1,other__20148__auto__);
} else {
return and__19544__auto____$1;
}
} else {
return and__19544__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20160__auto__,k__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__27488){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__27492 = cljs.core.keyword_identical_QMARK_;
var expr__27493 = k__20159__auto__;
if(cljs.core.truth_(pred__27492.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27493))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__27488,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27492.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27493))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__27488,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27492.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__27493))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__27488,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27492.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__27493))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__27488,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__27488),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__27488){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__27488,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20156__auto__,entry__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20157__auto__)){
return cljs.core._assoc.call(null,this__20156__auto____$1,cljs.core._nth.call(null,entry__20157__auto__,(0)),cljs.core._nth.call(null,entry__20157__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20156__auto____$1,entry__20157__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__27490){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27490),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27490),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__27490),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__27490),null,cljs.core.dissoc.call(null,G__27490,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(120));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((5),(5),(10),(1),null,null,null)),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new p3r50na.apps.bookof5rinds.client.game.component.Player((40),(70),(10),(1),null,null,null))], null),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__27518_27540 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__27519_27541 = null;
var count__27520_27542 = (0);
var i__27521_27543 = (0);
while(true){
if((i__27521_27543 < count__27520_27542)){
var wall_27544 = cljs.core._nth.call(null,chunk__27519_27541,i__27521_27543);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_27544),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_27544),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__27545 = seq__27518_27540;
var G__27546 = chunk__27519_27541;
var G__27547 = count__27520_27542;
var G__27548 = (i__27521_27543 + (1));
seq__27518_27540 = G__27545;
chunk__27519_27541 = G__27546;
count__27520_27542 = G__27547;
i__27521_27543 = G__27548;
continue;
} else {
var temp__4425__auto___27549 = cljs.core.seq.call(null,seq__27518_27540);
if(temp__4425__auto___27549){
var seq__27518_27550__$1 = temp__4425__auto___27549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27518_27550__$1)){
var c__20340__auto___27551 = cljs.core.chunk_first.call(null,seq__27518_27550__$1);
var G__27552 = cljs.core.chunk_rest.call(null,seq__27518_27550__$1);
var G__27553 = c__20340__auto___27551;
var G__27554 = cljs.core.count.call(null,c__20340__auto___27551);
var G__27555 = (0);
seq__27518_27540 = G__27552;
chunk__27519_27541 = G__27553;
count__27520_27542 = G__27554;
i__27521_27543 = G__27555;
continue;
} else {
var wall_27556 = cljs.core.first.call(null,seq__27518_27550__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_27556),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_27556),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__27557 = cljs.core.next.call(null,seq__27518_27550__$1);
var G__27558 = null;
var G__27559 = (0);
var G__27560 = (0);
seq__27518_27540 = G__27557;
chunk__27519_27541 = G__27558;
count__27520_27542 = G__27559;
i__27521_27543 = G__27560;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

quil.core.stroke.call(null,(255),(90),(20));

var seq__27522_27561 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__27523_27562 = null;
var count__27524_27563 = (0);
var i__27525_27564 = (0);
while(true){
if((i__27525_27564 < count__27524_27563)){
var remote_player_27565 = cljs.core._nth.call(null,chunk__27523_27562,i__27525_27564);
var map__27526_27566 = remote_player_27565;
var map__27526_27567__$1 = ((((!((map__27526_27566 == null)))?((((map__27526_27566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27526_27566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27526_27566):map__27526_27566);
var x_27568 = cljs.core.get.call(null,map__27526_27567__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_27569 = cljs.core.get.call(null,map__27526_27567__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_27570 = cljs.core.get.call(null,map__27526_27567__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_27568,y_27569,size_27570,size_27570);

var G__27571 = seq__27522_27561;
var G__27572 = chunk__27523_27562;
var G__27573 = count__27524_27563;
var G__27574 = (i__27525_27564 + (1));
seq__27522_27561 = G__27571;
chunk__27523_27562 = G__27572;
count__27524_27563 = G__27573;
i__27525_27564 = G__27574;
continue;
} else {
var temp__4425__auto___27575 = cljs.core.seq.call(null,seq__27522_27561);
if(temp__4425__auto___27575){
var seq__27522_27576__$1 = temp__4425__auto___27575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27522_27576__$1)){
var c__20340__auto___27577 = cljs.core.chunk_first.call(null,seq__27522_27576__$1);
var G__27578 = cljs.core.chunk_rest.call(null,seq__27522_27576__$1);
var G__27579 = c__20340__auto___27577;
var G__27580 = cljs.core.count.call(null,c__20340__auto___27577);
var G__27581 = (0);
seq__27522_27561 = G__27578;
chunk__27523_27562 = G__27579;
count__27524_27563 = G__27580;
i__27525_27564 = G__27581;
continue;
} else {
var remote_player_27582 = cljs.core.first.call(null,seq__27522_27576__$1);
var map__27528_27583 = remote_player_27582;
var map__27528_27584__$1 = ((((!((map__27528_27583 == null)))?((((map__27528_27583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27528_27583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27528_27583):map__27528_27583);
var x_27585 = cljs.core.get.call(null,map__27528_27584__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_27586 = cljs.core.get.call(null,map__27528_27584__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_27587 = cljs.core.get.call(null,map__27528_27584__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_27585,y_27586,size_27587,size_27587);

var G__27588 = cljs.core.next.call(null,seq__27522_27576__$1);
var G__27589 = null;
var G__27590 = (0);
var G__27591 = (0);
seq__27522_27561 = G__27588;
chunk__27523_27562 = G__27589;
count__27524_27563 = G__27590;
i__27525_27564 = G__27591;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(130),(130),(130));

quil.core.stroke.call(null,(150),(150),(150));

var seq__27530_27592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__27531_27593 = null;
var count__27532_27594 = (0);
var i__27533_27595 = (0);
while(true){
if((i__27533_27595 < count__27532_27594)){
var bullet_27596 = cljs.core._nth.call(null,chunk__27531_27593,i__27533_27595);
var map__27534_27597 = bullet_27596;
var map__27534_27598__$1 = ((((!((map__27534_27597 == null)))?((((map__27534_27597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27534_27597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27534_27597):map__27534_27597);
var bx_27599 = cljs.core.get.call(null,map__27534_27598__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_27600 = cljs.core.get.call(null,map__27534_27598__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_27601 = cljs.core.get.call(null,map__27534_27598__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_27599,by_27600,size_27601,size_27601);

var G__27602 = seq__27530_27592;
var G__27603 = chunk__27531_27593;
var G__27604 = count__27532_27594;
var G__27605 = (i__27533_27595 + (1));
seq__27530_27592 = G__27602;
chunk__27531_27593 = G__27603;
count__27532_27594 = G__27604;
i__27533_27595 = G__27605;
continue;
} else {
var temp__4425__auto___27606 = cljs.core.seq.call(null,seq__27530_27592);
if(temp__4425__auto___27606){
var seq__27530_27607__$1 = temp__4425__auto___27606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27530_27607__$1)){
var c__20340__auto___27608 = cljs.core.chunk_first.call(null,seq__27530_27607__$1);
var G__27609 = cljs.core.chunk_rest.call(null,seq__27530_27607__$1);
var G__27610 = c__20340__auto___27608;
var G__27611 = cljs.core.count.call(null,c__20340__auto___27608);
var G__27612 = (0);
seq__27530_27592 = G__27609;
chunk__27531_27593 = G__27610;
count__27532_27594 = G__27611;
i__27533_27595 = G__27612;
continue;
} else {
var bullet_27613 = cljs.core.first.call(null,seq__27530_27607__$1);
var map__27536_27614 = bullet_27613;
var map__27536_27615__$1 = ((((!((map__27536_27614 == null)))?((((map__27536_27614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27536_27614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27536_27614):map__27536_27614);
var bx_27616 = cljs.core.get.call(null,map__27536_27615__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_27617 = cljs.core.get.call(null,map__27536_27615__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_27618 = cljs.core.get.call(null,map__27536_27615__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_27616,by_27617,size_27618,size_27618);

var G__27619 = cljs.core.next.call(null,seq__27530_27607__$1);
var G__27620 = null;
var G__27621 = (0);
var G__27622 = (0);
seq__27530_27592 = G__27619;
chunk__27531_27593 = G__27620;
count__27532_27594 = G__27621;
i__27533_27595 = G__27622;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__27538 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__27538__$1 = ((((!((map__27538 == null)))?((((map__27538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27538):map__27538);
var x = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__27626 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__27626__$1 = ((((!((map__27626 == null)))?((((map__27626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27626):map__27626);
var x = cljs.core.get.call(null,map__27626__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27626__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__27626__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__27626,map__27626__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__27628 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__27628) {
case "up":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,speed);

break;
case "down":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,speed);

break;
case "left":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,speed);

break;
case "right":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,speed);

break;
default:
return state__$1;

}
})();
if(cljs.core.truth_((function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__27626,map__27626__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__27634 = bullet;
var map__27634__$1 = ((((!((map__27634 == null)))?((((map__27634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);
var speed = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__27635 = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__27635,(0),null);
var by = cljs.core.nth.call(null,vec__27635,(1),null);
var lx = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__27636 = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__27636,(0),null);
var gy = cljs.core.nth.call(null,vec__27636,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_locations(state){
var new_bullets = cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),new_bullets);
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations.call(null,state));
return newstate;
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(state,event){
var keycode = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.conj,keycode.call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(state){
var keycode = quil.core.key_as_keyword.call(null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.disj,keycode.call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(state,event){
var map__27642 = event;
var map__27642__$1 = ((((!((map__27642 == null)))?((((map__27642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27642):map__27642);
var mx = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27643 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__27643__$1 = ((((!((map__27643 == null)))?((((map__27643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27643):map__27643);
var px = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.4,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__27646__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__27646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27647__i = 0, G__27647__a = new Array(arguments.length -  0);
while (G__27647__i < G__27647__a.length) {G__27647__a[G__27647__i] = arguments[G__27647__i + 0]; ++G__27647__i;}
  args = new cljs.core.IndexedSeq(G__27647__a,0);
} 
return G__27646__delegate.call(this,args);};
G__27646.cljs$lang$maxFixedArity = 0;
G__27646.cljs$lang$applyTo = (function (arglist__27648){
var args = cljs.core.seq(arglist__27648);
return G__27646__delegate(args);
});
G__27646.cljs$core$IFn$_invoke$arity$variadic = G__27646__delegate;
return G__27646;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__27649__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__27649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27650__i = 0, G__27650__a = new Array(arguments.length -  0);
while (G__27650__i < G__27650__a.length) {G__27650__a[G__27650__i] = arguments[G__27650__i + 0]; ++G__27650__i;}
  args = new cljs.core.IndexedSeq(G__27650__a,0);
} 
return G__27649__delegate.call(this,args);};
G__27649.cljs$lang$maxFixedArity = 0;
G__27649.cljs$lang$applyTo = (function (arglist__27651){
var args = cljs.core.seq(arglist__27651);
return G__27649__delegate(args);
});
G__27649.cljs$core$IFn$_invoke$arity$variadic = G__27649__delegate;
return G__27649;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__27652__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__27652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27653__i = 0, G__27653__a = new Array(arguments.length -  0);
while (G__27653__i < G__27653__a.length) {G__27653__a[G__27653__i] = arguments[G__27653__i + 0]; ++G__27653__i;}
  args = new cljs.core.IndexedSeq(G__27653__a,0);
} 
return G__27652__delegate.call(this,args);};
G__27652.cljs$lang$maxFixedArity = 0;
G__27652.cljs$lang$applyTo = (function (arglist__27654){
var args = cljs.core.seq(arglist__27654);
return G__27652__delegate(args);
});
G__27652.cljs$core$IFn$_invoke$arity$variadic = G__27652__delegate;
return G__27652;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__27655__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__27655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27656__i = 0, G__27656__a = new Array(arguments.length -  0);
while (G__27656__i < G__27656__a.length) {G__27656__a[G__27656__i] = arguments[G__27656__i + 0]; ++G__27656__i;}
  args = new cljs.core.IndexedSeq(G__27656__a,0);
} 
return G__27655__delegate.call(this,args);};
G__27655.cljs$lang$maxFixedArity = 0;
G__27655.cljs$lang$applyTo = (function (arglist__27657){
var args = cljs.core.seq(arglist__27657);
return G__27655__delegate(args);
});
G__27655.cljs$core$IFn$_invoke$arity$variadic = G__27655__delegate;
return G__27655;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__27658__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__27658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27659__i = 0, G__27659__a = new Array(arguments.length -  0);
while (G__27659__i < G__27659__a.length) {G__27659__a[G__27659__i] = arguments[G__27659__i + 0]; ++G__27659__i;}
  args = new cljs.core.IndexedSeq(G__27659__a,0);
} 
return G__27658__delegate.call(this,args);};
G__27658.cljs$lang$maxFixedArity = 0;
G__27658.cljs$lang$applyTo = (function (arglist__27660){
var args = cljs.core.seq(arglist__27660);
return G__27658__delegate(args);
});
G__27658.cljs$core$IFn$_invoke$arity$variadic = G__27658__delegate;
return G__27658;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__27661__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__27661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27662__i = 0, G__27662__a = new Array(arguments.length -  0);
while (G__27662__i < G__27662__a.length) {G__27662__a[G__27662__i] = arguments[G__27662__i + 0]; ++G__27662__i;}
  args = new cljs.core.IndexedSeq(G__27662__a,0);
} 
return G__27661__delegate.call(this,args);};
G__27661.cljs$lang$maxFixedArity = 0;
G__27661.cljs$lang$applyTo = (function (arglist__27663){
var args = cljs.core.seq(arglist__27663);
return G__27661__delegate(args);
});
G__27661.cljs$core$IFn$_invoke$arity$variadic = G__27661__delegate;
return G__27661;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__27664__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__27664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27665__i = 0, G__27665__a = new Array(arguments.length -  0);
while (G__27665__i < G__27665__a.length) {G__27665__a[G__27665__i] = arguments[G__27665__i + 0]; ++G__27665__i;}
  args = new cljs.core.IndexedSeq(G__27665__a,0);
} 
return G__27664__delegate.call(this,args);};
G__27664.cljs$lang$maxFixedArity = 0;
G__27664.cljs$lang$applyTo = (function (arglist__27666){
var args = cljs.core.seq(arglist__27666);
return G__27664__delegate(args);
});
G__27664.cljs$core$IFn$_invoke$arity$variadic = G__27664__delegate;
return G__27664;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25984__25985__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25984__25985__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(socket){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t27670 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t27670 = (function (game_component,socket,meta27671){
this.game_component = game_component;
this.socket = socket;
this.meta27671 = meta27671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t27670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27672,meta27671__$1){
var self__ = this;
var _27672__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t27670(self__.game_component,self__.socket,meta27671__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t27670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27672){
var self__ = this;
var _27672__$1 = this;
return self__.meta27671;
});

p3r50na.apps.bookof5rinds.client.game.component.t27670.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t27670.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t27670.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t27670.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t27670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null)], null)))], null)),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"meta27671","meta27671",1593512002,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t27670.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t27670.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t27670";

p3r50na.apps.bookof5rinds.client.game.component.t27670.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t27670");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t27670 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t27670(game_component__$1,socket__$1,meta27671){
return (new p3r50na.apps.bookof5rinds.client.game.component.t27670(game_component__$1,socket__$1,meta27671));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t27670(p3r50na$apps$bookof5rinds$client$game$component$game_component,socket,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map