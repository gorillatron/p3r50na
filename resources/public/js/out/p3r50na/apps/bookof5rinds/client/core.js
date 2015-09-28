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
if(typeof p3r50na.apps.bookof5rinds.client.core.t77854 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t77854 = (function (app,state,owner,meta77855){
this.app = app;
this.state = state;
this.owner = owner;
this.meta77855 = meta77855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t77854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77856,meta77855__$1){
var self__ = this;
var _77856__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t77854(self__.app,self__.state,self__.owner,meta77855__$1));
});

p3r50na.apps.bookof5rinds.client.core.t77854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77856){
var self__ = this;
var _77856__$1 = this;
return self__.meta77855;
});

p3r50na.apps.bookof5rinds.client.core.t77854.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t77854.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23302__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto__,___$1){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto__,___$1){
return (function (state_77871){
var state_val_77872 = (state_77871[(1)]);
if((state_val_77872 === (1))){
var state_77871__$1 = state_77871;
var statearr_77873_77887 = state_77871__$1;
(statearr_77873_77887[(2)] = null);

(statearr_77873_77887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77872 === (2))){
var state_77871__$1 = state_77871;
var statearr_77874_77888 = state_77871__$1;
(statearr_77874_77888[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77872 === (3))){
var inst_77869 = (state_77871[(2)]);
var state_77871__$1 = state_77871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77871__$1,inst_77869);
} else {
if((state_val_77872 === (4))){
var state_77871__$1 = state_77871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77871__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_77872 === (5))){
var state_77871__$1 = state_77871;
var statearr_77876_77889 = state_77871__$1;
(statearr_77876_77889[(2)] = null);

(statearr_77876_77889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77872 === (6))){
var inst_77867 = (state_77871[(2)]);
var state_77871__$1 = state_77871;
var statearr_77877_77890 = state_77871__$1;
(statearr_77877_77890[(2)] = inst_77867);

(statearr_77877_77890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77872 === (7))){
var inst_77860 = (state_77871[(2)]);
var inst_77861 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_77860);
var inst_77862 = (function (){var event = inst_77860;
var newstate = inst_77861;
return ((function (event,newstate,inst_77860,inst_77861,state_val_77872,c__23302__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_77860,inst_77861,state_val_77872,c__23302__auto__,___$1))
})();
var inst_77863 = om.core.update_state_BANG_.call(null,self__.owner,inst_77862);
var state_77871__$1 = (function (){var statearr_77878 = state_77871;
(statearr_77878[(7)] = inst_77863);

return statearr_77878;
})();
var statearr_77879_77891 = state_77871__$1;
(statearr_77879_77891[(2)] = null);

(statearr_77879_77891[(1)] = (2));


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
});})(c__23302__auto__,___$1))
;
return ((function (switch__23281__auto__,c__23302__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0 = (function (){
var statearr_77883 = [null,null,null,null,null,null,null,null];
(statearr_77883[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__);

(statearr_77883[(1)] = (1));

return statearr_77883;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1 = (function (state_77871){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_77871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e77884){if((e77884 instanceof Object)){
var ex__23285__auto__ = e77884;
var statearr_77885_77892 = state_77871;
(statearr_77885_77892[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77893 = state_77871;
state_77871 = G__77893;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__ = function(state_77871){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1.call(this,state_77871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto__,___$1))
})();
var state__23304__auto__ = (function (){var statearr_77886 = f__23303__auto__.call(null);
(statearr_77886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto__);

return statearr_77886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto__,___$1))
);

return c__23302__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t77854.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t77854.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t77854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta77855","meta77855",-530579992,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t77854.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t77854.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t77854";

p3r50na.apps.bookof5rinds.client.core.t77854.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.core/t77854");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t77854 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t77854(app__$1,state__$1,owner__$1,meta77855){
return (new p3r50na.apps.bookof5rinds.client.core.t77854(app__$1,state__$1,owner__$1,meta77855));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t77854(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map