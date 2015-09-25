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
if(typeof p3r50na.apps.bookof5rinds.client.core.t125237 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t125237 = (function (app,state,owner,meta125238){
this.app = app;
this.state = state;
this.owner = owner;
this.meta125238 = meta125238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t125237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125239,meta125238__$1){
var self__ = this;
var _125239__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t125237(self__.app,self__.state,self__.owner,meta125238__$1));
});

p3r50na.apps.bookof5rinds.client.core.t125237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125239){
var self__ = this;
var _125239__$1 = this;
return self__.meta125238;
});

p3r50na.apps.bookof5rinds.client.core.t125237.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t125237.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__,___$1){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__,___$1){
return (function (state_125254){
var state_val_125255 = (state_125254[(1)]);
if((state_val_125255 === (1))){
var state_125254__$1 = state_125254;
var statearr_125256_125270 = state_125254__$1;
(statearr_125256_125270[(2)] = null);

(statearr_125256_125270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125255 === (2))){
var state_125254__$1 = state_125254;
var statearr_125257_125271 = state_125254__$1;
(statearr_125257_125271[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125255 === (3))){
var inst_125252 = (state_125254[(2)]);
var state_125254__$1 = state_125254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_125254__$1,inst_125252);
} else {
if((state_val_125255 === (4))){
var state_125254__$1 = state_125254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125254__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_125255 === (5))){
var state_125254__$1 = state_125254;
var statearr_125259_125272 = state_125254__$1;
(statearr_125259_125272[(2)] = null);

(statearr_125259_125272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125255 === (6))){
var inst_125250 = (state_125254[(2)]);
var state_125254__$1 = state_125254;
var statearr_125260_125273 = state_125254__$1;
(statearr_125260_125273[(2)] = inst_125250);

(statearr_125260_125273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125255 === (7))){
var inst_125243 = (state_125254[(2)]);
var inst_125244 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_125243);
var inst_125245 = (function (){var event = inst_125243;
var newstate = inst_125244;
return ((function (event,newstate,inst_125243,inst_125244,state_val_125255,c__23656__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_125243,inst_125244,state_val_125255,c__23656__auto__,___$1))
})();
var inst_125246 = om.core.update_state_BANG_.call(null,self__.owner,inst_125245);
var state_125254__$1 = (function (){var statearr_125261 = state_125254;
(statearr_125261[(7)] = inst_125246);

return statearr_125261;
})();
var statearr_125262_125274 = state_125254__$1;
(statearr_125262_125274[(2)] = null);

(statearr_125262_125274[(1)] = (2));


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
var statearr_125266 = [null,null,null,null,null,null,null,null];
(statearr_125266[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__);

(statearr_125266[(1)] = (1));

return statearr_125266;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1 = (function (state_125254){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_125254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e125267){if((e125267 instanceof Object)){
var ex__23595__auto__ = e125267;
var statearr_125268_125275 = state_125254;
(statearr_125268_125275[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_125254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125276 = state_125254;
state_125254 = G__125276;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = function(state_125254){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1.call(this,state_125254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,___$1))
})();
var state__23658__auto__ = (function (){var statearr_125269 = f__23657__auto__.call(null);
(statearr_125269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_125269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__,___$1))
);

return c__23656__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t125237.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t125237.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t125237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta125238","meta125238",1651211997,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t125237.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t125237.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t125237";

p3r50na.apps.bookof5rinds.client.core.t125237.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.core/t125237");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t125237 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t125237(app__$1,state__$1,owner__$1,meta125238){
return (new p3r50na.apps.bookof5rinds.client.core.t125237(app__$1,state__$1,owner__$1,meta125238));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t125237(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map