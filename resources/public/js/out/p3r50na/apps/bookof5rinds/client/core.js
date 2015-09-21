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
return (function (state_31598){
var state_val_31599 = (state_31598[(1)]);
if((state_val_31599 === (1))){
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31598__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_31599 === (2))){
var inst_31596 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31598__$1,inst_31596);
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
var statearr_31603 = [null,null,null,null,null,null,null];
(statearr_31603[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__);

(statearr_31603[(1)] = (1));

return statearr_31603;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1 = (function (state_31598){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_31598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e31604){if((e31604 instanceof Object)){
var ex__22646__auto__ = e31604;
var statearr_31605_31607 = state_31598;
(statearr_31605_31607[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31608 = state_31598;
state_31598 = G__31608;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = function(state_31598){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1.call(this,state_31598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,event))
})();
var state__22665__auto__ = (function (){var statearr_31606 = f__22664__auto__.call(null);
(statearr_31606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_31606;
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
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__31614(s__31615){
return (new cljs.core.LazySeq(null,(function (){
var s__31615__$1 = s__31615;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31615__$1);
if(temp__4425__auto__){
var s__31615__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31615__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__31615__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__31617 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__31616 = (0);
while(true){
if((i__31616 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__31616);
cljs.core.chunk_append.call(null,b__31617,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__31616,rindidate,c__20303__auto__,size__20304__auto__,b__31617,s__31615__$2,temp__4425__auto__){
return (function (p1__31609_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__31609_SHARP_,rindidate);
});})(i__31616,rindidate,c__20303__auto__,size__20304__auto__,b__31617,s__31615__$2,temp__4425__auto__))
},"delete")));

var G__31618 = (i__31616 + (1));
i__31616 = G__31618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31617),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__31614.call(null,cljs.core.chunk_rest.call(null,s__31615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31617),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__31615__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__31615__$2,temp__4425__auto__){
return (function (p1__31609_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__31609_SHARP_,rindidate);
});})(rindidate,s__31615__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__31614.call(null,cljs.core.rest.call(null,s__31615__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t31653 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t31653 = (function (app,state,owner,meta31654){
this.app = app;
this.state = state;
this.owner = owner;
this.meta31654 = meta31654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t31653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31655,meta31654__$1){
var self__ = this;
var _31655__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t31653(self__.app,self__.state,self__.owner,meta31654__$1));
});

p3r50na.apps.bookof5rinds.client.core.t31653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31655){
var self__ = this;
var _31655__$1 = this;
return self__.meta31654;
});

p3r50na.apps.bookof5rinds.client.core.t31653.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t31653.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,___$1){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,___$1){
return (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (1))){
var state_31670__$1 = state_31670;
var statearr_31672_31686 = state_31670__$1;
(statearr_31672_31686[(2)] = null);

(statearr_31672_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (2))){
var state_31670__$1 = state_31670;
var statearr_31673_31687 = state_31670__$1;
(statearr_31673_31687[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var inst_31668 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (4))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_31671 === (5))){
var state_31670__$1 = state_31670;
var statearr_31675_31688 = state_31670__$1;
(statearr_31675_31688[(2)] = null);

(statearr_31675_31688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (6))){
var inst_31666 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31676_31689 = state_31670__$1;
(statearr_31676_31689[(2)] = inst_31666);

(statearr_31676_31689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (7))){
var inst_31659 = (state_31670[(2)]);
var inst_31660 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_31659);
var inst_31661 = (function (){var event = inst_31659;
var newstate = inst_31660;
return ((function (event,newstate,inst_31659,inst_31660,state_val_31671,c__22663__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_31659,inst_31660,state_val_31671,c__22663__auto__,___$1))
})();
var inst_31662 = om.core.update_state_BANG_.call(null,self__.owner,inst_31661);
var state_31670__$1 = (function (){var statearr_31677 = state_31670;
(statearr_31677[(7)] = inst_31662);

return statearr_31677;
})();
var statearr_31678_31690 = state_31670__$1;
(statearr_31678_31690[(2)] = null);

(statearr_31678_31690[(1)] = (2));


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
var statearr_31682 = [null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1 = (function (state_31670){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_31670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__22646__auto__ = e31683;
var statearr_31684_31691 = state_31670;
(statearr_31684_31691[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31692 = state_31670;
state_31670 = G__31692;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,___$1))
})();
var state__22665__auto__ = (function (){var statearr_31685 = f__22664__auto__.call(null);
(statearr_31685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_31685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,___$1))
);

return c__22663__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t31653.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t31653.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__31619_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__31619_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t31653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31654","meta31654",-1294342080,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t31653.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t31653.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t31653";

p3r50na.apps.bookof5rinds.client.core.t31653.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.core/t31653");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t31653 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t31653(app__$1,state__$1,owner__$1,meta31654){
return (new p3r50na.apps.bookof5rinds.client.core.t31653(app__$1,state__$1,owner__$1,meta31654));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t31653(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map