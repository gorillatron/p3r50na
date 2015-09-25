// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('p3r50na.apps.bookof5rinds.client.game.component');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.core.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t86343 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t86343 = (function (app,state,owner,meta86344){
this.app = app;
this.state = state;
this.owner = owner;
this.meta86344 = meta86344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t86343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86345,meta86344__$1){
var self__ = this;
var _86345__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t86343(self__.app,self__.state,self__.owner,meta86344__$1));
});

p3r50na.apps.bookof5rinds.client.core.t86343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86345){
var self__ = this;
var _86345__$1 = this;
return self__.meta86344;
});

p3r50na.apps.bookof5rinds.client.core.t86343.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t86343.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__,___$1){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__,___$1){
return (function (state_86360){
var state_val_86361 = (state_86360[(1)]);
if((state_val_86361 === (1))){
var state_86360__$1 = state_86360;
var statearr_86362_86376 = state_86360__$1;
(statearr_86362_86376[(2)] = null);

(statearr_86362_86376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86361 === (2))){
var state_86360__$1 = state_86360;
var statearr_86363_86377 = state_86360__$1;
(statearr_86363_86377[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86361 === (3))){
var inst_86358 = (state_86360[(2)]);
var state_86360__$1 = state_86360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86360__$1,inst_86358);
} else {
if((state_val_86361 === (4))){
var state_86360__$1 = state_86360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86360__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_86361 === (5))){
var state_86360__$1 = state_86360;
var statearr_86365_86378 = state_86360__$1;
(statearr_86365_86378[(2)] = null);

(statearr_86365_86378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86361 === (6))){
var inst_86356 = (state_86360[(2)]);
var state_86360__$1 = state_86360;
var statearr_86366_86379 = state_86360__$1;
(statearr_86366_86379[(2)] = inst_86356);

(statearr_86366_86379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86361 === (7))){
var inst_86349 = (state_86360[(2)]);
var inst_86350 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_86349);
var inst_86351 = (function (){var event = inst_86349;
var newstate = inst_86350;
return ((function (event,newstate,inst_86349,inst_86350,state_val_86361,c__23656__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_86349,inst_86350,state_val_86361,c__23656__auto__,___$1))
})();
var inst_86352 = om.core.update_state_BANG_.call(null,self__.owner,inst_86351);
var state_86360__$1 = (function (){var statearr_86367 = state_86360;
(statearr_86367[(7)] = inst_86352);

return statearr_86367;
})();
var statearr_86368_86380 = state_86360__$1;
(statearr_86368_86380[(2)] = null);

(statearr_86368_86380[(1)] = (2));


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
});})(c__23656__auto__,___$1))
;
return ((function (switch__23591__auto__,c__23656__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0 = (function (){
var statearr_86372 = [null,null,null,null,null,null,null,null];
(statearr_86372[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__);

(statearr_86372[(1)] = (1));

return statearr_86372;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1 = (function (state_86360){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_86360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e86373){if((e86373 instanceof Object)){
var ex__23595__auto__ = e86373;
var statearr_86374_86381 = state_86360;
(statearr_86374_86381[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86382 = state_86360;
state_86360 = G__86382;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = function(state_86360){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1.call(this,state_86360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,___$1))
})();
var state__23658__auto__ = (function (){var statearr_86375 = f__23657__auto__.call(null);
(statearr_86375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_86375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__,___$1))
);

return c__23656__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t86343.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t86343.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t86343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta86344","meta86344",-1092324140,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t86343.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t86343.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t86343";

p3r50na.apps.bookof5rinds.client.core.t86343.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.core/t86343");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t86343 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t86343(app__$1,state__$1,owner__$1,meta86344){
return (new p3r50na.apps.bookof5rinds.client.core.t86343(app__$1,state__$1,owner__$1,meta86344));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t86343(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map