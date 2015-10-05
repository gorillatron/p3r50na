// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26882_26896 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26883_26897 = null;
var count__26884_26898 = (0);
var i__26885_26899 = (0);
while(true){
if((i__26885_26899 < count__26884_26898)){
var f_26900 = cljs.core._nth.call(null,chunk__26883_26897,i__26885_26899);
cljs.core.println.call(null,"  ",f_26900);

var G__26901 = seq__26882_26896;
var G__26902 = chunk__26883_26897;
var G__26903 = count__26884_26898;
var G__26904 = (i__26885_26899 + (1));
seq__26882_26896 = G__26901;
chunk__26883_26897 = G__26902;
count__26884_26898 = G__26903;
i__26885_26899 = G__26904;
continue;
} else {
var temp__4425__auto___26905 = cljs.core.seq.call(null,seq__26882_26896);
if(temp__4425__auto___26905){
var seq__26882_26906__$1 = temp__4425__auto___26905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26882_26906__$1)){
var c__19324__auto___26907 = cljs.core.chunk_first.call(null,seq__26882_26906__$1);
var G__26908 = cljs.core.chunk_rest.call(null,seq__26882_26906__$1);
var G__26909 = c__19324__auto___26907;
var G__26910 = cljs.core.count.call(null,c__19324__auto___26907);
var G__26911 = (0);
seq__26882_26896 = G__26908;
chunk__26883_26897 = G__26909;
count__26884_26898 = G__26910;
i__26885_26899 = G__26911;
continue;
} else {
var f_26912 = cljs.core.first.call(null,seq__26882_26906__$1);
cljs.core.println.call(null,"  ",f_26912);

var G__26913 = cljs.core.next.call(null,seq__26882_26906__$1);
var G__26914 = null;
var G__26915 = (0);
var G__26916 = (0);
seq__26882_26896 = G__26913;
chunk__26883_26897 = G__26914;
count__26884_26898 = G__26915;
i__26885_26899 = G__26916;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26917 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18540__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26917);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26917)))?cljs.core.second.call(null,arglists_26917):arglists_26917));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26886 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26887 = null;
var count__26888 = (0);
var i__26889 = (0);
while(true){
if((i__26889 < count__26888)){
var vec__26890 = cljs.core._nth.call(null,chunk__26887,i__26889);
var name = cljs.core.nth.call(null,vec__26890,(0),null);
var map__26891 = cljs.core.nth.call(null,vec__26890,(1),null);
var map__26891__$1 = ((((!((map__26891 == null)))?((((map__26891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26891):map__26891);
var doc = cljs.core.get.call(null,map__26891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26918 = seq__26886;
var G__26919 = chunk__26887;
var G__26920 = count__26888;
var G__26921 = (i__26889 + (1));
seq__26886 = G__26918;
chunk__26887 = G__26919;
count__26888 = G__26920;
i__26889 = G__26921;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26886);
if(temp__4425__auto__){
var seq__26886__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26886__$1)){
var c__19324__auto__ = cljs.core.chunk_first.call(null,seq__26886__$1);
var G__26922 = cljs.core.chunk_rest.call(null,seq__26886__$1);
var G__26923 = c__19324__auto__;
var G__26924 = cljs.core.count.call(null,c__19324__auto__);
var G__26925 = (0);
seq__26886 = G__26922;
chunk__26887 = G__26923;
count__26888 = G__26924;
i__26889 = G__26925;
continue;
} else {
var vec__26893 = cljs.core.first.call(null,seq__26886__$1);
var name = cljs.core.nth.call(null,vec__26893,(0),null);
var map__26894 = cljs.core.nth.call(null,vec__26893,(1),null);
var map__26894__$1 = ((((!((map__26894 == null)))?((((map__26894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26894):map__26894);
var doc = cljs.core.get.call(null,map__26894__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26894__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26926 = cljs.core.next.call(null,seq__26886__$1);
var G__26927 = null;
var G__26928 = (0);
var G__26929 = (0);
seq__26886 = G__26926;
chunk__26887 = G__26927;
count__26888 = G__26928;
i__26889 = G__26929;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map