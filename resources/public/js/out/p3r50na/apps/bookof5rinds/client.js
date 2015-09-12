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
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__23365(s__23366){
return (new cljs.core.LazySeq(null,(function (){
var s__23366__$1 = s__23366;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23366__$1);
if(temp__4425__auto__){
var s__23366__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23366__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__23366__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__23368 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__23367 = (0);
while(true){
if((i__23367 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__23367);
cljs.core.chunk_append.call(null,b__23368,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__23367,rindidate,c__20303__auto__,size__20304__auto__,b__23368,s__23366__$2,temp__4425__auto__){
return (function (p1__23360_SHARP_){
return p3r50na.apps.bookof5rinds.client.on_delete_rind_handler.call(null,p1__23360_SHARP_,rindidate);
});})(i__23367,rindidate,c__20303__auto__,size__20304__auto__,b__23368,s__23366__$2,temp__4425__auto__))
},"delete")));

var G__23369 = (i__23367 + (1));
i__23367 = G__23369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23368),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__23365.call(null,cljs.core.chunk_rest.call(null,s__23366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23368),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__23366__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__23366__$2,temp__4425__auto__){
return (function (p1__23360_SHARP_){
return p3r50na.apps.bookof5rinds.client.on_delete_rind_handler.call(null,p1__23360_SHARP_,rindidate);
});})(rindidate,s__23366__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__23365.call(null,cljs.core.rest.call(null,s__23366__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.t23404 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t23404 = (function (app,state,owner,meta23405){
this.app = app;
this.state = state;
this.owner = owner;
this.meta23405 = meta23405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t23404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23406,meta23405__$1){
var self__ = this;
var _23406__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t23404(self__.app,self__.state,self__.owner,meta23405__$1));
});

p3r50na.apps.bookof5rinds.client.t23404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23406){
var self__ = this;
var _23406__$1 = this;
return self__.meta23405;
});

p3r50na.apps.bookof5rinds.client.t23404.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.t23404.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23299__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23299__auto__,___$1){
return (function (){
var f__23300__auto__ = (function (){var switch__23278__auto__ = ((function (c__23299__auto__,___$1){
return (function (state_23421){
var state_val_23422 = (state_23421[(1)]);
if((state_val_23422 === (1))){
var state_23421__$1 = state_23421;
var statearr_23423_23437 = state_23421__$1;
(statearr_23423_23437[(2)] = null);

(statearr_23423_23437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23422 === (2))){
var state_23421__$1 = state_23421;
var statearr_23424_23438 = state_23421__$1;
(statearr_23424_23438[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23422 === (3))){
var inst_23419 = (state_23421[(2)]);
var state_23421__$1 = state_23421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23421__$1,inst_23419);
} else {
if((state_val_23422 === (4))){
var state_23421__$1 = state_23421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23421__$1,(7),p3r50na.apps.bookof5rinds.client.comm);
} else {
if((state_val_23422 === (5))){
var state_23421__$1 = state_23421;
var statearr_23426_23439 = state_23421__$1;
(statearr_23426_23439[(2)] = null);

(statearr_23426_23439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23422 === (6))){
var inst_23417 = (state_23421[(2)]);
var state_23421__$1 = state_23421;
var statearr_23427_23440 = state_23421__$1;
(statearr_23427_23440[(2)] = inst_23417);

(statearr_23427_23440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23422 === (7))){
var inst_23410 = (state_23421[(2)]);
var inst_23411 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_23410);
var inst_23412 = (function (){var event = inst_23410;
var newstate = inst_23411;
return ((function (event,newstate,inst_23410,inst_23411,state_val_23422,c__23299__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_23410,inst_23411,state_val_23422,c__23299__auto__,___$1))
})();
var inst_23413 = om.core.update_state_BANG_.call(null,self__.owner,inst_23412);
var state_23421__$1 = (function (){var statearr_23428 = state_23421;
(statearr_23428[(7)] = inst_23413);

return statearr_23428;
})();
var statearr_23429_23441 = state_23421__$1;
(statearr_23429_23441[(2)] = null);

(statearr_23429_23441[(1)] = (2));


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
});})(c__23299__auto__,___$1))
;
return ((function (switch__23278__auto__,c__23299__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto__ = null;
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto____0 = (function (){
var statearr_23433 = [null,null,null,null,null,null,null,null];
(statearr_23433[(0)] = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto__);

(statearr_23433[(1)] = (1));

return statearr_23433;
});
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto____1 = (function (state_23421){
while(true){
var ret_value__23280__auto__ = (function (){try{while(true){
var result__23281__auto__ = switch__23278__auto__.call(null,state_23421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23281__auto__;
}
break;
}
}catch (e23434){if((e23434 instanceof Object)){
var ex__23282__auto__ = e23434;
var statearr_23435_23442 = state_23421;
(statearr_23435_23442[(5)] = ex__23282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23443 = state_23421;
state_23421 = G__23443;
continue;
} else {
return ret_value__23280__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto__ = function(state_23421){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto____1.call(this,state_23421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto____0;
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto____1;
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23279__auto__;
})()
;})(switch__23278__auto__,c__23299__auto__,___$1))
})();
var state__23301__auto__ = (function (){var statearr_23436 = f__23300__auto__.call(null);
(statearr_23436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23299__auto__);

return statearr_23436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23301__auto__);
});})(c__23299__auto__,___$1))
);

return c__23299__auto__;
});

p3r50na.apps.bookof5rinds.client.t23404.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.t23404.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__23370_SHARP_){
return p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown.call(null,p1__23370_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)));
});

p3r50na.apps.bookof5rinds.client.t23404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta23405","meta23405",-520063727,null)], null);
});

p3r50na.apps.bookof5rinds.client.t23404.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t23404.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t23404";

p3r50na.apps.bookof5rinds.client.t23404.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client/t23404");
});

p3r50na.apps.bookof5rinds.client.__GT_t23404 = (function p3r50na$apps$bookof5rinds$client$app_$___GT_t23404(app__$1,state__$1,owner__$1,meta23405){
return (new p3r50na.apps.bookof5rinds.client.t23404(app__$1,state__$1,owner__$1,meta23405));
});

}

return (new p3r50na.apps.bookof5rinds.client.t23404(p3r50na$apps$bookof5rinds$client$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23299__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23299__auto__,event){
return (function (){
var f__23300__auto__ = (function (){var switch__23278__auto__ = ((function (c__23299__auto__,event){
return (function (state_23447){
var state_val_23448 = (state_23447[(1)]);
if((state_val_23448 === (1))){
var state_23447__$1 = state_23447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23447__$1,(2),p3r50na.apps.bookof5rinds.client.comm,event);
} else {
if((state_val_23448 === (2))){
var inst_23445 = (state_23447[(2)]);
var state_23447__$1 = state_23447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23447__$1,inst_23445);
} else {
return null;
}
}
});})(c__23299__auto__,event))
;
return ((function (switch__23278__auto__,c__23299__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23279__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23279__auto____0 = (function (){
var statearr_23452 = [null,null,null,null,null,null,null];
(statearr_23452[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23279__auto__);

(statearr_23452[(1)] = (1));

return statearr_23452;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23279__auto____1 = (function (state_23447){
while(true){
var ret_value__23280__auto__ = (function (){try{while(true){
var result__23281__auto__ = switch__23278__auto__.call(null,state_23447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23281__auto__;
}
break;
}
}catch (e23453){if((e23453 instanceof Object)){
var ex__23282__auto__ = e23453;
var statearr_23454_23456 = state_23447;
(statearr_23454_23456[(5)] = ex__23282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23457 = state_23447;
state_23447 = G__23457;
continue;
} else {
return ret_value__23280__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23279__auto__ = function(state_23447){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23279__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23279__auto____1.call(this,state_23447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23279__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23279__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23279__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23279__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23279__auto__;
})()
;})(switch__23278__auto__,c__23299__auto__,event))
})();
var state__23301__auto__ = (function (){var statearr_23455 = f__23300__auto__.call(null);
(statearr_23455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23299__auto__);

return statearr_23455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23301__auto__);
});})(c__23299__auto__,event))
);

return c__23299__auto__;
});

//# sourceMappingURL=client.js.map