// Compiled by ClojureScript 0.0-2371
goog.provide('hickory.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Elements that don't have a meaningful <tag></tag> form.
*/
hickory.utils.void_element = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.constant$keyword$37,null,cljs.core.constant$keyword$3,null,cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$39,null,cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null,cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null], null), null);
/**
* Elements whose content should never have html-escape codes.
*/
hickory.utils.unescapable_content = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,null,cljs.core.constant$keyword$53,null], null), null);
hickory.utils.html_escape = (function html_escape(s){var G__16415 = s;return goog.string.htmlEscape(G__16415);
});
hickory.utils.starts_with = (function starts_with(s,prefix){var G__16418 = s;var G__16419 = prefix;return goog.string.startsWith(G__16418,G__16419);
});
/**
* Converts its string argument into a lowercase keyword.
*/
hickory.utils.lower_case_keyword = (function lower_case_keyword(s){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(s));
});
/**
* Returns a string containing the HTML source for the doctype with given args.
* The second and third arguments can be nil or empty strings.
*/
hickory.utils.render_doctype = (function render_doctype(name,publicid,systemid){return ("<!DOCTYPE "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty(publicid))?(" PUBLIC \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(publicid)+"\""):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty(systemid))?(" \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(systemid)+"\""):null))+">");
});
