// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rindidates","rindidates",445830364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"wat"], null)], null)], null));
p3r50na.apps.bookof5rinds.client.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.rindidate_list = (function p3r50na$apps$bookof5rinds$client$rindidate_list(rindidates){
return React.DOM.ul(null,(function (){var iter__20291__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__36678(s__36679){
return (new cljs.core.LazySeq(null,(function (){
var s__36679__$1 = s__36679;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36679__$1);
if(temp__4425__auto__){
var s__36679__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36679__$2)){
var c__20289__auto__ = cljs.core.chunk_first.call(null,s__36679__$2);
var size__20290__auto__ = cljs.core.count.call(null,c__20289__auto__);
var b__36681 = cljs.core.chunk_buffer.call(null,size__20290__auto__);
if((function (){var i__36680 = (0);
while(true){
if((i__36680 < size__20290__auto__)){
var rindidate = cljs.core._nth.call(null,c__20289__auto__,i__36680);
cljs.core.chunk_append.call(null,b__36681,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate)));

var G__36682 = (i__36680 + (1));
i__36680 = G__36682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36681),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__36678.call(null,cljs.core.chunk_rest.call(null,s__36679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36681),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__36679__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate)),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__36678.call(null,cljs.core.rest.call(null,s__36679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20291__auto__.call(null,rindidates);
})());
});
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
p3r50na.apps.bookof5rinds.client.app = (function p3r50na$apps$bookof5rinds$client$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t36717 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t36717 = (function (app,state,owner,meta36718){
this.app = app;
this.state = state;
this.owner = owner;
this.meta36718 = meta36718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t36717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36719,meta36718__$1){
var self__ = this;
var _36719__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t36717(self__.app,self__.state,self__.owner,meta36718__$1));
});

p3r50na.apps.bookof5rinds.client.t36717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36719){
var self__ = this;
var _36719__$1 = this;
return self__.meta36718;
});

p3r50na.apps.bookof5rinds.client.t36717.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.t36717.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23602__auto__,___$1){
return (function (){
var f__23603__auto__ = (function (){var switch__23537__auto__ = ((function (c__23602__auto__,___$1){
return (function (state_36734){
var state_val_36735 = (state_36734[(1)]);
if((state_val_36735 === (1))){
var state_36734__$1 = state_36734;
var statearr_36736_36750 = state_36734__$1;
(statearr_36736_36750[(2)] = null);

(statearr_36736_36750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (2))){
var state_36734__$1 = state_36734;
var statearr_36737_36751 = state_36734__$1;
(statearr_36737_36751[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (3))){
var inst_36732 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36734__$1,inst_36732);
} else {
if((state_val_36735 === (4))){
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36734__$1,(7),p3r50na.apps.bookof5rinds.client.comm);
} else {
if((state_val_36735 === (5))){
var state_36734__$1 = state_36734;
var statearr_36739_36752 = state_36734__$1;
(statearr_36739_36752[(2)] = null);

(statearr_36739_36752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (6))){
var inst_36730 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36740_36753 = state_36734__$1;
(statearr_36740_36753[(2)] = inst_36730);

(statearr_36740_36753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (7))){
var inst_36723 = (state_36734[(2)]);
var inst_36724 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_36723);
var inst_36725 = (function (){var event = inst_36723;
var newstate = inst_36724;
return ((function (event,newstate,inst_36723,inst_36724,state_val_36735,c__23602__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_36723,inst_36724,state_val_36735,c__23602__auto__,___$1))
})();
var inst_36726 = om.core.update_state_BANG_.call(null,self__.owner,inst_36725);
var state_36734__$1 = (function (){var statearr_36741 = state_36734;
(statearr_36741[(7)] = inst_36726);

return statearr_36741;
})();
var statearr_36742_36754 = state_36734__$1;
(statearr_36742_36754[(2)] = null);

(statearr_36742_36754[(1)] = (2));


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
});})(c__23602__auto__,___$1))
;
return ((function (switch__23537__auto__,c__23602__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__ = null;
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0 = (function (){
var statearr_36746 = [null,null,null,null,null,null,null,null];
(statearr_36746[(0)] = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__);

(statearr_36746[(1)] = (1));

return statearr_36746;
});
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1 = (function (state_36734){
while(true){
var ret_value__23539__auto__ = (function (){try{while(true){
var result__23540__auto__ = switch__23537__auto__.call(null,state_36734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23540__auto__;
}
break;
}
}catch (e36747){if((e36747 instanceof Object)){
var ex__23541__auto__ = e36747;
var statearr_36748_36755 = state_36734;
(statearr_36748_36755[(5)] = ex__23541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36756 = state_36734;
state_36734 = G__36756;
continue;
} else {
return ret_value__23539__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__ = function(state_36734){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1.call(this,state_36734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0;
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1;
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__;
})()
;})(switch__23537__auto__,c__23602__auto__,___$1))
})();
var state__23604__auto__ = (function (){var statearr_36749 = f__23603__auto__.call(null);
(statearr_36749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23602__auto__);

return statearr_36749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23604__auto__);
});})(c__23602__auto__,___$1))
);

return c__23602__auto__;
});

p3r50na.apps.bookof5rinds.client.t36717.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.t36717.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__36683_SHARP_){
return p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown.call(null,p1__36683_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)));
});

p3r50na.apps.bookof5rinds.client.t36717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36718","meta36718",637080735,null)], null);
});

p3r50na.apps.bookof5rinds.client.t36717.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t36717.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t36717";

p3r50na.apps.bookof5rinds.client.t36717.cljs$lang$ctorPrWriter = (function (this__20117__auto__,writer__20118__auto__,opt__20119__auto__){
return cljs.core._write.call(null,writer__20118__auto__,"p3r50na.apps.bookof5rinds.client/t36717");
});

p3r50na.apps.bookof5rinds.client.__GT_t36717 = (function p3r50na$apps$bookof5rinds$client$app_$___GT_t36717(app__$1,state__$1,owner__$1,meta36718){
return (new p3r50na.apps.bookof5rinds.client.t36717(app__$1,state__$1,owner__$1,meta36718));
});

}

return (new p3r50na.apps.bookof5rinds.client.t36717(p3r50na$apps$bookof5rinds$client$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.app,p3r50na.apps.bookof5rinds.client.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
p3r50na.apps.bookof5rinds.client.socket.onopen = (function (e){
return null;
});
p3r50na.apps.bookof5rinds.client.socket.onerror = (function (){
alert("error");

return console.log(arguments$);
});
p3r50na.apps.bookof5rinds.client.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var c__23602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23602__auto__,event){
return (function (){
var f__23603__auto__ = (function (){var switch__23537__auto__ = ((function (c__23602__auto__,event){
return (function (state_36760){
var state_val_36761 = (state_36760[(1)]);
if((state_val_36761 === (1))){
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36760__$1,(2),p3r50na.apps.bookof5rinds.client.comm,event);
} else {
if((state_val_36761 === (2))){
var inst_36758 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36760__$1,inst_36758);
} else {
return null;
}
}
});})(c__23602__auto__,event))
;
return ((function (switch__23537__auto__,c__23602__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0 = (function (){
var statearr_36765 = [null,null,null,null,null,null,null];
(statearr_36765[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__);

(statearr_36765[(1)] = (1));

return statearr_36765;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1 = (function (state_36760){
while(true){
var ret_value__23539__auto__ = (function (){try{while(true){
var result__23540__auto__ = switch__23537__auto__.call(null,state_36760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23540__auto__;
}
break;
}
}catch (e36766){if((e36766 instanceof Object)){
var ex__23541__auto__ = e36766;
var statearr_36767_36769 = state_36760;
(statearr_36767_36769[(5)] = ex__23541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36770 = state_36760;
state_36760 = G__36770;
continue;
} else {
return ret_value__23539__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__ = function(state_36760){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1.call(this,state_36760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__;
})()
;})(switch__23537__auto__,c__23602__auto__,event))
})();
var state__23604__auto__ = (function (){var statearr_36768 = f__23603__auto__.call(null);
(statearr_36768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23602__auto__);

return statearr_36768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23604__auto__);
});})(c__23602__auto__,event))
);

return c__23602__auto__;
});

//# sourceMappingURL=client.js.map