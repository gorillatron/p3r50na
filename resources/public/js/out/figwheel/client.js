// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29327__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29328__i = 0, G__29328__a = new Array(arguments.length -  0);
while (G__29328__i < G__29328__a.length) {G__29328__a[G__29328__i] = arguments[G__29328__i + 0]; ++G__29328__i;}
  args = new cljs.core.IndexedSeq(G__29328__a,0);
} 
return G__29327__delegate.call(this,args);};
G__29327.cljs$lang$maxFixedArity = 0;
G__29327.cljs$lang$applyTo = (function (arglist__29329){
var args = cljs.core.seq(arglist__29329);
return G__29327__delegate(args);
});
G__29327.cljs$core$IFn$_invoke$arity$variadic = G__29327__delegate;
return G__29327;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29330){
var map__29333 = p__29330;
var map__29333__$1 = ((((!((map__29333 == null)))?((((map__29333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29333):map__29333);
var message = cljs.core.get.call(null,map__29333__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29333__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19571__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19559__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19559__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19559__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24018__auto___29463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___29463,ch){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___29463,ch){
return (function (state_29437){
var state_val_29438 = (state_29437[(1)]);
if((state_val_29438 === (7))){
var inst_29433 = (state_29437[(2)]);
var state_29437__$1 = state_29437;
var statearr_29439_29464 = state_29437__$1;
(statearr_29439_29464[(2)] = inst_29433);

(statearr_29439_29464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (1))){
var state_29437__$1 = state_29437;
var statearr_29440_29465 = state_29437__$1;
(statearr_29440_29465[(2)] = null);

(statearr_29440_29465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (4))){
var inst_29401 = (state_29437[(7)]);
var inst_29401__$1 = (state_29437[(2)]);
var state_29437__$1 = (function (){var statearr_29441 = state_29437;
(statearr_29441[(7)] = inst_29401__$1);

return statearr_29441;
})();
if(cljs.core.truth_(inst_29401__$1)){
var statearr_29442_29466 = state_29437__$1;
(statearr_29442_29466[(1)] = (5));

} else {
var statearr_29443_29467 = state_29437__$1;
(statearr_29443_29467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (13))){
var state_29437__$1 = state_29437;
var statearr_29444_29468 = state_29437__$1;
(statearr_29444_29468[(2)] = null);

(statearr_29444_29468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (6))){
var state_29437__$1 = state_29437;
var statearr_29445_29469 = state_29437__$1;
(statearr_29445_29469[(2)] = null);

(statearr_29445_29469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (3))){
var inst_29435 = (state_29437[(2)]);
var state_29437__$1 = state_29437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29437__$1,inst_29435);
} else {
if((state_val_29438 === (12))){
var inst_29408 = (state_29437[(8)]);
var inst_29421 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29408);
var inst_29422 = cljs.core.first.call(null,inst_29421);
var inst_29423 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29422);
var inst_29424 = console.warn("Figwheel: Not loading code with warnings - ",inst_29423);
var state_29437__$1 = state_29437;
var statearr_29446_29470 = state_29437__$1;
(statearr_29446_29470[(2)] = inst_29424);

(statearr_29446_29470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (2))){
var state_29437__$1 = state_29437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29437__$1,(4),ch);
} else {
if((state_val_29438 === (11))){
var inst_29417 = (state_29437[(2)]);
var state_29437__$1 = state_29437;
var statearr_29447_29471 = state_29437__$1;
(statearr_29447_29471[(2)] = inst_29417);

(statearr_29447_29471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (9))){
var inst_29407 = (state_29437[(9)]);
var inst_29419 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29407,opts);
var state_29437__$1 = state_29437;
if(cljs.core.truth_(inst_29419)){
var statearr_29448_29472 = state_29437__$1;
(statearr_29448_29472[(1)] = (12));

} else {
var statearr_29449_29473 = state_29437__$1;
(statearr_29449_29473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (5))){
var inst_29407 = (state_29437[(9)]);
var inst_29401 = (state_29437[(7)]);
var inst_29403 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29404 = (new cljs.core.PersistentArrayMap(null,2,inst_29403,null));
var inst_29405 = (new cljs.core.PersistentHashSet(null,inst_29404,null));
var inst_29406 = figwheel.client.focus_msgs.call(null,inst_29405,inst_29401);
var inst_29407__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29406);
var inst_29408 = cljs.core.first.call(null,inst_29406);
var inst_29409 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29407__$1,opts);
var state_29437__$1 = (function (){var statearr_29450 = state_29437;
(statearr_29450[(9)] = inst_29407__$1);

(statearr_29450[(8)] = inst_29408);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29409)){
var statearr_29451_29474 = state_29437__$1;
(statearr_29451_29474[(1)] = (8));

} else {
var statearr_29452_29475 = state_29437__$1;
(statearr_29452_29475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (14))){
var inst_29427 = (state_29437[(2)]);
var state_29437__$1 = state_29437;
var statearr_29453_29476 = state_29437__$1;
(statearr_29453_29476[(2)] = inst_29427);

(statearr_29453_29476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (10))){
var inst_29429 = (state_29437[(2)]);
var state_29437__$1 = (function (){var statearr_29454 = state_29437;
(statearr_29454[(10)] = inst_29429);

return statearr_29454;
})();
var statearr_29455_29477 = state_29437__$1;
(statearr_29455_29477[(2)] = null);

(statearr_29455_29477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29438 === (8))){
var inst_29408 = (state_29437[(8)]);
var inst_29411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29412 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29408);
var inst_29413 = cljs.core.async.timeout.call(null,(1000));
var inst_29414 = [inst_29412,inst_29413];
var inst_29415 = (new cljs.core.PersistentVector(null,2,(5),inst_29411,inst_29414,null));
var state_29437__$1 = state_29437;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29437__$1,(11),inst_29415);
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
});})(c__24018__auto___29463,ch))
;
return ((function (switch__23953__auto__,c__24018__auto___29463,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23954__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23954__auto____0 = (function (){
var statearr_29459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29459[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23954__auto__);

(statearr_29459[(1)] = (1));

return statearr_29459;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23954__auto____1 = (function (state_29437){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_29437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e29460){if((e29460 instanceof Object)){
var ex__23957__auto__ = e29460;
var statearr_29461_29478 = state_29437;
(statearr_29461_29478[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29479 = state_29437;
state_29437 = G__29479;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23954__auto__ = function(state_29437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23954__auto____1.call(this,state_29437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23954__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23954__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___29463,ch))
})();
var state__24020__auto__ = (function (){var statearr_29462 = f__24019__auto__.call(null);
(statearr_29462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___29463);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___29463,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29480_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29480_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29487 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29487){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29486 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29485,_STAR_print_newline_STAR_29486,base_path_29487){
return (function() { 
var G__29488__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29489__i = 0, G__29489__a = new Array(arguments.length -  0);
while (G__29489__i < G__29489__a.length) {G__29489__a[G__29489__i] = arguments[G__29489__i + 0]; ++G__29489__i;}
  args = new cljs.core.IndexedSeq(G__29489__a,0);
} 
return G__29488__delegate.call(this,args);};
G__29488.cljs$lang$maxFixedArity = 0;
G__29488.cljs$lang$applyTo = (function (arglist__29490){
var args = cljs.core.seq(arglist__29490);
return G__29488__delegate(args);
});
G__29488.cljs$core$IFn$_invoke$arity$variadic = G__29488__delegate;
return G__29488;
})()
;})(_STAR_print_fn_STAR_29485,_STAR_print_newline_STAR_29486,base_path_29487))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29486;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29485;
}}catch (e29484){if((e29484 instanceof Error)){
var e = e29484;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29487], null));
} else {
var e = e29484;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29487))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29491){
var map__29498 = p__29491;
var map__29498__$1 = ((((!((map__29498 == null)))?((((map__29498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29498):map__29498);
var opts = map__29498__$1;
var build_id = cljs.core.get.call(null,map__29498__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29498,map__29498__$1,opts,build_id){
return (function (p__29500){
var vec__29501 = p__29500;
var map__29502 = cljs.core.nth.call(null,vec__29501,(0),null);
var map__29502__$1 = ((((!((map__29502 == null)))?((((map__29502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29502):map__29502);
var msg = map__29502__$1;
var msg_name = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29501,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29501,map__29502,map__29502__$1,msg,msg_name,_,map__29498,map__29498__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29501,map__29502,map__29502__$1,msg,msg_name,_,map__29498,map__29498__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29498,map__29498__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29508){
var vec__29509 = p__29508;
var map__29510 = cljs.core.nth.call(null,vec__29509,(0),null);
var map__29510__$1 = ((((!((map__29510 == null)))?((((map__29510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29510):map__29510);
var msg = map__29510__$1;
var msg_name = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29509,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29512){
var map__29522 = p__29512;
var map__29522__$1 = ((((!((map__29522 == null)))?((((map__29522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29522):map__29522);
var on_compile_warning = cljs.core.get.call(null,map__29522__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29522__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29522,map__29522__$1,on_compile_warning,on_compile_fail){
return (function (p__29524){
var vec__29525 = p__29524;
var map__29526 = cljs.core.nth.call(null,vec__29525,(0),null);
var map__29526__$1 = ((((!((map__29526 == null)))?((((map__29526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29526):map__29526);
var msg = map__29526__$1;
var msg_name = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29525,(1));
var pred__29528 = cljs.core._EQ_;
var expr__29529 = msg_name;
if(cljs.core.truth_(pred__29528.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29529))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29528.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29529))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29522,map__29522__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__,msg_hist,msg_names,msg){
return (function (state_29730){
var state_val_29731 = (state_29730[(1)]);
if((state_val_29731 === (7))){
var inst_29664 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29732_29773 = state_29730__$1;
(statearr_29732_29773[(2)] = inst_29664);

(statearr_29732_29773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (20))){
var inst_29692 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29692)){
var statearr_29733_29774 = state_29730__$1;
(statearr_29733_29774[(1)] = (22));

} else {
var statearr_29734_29775 = state_29730__$1;
(statearr_29734_29775[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (27))){
var inst_29704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29705 = figwheel.client.heads_up.display_warning.call(null,inst_29704);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(30),inst_29705);
} else {
if((state_val_29731 === (1))){
var inst_29652 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29652)){
var statearr_29735_29776 = state_29730__$1;
(statearr_29735_29776[(1)] = (2));

} else {
var statearr_29736_29777 = state_29730__$1;
(statearr_29736_29777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (24))){
var inst_29720 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29737_29778 = state_29730__$1;
(statearr_29737_29778[(2)] = inst_29720);

(statearr_29737_29778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (4))){
var inst_29728 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29730__$1,inst_29728);
} else {
if((state_val_29731 === (15))){
var inst_29680 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29681 = figwheel.client.format_messages.call(null,inst_29680);
var inst_29682 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29683 = figwheel.client.heads_up.display_error.call(null,inst_29681,inst_29682);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(18),inst_29683);
} else {
if((state_val_29731 === (21))){
var inst_29722 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29738_29779 = state_29730__$1;
(statearr_29738_29779[(2)] = inst_29722);

(statearr_29738_29779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (31))){
var inst_29711 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(34),inst_29711);
} else {
if((state_val_29731 === (32))){
var state_29730__$1 = state_29730;
var statearr_29739_29780 = state_29730__$1;
(statearr_29739_29780[(2)] = null);

(statearr_29739_29780[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (33))){
var inst_29716 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29740_29781 = state_29730__$1;
(statearr_29740_29781[(2)] = inst_29716);

(statearr_29740_29781[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (13))){
var inst_29670 = (state_29730[(2)]);
var inst_29671 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29672 = figwheel.client.format_messages.call(null,inst_29671);
var inst_29673 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29674 = figwheel.client.heads_up.display_error.call(null,inst_29672,inst_29673);
var state_29730__$1 = (function (){var statearr_29741 = state_29730;
(statearr_29741[(7)] = inst_29670);

return statearr_29741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(14),inst_29674);
} else {
if((state_val_29731 === (22))){
var inst_29694 = figwheel.client.heads_up.clear.call(null);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(25),inst_29694);
} else {
if((state_val_29731 === (29))){
var inst_29718 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29742_29782 = state_29730__$1;
(statearr_29742_29782[(2)] = inst_29718);

(statearr_29742_29782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (6))){
var inst_29660 = figwheel.client.heads_up.clear.call(null);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(9),inst_29660);
} else {
if((state_val_29731 === (28))){
var inst_29709 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29709)){
var statearr_29743_29783 = state_29730__$1;
(statearr_29743_29783[(1)] = (31));

} else {
var statearr_29744_29784 = state_29730__$1;
(statearr_29744_29784[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (25))){
var inst_29696 = (state_29730[(2)]);
var inst_29697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29698 = figwheel.client.heads_up.display_warning.call(null,inst_29697);
var state_29730__$1 = (function (){var statearr_29745 = state_29730;
(statearr_29745[(8)] = inst_29696);

return statearr_29745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(26),inst_29698);
} else {
if((state_val_29731 === (34))){
var inst_29713 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29746_29785 = state_29730__$1;
(statearr_29746_29785[(2)] = inst_29713);

(statearr_29746_29785[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (17))){
var inst_29724 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29747_29786 = state_29730__$1;
(statearr_29747_29786[(2)] = inst_29724);

(statearr_29747_29786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (3))){
var inst_29666 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29666)){
var statearr_29748_29787 = state_29730__$1;
(statearr_29748_29787[(1)] = (10));

} else {
var statearr_29749_29788 = state_29730__$1;
(statearr_29749_29788[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (12))){
var inst_29726 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29750_29789 = state_29730__$1;
(statearr_29750_29789[(2)] = inst_29726);

(statearr_29750_29789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (2))){
var inst_29654 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29654)){
var statearr_29751_29790 = state_29730__$1;
(statearr_29751_29790[(1)] = (5));

} else {
var statearr_29752_29791 = state_29730__$1;
(statearr_29752_29791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (23))){
var inst_29702 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29702)){
var statearr_29753_29792 = state_29730__$1;
(statearr_29753_29792[(1)] = (27));

} else {
var statearr_29754_29793 = state_29730__$1;
(statearr_29754_29793[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (19))){
var inst_29689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29690 = figwheel.client.heads_up.append_message.call(null,inst_29689);
var state_29730__$1 = state_29730;
var statearr_29755_29794 = state_29730__$1;
(statearr_29755_29794[(2)] = inst_29690);

(statearr_29755_29794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (11))){
var inst_29678 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29678)){
var statearr_29756_29795 = state_29730__$1;
(statearr_29756_29795[(1)] = (15));

} else {
var statearr_29757_29796 = state_29730__$1;
(statearr_29757_29796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (9))){
var inst_29662 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29758_29797 = state_29730__$1;
(statearr_29758_29797[(2)] = inst_29662);

(statearr_29758_29797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (5))){
var inst_29656 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(8),inst_29656);
} else {
if((state_val_29731 === (14))){
var inst_29676 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29759_29798 = state_29730__$1;
(statearr_29759_29798[(2)] = inst_29676);

(statearr_29759_29798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (26))){
var inst_29700 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29760_29799 = state_29730__$1;
(statearr_29760_29799[(2)] = inst_29700);

(statearr_29760_29799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (16))){
var inst_29687 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29730__$1 = state_29730;
if(cljs.core.truth_(inst_29687)){
var statearr_29761_29800 = state_29730__$1;
(statearr_29761_29800[(1)] = (19));

} else {
var statearr_29762_29801 = state_29730__$1;
(statearr_29762_29801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (30))){
var inst_29707 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29763_29802 = state_29730__$1;
(statearr_29763_29802[(2)] = inst_29707);

(statearr_29763_29802[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (10))){
var inst_29668 = figwheel.client.heads_up.clear.call(null);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(13),inst_29668);
} else {
if((state_val_29731 === (18))){
var inst_29685 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29764_29803 = state_29730__$1;
(statearr_29764_29803[(2)] = inst_29685);

(statearr_29764_29803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (8))){
var inst_29658 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29765_29804 = state_29730__$1;
(statearr_29765_29804[(2)] = inst_29658);

(statearr_29765_29804[(1)] = (7));


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
}
}
});})(c__24018__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23953__auto__,c__24018__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null,null,null];
(statearr_29769[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto____1 = (function (state_29730){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_29730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e29770){if((e29770 instanceof Object)){
var ex__23957__auto__ = e29770;
var statearr_29771_29805 = state_29730;
(statearr_29771_29805[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29806 = state_29730;
state_29730 = G__29806;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto__ = function(state_29730){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto____1.call(this,state_29730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__,msg_hist,msg_names,msg))
})();
var state__24020__auto__ = (function (){var statearr_29772 = f__24019__auto__.call(null);
(statearr_29772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_29772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__,msg_hist,msg_names,msg))
);

return c__24018__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24018__auto___29869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___29869,ch){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___29869,ch){
return (function (state_29852){
var state_val_29853 = (state_29852[(1)]);
if((state_val_29853 === (1))){
var state_29852__$1 = state_29852;
var statearr_29854_29870 = state_29852__$1;
(statearr_29854_29870[(2)] = null);

(statearr_29854_29870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (2))){
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(4),ch);
} else {
if((state_val_29853 === (3))){
var inst_29850 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29852__$1,inst_29850);
} else {
if((state_val_29853 === (4))){
var inst_29840 = (state_29852[(7)]);
var inst_29840__$1 = (state_29852[(2)]);
var state_29852__$1 = (function (){var statearr_29855 = state_29852;
(statearr_29855[(7)] = inst_29840__$1);

return statearr_29855;
})();
if(cljs.core.truth_(inst_29840__$1)){
var statearr_29856_29871 = state_29852__$1;
(statearr_29856_29871[(1)] = (5));

} else {
var statearr_29857_29872 = state_29852__$1;
(statearr_29857_29872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (5))){
var inst_29840 = (state_29852[(7)]);
var inst_29842 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29840);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(8),inst_29842);
} else {
if((state_val_29853 === (6))){
var state_29852__$1 = state_29852;
var statearr_29858_29873 = state_29852__$1;
(statearr_29858_29873[(2)] = null);

(statearr_29858_29873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (7))){
var inst_29848 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29859_29874 = state_29852__$1;
(statearr_29859_29874[(2)] = inst_29848);

(statearr_29859_29874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (8))){
var inst_29844 = (state_29852[(2)]);
var state_29852__$1 = (function (){var statearr_29860 = state_29852;
(statearr_29860[(8)] = inst_29844);

return statearr_29860;
})();
var statearr_29861_29875 = state_29852__$1;
(statearr_29861_29875[(2)] = null);

(statearr_29861_29875[(1)] = (2));


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
});})(c__24018__auto___29869,ch))
;
return ((function (switch__23953__auto__,c__24018__auto___29869,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23954__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23954__auto____0 = (function (){
var statearr_29865 = [null,null,null,null,null,null,null,null,null];
(statearr_29865[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23954__auto__);

(statearr_29865[(1)] = (1));

return statearr_29865;
});
var figwheel$client$heads_up_plugin_$_state_machine__23954__auto____1 = (function (state_29852){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_29852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e29866){if((e29866 instanceof Object)){
var ex__23957__auto__ = e29866;
var statearr_29867_29876 = state_29852;
(statearr_29867_29876[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29877 = state_29852;
state_29852 = G__29877;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23954__auto__ = function(state_29852){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23954__auto____1.call(this,state_29852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23954__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23954__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___29869,ch))
})();
var state__24020__auto__ = (function (){var statearr_29868 = f__24019__auto__.call(null);
(statearr_29868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___29869);

return statearr_29868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___29869,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__){
return (function (state_29898){
var state_val_29899 = (state_29898[(1)]);
if((state_val_29899 === (1))){
var inst_29893 = cljs.core.async.timeout.call(null,(3000));
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29898__$1,(2),inst_29893);
} else {
if((state_val_29899 === (2))){
var inst_29895 = (state_29898[(2)]);
var inst_29896 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29898__$1 = (function (){var statearr_29900 = state_29898;
(statearr_29900[(7)] = inst_29895);

return statearr_29900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29898__$1,inst_29896);
} else {
return null;
}
}
});})(c__24018__auto__))
;
return ((function (switch__23953__auto__,c__24018__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23954__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23954__auto____0 = (function (){
var statearr_29904 = [null,null,null,null,null,null,null,null];
(statearr_29904[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23954__auto__);

(statearr_29904[(1)] = (1));

return statearr_29904;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23954__auto____1 = (function (state_29898){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_29898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e29905){if((e29905 instanceof Object)){
var ex__23957__auto__ = e29905;
var statearr_29906_29908 = state_29898;
(statearr_29906_29908[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29909 = state_29898;
state_29898 = G__29909;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23954__auto__ = function(state_29898){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23954__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23954__auto____1.call(this,state_29898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23954__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23954__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_29907 = f__24019__auto__.call(null);
(statearr_29907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29910){
var map__29917 = p__29910;
var map__29917__$1 = ((((!((map__29917 == null)))?((((map__29917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29917):map__29917);
var ed = map__29917__$1;
var formatted_exception = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29919_29923 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29920_29924 = null;
var count__29921_29925 = (0);
var i__29922_29926 = (0);
while(true){
if((i__29922_29926 < count__29921_29925)){
var msg_29927 = cljs.core._nth.call(null,chunk__29920_29924,i__29922_29926);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29927);

var G__29928 = seq__29919_29923;
var G__29929 = chunk__29920_29924;
var G__29930 = count__29921_29925;
var G__29931 = (i__29922_29926 + (1));
seq__29919_29923 = G__29928;
chunk__29920_29924 = G__29929;
count__29921_29925 = G__29930;
i__29922_29926 = G__29931;
continue;
} else {
var temp__4425__auto___29932 = cljs.core.seq.call(null,seq__29919_29923);
if(temp__4425__auto___29932){
var seq__29919_29933__$1 = temp__4425__auto___29932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29919_29933__$1)){
var c__20355__auto___29934 = cljs.core.chunk_first.call(null,seq__29919_29933__$1);
var G__29935 = cljs.core.chunk_rest.call(null,seq__29919_29933__$1);
var G__29936 = c__20355__auto___29934;
var G__29937 = cljs.core.count.call(null,c__20355__auto___29934);
var G__29938 = (0);
seq__29919_29923 = G__29935;
chunk__29920_29924 = G__29936;
count__29921_29925 = G__29937;
i__29922_29926 = G__29938;
continue;
} else {
var msg_29939 = cljs.core.first.call(null,seq__29919_29933__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29939);

var G__29940 = cljs.core.next.call(null,seq__29919_29933__$1);
var G__29941 = null;
var G__29942 = (0);
var G__29943 = (0);
seq__29919_29923 = G__29940;
chunk__29920_29924 = G__29941;
count__29921_29925 = G__29942;
i__29922_29926 = G__29943;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29944){
var map__29947 = p__29944;
var map__29947__$1 = ((((!((map__29947 == null)))?((((map__29947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29947):map__29947);
var w = map__29947__$1;
var message = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19559__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19559__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19559__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29955 = cljs.core.seq.call(null,plugins);
var chunk__29956 = null;
var count__29957 = (0);
var i__29958 = (0);
while(true){
if((i__29958 < count__29957)){
var vec__29959 = cljs.core._nth.call(null,chunk__29956,i__29958);
var k = cljs.core.nth.call(null,vec__29959,(0),null);
var plugin = cljs.core.nth.call(null,vec__29959,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29961 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29955,chunk__29956,count__29957,i__29958,pl_29961,vec__29959,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29961.call(null,msg_hist);
});})(seq__29955,chunk__29956,count__29957,i__29958,pl_29961,vec__29959,k,plugin))
);
} else {
}

var G__29962 = seq__29955;
var G__29963 = chunk__29956;
var G__29964 = count__29957;
var G__29965 = (i__29958 + (1));
seq__29955 = G__29962;
chunk__29956 = G__29963;
count__29957 = G__29964;
i__29958 = G__29965;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29955);
if(temp__4425__auto__){
var seq__29955__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29955__$1)){
var c__20355__auto__ = cljs.core.chunk_first.call(null,seq__29955__$1);
var G__29966 = cljs.core.chunk_rest.call(null,seq__29955__$1);
var G__29967 = c__20355__auto__;
var G__29968 = cljs.core.count.call(null,c__20355__auto__);
var G__29969 = (0);
seq__29955 = G__29966;
chunk__29956 = G__29967;
count__29957 = G__29968;
i__29958 = G__29969;
continue;
} else {
var vec__29960 = cljs.core.first.call(null,seq__29955__$1);
var k = cljs.core.nth.call(null,vec__29960,(0),null);
var plugin = cljs.core.nth.call(null,vec__29960,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29970 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29955,chunk__29956,count__29957,i__29958,pl_29970,vec__29960,k,plugin,seq__29955__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29970.call(null,msg_hist);
});})(seq__29955,chunk__29956,count__29957,i__29958,pl_29970,vec__29960,k,plugin,seq__29955__$1,temp__4425__auto__))
);
} else {
}

var G__29971 = cljs.core.next.call(null,seq__29955__$1);
var G__29972 = null;
var G__29973 = (0);
var G__29974 = (0);
seq__29955 = G__29971;
chunk__29956 = G__29972;
count__29957 = G__29973;
i__29958 = G__29974;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args29975 = [];
var len__20610__auto___29978 = arguments.length;
var i__20611__auto___29979 = (0);
while(true){
if((i__20611__auto___29979 < len__20610__auto___29978)){
args29975.push((arguments[i__20611__auto___29979]));

var G__29980 = (i__20611__auto___29979 + (1));
i__20611__auto___29979 = G__29980;
continue;
} else {
}
break;
}

var G__29977 = args29975.length;
switch (G__29977) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29975.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__20617__auto__ = [];
var len__20610__auto___29986 = arguments.length;
var i__20611__auto___29987 = (0);
while(true){
if((i__20611__auto___29987 < len__20610__auto___29986)){
args__20617__auto__.push((arguments[i__20611__auto___29987]));

var G__29988 = (i__20611__auto___29987 + (1));
i__20611__auto___29987 = G__29988;
continue;
} else {
}
break;
}

var argseq__20618__auto__ = ((((0) < args__20617__auto__.length))?(new cljs.core.IndexedSeq(args__20617__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20618__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29983){
var map__29984 = p__29983;
var map__29984__$1 = ((((!((map__29984 == null)))?((((map__29984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29984):map__29984);
var opts = map__29984__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29982){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29982));
});

//# sourceMappingURL=client.js.map