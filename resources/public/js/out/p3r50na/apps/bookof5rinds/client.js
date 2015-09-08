// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
p3r50na.apps.bookof5rinds.client.rindidates = (function p3r50na$apps$bookof5rinds$client$rindidates(data){
return React.DOM.ul(null,(function (){var iter__20277__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidates_$_iter__26137(s__26138){
return (new cljs.core.LazySeq(null,(function (){
var s__26138__$1 = s__26138;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26138__$1);
if(temp__4425__auto__){
var s__26138__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26138__$2)){
var c__20275__auto__ = cljs.core.chunk_first.call(null,s__26138__$2);
var size__20276__auto__ = cljs.core.count.call(null,c__20275__auto__);
var b__26140 = cljs.core.chunk_buffer.call(null,size__20276__auto__);
if((function (){var i__26139 = (0);
while(true){
if((i__26139 < size__20276__auto__)){
var rindidate = cljs.core._nth.call(null,c__20275__auto__,i__26139);
cljs.core.chunk_append.call(null,b__26140,React.DOM.li(null,rindidate));

var G__26141 = (i__26139 + (1));
i__26139 = G__26141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26140),p3r50na$apps$bookof5rinds$client$rindidates_$_iter__26137.call(null,cljs.core.chunk_rest.call(null,s__26138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26140),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__26138__$2);
return cljs.core.cons.call(null,React.DOM.li(null,rindidate),p3r50na$apps$bookof5rinds$client$rindidates_$_iter__26137.call(null,cljs.core.rest.call(null,s__26138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20277__auto__.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(data));
})());
});
p3r50na.apps.bookof5rinds.client.widget = (function p3r50na$apps$bookof5rinds$client$widget(data,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t26145 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t26145 = (function (widget,data,owner,meta26146){
this.widget = widget;
this.data = data;
this.owner = owner;
this.meta26146 = meta26146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t26145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26147,meta26146__$1){
var self__ = this;
var _26147__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t26145(self__.widget,self__.data,self__.owner,meta26146__$1));
});

p3r50na.apps.bookof5rinds.client.t26145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26147){
var self__ = this;
var _26147__$1 = this;
return self__.meta26146;
});

p3r50na.apps.bookof5rinds.client.t26145.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.t26145.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,p3r50na.apps.bookof5rinds.client.rindidates.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rindidates","rindidates",445830364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null)),React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

p3r50na.apps.bookof5rinds.client.t26145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta26146","meta26146",-1587426374,null)], null);
});

p3r50na.apps.bookof5rinds.client.t26145.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t26145.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t26145";

p3r50na.apps.bookof5rinds.client.t26145.cljs$lang$ctorPrWriter = (function (this__20103__auto__,writer__20104__auto__,opt__20105__auto__){
return cljs.core._write.call(null,writer__20104__auto__,"p3r50na.apps.bookof5rinds.client/t26145");
});

p3r50na.apps.bookof5rinds.client.__GT_t26145 = (function p3r50na$apps$bookof5rinds$client$widget_$___GT_t26145(widget__$1,data__$1,owner__$1,meta26146){
return (new p3r50na.apps.bookof5rinds.client.t26145(widget__$1,data__$1,owner__$1,meta26146));
});

}

return (new p3r50na.apps.bookof5rinds.client.t26145(p3r50na$apps$bookof5rinds$client$widget,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
p3r50na.apps.bookof5rinds.client.mseq = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar","wat","lol"], null));
p3r50na.apps.bookof5rinds.client.q = cljs.core.async.chan.call(null,(5));
var c__23305__auto___26230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23305__auto___26230){
return (function (){
var f__23306__auto__ = (function (){var switch__23284__auto__ = ((function (c__23305__auto___26230){
return (function (state_26197){
var state_val_26198 = (state_26197[(1)]);
if((state_val_26198 === (7))){
var inst_26163 = (state_26197[(2)]);
var inst_26164 = cljs.core.async.timeout.call(null,(1000));
var state_26197__$1 = (function (){var statearr_26199 = state_26197;
(statearr_26199[(7)] = inst_26163);

return statearr_26199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26197__$1,(8),inst_26164);
} else {
if((state_val_26198 === (1))){
var inst_26152 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.mseq);
var inst_26153 = inst_26152;
var inst_26154 = null;
var inst_26155 = (0);
var inst_26156 = (0);
var state_26197__$1 = (function (){var statearr_26200 = state_26197;
(statearr_26200[(8)] = inst_26153);

(statearr_26200[(9)] = inst_26155);

(statearr_26200[(10)] = inst_26154);

(statearr_26200[(11)] = inst_26156);

return statearr_26200;
})();
var statearr_26201_26231 = state_26197__$1;
(statearr_26201_26231[(2)] = null);

(statearr_26201_26231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (4))){
var inst_26154 = (state_26197[(10)]);
var inst_26156 = (state_26197[(11)]);
var inst_26161 = cljs.core._nth.call(null,inst_26154,inst_26156);
var state_26197__$1 = state_26197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26197__$1,(7),p3r50na.apps.bookof5rinds.client.q,inst_26161);
} else {
if((state_val_26198 === (15))){
var inst_26181 = (state_26197[(2)]);
var inst_26182 = cljs.core.async.timeout.call(null,(1000));
var state_26197__$1 = (function (){var statearr_26202 = state_26197;
(statearr_26202[(12)] = inst_26181);

return statearr_26202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26197__$1,(16),inst_26182);
} else {
if((state_val_26198 === (13))){
var inst_26170 = (state_26197[(13)]);
var inst_26179 = cljs.core.first.call(null,inst_26170);
var state_26197__$1 = state_26197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26197__$1,(15),p3r50na.apps.bookof5rinds.client.q,inst_26179);
} else {
if((state_val_26198 === (6))){
var inst_26193 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
var statearr_26203_26232 = state_26197__$1;
(statearr_26203_26232[(2)] = inst_26193);

(statearr_26203_26232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (3))){
var inst_26195 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26197__$1,inst_26195);
} else {
if((state_val_26198 === (12))){
var inst_26170 = (state_26197[(13)]);
var inst_26174 = cljs.core.chunk_first.call(null,inst_26170);
var inst_26175 = cljs.core.chunk_rest.call(null,inst_26170);
var inst_26176 = cljs.core.count.call(null,inst_26174);
var inst_26153 = inst_26175;
var inst_26154 = inst_26174;
var inst_26155 = inst_26176;
var inst_26156 = (0);
var state_26197__$1 = (function (){var statearr_26204 = state_26197;
(statearr_26204[(8)] = inst_26153);

(statearr_26204[(9)] = inst_26155);

(statearr_26204[(10)] = inst_26154);

(statearr_26204[(11)] = inst_26156);

return statearr_26204;
})();
var statearr_26205_26233 = state_26197__$1;
(statearr_26205_26233[(2)] = null);

(statearr_26205_26233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (2))){
var inst_26155 = (state_26197[(9)]);
var inst_26156 = (state_26197[(11)]);
var inst_26158 = (inst_26156 < inst_26155);
var inst_26159 = inst_26158;
var state_26197__$1 = state_26197;
if(cljs.core.truth_(inst_26159)){
var statearr_26206_26234 = state_26197__$1;
(statearr_26206_26234[(1)] = (4));

} else {
var statearr_26207_26235 = state_26197__$1;
(statearr_26207_26235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (11))){
var inst_26191 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
var statearr_26208_26236 = state_26197__$1;
(statearr_26208_26236[(2)] = inst_26191);

(statearr_26208_26236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (9))){
var inst_26170 = (state_26197[(13)]);
var inst_26172 = cljs.core.chunked_seq_QMARK_.call(null,inst_26170);
var state_26197__$1 = state_26197;
if(inst_26172){
var statearr_26209_26237 = state_26197__$1;
(statearr_26209_26237[(1)] = (12));

} else {
var statearr_26210_26238 = state_26197__$1;
(statearr_26210_26238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (5))){
var inst_26153 = (state_26197[(8)]);
var inst_26170 = (state_26197[(13)]);
var inst_26170__$1 = cljs.core.seq.call(null,inst_26153);
var state_26197__$1 = (function (){var statearr_26211 = state_26197;
(statearr_26211[(13)] = inst_26170__$1);

return statearr_26211;
})();
if(inst_26170__$1){
var statearr_26212_26239 = state_26197__$1;
(statearr_26212_26239[(1)] = (9));

} else {
var statearr_26213_26240 = state_26197__$1;
(statearr_26213_26240[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (14))){
var inst_26188 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
var statearr_26214_26241 = state_26197__$1;
(statearr_26214_26241[(2)] = inst_26188);

(statearr_26214_26241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (16))){
var inst_26170 = (state_26197[(13)]);
var inst_26184 = (state_26197[(2)]);
var inst_26185 = cljs.core.next.call(null,inst_26170);
var inst_26153 = inst_26185;
var inst_26154 = null;
var inst_26155 = (0);
var inst_26156 = (0);
var state_26197__$1 = (function (){var statearr_26218 = state_26197;
(statearr_26218[(14)] = inst_26184);

(statearr_26218[(8)] = inst_26153);

(statearr_26218[(9)] = inst_26155);

(statearr_26218[(10)] = inst_26154);

(statearr_26218[(11)] = inst_26156);

return statearr_26218;
})();
var statearr_26219_26242 = state_26197__$1;
(statearr_26219_26242[(2)] = null);

(statearr_26219_26242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (10))){
var state_26197__$1 = state_26197;
var statearr_26220_26243 = state_26197__$1;
(statearr_26220_26243[(2)] = null);

(statearr_26220_26243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26198 === (8))){
var inst_26153 = (state_26197[(8)]);
var inst_26155 = (state_26197[(9)]);
var inst_26154 = (state_26197[(10)]);
var inst_26156 = (state_26197[(11)]);
var inst_26166 = (state_26197[(2)]);
var inst_26167 = (inst_26156 + (1));
var tmp26215 = inst_26153;
var tmp26216 = inst_26155;
var tmp26217 = inst_26154;
var inst_26153__$1 = tmp26215;
var inst_26154__$1 = tmp26217;
var inst_26155__$1 = tmp26216;
var inst_26156__$1 = inst_26167;
var state_26197__$1 = (function (){var statearr_26221 = state_26197;
(statearr_26221[(15)] = inst_26166);

(statearr_26221[(8)] = inst_26153__$1);

(statearr_26221[(9)] = inst_26155__$1);

(statearr_26221[(10)] = inst_26154__$1);

(statearr_26221[(11)] = inst_26156__$1);

return statearr_26221;
})();
var statearr_26222_26244 = state_26197__$1;
(statearr_26222_26244[(2)] = null);

(statearr_26222_26244[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
});})(c__23305__auto___26230))
;
return ((function (switch__23284__auto__,c__23305__auto___26230){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0 = (function (){
var statearr_26226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26226[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__);

(statearr_26226[(1)] = (1));

return statearr_26226;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1 = (function (state_26197){
while(true){
var ret_value__23286__auto__ = (function (){try{while(true){
var result__23287__auto__ = switch__23284__auto__.call(null,state_26197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23287__auto__;
}
break;
}
}catch (e26227){if((e26227 instanceof Object)){
var ex__23288__auto__ = e26227;
var statearr_26228_26245 = state_26197;
(statearr_26228_26245[(5)] = ex__23288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26246 = state_26197;
state_26197 = G__26246;
continue;
} else {
return ret_value__23286__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__ = function(state_26197){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1.call(this,state_26197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__;
})()
;})(switch__23284__auto__,c__23305__auto___26230))
})();
var state__23307__auto__ = (function (){var statearr_26229 = f__23306__auto__.call(null);
(statearr_26229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23305__auto___26230);

return statearr_26229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23307__auto__);
});})(c__23305__auto___26230))
);

var c__23305__auto___26275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23305__auto___26275){
return (function (){
var f__23306__auto__ = (function (){var switch__23284__auto__ = ((function (c__23305__auto___26275){
return (function (state_26259){
var state_val_26260 = (state_26259[(1)]);
if((state_val_26260 === (1))){
var state_26259__$1 = state_26259;
var statearr_26261_26276 = state_26259__$1;
(statearr_26261_26276[(2)] = null);

(statearr_26261_26276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (2))){
var state_26259__$1 = state_26259;
var statearr_26262_26277 = state_26259__$1;
(statearr_26262_26277[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (3))){
var inst_26257 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26259__$1,inst_26257);
} else {
if((state_val_26260 === (4))){
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26259__$1,(7),p3r50na.apps.bookof5rinds.client.q);
} else {
if((state_val_26260 === (5))){
var state_26259__$1 = state_26259;
var statearr_26264_26278 = state_26259__$1;
(statearr_26264_26278[(2)] = null);

(statearr_26264_26278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (6))){
var inst_26255 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
var statearr_26265_26279 = state_26259__$1;
(statearr_26265_26279[(2)] = inst_26255);

(statearr_26265_26279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26260 === (7))){
var inst_26250 = (state_26259[(2)]);
var inst_26251 = console.log(inst_26250);
var state_26259__$1 = (function (){var statearr_26266 = state_26259;
(statearr_26266[(7)] = inst_26251);

return statearr_26266;
})();
var statearr_26267_26280 = state_26259__$1;
(statearr_26267_26280[(2)] = null);

(statearr_26267_26280[(1)] = (2));


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
});})(c__23305__auto___26275))
;
return ((function (switch__23284__auto__,c__23305__auto___26275){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0 = (function (){
var statearr_26271 = [null,null,null,null,null,null,null,null];
(statearr_26271[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__);

(statearr_26271[(1)] = (1));

return statearr_26271;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1 = (function (state_26259){
while(true){
var ret_value__23286__auto__ = (function (){try{while(true){
var result__23287__auto__ = switch__23284__auto__.call(null,state_26259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23287__auto__;
}
break;
}
}catch (e26272){if((e26272 instanceof Object)){
var ex__23288__auto__ = e26272;
var statearr_26273_26281 = state_26259;
(statearr_26273_26281[(5)] = ex__23288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26282 = state_26259;
state_26259 = G__26282;
continue;
} else {
return ret_value__23286__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__ = function(state_26259){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1.call(this,state_26259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__;
})()
;})(switch__23284__auto__,c__23305__auto___26275))
})();
var state__23307__auto__ = (function (){var statearr_26274 = f__23306__auto__.call(null);
(statearr_26274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23305__auto___26275);

return statearr_26274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23307__auto__);
});})(c__23305__auto___26275))
);

var c__23305__auto___26361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23305__auto___26361){
return (function (){
var f__23306__auto__ = (function (){var switch__23284__auto__ = ((function (c__23305__auto___26361){
return (function (state_26330){
var state_val_26331 = (state_26330[(1)]);
if((state_val_26331 === (7))){
var inst_26293 = (state_26330[(7)]);
var inst_26294 = (state_26330[(8)]);
var inst_26292 = (state_26330[(9)]);
var inst_26295 = (state_26330[(10)]);
var inst_26302 = (state_26330[(2)]);
var inst_26303 = (inst_26295 + (1));
var tmp26332 = inst_26293;
var tmp26333 = inst_26294;
var tmp26334 = inst_26292;
var inst_26292__$1 = tmp26334;
var inst_26293__$1 = tmp26332;
var inst_26294__$1 = tmp26333;
var inst_26295__$1 = inst_26303;
var state_26330__$1 = (function (){var statearr_26335 = state_26330;
(statearr_26335[(7)] = inst_26293__$1);

(statearr_26335[(8)] = inst_26294__$1);

(statearr_26335[(9)] = inst_26292__$1);

(statearr_26335[(11)] = inst_26302);

(statearr_26335[(10)] = inst_26295__$1);

return statearr_26335;
})();
var statearr_26336_26362 = state_26330__$1;
(statearr_26336_26362[(2)] = null);

(statearr_26336_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (1))){
var inst_26287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26288 = [(1),(2),(3),(4),(5)];
var inst_26289 = (new cljs.core.PersistentVector(null,5,(5),inst_26287,inst_26288,null));
var inst_26290 = cljs.core.seq.call(null,inst_26289);
var inst_26291 = cljs.core.seq.call(null,inst_26290);
var inst_26292 = inst_26291;
var inst_26293 = null;
var inst_26294 = (0);
var inst_26295 = (0);
var state_26330__$1 = (function (){var statearr_26337 = state_26330;
(statearr_26337[(7)] = inst_26293);

(statearr_26337[(8)] = inst_26294);

(statearr_26337[(9)] = inst_26292);

(statearr_26337[(10)] = inst_26295);

return statearr_26337;
})();
var statearr_26338_26363 = state_26330__$1;
(statearr_26338_26363[(2)] = null);

(statearr_26338_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (4))){
var inst_26293 = (state_26330[(7)]);
var inst_26295 = (state_26330[(10)]);
var inst_26300 = cljs.core._nth.call(null,inst_26293,inst_26295);
var state_26330__$1 = state_26330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26330__$1,(7),p3r50na.apps.bookof5rinds.client.q,inst_26300);
} else {
if((state_val_26331 === (13))){
var inst_26321 = (state_26330[(2)]);
var state_26330__$1 = state_26330;
var statearr_26339_26364 = state_26330__$1;
(statearr_26339_26364[(2)] = inst_26321);

(statearr_26339_26364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (6))){
var inst_26326 = (state_26330[(2)]);
var state_26330__$1 = state_26330;
var statearr_26340_26365 = state_26330__$1;
(statearr_26340_26365[(2)] = inst_26326);

(statearr_26340_26365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (3))){
var inst_26328 = (state_26330[(2)]);
var state_26330__$1 = state_26330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26330__$1,inst_26328);
} else {
if((state_val_26331 === (12))){
var inst_26306 = (state_26330[(12)]);
var inst_26315 = cljs.core.first.call(null,inst_26306);
var state_26330__$1 = state_26330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26330__$1,(14),p3r50na.apps.bookof5rinds.client.q,inst_26315);
} else {
if((state_val_26331 === (2))){
var inst_26294 = (state_26330[(8)]);
var inst_26295 = (state_26330[(10)]);
var inst_26297 = (inst_26295 < inst_26294);
var inst_26298 = inst_26297;
var state_26330__$1 = state_26330;
if(cljs.core.truth_(inst_26298)){
var statearr_26341_26366 = state_26330__$1;
(statearr_26341_26366[(1)] = (4));

} else {
var statearr_26342_26367 = state_26330__$1;
(statearr_26342_26367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (11))){
var inst_26306 = (state_26330[(12)]);
var inst_26310 = cljs.core.chunk_first.call(null,inst_26306);
var inst_26311 = cljs.core.chunk_rest.call(null,inst_26306);
var inst_26312 = cljs.core.count.call(null,inst_26310);
var inst_26292 = inst_26311;
var inst_26293 = inst_26310;
var inst_26294 = inst_26312;
var inst_26295 = (0);
var state_26330__$1 = (function (){var statearr_26343 = state_26330;
(statearr_26343[(7)] = inst_26293);

(statearr_26343[(8)] = inst_26294);

(statearr_26343[(9)] = inst_26292);

(statearr_26343[(10)] = inst_26295);

return statearr_26343;
})();
var statearr_26344_26368 = state_26330__$1;
(statearr_26344_26368[(2)] = null);

(statearr_26344_26368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (9))){
var state_26330__$1 = state_26330;
var statearr_26345_26369 = state_26330__$1;
(statearr_26345_26369[(2)] = null);

(statearr_26345_26369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (5))){
var inst_26306 = (state_26330[(12)]);
var inst_26292 = (state_26330[(9)]);
var inst_26306__$1 = cljs.core.seq.call(null,inst_26292);
var state_26330__$1 = (function (){var statearr_26346 = state_26330;
(statearr_26346[(12)] = inst_26306__$1);

return statearr_26346;
})();
if(inst_26306__$1){
var statearr_26347_26370 = state_26330__$1;
(statearr_26347_26370[(1)] = (8));

} else {
var statearr_26348_26371 = state_26330__$1;
(statearr_26348_26371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (14))){
var inst_26306 = (state_26330[(12)]);
var inst_26317 = (state_26330[(2)]);
var inst_26318 = cljs.core.next.call(null,inst_26306);
var inst_26292 = inst_26318;
var inst_26293 = null;
var inst_26294 = (0);
var inst_26295 = (0);
var state_26330__$1 = (function (){var statearr_26349 = state_26330;
(statearr_26349[(7)] = inst_26293);

(statearr_26349[(8)] = inst_26294);

(statearr_26349[(13)] = inst_26317);

(statearr_26349[(9)] = inst_26292);

(statearr_26349[(10)] = inst_26295);

return statearr_26349;
})();
var statearr_26350_26372 = state_26330__$1;
(statearr_26350_26372[(2)] = null);

(statearr_26350_26372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (10))){
var inst_26324 = (state_26330[(2)]);
var state_26330__$1 = state_26330;
var statearr_26351_26373 = state_26330__$1;
(statearr_26351_26373[(2)] = inst_26324);

(statearr_26351_26373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26331 === (8))){
var inst_26306 = (state_26330[(12)]);
var inst_26308 = cljs.core.chunked_seq_QMARK_.call(null,inst_26306);
var state_26330__$1 = state_26330;
if(inst_26308){
var statearr_26352_26374 = state_26330__$1;
(statearr_26352_26374[(1)] = (11));

} else {
var statearr_26353_26375 = state_26330__$1;
(statearr_26353_26375[(1)] = (12));

}

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
}
}
}
}
}
}
}
});})(c__23305__auto___26361))
;
return ((function (switch__23284__auto__,c__23305__auto___26361){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0 = (function (){
var statearr_26357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26357[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__);

(statearr_26357[(1)] = (1));

return statearr_26357;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1 = (function (state_26330){
while(true){
var ret_value__23286__auto__ = (function (){try{while(true){
var result__23287__auto__ = switch__23284__auto__.call(null,state_26330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23287__auto__;
}
break;
}
}catch (e26358){if((e26358 instanceof Object)){
var ex__23288__auto__ = e26358;
var statearr_26359_26376 = state_26330;
(statearr_26359_26376[(5)] = ex__23288__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26377 = state_26330;
state_26330 = G__26377;
continue;
} else {
return ret_value__23286__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__ = function(state_26330){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1.call(this,state_26330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23285__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23285__auto__;
})()
;})(switch__23284__auto__,c__23305__auto___26361))
})();
var state__23307__auto__ = (function (){var statearr_26360 = f__23306__auto__.call(null);
(statearr_26360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23305__auto___26361);

return statearr_26360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23307__auto__);
});})(c__23305__auto___26361))
);

om.core.root.call(null,p3r50na.apps.bookof5rinds.client.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello worlds waaat!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=client.js.map