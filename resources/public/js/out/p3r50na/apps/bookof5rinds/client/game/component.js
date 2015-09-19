// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);

p3r50na.apps.bookof5rinds.client.game.component.GameObject = {};

p3r50na.apps.bookof5rinds.client.game.component.velocity = (function p3r50na$apps$bookof5rinds$client$game$component$velocity(this$){
if((!((this$ == null))) && (!((this$.p3r50na$apps$bookof5rinds$client$game$component$GameObject$velocity$arity$1 == null)))){
return this$.p3r50na$apps$bookof5rinds$client$game$component$GameObject$velocity$arity$1(this$);
} else {
var x__20188__auto__ = (((this$ == null))?null:this$);
var m__20189__auto__ = (p3r50na.apps.bookof5rinds.client.game.component.velocity[goog.typeOf(x__20188__auto__)]);
if(!((m__20189__auto__ == null))){
return m__20189__auto__.call(null,this$);
} else {
var m__20189__auto____$1 = (p3r50na.apps.bookof5rinds.client.game.component.velocity["_"]);
if(!((m__20189__auto____$1 == null))){
return m__20189__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"GameObject.velocity",this$);
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.direction = (function p3r50na$apps$bookof5rinds$client$game$component$direction(this$){
if((!((this$ == null))) && (!((this$.p3r50na$apps$bookof5rinds$client$game$component$GameObject$direction$arity$1 == null)))){
return this$.p3r50na$apps$bookof5rinds$client$game$component$GameObject$direction$arity$1(this$);
} else {
var x__20188__auto__ = (((this$ == null))?null:this$);
var m__20189__auto__ = (p3r50na.apps.bookof5rinds.client.game.component.direction[goog.typeOf(x__20188__auto__)]);
if(!((m__20189__auto__ == null))){
return m__20189__auto__.call(null,this$);
} else {
var m__20189__auto____$1 = (p3r50na.apps.bookof5rinds.client.game.component.direction["_"]);
if(!((m__20189__auto____$1 == null))){
return m__20189__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"GameObject.direction",this$);
}
}
}
});


/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} angle
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.component.Player = (function (x,y,angle,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.angle = angle;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20147__auto__,k__20148__auto__){
var self__ = this;
var this__20147__auto____$1 = this;
return cljs.core._lookup.call(null,this__20147__auto____$1,k__20148__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20149__auto__,k37840,else__20150__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
var G__37842 = (((k37840 instanceof cljs.core.Keyword))?k37840.fqn:null);
switch (G__37842) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "angle":
return self__.angle;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37840,else__20150__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20161__auto__,writer__20162__auto__,opts__20163__auto__){
var self__ = this;
var this__20161__auto____$1 = this;
var pr_pair__20164__auto__ = ((function (this__20161__auto____$1){
return (function (keyval__20165__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20162__auto__,cljs.core.pr_writer,""," ","",opts__20163__auto__,keyval__20165__auto__);
});})(this__20161__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20162__auto__,pr_pair__20164__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20163__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37839){
var self__ = this;
var G__37839__$1 = this;
return (new cljs.core.RecordIter((0),G__37839__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.p3r50na$apps$bookof5rinds$client$game$component$GameObject$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.p3r50na$apps$bookof5rinds$client$game$component$GameObject$velocity$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (10);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.p3r50na$apps$bookof5rinds$client$game$component$GameObject$direction$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (12);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20141__auto__){
var self__ = this;
var this__20141__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.angle,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20151__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20142__auto__){
var self__ = this;
var this__20142__auto____$1 = this;
var h__19968__auto__ = self__.__hash;
if(!((h__19968__auto__ == null))){
return h__19968__auto__;
} else {
var h__19968__auto____$1 = cljs.core.hash_imap.call(null,this__20142__auto____$1);
self__.__hash = h__19968__auto____$1;

return h__19968__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20143__auto__,other__20144__auto__){
var self__ = this;
var this__20143__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19540__auto__ = other__20144__auto__;
if(cljs.core.truth_(and__19540__auto__)){
var and__19540__auto____$1 = (this__20143__auto____$1.constructor === other__20144__auto__.constructor);
if(and__19540__auto____$1){
return cljs.core.equiv_map.call(null,this__20143__auto____$1,other__20144__auto__);
} else {
return and__19540__auto____$1;
}
} else {
return and__19540__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20156__auto__,k__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"angle","angle",1622094254),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20157__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20156__auto____$1),self__.__meta),k__20157__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.angle,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20157__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20154__auto__,k__20155__auto__,G__37839){
var self__ = this;
var this__20154__auto____$1 = this;
var pred__37843 = cljs.core.keyword_identical_QMARK_;
var expr__37844 = k__20155__auto__;
if(cljs.core.truth_(pred__37843.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37844))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__37839,self__.y,self__.angle,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37843.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37844))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__37839,self__.angle,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37843.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__37844))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__37839,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.angle,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20155__auto__,G__37839),null));
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20159__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20146__auto__,G__37839){
var self__ = this;
var this__20146__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.angle,G__37839,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20152__auto__,entry__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20153__auto__)){
return cljs.core._assoc.call(null,this__20152__auto____$1,cljs.core._nth.call(null,entry__20153__auto__,(0)),cljs.core._nth.call(null,entry__20153__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20152__auto____$1,entry__20153__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20181__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20181__auto__,writer__20182__auto__){
return cljs.core._write.call(null,writer__20182__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(x,y,angle){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(x,y,angle,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__37841){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37841),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37841),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__37841),null,cljs.core.dissoc.call(null,G__37841,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(30),new cljs.core.Keyword(null,"angle","angle",1622094254),(180)], null),new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(0));

var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
return quil.core.rect.call(null,x,y,(10),(10));
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.identity.call(null,state);
} else {
return cljs.core.reduce.call(null,(function (state__$1,controll){
var G__37848 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__37848) {
case "w":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,(2));

break;
case "s":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,(2));

break;
case "a":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,(2));

break;
case "d":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,(2));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(controll)].join('')));

}
}),state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
}
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
return p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,state);
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(state,event){
var keycode = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.conj,keycode);
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(state){
var keycode = quil.core.key_as_keyword.call(null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.disj,keycode);
});
p3r50na.apps.bookof5rinds.client.game.component.hello = (function p3r50na$apps$bookof5rinds$client$game$component$hello(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__37850__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__37850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37851__i = 0, G__37851__a = new Array(arguments.length -  0);
while (G__37851__i < G__37851__a.length) {G__37851__a[G__37851__i] = arguments[G__37851__i + 0]; ++G__37851__i;}
  args = new cljs.core.IndexedSeq(G__37851__a,0);
} 
return G__37850__delegate.call(this,args);};
G__37850.cljs$lang$maxFixedArity = 0;
G__37850.cljs$lang$applyTo = (function (arglist__37852){
var args = cljs.core.seq(arglist__37852);
return G__37850__delegate(args);
});
G__37850.cljs$core$IFn$_invoke$arity$variadic = G__37850__delegate;
return G__37850;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__37853__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__37853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37854__i = 0, G__37854__a = new Array(arguments.length -  0);
while (G__37854__i < G__37854__a.length) {G__37854__a[G__37854__i] = arguments[G__37854__i + 0]; ++G__37854__i;}
  args = new cljs.core.IndexedSeq(G__37854__a,0);
} 
return G__37853__delegate.call(this,args);};
G__37853.cljs$lang$maxFixedArity = 0;
G__37853.cljs$lang$applyTo = (function (arglist__37855){
var args = cljs.core.seq(arglist__37855);
return G__37853__delegate(args);
});
G__37853.cljs$core$IFn$_invoke$arity$variadic = G__37853__delegate;
return G__37853;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__37856__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__37856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37857__i = 0, G__37857__a = new Array(arguments.length -  0);
while (G__37857__i < G__37857__a.length) {G__37857__a[G__37857__i] = arguments[G__37857__i + 0]; ++G__37857__i;}
  args = new cljs.core.IndexedSeq(G__37857__a,0);
} 
return G__37856__delegate.call(this,args);};
G__37856.cljs$lang$maxFixedArity = 0;
G__37856.cljs$lang$applyTo = (function (arglist__37858){
var args = cljs.core.seq(arglist__37858);
return G__37856__delegate(args);
});
G__37856.cljs$core$IFn$_invoke$arity$variadic = G__37856__delegate;
return G__37856;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__37859__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__37859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37860__i = 0, G__37860__a = new Array(arguments.length -  0);
while (G__37860__i < G__37860__a.length) {G__37860__a[G__37860__i] = arguments[G__37860__i + 0]; ++G__37860__i;}
  args = new cljs.core.IndexedSeq(G__37860__a,0);
} 
return G__37859__delegate.call(this,args);};
G__37859.cljs$lang$maxFixedArity = 0;
G__37859.cljs$lang$applyTo = (function (arglist__37861){
var args = cljs.core.seq(arglist__37861);
return G__37859__delegate(args);
});
G__37859.cljs$core$IFn$_invoke$arity$variadic = G__37859__delegate;
return G__37859;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__37862__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__37862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37863__i = 0, G__37863__a = new Array(arguments.length -  0);
while (G__37863__i < G__37863__a.length) {G__37863__a[G__37863__i] = arguments[G__37863__i + 0]; ++G__37863__i;}
  args = new cljs.core.IndexedSeq(G__37863__a,0);
} 
return G__37862__delegate.call(this,args);};
G__37862.cljs$lang$maxFixedArity = 0;
G__37862.cljs$lang$applyTo = (function (arglist__37864){
var args = cljs.core.seq(arglist__37864);
return G__37862__delegate(args);
});
G__37862.cljs$core$IFn$_invoke$arity$variadic = G__37862__delegate;
return G__37862;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.hello', p3r50na.apps.bookof5rinds.client.game.component.hello);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25943__25944__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25943__25944__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.hello,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t37868 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t37868 = (function (game_component,meta37869){
this.game_component = game_component;
this.meta37869 = meta37869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t37868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37870,meta37869__$1){
var self__ = this;
var _37870__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t37868(self__.game_component,meta37869__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t37868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37870){
var self__ = this;
var _37870__$1 = this;
return self__.meta37869;
});

p3r50na.apps.bookof5rinds.client.game.component.t37868.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t37868.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t37868.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t37868.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas"}));
});

p3r50na.apps.bookof5rinds.client.game.component.t37868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta37869","meta37869",1744997705,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t37868.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t37868.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t37868";

p3r50na.apps.bookof5rinds.client.game.component.t37868.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t37868");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t37868 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t37868(game_component__$1,meta37869){
return (new p3r50na.apps.bookof5rinds.client.game.component.t37868(game_component__$1,meta37869));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t37868(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map