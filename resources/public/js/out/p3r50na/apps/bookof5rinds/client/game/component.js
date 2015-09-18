// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.no_loop.call(null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-state","player-state",-337228580),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10),new cljs.core.Keyword(null,"ydir","ydir",743041839),(0),new cljs.core.Keyword(null,"xdir","xdir",1180076178),(0)], null),new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(0));

var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-state","player-state",-337228580).cljs$core$IFn$_invoke$arity$1(state));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-state","player-state",-337228580).cljs$core$IFn$_invoke$arity$1(state));
return quil.core.rect.call(null,x,y,(33),(33));
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var ydir = new cljs.core.Keyword(null,"ydir","ydir",743041839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-state","player-state",-337228580).cljs$core$IFn$_invoke$arity$1(state));
var xdir = new cljs.core.Keyword(null,"xdir","xdir",1180076178).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-state","player-state",-337228580).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-state","player-state",-337228580),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,xdir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-state","player-state",-337228580),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,ydir);
});
p3r50na.apps.bookof5rinds.client.game.component.hello = (function p3r50na$apps$bookof5rinds$client$game$component$hello(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__39974__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__39974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39975__i = 0, G__39975__a = new Array(arguments.length -  0);
while (G__39975__i < G__39975__a.length) {G__39975__a[G__39975__i] = arguments[G__39975__i + 0]; ++G__39975__i;}
  args = new cljs.core.IndexedSeq(G__39975__a,0);
} 
return G__39974__delegate.call(this,args);};
G__39974.cljs$lang$maxFixedArity = 0;
G__39974.cljs$lang$applyTo = (function (arglist__39976){
var args = cljs.core.seq(arglist__39976);
return G__39974__delegate(args);
});
G__39974.cljs$core$IFn$_invoke$arity$variadic = G__39974__delegate;
return G__39974;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__39977__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__39977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39978__i = 0, G__39978__a = new Array(arguments.length -  0);
while (G__39978__i < G__39978__a.length) {G__39978__a[G__39978__i] = arguments[G__39978__i + 0]; ++G__39978__i;}
  args = new cljs.core.IndexedSeq(G__39978__a,0);
} 
return G__39977__delegate.call(this,args);};
G__39977.cljs$lang$maxFixedArity = 0;
G__39977.cljs$lang$applyTo = (function (arglist__39979){
var args = cljs.core.seq(arglist__39979);
return G__39977__delegate(args);
});
G__39977.cljs$core$IFn$_invoke$arity$variadic = G__39977__delegate;
return G__39977;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__39980__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__39980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39981__i = 0, G__39981__a = new Array(arguments.length -  0);
while (G__39981__i < G__39981__a.length) {G__39981__a[G__39981__i] = arguments[G__39981__i + 0]; ++G__39981__i;}
  args = new cljs.core.IndexedSeq(G__39981__a,0);
} 
return G__39980__delegate.call(this,args);};
G__39980.cljs$lang$maxFixedArity = 0;
G__39980.cljs$lang$applyTo = (function (arglist__39982){
var args = cljs.core.seq(arglist__39982);
return G__39980__delegate(args);
});
G__39980.cljs$core$IFn$_invoke$arity$variadic = G__39980__delegate;
return G__39980;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.hello', p3r50na.apps.bookof5rinds.client.game.component.hello);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21811__21812__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21811__21812__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.hello,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t39986 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t39986 = (function (game_component,meta39987){
this.game_component = game_component;
this.meta39987 = meta39987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t39986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39988,meta39987__$1){
var self__ = this;
var _39988__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t39986(self__.game_component,meta39987__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t39986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39988){
var self__ = this;
var _39988__$1 = this;
return self__.meta39987;
});

p3r50na.apps.bookof5rinds.client.game.component.t39986.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t39986.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t39986.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t39986.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas"}));
});

p3r50na.apps.bookof5rinds.client.game.component.t39986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta39987","meta39987",968637356,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t39986.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t39986.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t39986";

p3r50na.apps.bookof5rinds.client.game.component.t39986.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t39986");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t39986 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t39986(game_component__$1,meta39987){
return (new p3r50na.apps.bookof5rinds.client.game.component.t39986(game_component__$1,meta39987));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t39986(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map