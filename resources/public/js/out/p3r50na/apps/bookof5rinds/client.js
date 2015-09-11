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
return React.DOM.ul(null,(function (){var iter__20291__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__38748(s__38749){
return (new cljs.core.LazySeq(null,(function (){
var s__38749__$1 = s__38749;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38749__$1);
if(temp__4425__auto__){
var s__38749__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38749__$2)){
var c__20289__auto__ = cljs.core.chunk_first.call(null,s__38749__$2);
var size__20290__auto__ = cljs.core.count.call(null,c__20289__auto__);
var b__38751 = cljs.core.chunk_buffer.call(null,size__20290__auto__);
if((function (){var i__38750 = (0);
while(true){
if((i__38750 < size__20290__auto__)){
var rindidate = cljs.core._nth.call(null,c__20289__auto__,i__38750);
cljs.core.chunk_append.call(null,b__38751,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__38750,rindidate,c__20289__auto__,size__20290__auto__,b__38751,s__38749__$2,temp__4425__auto__){
return (function (p1__38743_SHARP_){
return p3r50na.apps.bookof5rinds.client.on_delete_rind_handler.call(null,p1__38743_SHARP_,rindidate);
});})(i__38750,rindidate,c__20289__auto__,size__20290__auto__,b__38751,s__38749__$2,temp__4425__auto__))
},"delete")));

var G__38752 = (i__38750 + (1));
i__38750 = G__38752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38751),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__38748.call(null,cljs.core.chunk_rest.call(null,s__38749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38751),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__38749__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__38749__$2,temp__4425__auto__){
return (function (p1__38743_SHARP_){
return p3r50na.apps.bookof5rinds.client.on_delete_rind_handler.call(null,p1__38743_SHARP_,rindidate);
});})(rindidate,s__38749__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__38748.call(null,cljs.core.rest.call(null,s__38749__$2)));
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
p3r50na.apps.bookof5rinds.client.app = (function p3r50na$apps$bookof5rinds$client$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t38787 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t38787 = (function (app,state,owner,meta38788){
this.app = app;
this.state = state;
this.owner = owner;
this.meta38788 = meta38788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t38787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38789,meta38788__$1){
var self__ = this;
var _38789__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t38787(self__.app,self__.state,self__.owner,meta38788__$1));
});

p3r50na.apps.bookof5rinds.client.t38787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38789){
var self__ = this;
var _38789__$1 = this;
return self__.meta38788;
});

p3r50na.apps.bookof5rinds.client.t38787.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.t38787.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23602__auto__,___$1){
return (function (){
var f__23603__auto__ = (function (){var switch__23537__auto__ = ((function (c__23602__auto__,___$1){
return (function (state_38804){
var state_val_38805 = (state_38804[(1)]);
if((state_val_38805 === (1))){
var state_38804__$1 = state_38804;
var statearr_38806_38820 = state_38804__$1;
(statearr_38806_38820[(2)] = null);

(statearr_38806_38820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (2))){
var state_38804__$1 = state_38804;
var statearr_38807_38821 = state_38804__$1;
(statearr_38807_38821[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (3))){
var inst_38802 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38804__$1,inst_38802);
} else {
if((state_val_38805 === (4))){
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38804__$1,(7),p3r50na.apps.bookof5rinds.client.comm);
} else {
if((state_val_38805 === (5))){
var state_38804__$1 = state_38804;
var statearr_38809_38822 = state_38804__$1;
(statearr_38809_38822[(2)] = null);

(statearr_38809_38822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (6))){
var inst_38800 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38810_38823 = state_38804__$1;
(statearr_38810_38823[(2)] = inst_38800);

(statearr_38810_38823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (7))){
var inst_38793 = (state_38804[(2)]);
var inst_38794 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_38793);
var inst_38795 = (function (){var event = inst_38793;
var newstate = inst_38794;
return ((function (event,newstate,inst_38793,inst_38794,state_val_38805,c__23602__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_38793,inst_38794,state_val_38805,c__23602__auto__,___$1))
})();
var inst_38796 = om.core.update_state_BANG_.call(null,self__.owner,inst_38795);
var state_38804__$1 = (function (){var statearr_38811 = state_38804;
(statearr_38811[(7)] = inst_38796);

return statearr_38811;
})();
var statearr_38812_38824 = state_38804__$1;
(statearr_38812_38824[(2)] = null);

(statearr_38812_38824[(1)] = (2));


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
var statearr_38816 = [null,null,null,null,null,null,null,null];
(statearr_38816[(0)] = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__);

(statearr_38816[(1)] = (1));

return statearr_38816;
});
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1 = (function (state_38804){
while(true){
var ret_value__23539__auto__ = (function (){try{while(true){
var result__23540__auto__ = switch__23537__auto__.call(null,state_38804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23540__auto__;
}
break;
}
}catch (e38817){if((e38817 instanceof Object)){
var ex__23541__auto__ = e38817;
var statearr_38818_38825 = state_38804;
(statearr_38818_38825[(5)] = ex__23541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38826 = state_38804;
state_38804 = G__38826;
continue;
} else {
return ret_value__23539__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__ = function(state_38804){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1.call(this,state_38804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0;
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1;
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__;
})()
;})(switch__23537__auto__,c__23602__auto__,___$1))
})();
var state__23604__auto__ = (function (){var statearr_38819 = f__23603__auto__.call(null);
(statearr_38819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23602__auto__);

return statearr_38819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23604__auto__);
});})(c__23602__auto__,___$1))
);

return c__23602__auto__;
});

p3r50na.apps.bookof5rinds.client.t38787.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.t38787.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__38753_SHARP_){
return p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown.call(null,p1__38753_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)));
});

p3r50na.apps.bookof5rinds.client.t38787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta38788","meta38788",-1917040097,null)], null);
});

p3r50na.apps.bookof5rinds.client.t38787.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t38787.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t38787";

p3r50na.apps.bookof5rinds.client.t38787.cljs$lang$ctorPrWriter = (function (this__20117__auto__,writer__20118__auto__,opt__20119__auto__){
return cljs.core._write.call(null,writer__20118__auto__,"p3r50na.apps.bookof5rinds.client/t38787");
});

p3r50na.apps.bookof5rinds.client.__GT_t38787 = (function p3r50na$apps$bookof5rinds$client$app_$___GT_t38787(app__$1,state__$1,owner__$1,meta38788){
return (new p3r50na.apps.bookof5rinds.client.t38787(app__$1,state__$1,owner__$1,meta38788));
});

}

return (new p3r50na.apps.bookof5rinds.client.t38787(p3r50na$apps$bookof5rinds$client$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (state_38830){
var state_val_38831 = (state_38830[(1)]);
if((state_val_38831 === (1))){
var state_38830__$1 = state_38830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38830__$1,(2),p3r50na.apps.bookof5rinds.client.comm,event);
} else {
if((state_val_38831 === (2))){
var inst_38828 = (state_38830[(2)]);
var state_38830__$1 = state_38830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38830__$1,inst_38828);
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
var statearr_38835 = [null,null,null,null,null,null,null];
(statearr_38835[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__);

(statearr_38835[(1)] = (1));

return statearr_38835;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1 = (function (state_38830){
while(true){
var ret_value__23539__auto__ = (function (){try{while(true){
var result__23540__auto__ = switch__23537__auto__.call(null,state_38830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23540__auto__;
}
break;
}
}catch (e38836){if((e38836 instanceof Object)){
var ex__23541__auto__ = e38836;
var statearr_38837_38839 = state_38830;
(statearr_38837_38839[(5)] = ex__23541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38840 = state_38830;
state_38830 = G__38840;
continue;
} else {
return ret_value__23539__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__ = function(state_38830){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1.call(this,state_38830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__;
})()
;})(switch__23537__auto__,c__23602__auto__,event))
})();
var state__23604__auto__ = (function (){var statearr_38838 = f__23603__auto__.call(null);
(statearr_38838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23602__auto__);

return statearr_38838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23604__auto__);
});})(c__23602__auto__,event))
);

return c__23602__auto__;
});

//# sourceMappingURL=client.js.map