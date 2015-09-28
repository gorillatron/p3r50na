// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.maps.level1');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('p3r50na.apps.bookof5rinds.client.game.map');
goog.require('quil.core');
goog.require('cljs.core.async');
goog.require('wagjo.data.array');
goog.require('quil.middleware');
goog.require('om.core');
p3r50na.apps.bookof5rinds.client.game.engine.wallsm = cljs.core.memoize.call(null,p3r50na.apps.bookof5rinds.client.game.map.walls);
p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_controlls(state,controlls){
if(cljs.core.empty_QMARK_.call(null,controlls)){
return state;
} else {
var map__26116 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__26116__$1 = ((((!((map__26116 == null)))?((((map__26116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26116):map__26116);
var x = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__26116__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__26116,map__26116__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__26118 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__26118) {
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
if(cljs.core.truth_((function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.map.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__26116,map__26116__$1,x,y,speed))
,state,controlls);
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__26124 = bullet;
var map__26124__$1 = ((((!((map__26124 == null)))?((((map__26124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26124):map__26124);
var speed = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__26125 = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__26125,(0),null);
var by = cljs.core.nth.call(null,vec__26125,(1),null);
var lx = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__26126 = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__26126,(0),null);
var gy = cljs.core.nth.call(null,vec__26126,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.engine.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullets(state){
return cljs.core.filterv.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.engine.wallsm.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.mapv.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),p3r50na.apps.bookof5rinds.client.game.engine.update_bullets.call(null,state));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_objects = (function p3r50na$apps$bookof5rinds$client$game$engine$update_objects(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations.call(null,state);
return newstate;
});
p3r50na.apps.bookof5rinds.client.game.engine.player_fired_bullet = (function p3r50na$apps$bookof5rinds$client$game$engine$player_fired_bullet(state,event){
var map__26132 = event;
var map__26132__$1 = ((((!((map__26132 == null)))?((((map__26132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26132):map__26132);
var mx = cljs.core.get.call(null,map__26132__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.call(null,map__26132__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var map__26133 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__26133__$1 = ((((!((map__26133 == null)))?((((map__26133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26133):map__26133);
var px = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__26133__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
var bullet = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.3,new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.engine.apply_events = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_events(state,events){
return cljs.core.reduce.call(null,(function (state__$1,event){
var G__26137 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event);
switch (G__26137) {
case "player-fired-bullet":
return p3r50na.apps.bookof5rinds.client.game.engine.player_fired_bullet.call(null,state__$1,event);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event))].join('')));

}
}),state,events);
});
p3r50na.apps.bookof5rinds.client.game.engine.create_simulation = (function p3r50na$apps$bookof5rinds$client$game$engine$create_simulation(state){
var oldstate = cljs.core.atom.call(null,state);
var controlls = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var events = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-frame","next-frame",-636070893),((function (oldstate,controlls,events){
return (function (){
var newstate = p3r50na.apps.bookof5rinds.client.game.engine.apply_events.call(null,cljs.core.deref.call(null,oldstate),cljs.core.deref.call(null,events));
var newstate__$1 = p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls.call(null,newstate,cljs.core.deref.call(null,controlls));
var newstate__$2 = p3r50na.apps.bookof5rinds.client.game.engine.update_objects.call(null,newstate__$1);
cljs.core.reset_BANG_.call(null,events,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,oldstate,newstate__$2);

return newstate__$2;
});})(oldstate,controlls,events))
,new cljs.core.Keyword(null,"add-event","add-event",938429088),((function (oldstate,controlls,events){
return (function (event){
return cljs.core.swap_BANG_.call(null,events,cljs.core.conj,event);
});})(oldstate,controlls,events))
,new cljs.core.Keyword(null,"controller","controller",2013778659),((function (oldstate,controlls,events){
return (function (mutator){
return cljs.core.reset_BANG_.call(null,controlls,mutator.call(null,cljs.core.deref.call(null,controlls)));
});})(oldstate,controlls,events))
], null);
});

//# sourceMappingURL=engine.js.map