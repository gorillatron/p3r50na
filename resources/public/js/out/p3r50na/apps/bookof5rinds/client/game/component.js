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
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k96705,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__96707 = (((k96705 instanceof cljs.core.Keyword))?k96705.fqn:null);
switch (G__96707) {
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
return cljs.core.get.call(null,self__.__extmap,k96705,else__20154__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__96704){
var self__ = this;
var G__96704__$1 = this;
return (new cljs.core.RecordIter((0),G__96704__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__96704){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__96708 = cljs.core.keyword_identical_QMARK_;
var expr__96709 = k__20159__auto__;
if(cljs.core.truth_(pred__96708.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__96709))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__96704,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__96708.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__96709))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__96704,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__96708.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__96709))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__96704,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__96708.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__96709))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__96704,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__96708.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__96709))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__96704,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__96704),null));
}
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__96704){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__96704,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(name,x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(name,x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__96706){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__96706),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__96706),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__96706),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__96706),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__96706),null,cljs.core.dissoc.call(null,G__96706,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.game.component.rnd_string = (function p3r50na$apps$bookof5rinds$client$game$component$rnd_string(){
var args96712 = [];
var len__20595__auto___96715 = arguments.length;
var i__20596__auto___96716 = (0);
while(true){
if((i__20596__auto___96716 < len__20595__auto___96715)){
args96712.push((arguments[i__20596__auto___96716]));

var G__96717 = (i__20596__auto___96716 + (1));
i__20596__auto___96716 = G__96717;
continue;
} else {
}
break;
}

var G__96714 = args96712.length;
switch (G__96714) {
case 0:
return p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args96712.length)].join('')));

}
});

p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return p3r50na.apps.bookof5rinds.client.game.component.rnd_string.call(null,(8));
});

p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$1 = (function (n){
var chars = cljs.core.map.call(null,cljs.core.char$,cljs.core.range.call(null,(33),(127)));
var rstr = cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,((function (chars){
return (function (){
return cljs.core.rand_nth.call(null,chars);
});})(chars))
));
return cljs.core.reduce.call(null,cljs.core.str,rstr);
});

p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$lang$maxFixedArity = 1;
p3r50na.apps.bookof5rinds.client.game.component.namo = p3r50na.apps.bookof5rinds.client.game.component.rnd_string.call(null);
p3r50na.apps.bookof5rinds.client.game.component.remote_players = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
p3r50na.apps.bookof5rinds.client.game.component.remote_player_bullets = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
p3r50na.apps.bookof5rinds.client.game.component.remote_player_update = (function p3r50na$apps$bookof5rinds$client$game$component$remote_player_update(player){
return cljs.core.swap_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_players,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player),player);
});
p3r50na.apps.bookof5rinds.client.game.component.remote_player_fire_bullet = (function p3r50na$apps$bookof5rinds$client$game$component$remote_player_fire_bullet(bullet){
return cljs.core.swap_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_player_bullets,cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.component.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var G__96719 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
switch (G__96719) {
case "player-update-state":
return p3r50na.apps.bookof5rinds.client.game.component.remote_player_update.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));

break;
case "player-fired-bullet":
return p3r50na.apps.bookof5rinds.client.game.component.remote_player_fire_bullet.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event))].join('')));

}
});
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player(p3r50na.apps.bookof5rinds.client.game.component.namo,(5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__96753_96785 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__96754_96786 = null;
var count__96755_96787 = (0);
var i__96756_96788 = (0);
while(true){
if((i__96756_96788 < count__96755_96787)){
var wall_96789 = cljs.core._nth.call(null,chunk__96754_96786,i__96756_96788);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_96789),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_96789),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__96790 = seq__96753_96785;
var G__96791 = chunk__96754_96786;
var G__96792 = count__96755_96787;
var G__96793 = (i__96756_96788 + (1));
seq__96753_96785 = G__96790;
chunk__96754_96786 = G__96791;
count__96755_96787 = G__96792;
i__96756_96788 = G__96793;
continue;
} else {
var temp__4425__auto___96794 = cljs.core.seq.call(null,seq__96753_96785);
if(temp__4425__auto___96794){
var seq__96753_96795__$1 = temp__4425__auto___96794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96753_96795__$1)){
var c__20340__auto___96796 = cljs.core.chunk_first.call(null,seq__96753_96795__$1);
var G__96797 = cljs.core.chunk_rest.call(null,seq__96753_96795__$1);
var G__96798 = c__20340__auto___96796;
var G__96799 = cljs.core.count.call(null,c__20340__auto___96796);
var G__96800 = (0);
seq__96753_96785 = G__96797;
chunk__96754_96786 = G__96798;
count__96755_96787 = G__96799;
i__96756_96788 = G__96800;
continue;
} else {
var wall_96801 = cljs.core.first.call(null,seq__96753_96795__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_96801),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_96801),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__96802 = cljs.core.next.call(null,seq__96753_96795__$1);
var G__96803 = null;
var G__96804 = (0);
var G__96805 = (0);
seq__96753_96785 = G__96802;
chunk__96754_96786 = G__96803;
count__96755_96787 = G__96804;
i__96756_96788 = G__96805;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

quil.core.stroke.call(null,(255),(90),(20));

var seq__96757_96806 = cljs.core.seq.call(null,cljs.core.deref.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_players));
var chunk__96758_96807 = null;
var count__96759_96808 = (0);
var i__96760_96809 = (0);
while(true){
if((i__96760_96809 < count__96759_96808)){
var vec__96761_96810 = cljs.core._nth.call(null,chunk__96758_96807,i__96760_96809);
var name_96811 = cljs.core.nth.call(null,vec__96761_96810,(0),null);
var remote_player_96812 = cljs.core.nth.call(null,vec__96761_96810,(1),null);
var map__96762_96813 = remote_player_96812;
var map__96762_96814__$1 = ((((!((map__96762_96813 == null)))?((((map__96762_96813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96762_96813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96762_96813):map__96762_96813);
var x_96815 = cljs.core.get.call(null,map__96762_96814__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_96816 = cljs.core.get.call(null,map__96762_96814__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96817 = cljs.core.get.call(null,map__96762_96814__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_96815,y_96816,size_96817,size_96817);

var G__96818 = seq__96757_96806;
var G__96819 = chunk__96758_96807;
var G__96820 = count__96759_96808;
var G__96821 = (i__96760_96809 + (1));
seq__96757_96806 = G__96818;
chunk__96758_96807 = G__96819;
count__96759_96808 = G__96820;
i__96760_96809 = G__96821;
continue;
} else {
var temp__4425__auto___96822 = cljs.core.seq.call(null,seq__96757_96806);
if(temp__4425__auto___96822){
var seq__96757_96823__$1 = temp__4425__auto___96822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96757_96823__$1)){
var c__20340__auto___96824 = cljs.core.chunk_first.call(null,seq__96757_96823__$1);
var G__96825 = cljs.core.chunk_rest.call(null,seq__96757_96823__$1);
var G__96826 = c__20340__auto___96824;
var G__96827 = cljs.core.count.call(null,c__20340__auto___96824);
var G__96828 = (0);
seq__96757_96806 = G__96825;
chunk__96758_96807 = G__96826;
count__96759_96808 = G__96827;
i__96760_96809 = G__96828;
continue;
} else {
var vec__96764_96829 = cljs.core.first.call(null,seq__96757_96823__$1);
var name_96830 = cljs.core.nth.call(null,vec__96764_96829,(0),null);
var remote_player_96831 = cljs.core.nth.call(null,vec__96764_96829,(1),null);
var map__96765_96832 = remote_player_96831;
var map__96765_96833__$1 = ((((!((map__96765_96832 == null)))?((((map__96765_96832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96765_96832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96765_96832):map__96765_96832);
var x_96834 = cljs.core.get.call(null,map__96765_96833__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_96835 = cljs.core.get.call(null,map__96765_96833__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96836 = cljs.core.get.call(null,map__96765_96833__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_96834,y_96835,size_96836,size_96836);

var G__96837 = cljs.core.next.call(null,seq__96757_96823__$1);
var G__96838 = null;
var G__96839 = (0);
var G__96840 = (0);
seq__96757_96806 = G__96837;
chunk__96758_96807 = G__96838;
count__96759_96808 = G__96839;
i__96760_96809 = G__96840;
continue;
}
} else {
}
}
break;
}

var seq__96767_96841 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state));
var chunk__96768_96842 = null;
var count__96769_96843 = (0);
var i__96770_96844 = (0);
while(true){
if((i__96770_96844 < count__96769_96843)){
var bullet_96845 = cljs.core._nth.call(null,chunk__96768_96842,i__96770_96844);
var map__96771_96846 = bullet_96845;
var map__96771_96847__$1 = ((((!((map__96771_96846 == null)))?((((map__96771_96846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96771_96846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96771_96846):map__96771_96846);
var bx_96848 = cljs.core.get.call(null,map__96771_96847__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_96849 = cljs.core.get.call(null,map__96771_96847__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96850 = cljs.core.get.call(null,map__96771_96847__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_96848,by_96849,size_96850,size_96850);

var G__96851 = seq__96767_96841;
var G__96852 = chunk__96768_96842;
var G__96853 = count__96769_96843;
var G__96854 = (i__96770_96844 + (1));
seq__96767_96841 = G__96851;
chunk__96768_96842 = G__96852;
count__96769_96843 = G__96853;
i__96770_96844 = G__96854;
continue;
} else {
var temp__4425__auto___96855 = cljs.core.seq.call(null,seq__96767_96841);
if(temp__4425__auto___96855){
var seq__96767_96856__$1 = temp__4425__auto___96855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96767_96856__$1)){
var c__20340__auto___96857 = cljs.core.chunk_first.call(null,seq__96767_96856__$1);
var G__96858 = cljs.core.chunk_rest.call(null,seq__96767_96856__$1);
var G__96859 = c__20340__auto___96857;
var G__96860 = cljs.core.count.call(null,c__20340__auto___96857);
var G__96861 = (0);
seq__96767_96841 = G__96858;
chunk__96768_96842 = G__96859;
count__96769_96843 = G__96860;
i__96770_96844 = G__96861;
continue;
} else {
var bullet_96862 = cljs.core.first.call(null,seq__96767_96856__$1);
var map__96773_96863 = bullet_96862;
var map__96773_96864__$1 = ((((!((map__96773_96863 == null)))?((((map__96773_96863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96773_96863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96773_96863):map__96773_96863);
var bx_96865 = cljs.core.get.call(null,map__96773_96864__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_96866 = cljs.core.get.call(null,map__96773_96864__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96867 = cljs.core.get.call(null,map__96773_96864__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_96865,by_96866,size_96867,size_96867);

var G__96868 = cljs.core.next.call(null,seq__96767_96856__$1);
var G__96869 = null;
var G__96870 = (0);
var G__96871 = (0);
seq__96767_96841 = G__96868;
chunk__96768_96842 = G__96869;
count__96769_96843 = G__96870;
i__96770_96844 = G__96871;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__96775_96872 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__96775_96873__$1 = ((((!((map__96775_96872 == null)))?((((map__96775_96872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96775_96872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96775_96872):map__96775_96872);
var x_96874 = cljs.core.get.call(null,map__96775_96873__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_96875 = cljs.core.get.call(null,map__96775_96873__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96876 = cljs.core.get.call(null,map__96775_96873__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_96874,y_96875,size_96876,size_96876);

var seq__96777 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__96778 = null;
var count__96779 = (0);
var i__96780 = (0);
while(true){
if((i__96780 < count__96779)){
var bullet = cljs.core._nth.call(null,chunk__96778,i__96780);
var map__96781_96877 = bullet;
var map__96781_96878__$1 = ((((!((map__96781_96877 == null)))?((((map__96781_96877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96781_96877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96781_96877):map__96781_96877);
var bx_96879 = cljs.core.get.call(null,map__96781_96878__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_96880 = cljs.core.get.call(null,map__96781_96878__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96881 = cljs.core.get.call(null,map__96781_96878__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_96879,by_96880,size_96881,size_96881);

var G__96882 = seq__96777;
var G__96883 = chunk__96778;
var G__96884 = count__96779;
var G__96885 = (i__96780 + (1));
seq__96777 = G__96882;
chunk__96778 = G__96883;
count__96779 = G__96884;
i__96780 = G__96885;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__96777);
if(temp__4425__auto__){
var seq__96777__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96777__$1)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,seq__96777__$1);
var G__96886 = cljs.core.chunk_rest.call(null,seq__96777__$1);
var G__96887 = c__20340__auto__;
var G__96888 = cljs.core.count.call(null,c__20340__auto__);
var G__96889 = (0);
seq__96777 = G__96886;
chunk__96778 = G__96887;
count__96779 = G__96888;
i__96780 = G__96889;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__96777__$1);
var map__96783_96890 = bullet;
var map__96783_96891__$1 = ((((!((map__96783_96890 == null)))?((((map__96783_96890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96783_96890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96783_96890):map__96783_96890);
var bx_96892 = cljs.core.get.call(null,map__96783_96891__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_96893 = cljs.core.get.call(null,map__96783_96891__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_96894 = cljs.core.get.call(null,map__96783_96891__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_96892,by_96893,size_96894,size_96894);

var G__96895 = cljs.core.next.call(null,seq__96777__$1);
var G__96896 = null;
var G__96897 = (0);
var G__96898 = (0);
seq__96777 = G__96895;
chunk__96778 = G__96896;
count__96779 = G__96897;
i__96780 = G__96898;
continue;
}
} else {
return null;
}
}
break;
}
});
p3r50na.apps.bookof5rinds.client.game.component.send_player_state_report = (function p3r50na$apps$bookof5rinds$client$game$component$send_player_state_report(player){
return p3r50na.apps.bookof5rinds.client.game.component.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"player-state-report",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",-97687400),player], null)], null))));
});
p3r50na.apps.bookof5rinds.client.game.component.send_player_fired_bullet = (function p3r50na$apps$bookof5rinds$client$game$component$send_player_fired_bullet(bullet){
return p3r50na.apps.bookof5rinds.client.game.component.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"player-fired-bullet",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bullet","bullet",726988937),bullet], null)], null))));
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__96902 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__96902__$1 = ((((!((map__96902 == null)))?((((map__96902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96902):map__96902);
var x = cljs.core.get.call(null,map__96902__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__96902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__96902__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__96902,map__96902__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__96904 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__96904) {
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
});})(map__96902,map__96902__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
if(!(cljs.core._EQ_.call(null,newstate,state))){
p3r50na.apps.bookof5rinds.client.game.component.send_player_state_report.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate));
} else {
}

return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__96910 = bullet;
var map__96910__$1 = ((((!((map__96910 == null)))?((((map__96910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96910):map__96910);
var speed = cljs.core.get.call(null,map__96910__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__96911 = cljs.core.get.call(null,map__96910__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__96911,(0),null);
var by = cljs.core.nth.call(null,vec__96911,(1),null);
var lx = cljs.core.get.call(null,map__96910__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__96910__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__96912 = cljs.core.get.call(null,map__96910__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__96912,(0),null);
var gy = cljs.core.nth.call(null,vec__96912,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.component.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullets(old_bullets){
return cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location,old_bullets));
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),p3r50na.apps.bookof5rinds.client.game.component.update_bullets.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
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
var map__96918 = event;
var map__96918__$1 = ((((!((map__96918 == null)))?((((map__96918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96918):map__96918);
var mx = cljs.core.get.call(null,map__96918__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__96918__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__96919 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__96919__$1 = ((((!((map__96919 == null)))?((((map__96919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96919):map__96919);
var px = cljs.core.get.call(null,map__96919__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__96919__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__96919__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
var bullet = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(2),new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)], null);
p3r50na.apps.bookof5rinds.client.game.component.send_player_fired_bullet.call(null,bullet);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__96922__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__96922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96923__i = 0, G__96923__a = new Array(arguments.length -  0);
while (G__96923__i < G__96923__a.length) {G__96923__a[G__96923__i] = arguments[G__96923__i + 0]; ++G__96923__i;}
  args = new cljs.core.IndexedSeq(G__96923__a,0);
} 
return G__96922__delegate.call(this,args);};
G__96922.cljs$lang$maxFixedArity = 0;
G__96922.cljs$lang$applyTo = (function (arglist__96924){
var args = cljs.core.seq(arglist__96924);
return G__96922__delegate(args);
});
G__96922.cljs$core$IFn$_invoke$arity$variadic = G__96922__delegate;
return G__96922;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__96925__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__96925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96926__i = 0, G__96926__a = new Array(arguments.length -  0);
while (G__96926__i < G__96926__a.length) {G__96926__a[G__96926__i] = arguments[G__96926__i + 0]; ++G__96926__i;}
  args = new cljs.core.IndexedSeq(G__96926__a,0);
} 
return G__96925__delegate.call(this,args);};
G__96925.cljs$lang$maxFixedArity = 0;
G__96925.cljs$lang$applyTo = (function (arglist__96927){
var args = cljs.core.seq(arglist__96927);
return G__96925__delegate(args);
});
G__96925.cljs$core$IFn$_invoke$arity$variadic = G__96925__delegate;
return G__96925;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__96928__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__96928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96929__i = 0, G__96929__a = new Array(arguments.length -  0);
while (G__96929__i < G__96929__a.length) {G__96929__a[G__96929__i] = arguments[G__96929__i + 0]; ++G__96929__i;}
  args = new cljs.core.IndexedSeq(G__96929__a,0);
} 
return G__96928__delegate.call(this,args);};
G__96928.cljs$lang$maxFixedArity = 0;
G__96928.cljs$lang$applyTo = (function (arglist__96930){
var args = cljs.core.seq(arglist__96930);
return G__96928__delegate(args);
});
G__96928.cljs$core$IFn$_invoke$arity$variadic = G__96928__delegate;
return G__96928;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__96931__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__96931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96932__i = 0, G__96932__a = new Array(arguments.length -  0);
while (G__96932__i < G__96932__a.length) {G__96932__a[G__96932__i] = arguments[G__96932__i + 0]; ++G__96932__i;}
  args = new cljs.core.IndexedSeq(G__96932__a,0);
} 
return G__96931__delegate.call(this,args);};
G__96931.cljs$lang$maxFixedArity = 0;
G__96931.cljs$lang$applyTo = (function (arglist__96933){
var args = cljs.core.seq(arglist__96933);
return G__96931__delegate(args);
});
G__96931.cljs$core$IFn$_invoke$arity$variadic = G__96931__delegate;
return G__96931;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__96934__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__96934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96935__i = 0, G__96935__a = new Array(arguments.length -  0);
while (G__96935__i < G__96935__a.length) {G__96935__a[G__96935__i] = arguments[G__96935__i + 0]; ++G__96935__i;}
  args = new cljs.core.IndexedSeq(G__96935__a,0);
} 
return G__96934__delegate.call(this,args);};
G__96934.cljs$lang$maxFixedArity = 0;
G__96934.cljs$lang$applyTo = (function (arglist__96936){
var args = cljs.core.seq(arglist__96936);
return G__96934__delegate(args);
});
G__96934.cljs$core$IFn$_invoke$arity$variadic = G__96934__delegate;
return G__96934;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__96937__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__96937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96938__i = 0, G__96938__a = new Array(arguments.length -  0);
while (G__96938__i < G__96938__a.length) {G__96938__a[G__96938__i] = arguments[G__96938__i + 0]; ++G__96938__i;}
  args = new cljs.core.IndexedSeq(G__96938__a,0);
} 
return G__96937__delegate.call(this,args);};
G__96937.cljs$lang$maxFixedArity = 0;
G__96937.cljs$lang$applyTo = (function (arglist__96939){
var args = cljs.core.seq(arglist__96939);
return G__96937__delegate(args);
});
G__96937.cljs$core$IFn$_invoke$arity$variadic = G__96937__delegate;
return G__96937;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__96940__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__96940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96941__i = 0, G__96941__a = new Array(arguments.length -  0);
while (G__96941__i < G__96941__a.length) {G__96941__a[G__96941__i] = arguments[G__96941__i + 0]; ++G__96941__i;}
  args = new cljs.core.IndexedSeq(G__96941__a,0);
} 
return G__96940__delegate.call(this,args);};
G__96940.cljs$lang$maxFixedArity = 0;
G__96940.cljs$lang$applyTo = (function (arglist__96942){
var args = cljs.core.seq(arglist__96942);
return G__96940__delegate(args);
});
G__96940.cljs$core$IFn$_invoke$arity$variadic = G__96940__delegate;
return G__96940;
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
p3r50na.apps.bookof5rinds.client.game.component.game_loop = p3r50na.apps.bookof5rinds.client.game.engine.create_loop.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player(p3r50na.apps.bookof5rinds.client.game.component.namo,(5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1], null));
var c__23656__auto___96973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto___96973){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto___96973){
return (function (state_96957){
var state_val_96958 = (state_96957[(1)]);
if((state_val_96958 === (1))){
var state_96957__$1 = state_96957;
var statearr_96959_96974 = state_96957__$1;
(statearr_96959_96974[(2)] = null);

(statearr_96959_96974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96958 === (2))){
var state_96957__$1 = state_96957;
var statearr_96960_96975 = state_96957__$1;
(statearr_96960_96975[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96958 === (3))){
var inst_96955 = (state_96957[(2)]);
var state_96957__$1 = state_96957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96957__$1,inst_96955);
} else {
if((state_val_96958 === (4))){
var inst_96945 = new cljs.core.Keyword(null,"render-chan","render-chan",667311808).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_loop);
var state_96957__$1 = state_96957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96957__$1,(7),inst_96945);
} else {
if((state_val_96958 === (5))){
var state_96957__$1 = state_96957;
var statearr_96962_96976 = state_96957__$1;
(statearr_96962_96976[(2)] = null);

(statearr_96962_96976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96958 === (6))){
var inst_96953 = (state_96957[(2)]);
var state_96957__$1 = state_96957;
var statearr_96963_96977 = state_96957__$1;
(statearr_96963_96977[(2)] = inst_96953);

(statearr_96963_96977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96958 === (7))){
var inst_96947 = (state_96957[(2)]);
var inst_96948 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(inst_96947);
var inst_96949 = cljs.core.println.call(null,inst_96948);
var state_96957__$1 = (function (){var statearr_96964 = state_96957;
(statearr_96964[(7)] = inst_96949);

return statearr_96964;
})();
var statearr_96965_96978 = state_96957__$1;
(statearr_96965_96978[(2)] = null);

(statearr_96965_96978[(1)] = (2));


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
});})(c__23656__auto___96973))
;
return ((function (switch__23591__auto__,c__23656__auto___96973){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____0 = (function (){
var statearr_96969 = [null,null,null,null,null,null,null,null];
(statearr_96969[(0)] = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__);

(statearr_96969[(1)] = (1));

return statearr_96969;
});
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____1 = (function (state_96957){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_96957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e96970){if((e96970 instanceof Object)){
var ex__23595__auto__ = e96970;
var statearr_96971_96979 = state_96957;
(statearr_96971_96979[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e96970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96980 = state_96957;
state_96957 = G__96980;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__ = function(state_96957){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____1.call(this,state_96957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto___96973))
})();
var state__23658__auto__ = (function (){var statearr_96972 = f__23657__auto__.call(null);
(statearr_96972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto___96973);

return statearr_96972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto___96973))
);

p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t96984 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t96984 = (function (game_component,meta96985){
this.game_component = game_component;
this.meta96985 = meta96985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t96984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96986,meta96985__$1){
var self__ = this;
var _96986__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t96984(self__.game_component,meta96985__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t96984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96986){
var self__ = this;
var _96986__$1 = this;
return self__.meta96985;
});

p3r50na.apps.bookof5rinds.client.game.component.t96984.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t96984.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t96984.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t96984.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t96984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta96985","meta96985",-1590910123,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t96984.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t96984.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t96984";

p3r50na.apps.bookof5rinds.client.game.component.t96984.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t96984");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t96984 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t96984(game_component__$1,meta96985){
return (new p3r50na.apps.bookof5rinds.client.game.component.t96984(game_component__$1,meta96985));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t96984(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map