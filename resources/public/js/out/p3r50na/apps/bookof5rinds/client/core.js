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
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,event){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,event){
return (function (state_49426){
var state_val_49427 = (state_49426[(1)]);
if((state_val_49427 === (1))){
var state_49426__$1 = state_49426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49426__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_49427 === (2))){
var inst_49424 = (state_49426[(2)]);
var state_49426__$1 = state_49426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49426__$1,inst_49424);
} else {
return null;
}
}
});})(c__22663__auto__,event))
;
return ((function (switch__22642__auto__,c__22663__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0 = (function (){
var statearr_49431 = [null,null,null,null,null,null,null];
(statearr_49431[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__);

(statearr_49431[(1)] = (1));

return statearr_49431;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1 = (function (state_49426){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_49426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e49432){if((e49432 instanceof Object)){
var ex__22646__auto__ = e49432;
var statearr_49433_49435 = state_49426;
(statearr_49433_49435[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49436 = state_49426;
state_49426 = G__49436;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = function(state_49426){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1.call(this,state_49426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,event))
})();
var state__22665__auto__ = (function (){var statearr_49434 = f__22664__auto__.call(null);
(statearr_49434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_49434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,event))
);

return c__22663__auto__;
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
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__49442(s__49443){
return (new cljs.core.LazySeq(null,(function (){
var s__49443__$1 = s__49443;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__49443__$1);
if(temp__4425__auto__){
var s__49443__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49443__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__49443__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__49445 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__49444 = (0);
while(true){
if((i__49444 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__49444);
cljs.core.chunk_append.call(null,b__49445,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__49444,rindidate,c__20303__auto__,size__20304__auto__,b__49445,s__49443__$2,temp__4425__auto__){
return (function (p1__49437_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__49437_SHARP_,rindidate);
});})(i__49444,rindidate,c__20303__auto__,size__20304__auto__,b__49445,s__49443__$2,temp__4425__auto__))
},"delete")));

var G__49446 = (i__49444 + (1));
i__49444 = G__49446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49445),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__49442.call(null,cljs.core.chunk_rest.call(null,s__49443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49445),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__49443__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__49443__$2,temp__4425__auto__){
return (function (p1__49437_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__49437_SHARP_,rindidate);
});})(rindidate,s__49443__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__49442.call(null,cljs.core.rest.call(null,s__49443__$2)));
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
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t49481 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t49481 = (function (app,state,owner,meta49482){
this.app = app;
this.state = state;
this.owner = owner;
this.meta49482 = meta49482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t49481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49483,meta49482__$1){
var self__ = this;
var _49483__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t49481(self__.app,self__.state,self__.owner,meta49482__$1));
});

p3r50na.apps.bookof5rinds.client.core.t49481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49483){
var self__ = this;
var _49483__$1 = this;
return self__.meta49482;
});

p3r50na.apps.bookof5rinds.client.core.t49481.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t49481.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,___$1){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,___$1){
return (function (state_49498){
var state_val_49499 = (state_49498[(1)]);
if((state_val_49499 === (1))){
var state_49498__$1 = state_49498;
var statearr_49500_49514 = state_49498__$1;
(statearr_49500_49514[(2)] = null);

(statearr_49500_49514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49499 === (2))){
var state_49498__$1 = state_49498;
var statearr_49501_49515 = state_49498__$1;
(statearr_49501_49515[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49499 === (3))){
var inst_49496 = (state_49498[(2)]);
var state_49498__$1 = state_49498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49498__$1,inst_49496);
} else {
if((state_val_49499 === (4))){
var state_49498__$1 = state_49498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49498__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_49499 === (5))){
var state_49498__$1 = state_49498;
var statearr_49503_49516 = state_49498__$1;
(statearr_49503_49516[(2)] = null);

(statearr_49503_49516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49499 === (6))){
var inst_49494 = (state_49498[(2)]);
var state_49498__$1 = state_49498;
var statearr_49504_49517 = state_49498__$1;
(statearr_49504_49517[(2)] = inst_49494);

(statearr_49504_49517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49499 === (7))){
var inst_49487 = (state_49498[(2)]);
var inst_49488 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_49487);
var inst_49489 = (function (){var event = inst_49487;
var newstate = inst_49488;
return ((function (event,newstate,inst_49487,inst_49488,state_val_49499,c__22663__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_49487,inst_49488,state_val_49499,c__22663__auto__,___$1))
})();
var inst_49490 = om.core.update_state_BANG_.call(null,self__.owner,inst_49489);
var state_49498__$1 = (function (){var statearr_49505 = state_49498;
(statearr_49505[(7)] = inst_49490);

return statearr_49505;
})();
var statearr_49506_49518 = state_49498__$1;
(statearr_49506_49518[(2)] = null);

(statearr_49506_49518[(1)] = (2));


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
});})(c__22663__auto__,___$1))
;
return ((function (switch__22642__auto__,c__22663__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0 = (function (){
var statearr_49510 = [null,null,null,null,null,null,null,null];
(statearr_49510[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__);

(statearr_49510[(1)] = (1));

return statearr_49510;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1 = (function (state_49498){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_49498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e49511){if((e49511 instanceof Object)){
var ex__22646__auto__ = e49511;
var statearr_49512_49519 = state_49498;
(statearr_49512_49519[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49520 = state_49498;
state_49498 = G__49520;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = function(state_49498){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1.call(this,state_49498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,___$1))
})();
var state__22665__auto__ = (function (){var statearr_49513 = f__22664__auto__.call(null);
(statearr_49513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_49513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,___$1))
);

return c__22663__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t49481.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t49481.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__49447_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__49447_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t49481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49482","meta49482",-1834913950,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t49481.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t49481.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t49481";

p3r50na.apps.bookof5rinds.client.core.t49481.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.core/t49481");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t49481 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t49481(app__$1,state__$1,owner__$1,meta49482){
return (new p3r50na.apps.bookof5rinds.client.core.t49481(app__$1,state__$1,owner__$1,meta49482));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t49481(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map