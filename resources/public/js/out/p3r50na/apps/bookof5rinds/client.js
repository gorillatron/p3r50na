// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown = (function p3r50na$apps$bookof5rinds$client$handle_new_rind_keydown(e,state,owner){
if((e.keyCode === (13))){
var name = e.target.value;
if(((4) > cljs.core.count.call(null,name))){
return alert("Rind name muyst be longer than 4 characters");
} else {
var new_rind = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
var message = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"create-rind",new cljs.core.Keyword(null,"data","data",-232669377),new_rind], null);
return p3r50na.apps.bookof5rinds.client.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,message)));
}
} else {
return null;
}
});
p3r50na.apps.bookof5rinds.client.on_delete_rind_handler = (function p3r50na$apps$bookof5rinds$client$on_delete_rind_handler(e,rindidate){
return p3r50na.apps.bookof5rinds.client.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"remove-rind",new cljs.core.Keyword(null,"data","data",-232669377),rindidate], null))));
});
p3r50na.apps.bookof5rinds.client.rindidate_list = (function p3r50na$apps$bookof5rinds$client$rindidate_list(rindidates){
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__26492(s__26493){
return (new cljs.core.LazySeq(null,(function (){
var s__26493__$1 = s__26493;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26493__$1);
if(temp__4425__auto__){
var s__26493__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26493__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__26493__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__26495 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__26494 = (0);
while(true){
if((i__26494 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__26494);
cljs.core.chunk_append.call(null,b__26495,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__26494,rindidate,c__20303__auto__,size__20304__auto__,b__26495,s__26493__$2,temp__4425__auto__){
return (function (p1__26487_SHARP_){
return p3r50na.apps.bookof5rinds.client.on_delete_rind_handler.call(null,p1__26487_SHARP_,rindidate);
});})(i__26494,rindidate,c__20303__auto__,size__20304__auto__,b__26495,s__26493__$2,temp__4425__auto__))
},"delete")));

var G__26496 = (i__26494 + (1));
i__26494 = G__26496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26495),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__26492.call(null,cljs.core.chunk_rest.call(null,s__26493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26495),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__26493__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__26493__$2,temp__4425__auto__){
return (function (p1__26487_SHARP_){
return p3r50na.apps.bookof5rinds.client.on_delete_rind_handler.call(null,p1__26487_SHARP_,rindidate);
});})(rindidate,s__26493__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__26492.call(null,cljs.core.rest.call(null,s__26493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20305__auto__.call(null,rindidates);
})());
});
p3r50na.apps.bookof5rinds.client.app = (function p3r50na$apps$bookof5rinds$client$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t26531 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t26531 = (function (app,state,owner,meta26532){
this.app = app;
this.state = state;
this.owner = owner;
this.meta26532 = meta26532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t26531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26533,meta26532__$1){
var self__ = this;
var _26533__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t26531(self__.app,self__.state,self__.owner,meta26532__$1));
});

p3r50na.apps.bookof5rinds.client.t26531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26533){
var self__ = this;
var _26533__$1 = this;
return self__.meta26532;
});

p3r50na.apps.bookof5rinds.client.t26531.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.t26531.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23615__auto__,___$1){
return (function (){
var f__23616__auto__ = (function (){var switch__23550__auto__ = ((function (c__23615__auto__,___$1){
return (function (state_26548){
var state_val_26549 = (state_26548[(1)]);
if((state_val_26549 === (1))){
var state_26548__$1 = state_26548;
var statearr_26550_26564 = state_26548__$1;
(statearr_26550_26564[(2)] = null);

(statearr_26550_26564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (2))){
var state_26548__$1 = state_26548;
var statearr_26551_26565 = state_26548__$1;
(statearr_26551_26565[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (3))){
var inst_26546 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26548__$1,inst_26546);
} else {
if((state_val_26549 === (4))){
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26548__$1,(7),p3r50na.apps.bookof5rinds.client.comm);
} else {
if((state_val_26549 === (5))){
var state_26548__$1 = state_26548;
var statearr_26553_26566 = state_26548__$1;
(statearr_26553_26566[(2)] = null);

(statearr_26553_26566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (6))){
var inst_26544 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26554_26567 = state_26548__$1;
(statearr_26554_26567[(2)] = inst_26544);

(statearr_26554_26567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (7))){
var inst_26537 = (state_26548[(2)]);
var inst_26538 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_26537);
var inst_26539 = (function (){var event = inst_26537;
var newstate = inst_26538;
return ((function (event,newstate,inst_26537,inst_26538,state_val_26549,c__23615__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_26537,inst_26538,state_val_26549,c__23615__auto__,___$1))
})();
var inst_26540 = om.core.update_state_BANG_.call(null,self__.owner,inst_26539);
var state_26548__$1 = (function (){var statearr_26555 = state_26548;
(statearr_26555[(7)] = inst_26540);

return statearr_26555;
})();
var statearr_26556_26568 = state_26548__$1;
(statearr_26556_26568[(2)] = null);

(statearr_26556_26568[(1)] = (2));


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
});})(c__23615__auto__,___$1))
;
return ((function (switch__23550__auto__,c__23615__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto__ = null;
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto____0 = (function (){
var statearr_26560 = [null,null,null,null,null,null,null,null];
(statearr_26560[(0)] = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto__);

(statearr_26560[(1)] = (1));

return statearr_26560;
});
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto____1 = (function (state_26548){
while(true){
var ret_value__23552__auto__ = (function (){try{while(true){
var result__23553__auto__ = switch__23550__auto__.call(null,state_26548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23553__auto__;
}
break;
}
}catch (e26561){if((e26561 instanceof Object)){
var ex__23554__auto__ = e26561;
var statearr_26562_26569 = state_26548;
(statearr_26562_26569[(5)] = ex__23554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26570 = state_26548;
state_26548 = G__26570;
continue;
} else {
return ret_value__23552__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto__ = function(state_26548){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto____1.call(this,state_26548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto____0;
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto____1;
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23551__auto__;
})()
;})(switch__23550__auto__,c__23615__auto__,___$1))
})();
var state__23617__auto__ = (function (){var statearr_26563 = f__23616__auto__.call(null);
(statearr_26563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23615__auto__);

return statearr_26563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23617__auto__);
});})(c__23615__auto__,___$1))
);

return c__23615__auto__;
});

p3r50na.apps.bookof5rinds.client.t26531.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.t26531.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__26497_SHARP_){
return p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown.call(null,p1__26497_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)));
});

p3r50na.apps.bookof5rinds.client.t26531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta26532","meta26532",1245640935,null)], null);
});

p3r50na.apps.bookof5rinds.client.t26531.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t26531.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t26531";

p3r50na.apps.bookof5rinds.client.t26531.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client/t26531");
});

p3r50na.apps.bookof5rinds.client.__GT_t26531 = (function p3r50na$apps$bookof5rinds$client$app_$___GT_t26531(app__$1,state__$1,owner__$1,meta26532){
return (new p3r50na.apps.bookof5rinds.client.t26531(app__$1,state__$1,owner__$1,meta26532));
});

}

return (new p3r50na.apps.bookof5rinds.client.t26531(p3r50na$apps$bookof5rinds$client$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
p3r50na.apps.bookof5rinds.client.socket.onopen = (function (e){
return null;
});
p3r50na.apps.bookof5rinds.client.socket.onerror = (function (){
alert("error");

return console.log(arguments$);
});
p3r50na.apps.bookof5rinds.client.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var c__23615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23615__auto__,event){
return (function (){
var f__23616__auto__ = (function (){var switch__23550__auto__ = ((function (c__23615__auto__,event){
return (function (state_26574){
var state_val_26575 = (state_26574[(1)]);
if((state_val_26575 === (1))){
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26574__$1,(2),p3r50na.apps.bookof5rinds.client.comm,event);
} else {
if((state_val_26575 === (2))){
var inst_26572 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26574__$1,inst_26572);
} else {
return null;
}
}
});})(c__23615__auto__,event))
;
return ((function (switch__23550__auto__,c__23615__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23551__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23551__auto____0 = (function (){
var statearr_26579 = [null,null,null,null,null,null,null];
(statearr_26579[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23551__auto__);

(statearr_26579[(1)] = (1));

return statearr_26579;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23551__auto____1 = (function (state_26574){
while(true){
var ret_value__23552__auto__ = (function (){try{while(true){
var result__23553__auto__ = switch__23550__auto__.call(null,state_26574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23553__auto__;
}
break;
}
}catch (e26580){if((e26580 instanceof Object)){
var ex__23554__auto__ = e26580;
var statearr_26581_26583 = state_26574;
(statearr_26581_26583[(5)] = ex__23554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26584 = state_26574;
state_26574 = G__26584;
continue;
} else {
return ret_value__23552__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23551__auto__ = function(state_26574){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23551__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23551__auto____1.call(this,state_26574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23551__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23551__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23551__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23551__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23551__auto__;
})()
;})(switch__23550__auto__,c__23615__auto__,event))
})();
var state__23617__auto__ = (function (){var statearr_26582 = f__23616__auto__.call(null);
(statearr_26582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23615__auto__);

return statearr_26582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23617__auto__);
});})(c__23615__auto__,event))
);

return c__23615__auto__;
});

//# sourceMappingURL=client.js.map