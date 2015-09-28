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
if(typeof p3r50na.apps.bookof5rinds.client.core.t56626 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t56626 = (function (app,state,owner,meta56627){
this.app = app;
this.state = state;
this.owner = owner;
this.meta56627 = meta56627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t56626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56628,meta56627__$1){
var self__ = this;
var _56628__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t56626(self__.app,self__.state,self__.owner,meta56627__$1));
});

p3r50na.apps.bookof5rinds.client.core.t56626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56628){
var self__ = this;
var _56628__$1 = this;
return self__.meta56627;
});

p3r50na.apps.bookof5rinds.client.core.t56626.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t56626.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22666__auto__,___$1){
return (function (){
var f__22667__auto__ = (function (){var switch__22645__auto__ = ((function (c__22666__auto__,___$1){
return (function (state_56643){
var state_val_56644 = (state_56643[(1)]);
if((state_val_56644 === (1))){
var state_56643__$1 = state_56643;
var statearr_56645_56659 = state_56643__$1;
(statearr_56645_56659[(2)] = null);

(statearr_56645_56659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56644 === (2))){
var state_56643__$1 = state_56643;
var statearr_56646_56660 = state_56643__$1;
(statearr_56646_56660[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56644 === (3))){
var inst_56641 = (state_56643[(2)]);
var state_56643__$1 = state_56643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56643__$1,inst_56641);
} else {
if((state_val_56644 === (4))){
var state_56643__$1 = state_56643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56643__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_56644 === (5))){
var state_56643__$1 = state_56643;
var statearr_56648_56661 = state_56643__$1;
(statearr_56648_56661[(2)] = null);

(statearr_56648_56661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56644 === (6))){
var inst_56639 = (state_56643[(2)]);
var state_56643__$1 = state_56643;
var statearr_56649_56662 = state_56643__$1;
(statearr_56649_56662[(2)] = inst_56639);

(statearr_56649_56662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56644 === (7))){
var inst_56632 = (state_56643[(2)]);
var inst_56633 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_56632);
var inst_56634 = (function (){var event = inst_56632;
var newstate = inst_56633;
return ((function (event,newstate,inst_56632,inst_56633,state_val_56644,c__22666__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_56632,inst_56633,state_val_56644,c__22666__auto__,___$1))
})();
var inst_56635 = om.core.update_state_BANG_.call(null,self__.owner,inst_56634);
var state_56643__$1 = (function (){var statearr_56650 = state_56643;
(statearr_56650[(7)] = inst_56635);

return statearr_56650;
})();
var statearr_56651_56663 = state_56643__$1;
(statearr_56651_56663[(2)] = null);

(statearr_56651_56663[(1)] = (2));


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
});})(c__22666__auto__,___$1))
;
return ((function (switch__22645__auto__,c__22666__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto____0 = (function (){
var statearr_56655 = [null,null,null,null,null,null,null,null];
(statearr_56655[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto__);

(statearr_56655[(1)] = (1));

return statearr_56655;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto____1 = (function (state_56643){
while(true){
var ret_value__22647__auto__ = (function (){try{while(true){
var result__22648__auto__ = switch__22645__auto__.call(null,state_56643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22648__auto__;
}
break;
}
}catch (e56656){if((e56656 instanceof Object)){
var ex__22649__auto__ = e56656;
var statearr_56657_56664 = state_56643;
(statearr_56657_56664[(5)] = ex__22649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56665 = state_56643;
state_56643 = G__56665;
continue;
} else {
return ret_value__22647__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto__ = function(state_56643){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto____1.call(this,state_56643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22646__auto__;
})()
;})(switch__22645__auto__,c__22666__auto__,___$1))
})();
var state__22668__auto__ = (function (){var statearr_56658 = f__22667__auto__.call(null);
(statearr_56658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22666__auto__);

return statearr_56658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22668__auto__);
});})(c__22666__auto__,___$1))
);

return c__22666__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t56626.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t56626.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t56626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta56627","meta56627",-190307932,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t56626.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t56626.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t56626";

p3r50na.apps.bookof5rinds.client.core.t56626.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.core/t56626");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t56626 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t56626(app__$1,state__$1,owner__$1,meta56627){
return (new p3r50na.apps.bookof5rinds.client.core.t56626(app__$1,state__$1,owner__$1,meta56627));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t56626(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map