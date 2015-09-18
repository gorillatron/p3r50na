// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('p3r50na.apps.bookof5rinds.client.game.component');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.core.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.core.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.core.socket.onopen = (function (e){
return null;
});
p3r50na.apps.bookof5rinds.client.core.socket.onerror = (function (){
alert("error");

return console.log(arguments$);
});
p3r50na.apps.bookof5rinds.client.core.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__,event){
return (function (){
var f__24368__auto__ = (function (){var switch__24302__auto__ = ((function (c__24367__auto__,event){
return (function (state_39994){
var state_val_39995 = (state_39994[(1)]);
if((state_val_39995 === (1))){
var state_39994__$1 = state_39994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39994__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_39995 === (2))){
var inst_39992 = (state_39994[(2)]);
var state_39994__$1 = state_39994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39994__$1,inst_39992);
} else {
return null;
}
}
});})(c__24367__auto__,event))
;
return ((function (switch__24302__auto__,c__24367__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto____0 = (function (){
var statearr_39999 = [null,null,null,null,null,null,null];
(statearr_39999[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto__);

(statearr_39999[(1)] = (1));

return statearr_39999;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto____1 = (function (state_39994){
while(true){
var ret_value__24304__auto__ = (function (){try{while(true){
var result__24305__auto__ = switch__24302__auto__.call(null,state_39994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24305__auto__;
}
break;
}
}catch (e40000){if((e40000 instanceof Object)){
var ex__24306__auto__ = e40000;
var statearr_40001_40003 = state_39994;
(statearr_40001_40003[(5)] = ex__24306__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40004 = state_39994;
state_39994 = G__40004;
continue;
} else {
return ret_value__24304__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto__ = function(state_39994){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto____1.call(this,state_39994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__24303__auto__;
})()
;})(switch__24302__auto__,c__24367__auto__,event))
})();
var state__24369__auto__ = (function (){var statearr_40002 = f__24368__auto__.call(null);
(statearr_40002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_40002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__,event))
);

return c__24367__auto__;
});
p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown = (function p3r50na$apps$bookof5rinds$client$core$handle_new_rind_keydown(e,state,owner){
if((e.keyCode === (13))){
var name = e.target.value;
if(((4) > cljs.core.count.call(null,name))){
return alert("Rind name muyst be longer than 4 characters");
} else {
var new_rind = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
var message = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"create-rind",new cljs.core.Keyword(null,"data","data",-232669377),new_rind], null);
return p3r50na.apps.bookof5rinds.client.core.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,message)));
}
} else {
return null;
}
});
p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler = (function p3r50na$apps$bookof5rinds$client$core$on_delete_rind_handler(e,rindidate){
return p3r50na.apps.bookof5rinds.client.core.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"remove-rind",new cljs.core.Keyword(null,"data","data",-232669377),rindidate], null))));
});
p3r50na.apps.bookof5rinds.client.core.rindidate_list = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list(rindidates){
return React.DOM.ul(null,(function (){var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__40010(s__40011){
return (new cljs.core.LazySeq(null,(function (){
var s__40011__$1 = s__40011;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__40011__$1);
if(temp__4425__auto__){
var s__40011__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40011__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__40011__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__40013 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__40012 = (0);
while(true){
if((i__40012 < size__20305__auto__)){
var rindidate = cljs.core._nth.call(null,c__20304__auto__,i__40012);
cljs.core.chunk_append.call(null,b__40013,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__40012,rindidate,c__20304__auto__,size__20305__auto__,b__40013,s__40011__$2,temp__4425__auto__){
return (function (p1__40005_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__40005_SHARP_,rindidate);
});})(i__40012,rindidate,c__20304__auto__,size__20305__auto__,b__40013,s__40011__$2,temp__4425__auto__))
},"delete")));

var G__40014 = (i__40012 + (1));
i__40012 = G__40014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40013),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__40010.call(null,cljs.core.chunk_rest.call(null,s__40011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40013),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__40011__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__40011__$2,temp__4425__auto__){
return (function (p1__40005_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__40005_SHARP_,rindidate);
});})(rindidate,s__40011__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__40010.call(null,cljs.core.rest.call(null,s__40011__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20306__auto__.call(null,rindidates);
})());
});
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t40049 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t40049 = (function (app,state,owner,meta40050){
this.app = app;
this.state = state;
this.owner = owner;
this.meta40050 = meta40050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t40049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40051,meta40050__$1){
var self__ = this;
var _40051__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t40049(self__.app,self__.state,self__.owner,meta40050__$1));
});

p3r50na.apps.bookof5rinds.client.core.t40049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40051){
var self__ = this;
var _40051__$1 = this;
return self__.meta40050;
});

p3r50na.apps.bookof5rinds.client.core.t40049.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t40049.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__24367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24367__auto__,___$1){
return (function (){
var f__24368__auto__ = (function (){var switch__24302__auto__ = ((function (c__24367__auto__,___$1){
return (function (state_40066){
var state_val_40067 = (state_40066[(1)]);
if((state_val_40067 === (1))){
var state_40066__$1 = state_40066;
var statearr_40068_40082 = state_40066__$1;
(statearr_40068_40082[(2)] = null);

(statearr_40068_40082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40067 === (2))){
var state_40066__$1 = state_40066;
var statearr_40069_40083 = state_40066__$1;
(statearr_40069_40083[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40067 === (3))){
var inst_40064 = (state_40066[(2)]);
var state_40066__$1 = state_40066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40066__$1,inst_40064);
} else {
if((state_val_40067 === (4))){
var state_40066__$1 = state_40066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40066__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_40067 === (5))){
var state_40066__$1 = state_40066;
var statearr_40071_40084 = state_40066__$1;
(statearr_40071_40084[(2)] = null);

(statearr_40071_40084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40067 === (6))){
var inst_40062 = (state_40066[(2)]);
var state_40066__$1 = state_40066;
var statearr_40072_40085 = state_40066__$1;
(statearr_40072_40085[(2)] = inst_40062);

(statearr_40072_40085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40067 === (7))){
var inst_40055 = (state_40066[(2)]);
var inst_40056 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_40055);
var inst_40057 = (function (){var event = inst_40055;
var newstate = inst_40056;
return ((function (event,newstate,inst_40055,inst_40056,state_val_40067,c__24367__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_40055,inst_40056,state_val_40067,c__24367__auto__,___$1))
})();
var inst_40058 = om.core.update_state_BANG_.call(null,self__.owner,inst_40057);
var state_40066__$1 = (function (){var statearr_40073 = state_40066;
(statearr_40073[(7)] = inst_40058);

return statearr_40073;
})();
var statearr_40074_40086 = state_40066__$1;
(statearr_40074_40086[(2)] = null);

(statearr_40074_40086[(1)] = (2));


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
});})(c__24367__auto__,___$1))
;
return ((function (switch__24302__auto__,c__24367__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto____0 = (function (){
var statearr_40078 = [null,null,null,null,null,null,null,null];
(statearr_40078[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto__);

(statearr_40078[(1)] = (1));

return statearr_40078;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto____1 = (function (state_40066){
while(true){
var ret_value__24304__auto__ = (function (){try{while(true){
var result__24305__auto__ = switch__24302__auto__.call(null,state_40066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24305__auto__;
}
break;
}
}catch (e40079){if((e40079 instanceof Object)){
var ex__24306__auto__ = e40079;
var statearr_40080_40087 = state_40066;
(statearr_40080_40087[(5)] = ex__24306__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40088 = state_40066;
state_40066 = G__40088;
continue;
} else {
return ret_value__24304__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto__ = function(state_40066){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto____1.call(this,state_40066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__24303__auto__;
})()
;})(switch__24302__auto__,c__24367__auto__,___$1))
})();
var state__24369__auto__ = (function (){var statearr_40081 = f__24368__auto__.call(null);
(statearr_40081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24367__auto__);

return statearr_40081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24369__auto__);
});})(c__24367__auto__,___$1))
);

return c__24367__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t40049.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t40049.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__40015_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__40015_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t40049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta40050","meta40050",-1090068099,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t40049.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t40049.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t40049";

p3r50na.apps.bookof5rinds.client.core.t40049.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.core/t40049");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t40049 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t40049(app__$1,state__$1,owner__$1,meta40050){
return (new p3r50na.apps.bookof5rinds.client.core.t40049(app__$1,state__$1,owner__$1,meta40050));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t40049(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map