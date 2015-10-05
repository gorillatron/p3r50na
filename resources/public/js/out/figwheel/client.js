// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
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
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25787__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25788__i = 0, G__25788__a = new Array(arguments.length -  0);
while (G__25788__i < G__25788__a.length) {G__25788__a[G__25788__i] = arguments[G__25788__i + 0]; ++G__25788__i;}
  args = new cljs.core.IndexedSeq(G__25788__a,0);
} 
return G__25787__delegate.call(this,args);};
G__25787.cljs$lang$maxFixedArity = 0;
G__25787.cljs$lang$applyTo = (function (arglist__25789){
var args = cljs.core.seq(arglist__25789);
return G__25787__delegate(args);
});
G__25787.cljs$core$IFn$_invoke$arity$variadic = G__25787__delegate;
return G__25787;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25790){
var map__25793 = p__25790;
var map__25793__$1 = ((((!((map__25793 == null)))?((((map__25793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);
var message = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18540__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18528__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18528__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18528__auto__;
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
var c__21723__auto___25941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___25941,ch){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___25941,ch){
return (function (state_25911){
var state_val_25912 = (state_25911[(1)]);
if((state_val_25912 === (7))){
var inst_25907 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25913_25942 = state_25911__$1;
(statearr_25913_25942[(2)] = inst_25907);

(statearr_25913_25942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (1))){
var state_25911__$1 = state_25911;
var statearr_25914_25943 = state_25911__$1;
(statearr_25914_25943[(2)] = null);

(statearr_25914_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (4))){
var inst_25870 = (state_25911[(7)]);
var inst_25870__$1 = (state_25911[(2)]);
var state_25911__$1 = (function (){var statearr_25915 = state_25911;
(statearr_25915[(7)] = inst_25870__$1);

return statearr_25915;
})();
if(cljs.core.truth_(inst_25870__$1)){
var statearr_25916_25944 = state_25911__$1;
(statearr_25916_25944[(1)] = (5));

} else {
var statearr_25917_25945 = state_25911__$1;
(statearr_25917_25945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (15))){
var inst_25877 = (state_25911[(8)]);
var inst_25892 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25877);
var inst_25893 = cljs.core.first.call(null,inst_25892);
var inst_25894 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25893);
var inst_25895 = console.warn("Figwheel: Not loading code with warnings - ",inst_25894);
var state_25911__$1 = state_25911;
var statearr_25918_25946 = state_25911__$1;
(statearr_25918_25946[(2)] = inst_25895);

(statearr_25918_25946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (13))){
var inst_25900 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25919_25947 = state_25911__$1;
(statearr_25919_25947[(2)] = inst_25900);

(statearr_25919_25947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (6))){
var state_25911__$1 = state_25911;
var statearr_25920_25948 = state_25911__$1;
(statearr_25920_25948[(2)] = null);

(statearr_25920_25948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (17))){
var inst_25898 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25921_25949 = state_25911__$1;
(statearr_25921_25949[(2)] = inst_25898);

(statearr_25921_25949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (3))){
var inst_25909 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25911__$1,inst_25909);
} else {
if((state_val_25912 === (12))){
var inst_25876 = (state_25911[(9)]);
var inst_25890 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25876,opts);
var state_25911__$1 = state_25911;
if(cljs.core.truth_(inst_25890)){
var statearr_25922_25950 = state_25911__$1;
(statearr_25922_25950[(1)] = (15));

} else {
var statearr_25923_25951 = state_25911__$1;
(statearr_25923_25951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (2))){
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25911__$1,(4),ch);
} else {
if((state_val_25912 === (11))){
var inst_25877 = (state_25911[(8)]);
var inst_25882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25883 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25877);
var inst_25884 = cljs.core.async.timeout.call(null,(1000));
var inst_25885 = [inst_25883,inst_25884];
var inst_25886 = (new cljs.core.PersistentVector(null,2,(5),inst_25882,inst_25885,null));
var state_25911__$1 = state_25911;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25911__$1,(14),inst_25886);
} else {
if((state_val_25912 === (9))){
var state_25911__$1 = state_25911;
var statearr_25924_25952 = state_25911__$1;
(statearr_25924_25952[(2)] = null);

(statearr_25924_25952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (5))){
var inst_25870 = (state_25911[(7)]);
var inst_25872 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25873 = (new cljs.core.PersistentArrayMap(null,2,inst_25872,null));
var inst_25874 = (new cljs.core.PersistentHashSet(null,inst_25873,null));
var inst_25875 = figwheel.client.focus_msgs.call(null,inst_25874,inst_25870);
var inst_25876 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25875);
var inst_25877 = cljs.core.first.call(null,inst_25875);
var inst_25878 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_25911__$1 = (function (){var statearr_25925 = state_25911;
(statearr_25925[(9)] = inst_25876);

(statearr_25925[(8)] = inst_25877);

return statearr_25925;
})();
if(cljs.core.truth_(inst_25878)){
var statearr_25926_25953 = state_25911__$1;
(statearr_25926_25953[(1)] = (8));

} else {
var statearr_25927_25954 = state_25911__$1;
(statearr_25927_25954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (14))){
var inst_25888 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25928_25955 = state_25911__$1;
(statearr_25928_25955[(2)] = inst_25888);

(statearr_25928_25955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (16))){
var state_25911__$1 = state_25911;
var statearr_25929_25956 = state_25911__$1;
(statearr_25929_25956[(2)] = null);

(statearr_25929_25956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (10))){
var inst_25903 = (state_25911[(2)]);
var state_25911__$1 = (function (){var statearr_25930 = state_25911;
(statearr_25930[(10)] = inst_25903);

return statearr_25930;
})();
var statearr_25931_25957 = state_25911__$1;
(statearr_25931_25957[(2)] = null);

(statearr_25931_25957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (8))){
var inst_25876 = (state_25911[(9)]);
var inst_25880 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25876,opts);
var state_25911__$1 = state_25911;
if(cljs.core.truth_(inst_25880)){
var statearr_25932_25958 = state_25911__$1;
(statearr_25932_25958[(1)] = (11));

} else {
var statearr_25933_25959 = state_25911__$1;
(statearr_25933_25959[(1)] = (12));

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
}
}
}
});})(c__21723__auto___25941,ch))
;
return ((function (switch__21658__auto__,c__21723__auto___25941,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21659__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21659__auto____0 = (function (){
var statearr_25937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25937[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21659__auto__);

(statearr_25937[(1)] = (1));

return statearr_25937;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21659__auto____1 = (function (state_25911){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_25911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e25938){if((e25938 instanceof Object)){
var ex__21662__auto__ = e25938;
var statearr_25939_25960 = state_25911;
(statearr_25939_25960[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25961 = state_25911;
state_25911 = G__25961;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21659__auto__ = function(state_25911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21659__auto____1.call(this,state_25911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21659__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21659__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___25941,ch))
})();
var state__21725__auto__ = (function (){var statearr_25940 = f__21724__auto__.call(null);
(statearr_25940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___25941);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___25941,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25962_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25962_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25969 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25969){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25967 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25968 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25967,_STAR_print_newline_STAR_25968,base_path_25969){
return (function() { 
var G__25970__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25971__i = 0, G__25971__a = new Array(arguments.length -  0);
while (G__25971__i < G__25971__a.length) {G__25971__a[G__25971__i] = arguments[G__25971__i + 0]; ++G__25971__i;}
  args = new cljs.core.IndexedSeq(G__25971__a,0);
} 
return G__25970__delegate.call(this,args);};
G__25970.cljs$lang$maxFixedArity = 0;
G__25970.cljs$lang$applyTo = (function (arglist__25972){
var args = cljs.core.seq(arglist__25972);
return G__25970__delegate(args);
});
G__25970.cljs$core$IFn$_invoke$arity$variadic = G__25970__delegate;
return G__25970;
})()
;})(_STAR_print_fn_STAR_25967,_STAR_print_newline_STAR_25968,base_path_25969))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25968;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25967;
}}catch (e25966){if((e25966 instanceof Error)){
var e = e25966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25969], null));
} else {
var e = e25966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25969))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25973){
var map__25980 = p__25973;
var map__25980__$1 = ((((!((map__25980 == null)))?((((map__25980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25980):map__25980);
var opts = map__25980__$1;
var build_id = cljs.core.get.call(null,map__25980__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25980,map__25980__$1,opts,build_id){
return (function (p__25982){
var vec__25983 = p__25982;
var map__25984 = cljs.core.nth.call(null,vec__25983,(0),null);
var map__25984__$1 = ((((!((map__25984 == null)))?((((map__25984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25984):map__25984);
var msg = map__25984__$1;
var msg_name = cljs.core.get.call(null,map__25984__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25983,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25983,map__25984,map__25984__$1,msg,msg_name,_,map__25980,map__25980__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25983,map__25984,map__25984__$1,msg,msg_name,_,map__25980,map__25980__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25980,map__25980__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25990){
var vec__25991 = p__25990;
var map__25992 = cljs.core.nth.call(null,vec__25991,(0),null);
var map__25992__$1 = ((((!((map__25992 == null)))?((((map__25992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25992):map__25992);
var msg = map__25992__$1;
var msg_name = cljs.core.get.call(null,map__25992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25991,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25994){
var map__26004 = p__25994;
var map__26004__$1 = ((((!((map__26004 == null)))?((((map__26004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26004):map__26004);
var on_compile_warning = cljs.core.get.call(null,map__26004__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26004__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26004,map__26004__$1,on_compile_warning,on_compile_fail){
return (function (p__26006){
var vec__26007 = p__26006;
var map__26008 = cljs.core.nth.call(null,vec__26007,(0),null);
var map__26008__$1 = ((((!((map__26008 == null)))?((((map__26008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26008):map__26008);
var msg = map__26008__$1;
var msg_name = cljs.core.get.call(null,map__26008__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26007,(1));
var pred__26010 = cljs.core._EQ_;
var expr__26011 = msg_name;
if(cljs.core.truth_(pred__26010.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26011))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26010.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26011))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26004,map__26004__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__,msg_hist,msg_names,msg){
return (function (state_26227){
var state_val_26228 = (state_26227[(1)]);
if((state_val_26228 === (7))){
var inst_26151 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26151)){
var statearr_26229_26275 = state_26227__$1;
(statearr_26229_26275[(1)] = (8));

} else {
var statearr_26230_26276 = state_26227__$1;
(statearr_26230_26276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (20))){
var inst_26221 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26231_26277 = state_26227__$1;
(statearr_26231_26277[(2)] = inst_26221);

(statearr_26231_26277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (27))){
var inst_26217 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26232_26278 = state_26227__$1;
(statearr_26232_26278[(2)] = inst_26217);

(statearr_26232_26278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (1))){
var inst_26144 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26144)){
var statearr_26233_26279 = state_26227__$1;
(statearr_26233_26279[(1)] = (2));

} else {
var statearr_26234_26280 = state_26227__$1;
(statearr_26234_26280[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (24))){
var inst_26219 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26235_26281 = state_26227__$1;
(statearr_26235_26281[(2)] = inst_26219);

(statearr_26235_26281[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (4))){
var inst_26225 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26227__$1,inst_26225);
} else {
if((state_val_26228 === (15))){
var inst_26223 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26236_26282 = state_26227__$1;
(statearr_26236_26282[(2)] = inst_26223);

(statearr_26236_26282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (21))){
var inst_26182 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26237_26283 = state_26227__$1;
(statearr_26237_26283[(2)] = inst_26182);

(statearr_26237_26283[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (31))){
var inst_26206 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26206)){
var statearr_26238_26284 = state_26227__$1;
(statearr_26238_26284[(1)] = (34));

} else {
var statearr_26239_26285 = state_26227__$1;
(statearr_26239_26285[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (32))){
var inst_26215 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26240_26286 = state_26227__$1;
(statearr_26240_26286[(2)] = inst_26215);

(statearr_26240_26286[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (33))){
var inst_26204 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26241_26287 = state_26227__$1;
(statearr_26241_26287[(2)] = inst_26204);

(statearr_26241_26287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (13))){
var inst_26165 = figwheel.client.heads_up.clear.call(null);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(16),inst_26165);
} else {
if((state_val_26228 === (22))){
var inst_26186 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26187 = figwheel.client.heads_up.append_message.call(null,inst_26186);
var state_26227__$1 = state_26227;
var statearr_26242_26288 = state_26227__$1;
(statearr_26242_26288[(2)] = inst_26187);

(statearr_26242_26288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (36))){
var inst_26213 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26243_26289 = state_26227__$1;
(statearr_26243_26289[(2)] = inst_26213);

(statearr_26243_26289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (29))){
var inst_26197 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26244_26290 = state_26227__$1;
(statearr_26244_26290[(2)] = inst_26197);

(statearr_26244_26290[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (6))){
var inst_26146 = (state_26227[(7)]);
var state_26227__$1 = state_26227;
var statearr_26245_26291 = state_26227__$1;
(statearr_26245_26291[(2)] = inst_26146);

(statearr_26245_26291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (28))){
var inst_26193 = (state_26227[(2)]);
var inst_26194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26195 = figwheel.client.heads_up.display_warning.call(null,inst_26194);
var state_26227__$1 = (function (){var statearr_26246 = state_26227;
(statearr_26246[(8)] = inst_26193);

return statearr_26246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(29),inst_26195);
} else {
if((state_val_26228 === (25))){
var inst_26191 = figwheel.client.heads_up.clear.call(null);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(28),inst_26191);
} else {
if((state_val_26228 === (34))){
var inst_26208 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(37),inst_26208);
} else {
if((state_val_26228 === (17))){
var inst_26173 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26247_26292 = state_26227__$1;
(statearr_26247_26292[(2)] = inst_26173);

(statearr_26247_26292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (3))){
var inst_26163 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26163)){
var statearr_26248_26293 = state_26227__$1;
(statearr_26248_26293[(1)] = (13));

} else {
var statearr_26249_26294 = state_26227__$1;
(statearr_26249_26294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (12))){
var inst_26159 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26250_26295 = state_26227__$1;
(statearr_26250_26295[(2)] = inst_26159);

(statearr_26250_26295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (2))){
var inst_26146 = (state_26227[(7)]);
var inst_26146__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26227__$1 = (function (){var statearr_26251 = state_26227;
(statearr_26251[(7)] = inst_26146__$1);

return statearr_26251;
})();
if(cljs.core.truth_(inst_26146__$1)){
var statearr_26252_26296 = state_26227__$1;
(statearr_26252_26296[(1)] = (5));

} else {
var statearr_26253_26297 = state_26227__$1;
(statearr_26253_26297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (23))){
var inst_26189 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26189)){
var statearr_26254_26298 = state_26227__$1;
(statearr_26254_26298[(1)] = (25));

} else {
var statearr_26255_26299 = state_26227__$1;
(statearr_26255_26299[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (35))){
var state_26227__$1 = state_26227;
var statearr_26256_26300 = state_26227__$1;
(statearr_26256_26300[(2)] = null);

(statearr_26256_26300[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (19))){
var inst_26184 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26184)){
var statearr_26257_26301 = state_26227__$1;
(statearr_26257_26301[(1)] = (22));

} else {
var statearr_26258_26302 = state_26227__$1;
(statearr_26258_26302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (11))){
var inst_26155 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26259_26303 = state_26227__$1;
(statearr_26259_26303[(2)] = inst_26155);

(statearr_26259_26303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (9))){
var inst_26157 = figwheel.client.heads_up.clear.call(null);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(12),inst_26157);
} else {
if((state_val_26228 === (5))){
var inst_26148 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26227__$1 = state_26227;
var statearr_26260_26304 = state_26227__$1;
(statearr_26260_26304[(2)] = inst_26148);

(statearr_26260_26304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (14))){
var inst_26175 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26175)){
var statearr_26261_26305 = state_26227__$1;
(statearr_26261_26305[(1)] = (18));

} else {
var statearr_26262_26306 = state_26227__$1;
(statearr_26262_26306[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (26))){
var inst_26199 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26199)){
var statearr_26263_26307 = state_26227__$1;
(statearr_26263_26307[(1)] = (30));

} else {
var statearr_26264_26308 = state_26227__$1;
(statearr_26264_26308[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (16))){
var inst_26167 = (state_26227[(2)]);
var inst_26168 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26169 = figwheel.client.format_messages.call(null,inst_26168);
var inst_26170 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26171 = figwheel.client.heads_up.display_error.call(null,inst_26169,inst_26170);
var state_26227__$1 = (function (){var statearr_26265 = state_26227;
(statearr_26265[(9)] = inst_26167);

return statearr_26265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(17),inst_26171);
} else {
if((state_val_26228 === (30))){
var inst_26201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26202 = figwheel.client.heads_up.display_warning.call(null,inst_26201);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(33),inst_26202);
} else {
if((state_val_26228 === (10))){
var inst_26161 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26266_26309 = state_26227__$1;
(statearr_26266_26309[(2)] = inst_26161);

(statearr_26266_26309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (18))){
var inst_26177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26178 = figwheel.client.format_messages.call(null,inst_26177);
var inst_26179 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26180 = figwheel.client.heads_up.display_error.call(null,inst_26178,inst_26179);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(21),inst_26180);
} else {
if((state_val_26228 === (37))){
var inst_26210 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26267_26310 = state_26227__$1;
(statearr_26267_26310[(2)] = inst_26210);

(statearr_26267_26310[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (8))){
var inst_26153 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(11),inst_26153);
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
}
}
}
});})(c__21723__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21658__auto__,c__21723__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto____0 = (function (){
var statearr_26271 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26271[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto__);

(statearr_26271[(1)] = (1));

return statearr_26271;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto____1 = (function (state_26227){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_26227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e26272){if((e26272 instanceof Object)){
var ex__21662__auto__ = e26272;
var statearr_26273_26311 = state_26227;
(statearr_26273_26311[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26312 = state_26227;
state_26227 = G__26312;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto__ = function(state_26227){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto____1.call(this,state_26227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__,msg_hist,msg_names,msg))
})();
var state__21725__auto__ = (function (){var statearr_26274 = f__21724__auto__.call(null);
(statearr_26274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_26274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__,msg_hist,msg_names,msg))
);

return c__21723__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21723__auto___26375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___26375,ch){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___26375,ch){
return (function (state_26358){
var state_val_26359 = (state_26358[(1)]);
if((state_val_26359 === (1))){
var state_26358__$1 = state_26358;
var statearr_26360_26376 = state_26358__$1;
(statearr_26360_26376[(2)] = null);

(statearr_26360_26376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (2))){
var state_26358__$1 = state_26358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26358__$1,(4),ch);
} else {
if((state_val_26359 === (3))){
var inst_26356 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26358__$1,inst_26356);
} else {
if((state_val_26359 === (4))){
var inst_26346 = (state_26358[(7)]);
var inst_26346__$1 = (state_26358[(2)]);
var state_26358__$1 = (function (){var statearr_26361 = state_26358;
(statearr_26361[(7)] = inst_26346__$1);

return statearr_26361;
})();
if(cljs.core.truth_(inst_26346__$1)){
var statearr_26362_26377 = state_26358__$1;
(statearr_26362_26377[(1)] = (5));

} else {
var statearr_26363_26378 = state_26358__$1;
(statearr_26363_26378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (5))){
var inst_26346 = (state_26358[(7)]);
var inst_26348 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26346);
var state_26358__$1 = state_26358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26358__$1,(8),inst_26348);
} else {
if((state_val_26359 === (6))){
var state_26358__$1 = state_26358;
var statearr_26364_26379 = state_26358__$1;
(statearr_26364_26379[(2)] = null);

(statearr_26364_26379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (7))){
var inst_26354 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
var statearr_26365_26380 = state_26358__$1;
(statearr_26365_26380[(2)] = inst_26354);

(statearr_26365_26380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (8))){
var inst_26350 = (state_26358[(2)]);
var state_26358__$1 = (function (){var statearr_26366 = state_26358;
(statearr_26366[(8)] = inst_26350);

return statearr_26366;
})();
var statearr_26367_26381 = state_26358__$1;
(statearr_26367_26381[(2)] = null);

(statearr_26367_26381[(1)] = (2));


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
});})(c__21723__auto___26375,ch))
;
return ((function (switch__21658__auto__,c__21723__auto___26375,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21659__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21659__auto____0 = (function (){
var statearr_26371 = [null,null,null,null,null,null,null,null,null];
(statearr_26371[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21659__auto__);

(statearr_26371[(1)] = (1));

return statearr_26371;
});
var figwheel$client$heads_up_plugin_$_state_machine__21659__auto____1 = (function (state_26358){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_26358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e26372){if((e26372 instanceof Object)){
var ex__21662__auto__ = e26372;
var statearr_26373_26382 = state_26358;
(statearr_26373_26382[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26383 = state_26358;
state_26358 = G__26383;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21659__auto__ = function(state_26358){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21659__auto____1.call(this,state_26358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21659__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21659__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___26375,ch))
})();
var state__21725__auto__ = (function (){var statearr_26374 = f__21724__auto__.call(null);
(statearr_26374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___26375);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___26375,ch))
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
var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__){
return (function (state_26404){
var state_val_26405 = (state_26404[(1)]);
if((state_val_26405 === (1))){
var inst_26399 = cljs.core.async.timeout.call(null,(3000));
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26404__$1,(2),inst_26399);
} else {
if((state_val_26405 === (2))){
var inst_26401 = (state_26404[(2)]);
var inst_26402 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26404__$1 = (function (){var statearr_26406 = state_26404;
(statearr_26406[(7)] = inst_26401);

return statearr_26406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26404__$1,inst_26402);
} else {
return null;
}
}
});})(c__21723__auto__))
;
return ((function (switch__21658__auto__,c__21723__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21659__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21659__auto____0 = (function (){
var statearr_26410 = [null,null,null,null,null,null,null,null];
(statearr_26410[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21659__auto__);

(statearr_26410[(1)] = (1));

return statearr_26410;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21659__auto____1 = (function (state_26404){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_26404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e26411){if((e26411 instanceof Object)){
var ex__21662__auto__ = e26411;
var statearr_26412_26414 = state_26404;
(statearr_26412_26414[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26415 = state_26404;
state_26404 = G__26415;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21659__auto__ = function(state_26404){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21659__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21659__auto____1.call(this,state_26404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21659__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21659__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__))
})();
var state__21725__auto__ = (function (){var statearr_26413 = f__21724__auto__.call(null);
(statearr_26413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_26413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__))
);

return c__21723__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26416){
var map__26423 = p__26416;
var map__26423__$1 = ((((!((map__26423 == null)))?((((map__26423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26423):map__26423);
var ed = map__26423__$1;
var formatted_exception = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26425_26429 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26426_26430 = null;
var count__26427_26431 = (0);
var i__26428_26432 = (0);
while(true){
if((i__26428_26432 < count__26427_26431)){
var msg_26433 = cljs.core._nth.call(null,chunk__26426_26430,i__26428_26432);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26433);

var G__26434 = seq__26425_26429;
var G__26435 = chunk__26426_26430;
var G__26436 = count__26427_26431;
var G__26437 = (i__26428_26432 + (1));
seq__26425_26429 = G__26434;
chunk__26426_26430 = G__26435;
count__26427_26431 = G__26436;
i__26428_26432 = G__26437;
continue;
} else {
var temp__4425__auto___26438 = cljs.core.seq.call(null,seq__26425_26429);
if(temp__4425__auto___26438){
var seq__26425_26439__$1 = temp__4425__auto___26438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26425_26439__$1)){
var c__19324__auto___26440 = cljs.core.chunk_first.call(null,seq__26425_26439__$1);
var G__26441 = cljs.core.chunk_rest.call(null,seq__26425_26439__$1);
var G__26442 = c__19324__auto___26440;
var G__26443 = cljs.core.count.call(null,c__19324__auto___26440);
var G__26444 = (0);
seq__26425_26429 = G__26441;
chunk__26426_26430 = G__26442;
count__26427_26431 = G__26443;
i__26428_26432 = G__26444;
continue;
} else {
var msg_26445 = cljs.core.first.call(null,seq__26425_26439__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26445);

var G__26446 = cljs.core.next.call(null,seq__26425_26439__$1);
var G__26447 = null;
var G__26448 = (0);
var G__26449 = (0);
seq__26425_26429 = G__26446;
chunk__26426_26430 = G__26447;
count__26427_26431 = G__26448;
i__26428_26432 = G__26449;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26450){
var map__26453 = p__26450;
var map__26453__$1 = ((((!((map__26453 == null)))?((((map__26453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26453):map__26453);
var w = map__26453__$1;
var message = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18528__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18528__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18528__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26461 = cljs.core.seq.call(null,plugins);
var chunk__26462 = null;
var count__26463 = (0);
var i__26464 = (0);
while(true){
if((i__26464 < count__26463)){
var vec__26465 = cljs.core._nth.call(null,chunk__26462,i__26464);
var k = cljs.core.nth.call(null,vec__26465,(0),null);
var plugin = cljs.core.nth.call(null,vec__26465,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26467 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26461,chunk__26462,count__26463,i__26464,pl_26467,vec__26465,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26467.call(null,msg_hist);
});})(seq__26461,chunk__26462,count__26463,i__26464,pl_26467,vec__26465,k,plugin))
);
} else {
}

var G__26468 = seq__26461;
var G__26469 = chunk__26462;
var G__26470 = count__26463;
var G__26471 = (i__26464 + (1));
seq__26461 = G__26468;
chunk__26462 = G__26469;
count__26463 = G__26470;
i__26464 = G__26471;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26461);
if(temp__4425__auto__){
var seq__26461__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26461__$1)){
var c__19324__auto__ = cljs.core.chunk_first.call(null,seq__26461__$1);
var G__26472 = cljs.core.chunk_rest.call(null,seq__26461__$1);
var G__26473 = c__19324__auto__;
var G__26474 = cljs.core.count.call(null,c__19324__auto__);
var G__26475 = (0);
seq__26461 = G__26472;
chunk__26462 = G__26473;
count__26463 = G__26474;
i__26464 = G__26475;
continue;
} else {
var vec__26466 = cljs.core.first.call(null,seq__26461__$1);
var k = cljs.core.nth.call(null,vec__26466,(0),null);
var plugin = cljs.core.nth.call(null,vec__26466,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26476 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26461,chunk__26462,count__26463,i__26464,pl_26476,vec__26466,k,plugin,seq__26461__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26476.call(null,msg_hist);
});})(seq__26461,chunk__26462,count__26463,i__26464,pl_26476,vec__26466,k,plugin,seq__26461__$1,temp__4425__auto__))
);
} else {
}

var G__26477 = cljs.core.next.call(null,seq__26461__$1);
var G__26478 = null;
var G__26479 = (0);
var G__26480 = (0);
seq__26461 = G__26477;
chunk__26462 = G__26478;
count__26463 = G__26479;
i__26464 = G__26480;
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
var args26481 = [];
var len__19579__auto___26484 = arguments.length;
var i__19580__auto___26485 = (0);
while(true){
if((i__19580__auto___26485 < len__19579__auto___26484)){
args26481.push((arguments[i__19580__auto___26485]));

var G__26486 = (i__19580__auto___26485 + (1));
i__19580__auto___26485 = G__26486;
continue;
} else {
}
break;
}

var G__26483 = args26481.length;
switch (G__26483) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26481.length)].join('')));

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
var args__19586__auto__ = [];
var len__19579__auto___26492 = arguments.length;
var i__19580__auto___26493 = (0);
while(true){
if((i__19580__auto___26493 < len__19579__auto___26492)){
args__19586__auto__.push((arguments[i__19580__auto___26493]));

var G__26494 = (i__19580__auto___26493 + (1));
i__19580__auto___26493 = G__26494;
continue;
} else {
}
break;
}

var argseq__19587__auto__ = ((((0) < args__19586__auto__.length))?(new cljs.core.IndexedSeq(args__19586__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19587__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26489){
var map__26490 = p__26489;
var map__26490__$1 = ((((!((map__26490 == null)))?((((map__26490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26490):map__26490);
var opts = map__26490__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26488){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26488));
});

//# sourceMappingURL=client.js.map