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
return (function (state_74642){
var state_val_74643 = (state_74642[(1)]);
if((state_val_74643 === (1))){
var state_74642__$1 = state_74642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74642__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_74643 === (2))){
var inst_74640 = (state_74642[(2)]);
var state_74642__$1 = state_74642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74642__$1,inst_74640);
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
var statearr_74647 = [null,null,null,null,null,null,null];
(statearr_74647[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__);

(statearr_74647[(1)] = (1));

return statearr_74647;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1 = (function (state_74642){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_74642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e74648){if((e74648 instanceof Object)){
var ex__22646__auto__ = e74648;
var statearr_74649_74651 = state_74642;
(statearr_74649_74651[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74652 = state_74642;
state_74642 = G__74652;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = function(state_74642){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1.call(this,state_74642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,event))
})();
var state__22665__auto__ = (function (){var statearr_74650 = f__22664__auto__.call(null);
(statearr_74650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_74650;
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
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__74658(s__74659){
return (new cljs.core.LazySeq(null,(function (){
var s__74659__$1 = s__74659;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__74659__$1);
if(temp__4425__auto__){
var s__74659__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__74659__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__74659__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__74661 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__74660 = (0);
while(true){
if((i__74660 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__74660);
cljs.core.chunk_append.call(null,b__74661,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__74660,rindidate,c__20303__auto__,size__20304__auto__,b__74661,s__74659__$2,temp__4425__auto__){
return (function (p1__74653_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__74653_SHARP_,rindidate);
});})(i__74660,rindidate,c__20303__auto__,size__20304__auto__,b__74661,s__74659__$2,temp__4425__auto__))
},"delete")));

var G__74662 = (i__74660 + (1));
i__74660 = G__74662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74661),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__74658.call(null,cljs.core.chunk_rest.call(null,s__74659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74661),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__74659__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__74659__$2,temp__4425__auto__){
return (function (p1__74653_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__74653_SHARP_,rindidate);
});})(rindidate,s__74659__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__74658.call(null,cljs.core.rest.call(null,s__74659__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t74697 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t74697 = (function (app,state,owner,meta74698){
this.app = app;
this.state = state;
this.owner = owner;
this.meta74698 = meta74698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t74697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74699,meta74698__$1){
var self__ = this;
var _74699__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t74697(self__.app,self__.state,self__.owner,meta74698__$1));
});

p3r50na.apps.bookof5rinds.client.core.t74697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74699){
var self__ = this;
var _74699__$1 = this;
return self__.meta74698;
});

p3r50na.apps.bookof5rinds.client.core.t74697.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t74697.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,___$1){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,___$1){
return (function (state_74714){
var state_val_74715 = (state_74714[(1)]);
if((state_val_74715 === (1))){
var state_74714__$1 = state_74714;
var statearr_74716_74730 = state_74714__$1;
(statearr_74716_74730[(2)] = null);

(statearr_74716_74730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74715 === (2))){
var state_74714__$1 = state_74714;
var statearr_74717_74731 = state_74714__$1;
(statearr_74717_74731[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74715 === (3))){
var inst_74712 = (state_74714[(2)]);
var state_74714__$1 = state_74714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74714__$1,inst_74712);
} else {
if((state_val_74715 === (4))){
var state_74714__$1 = state_74714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74714__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_74715 === (5))){
var state_74714__$1 = state_74714;
var statearr_74719_74732 = state_74714__$1;
(statearr_74719_74732[(2)] = null);

(statearr_74719_74732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74715 === (6))){
var inst_74710 = (state_74714[(2)]);
var state_74714__$1 = state_74714;
var statearr_74720_74733 = state_74714__$1;
(statearr_74720_74733[(2)] = inst_74710);

(statearr_74720_74733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74715 === (7))){
var inst_74703 = (state_74714[(2)]);
var inst_74704 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_74703);
var inst_74705 = (function (){var event = inst_74703;
var newstate = inst_74704;
return ((function (event,newstate,inst_74703,inst_74704,state_val_74715,c__22663__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_74703,inst_74704,state_val_74715,c__22663__auto__,___$1))
})();
var inst_74706 = om.core.update_state_BANG_.call(null,self__.owner,inst_74705);
var state_74714__$1 = (function (){var statearr_74721 = state_74714;
(statearr_74721[(7)] = inst_74706);

return statearr_74721;
})();
var statearr_74722_74734 = state_74714__$1;
(statearr_74722_74734[(2)] = null);

(statearr_74722_74734[(1)] = (2));


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
var statearr_74726 = [null,null,null,null,null,null,null,null];
(statearr_74726[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__);

(statearr_74726[(1)] = (1));

return statearr_74726;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1 = (function (state_74714){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_74714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e74727){if((e74727 instanceof Object)){
var ex__22646__auto__ = e74727;
var statearr_74728_74735 = state_74714;
(statearr_74728_74735[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74736 = state_74714;
state_74714 = G__74736;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = function(state_74714){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1.call(this,state_74714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,___$1))
})();
var state__22665__auto__ = (function (){var statearr_74729 = f__22664__auto__.call(null);
(statearr_74729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_74729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,___$1))
);

return c__22663__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t74697.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t74697.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__74663_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__74663_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t74697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta74698","meta74698",1126968636,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t74697.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t74697.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t74697";

p3r50na.apps.bookof5rinds.client.core.t74697.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.core/t74697");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t74697 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t74697(app__$1,state__$1,owner__$1,meta74698){
return (new p3r50na.apps.bookof5rinds.client.core.t74697(app__$1,state__$1,owner__$1,meta74698));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t74697(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map