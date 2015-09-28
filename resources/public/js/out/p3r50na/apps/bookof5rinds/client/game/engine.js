// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('quil.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.level');
goog.require('cljs.core.async');
goog.require('wagjo.data.array');
goog.require('quil.middleware');
goog.require('om.core');
p3r50na.apps.bookof5rinds.client.game.engine.wallsm = cljs.core.memoize.call(null,p3r50na.apps.bookof5rinds.client.game.level.walls);
p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_controlls(state,controlls){

if(cljs.core.empty_QMARK_.call(null,controlls)){
return state;
} else {
var map__29380 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__29380__$1 = ((((!((map__29380 == null)))?((((map__29380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29380):map__29380);
var x = cljs.core.get.call(null,map__29380__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29380__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__29380__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__29380,map__29380__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__29382 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__29382) {
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
if(cljs.core.truth_((function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1));
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__29380,map__29380__$1,x,y,speed))
,state,controlls);
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__29388 = bullet;
var map__29388__$1 = ((((!((map__29388 == null)))?((((map__29388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29388):map__29388);
var speed = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__29389 = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__29389,(0),null);
var by = cljs.core.nth.call(null,vec__29389,(1),null);
var lx = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__29390 = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__29390,(0),null);
var gy = cljs.core.nth.call(null,vec__29390,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.engine.bullet_intersects_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$engine$bullet_intersects_QMARK_(state,bullet){
return cljs.core.not.call(null,(function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.engine.wallsm.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
}
})());
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullets(state){
return cljs.core.filterv.call(null,cljs.core.partial.call(null,p3r50na.apps.bookof5rinds.client.game.engine.bullet_intersects_QMARK_,state),cljs.core.mapv.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),p3r50na.apps.bookof5rinds.client.game.engine.update_bullets.call(null,state));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_objects = (function p3r50na$apps$bookof5rinds$client$game$engine$update_objects(state){
var oldstate = state;
var new_state = p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations.call(null,state);
return new_state;
});
p3r50na.apps.bookof5rinds.client.game.engine.player_fired_bullet = (function p3r50na$apps$bookof5rinds$client$game$engine$player_fired_bullet(state,event){
var map__29396 = event;
var map__29396__$1 = ((((!((map__29396 == null)))?((((map__29396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var mx = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var map__29397 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__29397__$1 = ((((!((map__29397 == null)))?((((map__29397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29397):map__29397);
var px = cljs.core.get.call(null,map__29397__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__29397__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__29397__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
var bullet = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.3,new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.engine.remote_player_updated = (function p3r50na$apps$bookof5rinds$client$game$engine$remote_player_updated(state,event){
var map__29402 = event;
var map__29402__$1 = ((((!((map__29402 == null)))?((((map__29402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29402):map__29402);
var remote_player = cljs.core.get.call(null,map__29402__$1,new cljs.core.Keyword(null,"player","player",-97687400));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(remote_player)], null),remote_player);
});
p3r50na.apps.bookof5rinds.client.game.engine.apply_events = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_events(state,events){
return cljs.core.reduce.call(null,(function (state__$1,event){
var G__29405 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event);
switch (G__29405) {
case "remote-player-update":
return p3r50na.apps.bookof5rinds.client.game.engine.remote_player_updated.call(null,state__$1,event);

break;
case "player-fired-bullet":
return p3r50na.apps.bookof5rinds.client.game.engine.player_fired_bullet.call(null,state__$1,event);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event))].join('')));

}
}),state,events);
});
p3r50na.apps.bookof5rinds.client.game.engine.create_initial_state = (function p3r50na$apps$bookof5rinds$client$game$engine$create_initial_state(state){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null),state);
});
p3r50na.apps.bookof5rinds.client.game.engine.create_simulation = (function p3r50na$apps$bookof5rinds$client$game$engine$create_simulation(state){
var initial_state = p3r50na.apps.bookof5rinds.client.game.engine.create_initial_state.call(null,state);
var old_state = cljs.core.atom.call(null,initial_state);
var controlls = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var events = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-frame","next-frame",-636070893),((function (initial_state,old_state,controlls,events){
return (function (){
var new_state = p3r50na.apps.bookof5rinds.client.game.engine.apply_events.call(null,cljs.core.deref.call(null,old_state),cljs.core.deref.call(null,events));
var new_state__$1 = p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls.call(null,new_state,cljs.core.deref.call(null,controlls));
var new_state__$2 = p3r50na.apps.bookof5rinds.client.game.engine.update_objects.call(null,new_state__$1);
cljs.core.reset_BANG_.call(null,events,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,old_state,new_state__$2);

return new_state__$2;
});})(initial_state,old_state,controlls,events))
,new cljs.core.Keyword(null,"add-event","add-event",938429088),((function (initial_state,old_state,controlls,events){
return (function (event){
return cljs.core.swap_BANG_.call(null,events,cljs.core.conj,event);
});})(initial_state,old_state,controlls,events))
,new cljs.core.Keyword(null,"controller","controller",2013778659),((function (initial_state,old_state,controlls,events){
return (function (mutator){
return cljs.core.reset_BANG_.call(null,controlls,mutator.call(null,cljs.core.deref.call(null,controlls)));
});})(initial_state,old_state,controlls,events))
], null);
});

//# sourceMappingURL=engine.js.map