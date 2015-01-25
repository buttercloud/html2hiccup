// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_(data))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name(data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3640__auto__ = elem.textContent;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str(k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);if(cljs.core.seq(pixels))
{var G__15595 = pixels;return parseInt(G__15595);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$(elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index(class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.constant$keyword$15) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$16,r.top,cljs.core.constant$keyword$17,r.bottom,cljs.core.constant$keyword$18,r.left,cljs.core.constant$keyword$19,r.right,cljs.core.constant$keyword$20,r.width,cljs.core.constant$keyword$21,r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15598_SHARP_){return !((p1__15598_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
var style = elem.style;var seq__15608_15614 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));var chunk__15609_15615 = null;var count__15610_15616 = (0);var i__15611_15617 = (0);while(true){
if((i__15611_15617 < count__15610_15616))
{var vec__15612_15618 = chunk__15609_15615.cljs$core$IIndexed$_nth$arity$2(null,i__15611_15617);var k_15619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15612_15618,(0),null);var v_15620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15612_15618,(1),null);style.setProperty(dommy.utils.as_str(k_15619),v_15620);
{
var G__15621 = seq__15608_15614;
var G__15622 = chunk__15609_15615;
var G__15623 = count__15610_15616;
var G__15624 = (i__15611_15617 + (1));
seq__15608_15614 = G__15621;
chunk__15609_15615 = G__15622;
count__15610_15616 = G__15623;
i__15611_15617 = G__15624;
continue;
}
} else
{var temp__4126__auto___15625 = cljs.core.seq(seq__15608_15614);if(temp__4126__auto___15625)
{var seq__15608_15626__$1 = temp__4126__auto___15625;if(cljs.core.chunked_seq_QMARK_(seq__15608_15626__$1))
{var c__4410__auto___15627 = cljs.core.chunk_first(seq__15608_15626__$1);{
var G__15628 = cljs.core.chunk_rest(seq__15608_15626__$1);
var G__15629 = c__4410__auto___15627;
var G__15630 = cljs.core.count(c__4410__auto___15627);
var G__15631 = (0);
seq__15608_15614 = G__15628;
chunk__15609_15615 = G__15629;
count__15610_15616 = G__15630;
i__15611_15617 = G__15631;
continue;
}
} else
{var vec__15613_15632 = cljs.core.first(seq__15608_15626__$1);var k_15633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613_15632,(0),null);var v_15634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613_15632,(1),null);style.setProperty(dommy.utils.as_str(k_15633),v_15634);
{
var G__15635 = cljs.core.next(seq__15608_15626__$1);
var G__15636 = null;
var G__15637 = (0);
var G__15638 = (0);
seq__15608_15614 = G__15635;
chunk__15609_15615 = G__15636;
count__15610_15616 = G__15637;
i__15611_15617 = G__15638;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15639){
var elem = cljs.core.first(arglist__15639);
var kvs = cljs.core.rest(arglist__15639);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
var seq__15646_15652 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));var chunk__15647_15653 = null;var count__15648_15654 = (0);var i__15649_15655 = (0);while(true){
if((i__15649_15655 < count__15648_15654))
{var vec__15650_15656 = chunk__15647_15653.cljs$core$IIndexed$_nth$arity$2(null,i__15649_15655);var k_15657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15650_15656,(0),null);var v_15658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15650_15656,(1),null);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_15657,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15658)+"px")], 0));
{
var G__15659 = seq__15646_15652;
var G__15660 = chunk__15647_15653;
var G__15661 = count__15648_15654;
var G__15662 = (i__15649_15655 + (1));
seq__15646_15652 = G__15659;
chunk__15647_15653 = G__15660;
count__15648_15654 = G__15661;
i__15649_15655 = G__15662;
continue;
}
} else
{var temp__4126__auto___15663 = cljs.core.seq(seq__15646_15652);if(temp__4126__auto___15663)
{var seq__15646_15664__$1 = temp__4126__auto___15663;if(cljs.core.chunked_seq_QMARK_(seq__15646_15664__$1))
{var c__4410__auto___15665 = cljs.core.chunk_first(seq__15646_15664__$1);{
var G__15666 = cljs.core.chunk_rest(seq__15646_15664__$1);
var G__15667 = c__4410__auto___15665;
var G__15668 = cljs.core.count(c__4410__auto___15665);
var G__15669 = (0);
seq__15646_15652 = G__15666;
chunk__15647_15653 = G__15667;
count__15648_15654 = G__15668;
i__15649_15655 = G__15669;
continue;
}
} else
{var vec__15651_15670 = cljs.core.first(seq__15646_15664__$1);var k_15671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651_15670,(0),null);var v_15672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651_15670,(1),null);dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_15671,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15672)+"px")], 0));
{
var G__15673 = cljs.core.next(seq__15646_15664__$1);
var G__15674 = null;
var G__15675 = (0);
var G__15676 = (0);
seq__15646_15652 = G__15673;
chunk__15647_15653 = G__15674;
count__15648_15654 = G__15675;
i__15649_15655 = G__15676;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15677){
var elem = cljs.core.first(arglist__15677);
var kvs = cljs.core.rest(arglist__15677);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str(k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_(v))
{var G__15695 = elem;(G__15695[k__$1] = v);
return G__15695;
} else
{var G__15696 = elem;G__15696.setAttribute(k__$1,v);
return G__15696;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15703__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
var seq__15697_15704 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));var chunk__15698_15705 = null;var count__15699_15706 = (0);var i__15700_15707 = (0);while(true){
if((i__15700_15707 < count__15699_15706))
{var vec__15701_15708 = chunk__15698_15705.cljs$core$IIndexed$_nth$arity$2(null,i__15700_15707);var k_15709__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701_15708,(0),null);var v_15710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701_15708,(1),null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15709__$1,v_15710__$1);
{
var G__15711 = seq__15697_15704;
var G__15712 = chunk__15698_15705;
var G__15713 = count__15699_15706;
var G__15714 = (i__15700_15707 + (1));
seq__15697_15704 = G__15711;
chunk__15698_15705 = G__15712;
count__15699_15706 = G__15713;
i__15700_15707 = G__15714;
continue;
}
} else
{var temp__4126__auto___15715 = cljs.core.seq(seq__15697_15704);if(temp__4126__auto___15715)
{var seq__15697_15716__$1 = temp__4126__auto___15715;if(cljs.core.chunked_seq_QMARK_(seq__15697_15716__$1))
{var c__4410__auto___15717 = cljs.core.chunk_first(seq__15697_15716__$1);{
var G__15718 = cljs.core.chunk_rest(seq__15697_15716__$1);
var G__15719 = c__4410__auto___15717;
var G__15720 = cljs.core.count(c__4410__auto___15717);
var G__15721 = (0);
seq__15697_15704 = G__15718;
chunk__15698_15705 = G__15719;
count__15699_15706 = G__15720;
i__15700_15707 = G__15721;
continue;
}
} else
{var vec__15702_15722 = cljs.core.first(seq__15697_15716__$1);var k_15723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702_15722,(0),null);var v_15724__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702_15722,(1),null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15723__$1,v_15724__$1);
{
var G__15725 = cljs.core.next(seq__15697_15716__$1);
var G__15726 = null;
var G__15727 = (0);
var G__15728 = (0);
seq__15697_15704 = G__15725;
chunk__15698_15705 = G__15726;
count__15699_15706 = G__15727;
i__15700_15707 = G__15728;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__15703 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15703__delegate.call(this,elem,k,v,kvs);};
G__15703.cljs$lang$maxFixedArity = 3;
G__15703.cljs$lang$applyTo = (function (arglist__15729){
var elem = cljs.core.first(arglist__15729);
arglist__15729 = cljs.core.next(arglist__15729);
var k = cljs.core.first(arglist__15729);
arglist__15729 = cljs.core.next(arglist__15729);
var v = cljs.core.first(arglist__15729);
var kvs = cljs.core.rest(arglist__15729);
return G__15703__delegate(elem,k,v,kvs);
});
G__15703.cljs$core$IFn$_invoke$arity$variadic = G__15703__delegate;
return G__15703;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_15742__$1 = dommy.utils.as_str(k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_15742__$1)))
{dommy.core.set_class_BANG_(elem,"");
} else
{elem.removeAttribute(k_15742__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__15743__delegate = function (elem,k,ks){var seq__15738_15744 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__15739_15745 = null;var count__15740_15746 = (0);var i__15741_15747 = (0);while(true){
if((i__15741_15747 < count__15740_15746))
{var k_15748__$1 = chunk__15739_15745.cljs$core$IIndexed$_nth$arity$2(null,i__15741_15747);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15748__$1);
{
var G__15749 = seq__15738_15744;
var G__15750 = chunk__15739_15745;
var G__15751 = count__15740_15746;
var G__15752 = (i__15741_15747 + (1));
seq__15738_15744 = G__15749;
chunk__15739_15745 = G__15750;
count__15740_15746 = G__15751;
i__15741_15747 = G__15752;
continue;
}
} else
{var temp__4126__auto___15753 = cljs.core.seq(seq__15738_15744);if(temp__4126__auto___15753)
{var seq__15738_15754__$1 = temp__4126__auto___15753;if(cljs.core.chunked_seq_QMARK_(seq__15738_15754__$1))
{var c__4410__auto___15755 = cljs.core.chunk_first(seq__15738_15754__$1);{
var G__15756 = cljs.core.chunk_rest(seq__15738_15754__$1);
var G__15757 = c__4410__auto___15755;
var G__15758 = cljs.core.count(c__4410__auto___15755);
var G__15759 = (0);
seq__15738_15744 = G__15756;
chunk__15739_15745 = G__15757;
count__15740_15746 = G__15758;
i__15741_15747 = G__15759;
continue;
}
} else
{var k_15760__$1 = cljs.core.first(seq__15738_15754__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15760__$1);
{
var G__15761 = cljs.core.next(seq__15738_15754__$1);
var G__15762 = null;
var G__15763 = (0);
var G__15764 = (0);
seq__15738_15744 = G__15761;
chunk__15739_15745 = G__15762;
count__15740_15746 = G__15763;
i__15741_15747 = G__15764;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__15743 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15743__delegate.call(this,elem,k,ks);};
G__15743.cljs$lang$maxFixedArity = 2;
G__15743.cljs$lang$applyTo = (function (arglist__15765){
var elem = cljs.core.first(arglist__15765);
arglist__15765 = cljs.core.next(arglist__15765);
var k = cljs.core.first(arglist__15765);
var ks = cljs.core.rest(arglist__15765);
return G__15743__delegate(elem,k,ks);
});
G__15743.cljs$core$IFn$_invoke$arity$variadic = G__15743__delegate;
return G__15743;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else
{return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);if(cljs.core.seq(classes__$1))
{var temp__4124__auto___15797 = elem.classList;if(cljs.core.truth_(temp__4124__auto___15797))
{var class_list_15798 = temp__4124__auto___15797;var seq__15785_15799 = cljs.core.seq(classes__$1);var chunk__15786_15800 = null;var count__15787_15801 = (0);var i__15788_15802 = (0);while(true){
if((i__15788_15802 < count__15787_15801))
{var c_15803 = chunk__15786_15800.cljs$core$IIndexed$_nth$arity$2(null,i__15788_15802);class_list_15798.add(c_15803);
{
var G__15804 = seq__15785_15799;
var G__15805 = chunk__15786_15800;
var G__15806 = count__15787_15801;
var G__15807 = (i__15788_15802 + (1));
seq__15785_15799 = G__15804;
chunk__15786_15800 = G__15805;
count__15787_15801 = G__15806;
i__15788_15802 = G__15807;
continue;
}
} else
{var temp__4126__auto___15808 = cljs.core.seq(seq__15785_15799);if(temp__4126__auto___15808)
{var seq__15785_15809__$1 = temp__4126__auto___15808;if(cljs.core.chunked_seq_QMARK_(seq__15785_15809__$1))
{var c__4410__auto___15810 = cljs.core.chunk_first(seq__15785_15809__$1);{
var G__15811 = cljs.core.chunk_rest(seq__15785_15809__$1);
var G__15812 = c__4410__auto___15810;
var G__15813 = cljs.core.count(c__4410__auto___15810);
var G__15814 = (0);
seq__15785_15799 = G__15811;
chunk__15786_15800 = G__15812;
count__15787_15801 = G__15813;
i__15788_15802 = G__15814;
continue;
}
} else
{var c_15815 = cljs.core.first(seq__15785_15809__$1);class_list_15798.add(c_15815);
{
var G__15816 = cljs.core.next(seq__15785_15809__$1);
var G__15817 = null;
var G__15818 = (0);
var G__15819 = (0);
seq__15785_15799 = G__15816;
chunk__15786_15800 = G__15817;
count__15787_15801 = G__15818;
i__15788_15802 = G__15819;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__15789_15820 = cljs.core.seq(classes__$1);var chunk__15790_15821 = null;var count__15791_15822 = (0);var i__15792_15823 = (0);while(true){
if((i__15792_15823 < count__15791_15822))
{var c_15824 = chunk__15790_15821.cljs$core$IIndexed$_nth$arity$2(null,i__15792_15823);var class_name_15825 = dommy.core.class$(elem);if(cljs.core.truth_(dommy.utils.class_index(class_name_15825,c_15824)))
{} else
{dommy.core.set_class_BANG_(elem,(((class_name_15825 === ""))?c_15824:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15825)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15824))));
}
{
var G__15826 = seq__15789_15820;
var G__15827 = chunk__15790_15821;
var G__15828 = count__15791_15822;
var G__15829 = (i__15792_15823 + (1));
seq__15789_15820 = G__15826;
chunk__15790_15821 = G__15827;
count__15791_15822 = G__15828;
i__15792_15823 = G__15829;
continue;
}
} else
{var temp__4126__auto___15830 = cljs.core.seq(seq__15789_15820);if(temp__4126__auto___15830)
{var seq__15789_15831__$1 = temp__4126__auto___15830;if(cljs.core.chunked_seq_QMARK_(seq__15789_15831__$1))
{var c__4410__auto___15832 = cljs.core.chunk_first(seq__15789_15831__$1);{
var G__15833 = cljs.core.chunk_rest(seq__15789_15831__$1);
var G__15834 = c__4410__auto___15832;
var G__15835 = cljs.core.count(c__4410__auto___15832);
var G__15836 = (0);
seq__15789_15820 = G__15833;
chunk__15790_15821 = G__15834;
count__15791_15822 = G__15835;
i__15792_15823 = G__15836;
continue;
}
} else
{var c_15837 = cljs.core.first(seq__15789_15831__$1);var class_name_15838 = dommy.core.class$(elem);if(cljs.core.truth_(dommy.utils.class_index(class_name_15838,c_15837)))
{} else
{dommy.core.set_class_BANG_(elem,(((class_name_15838 === ""))?c_15837:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15838)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15837))));
}
{
var G__15839 = cljs.core.next(seq__15789_15831__$1);
var G__15840 = null;
var G__15841 = (0);
var G__15842 = (0);
seq__15789_15820 = G__15839;
chunk__15790_15821 = G__15840;
count__15791_15822 = G__15841;
i__15792_15823 = G__15842;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__15843__delegate = function (elem,classes,more_classes){var seq__15793_15844 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__15794_15845 = null;var count__15795_15846 = (0);var i__15796_15847 = (0);while(true){
if((i__15796_15847 < count__15795_15846))
{var c_15848 = chunk__15794_15845.cljs$core$IIndexed$_nth$arity$2(null,i__15796_15847);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15848);
{
var G__15849 = seq__15793_15844;
var G__15850 = chunk__15794_15845;
var G__15851 = count__15795_15846;
var G__15852 = (i__15796_15847 + (1));
seq__15793_15844 = G__15849;
chunk__15794_15845 = G__15850;
count__15795_15846 = G__15851;
i__15796_15847 = G__15852;
continue;
}
} else
{var temp__4126__auto___15853 = cljs.core.seq(seq__15793_15844);if(temp__4126__auto___15853)
{var seq__15793_15854__$1 = temp__4126__auto___15853;if(cljs.core.chunked_seq_QMARK_(seq__15793_15854__$1))
{var c__4410__auto___15855 = cljs.core.chunk_first(seq__15793_15854__$1);{
var G__15856 = cljs.core.chunk_rest(seq__15793_15854__$1);
var G__15857 = c__4410__auto___15855;
var G__15858 = cljs.core.count(c__4410__auto___15855);
var G__15859 = (0);
seq__15793_15844 = G__15856;
chunk__15794_15845 = G__15857;
count__15795_15846 = G__15858;
i__15796_15847 = G__15859;
continue;
}
} else
{var c_15860 = cljs.core.first(seq__15793_15854__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15860);
{
var G__15861 = cljs.core.next(seq__15793_15854__$1);
var G__15862 = null;
var G__15863 = (0);
var G__15864 = (0);
seq__15793_15844 = G__15861;
chunk__15794_15845 = G__15862;
count__15795_15846 = G__15863;
i__15796_15847 = G__15864;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__15843 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15843__delegate.call(this,elem,classes,more_classes);};
G__15843.cljs$lang$maxFixedArity = 2;
G__15843.cljs$lang$applyTo = (function (arglist__15865){
var elem = cljs.core.first(arglist__15865);
arglist__15865 = cljs.core.next(arglist__15865);
var classes = cljs.core.first(arglist__15865);
var more_classes = cljs.core.rest(arglist__15865);
return G__15843__delegate(elem,classes,more_classes);
});
G__15843.cljs$core$IFn$_invoke$arity$variadic = G__15843__delegate;
return G__15843;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto___15878 = elem.classList;if(cljs.core.truth_(temp__4124__auto___15878))
{var class_list_15879 = temp__4124__auto___15878;class_list_15879.remove(c__$1);
} else
{var class_name_15880 = dommy.core.class$(elem);var new_class_name_15881 = dommy.utils.remove_class_str(class_name_15880,c__$1);if((class_name_15880 === new_class_name_15881))
{} else
{dommy.core.set_class_BANG_(elem,new_class_name_15881);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__15882__delegate = function (elem,class$,classes){var seq__15874 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__15875 = null;var count__15876 = (0);var i__15877 = (0);while(true){
if((i__15877 < count__15876))
{var c = chunk__15875.cljs$core$IIndexed$_nth$arity$2(null,i__15877);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);
{
var G__15883 = seq__15874;
var G__15884 = chunk__15875;
var G__15885 = count__15876;
var G__15886 = (i__15877 + (1));
seq__15874 = G__15883;
chunk__15875 = G__15884;
count__15876 = G__15885;
i__15877 = G__15886;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15874);if(temp__4126__auto__)
{var seq__15874__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15874__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__15874__$1);{
var G__15887 = cljs.core.chunk_rest(seq__15874__$1);
var G__15888 = c__4410__auto__;
var G__15889 = cljs.core.count(c__4410__auto__);
var G__15890 = (0);
seq__15874 = G__15887;
chunk__15875 = G__15888;
count__15876 = G__15889;
i__15877 = G__15890;
continue;
}
} else
{var c = cljs.core.first(seq__15874__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);
{
var G__15891 = cljs.core.next(seq__15874__$1);
var G__15892 = null;
var G__15893 = (0);
var G__15894 = (0);
seq__15874 = G__15891;
chunk__15875 = G__15892;
count__15876 = G__15893;
i__15877 = G__15894;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__15882 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15882__delegate.call(this,elem,class$,classes);};
G__15882.cljs$lang$maxFixedArity = 2;
G__15882.cljs$lang$applyTo = (function (arglist__15895){
var elem = cljs.core.first(arglist__15895);
arglist__15895 = cljs.core.next(arglist__15895);
var class$ = cljs.core.first(arglist__15895);
var classes = cljs.core.rest(arglist__15895);
return G__15882__delegate(elem,class$,classes);
});
G__15882.cljs$core$IFn$_invoke$arity$variadic = G__15882__delegate;
return G__15882;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str(c);var temp__4124__auto___15899 = elem.classList;if(cljs.core.truth_(temp__4124__auto___15899))
{var class_list_15900 = temp__4124__auto___15899;class_list_15900.toggle(c__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else
{dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.constant$keyword$15,((show_QMARK_)?"":"none")], 0));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str(tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_(elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__15912 = parent;G__15912.appendChild(child);
return G__15912;
});
var append_BANG___3 = (function() { 
var G__15917__delegate = function (parent,child,more_children){var seq__15913_15918 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__15914_15919 = null;var count__15915_15920 = (0);var i__15916_15921 = (0);while(true){
if((i__15916_15921 < count__15915_15920))
{var c_15922 = chunk__15914_15919.cljs$core$IIndexed$_nth$arity$2(null,i__15916_15921);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15922);
{
var G__15923 = seq__15913_15918;
var G__15924 = chunk__15914_15919;
var G__15925 = count__15915_15920;
var G__15926 = (i__15916_15921 + (1));
seq__15913_15918 = G__15923;
chunk__15914_15919 = G__15924;
count__15915_15920 = G__15925;
i__15916_15921 = G__15926;
continue;
}
} else
{var temp__4126__auto___15927 = cljs.core.seq(seq__15913_15918);if(temp__4126__auto___15927)
{var seq__15913_15928__$1 = temp__4126__auto___15927;if(cljs.core.chunked_seq_QMARK_(seq__15913_15928__$1))
{var c__4410__auto___15929 = cljs.core.chunk_first(seq__15913_15928__$1);{
var G__15930 = cljs.core.chunk_rest(seq__15913_15928__$1);
var G__15931 = c__4410__auto___15929;
var G__15932 = cljs.core.count(c__4410__auto___15929);
var G__15933 = (0);
seq__15913_15918 = G__15930;
chunk__15914_15919 = G__15931;
count__15915_15920 = G__15932;
i__15916_15921 = G__15933;
continue;
}
} else
{var c_15934 = cljs.core.first(seq__15913_15928__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15934);
{
var G__15935 = cljs.core.next(seq__15913_15928__$1);
var G__15936 = null;
var G__15937 = (0);
var G__15938 = (0);
seq__15913_15918 = G__15935;
chunk__15914_15919 = G__15936;
count__15915_15920 = G__15937;
i__15916_15921 = G__15938;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__15917 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15917__delegate.call(this,parent,child,more_children);};
G__15917.cljs$lang$maxFixedArity = 2;
G__15917.cljs$lang$applyTo = (function (arglist__15939){
var parent = cljs.core.first(arglist__15939);
arglist__15939 = cljs.core.next(arglist__15939);
var child = cljs.core.first(arglist__15939);
var more_children = cljs.core.rest(arglist__15939);
return G__15917__delegate(parent,child,more_children);
});
G__15917.cljs$core$IFn$_invoke$arity$variadic = G__15917__delegate;
return G__15917;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__15949 = parent;G__15949.insertBefore(child,parent.firstChild);
return G__15949;
});
var prepend_BANG___3 = (function() { 
var G__15954__delegate = function (parent,child,more_children){var seq__15950_15955 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__15951_15956 = null;var count__15952_15957 = (0);var i__15953_15958 = (0);while(true){
if((i__15953_15958 < count__15952_15957))
{var c_15959 = chunk__15951_15956.cljs$core$IIndexed$_nth$arity$2(null,i__15953_15958);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15959);
{
var G__15960 = seq__15950_15955;
var G__15961 = chunk__15951_15956;
var G__15962 = count__15952_15957;
var G__15963 = (i__15953_15958 + (1));
seq__15950_15955 = G__15960;
chunk__15951_15956 = G__15961;
count__15952_15957 = G__15962;
i__15953_15958 = G__15963;
continue;
}
} else
{var temp__4126__auto___15964 = cljs.core.seq(seq__15950_15955);if(temp__4126__auto___15964)
{var seq__15950_15965__$1 = temp__4126__auto___15964;if(cljs.core.chunked_seq_QMARK_(seq__15950_15965__$1))
{var c__4410__auto___15966 = cljs.core.chunk_first(seq__15950_15965__$1);{
var G__15967 = cljs.core.chunk_rest(seq__15950_15965__$1);
var G__15968 = c__4410__auto___15966;
var G__15969 = cljs.core.count(c__4410__auto___15966);
var G__15970 = (0);
seq__15950_15955 = G__15967;
chunk__15951_15956 = G__15968;
count__15952_15957 = G__15969;
i__15953_15958 = G__15970;
continue;
}
} else
{var c_15971 = cljs.core.first(seq__15950_15965__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15971);
{
var G__15972 = cljs.core.next(seq__15950_15965__$1);
var G__15973 = null;
var G__15974 = (0);
var G__15975 = (0);
seq__15950_15955 = G__15972;
chunk__15951_15956 = G__15973;
count__15952_15957 = G__15974;
i__15953_15958 = G__15975;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__15954 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15954__delegate.call(this,parent,child,more_children);};
G__15954.cljs$lang$maxFixedArity = 2;
G__15954.cljs$lang$applyTo = (function (arglist__15976){
var parent = cljs.core.first(arglist__15976);
arglist__15976 = cljs.core.next(arglist__15976);
var child = cljs.core.first(arglist__15976);
var more_children = cljs.core.rest(arglist__15976);
return G__15954__delegate(parent,child,more_children);
});
G__15954.cljs$core$IFn$_invoke$arity$variadic = G__15954__delegate;
return G__15954;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent(other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___15977 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___15977))
{var next_15978 = temp__4124__auto___15977;dommy.core.insert_before_BANG_(elem,next_15978);
} else
{dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent(elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent(elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0))))));
}
return remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__15982 = p;G__15982.removeChild(elem);
return G__15982;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15983){var vec__15984 = p__15983;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15984,(0),null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15984,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__15984,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__15984,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3640__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3628__auto__ = related_target;if(cljs.core.truth_(and__3628__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3628__auto__;
}
})()))
{return null;
} else
{var G__15985 = event;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15985) : f.call(null,G__15985));
}
});
;})(vec__15984,special_mouse_event,real_mouse_event))
});})(vec__15984,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$22,cljs.core.constant$keyword$24,cljs.core.constant$keyword$23,cljs.core.constant$keyword$25], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);if(cljs.core.truth_((function (){var and__3628__auto__ = selected_target;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not(dommy.core.attr(selected_target,cljs.core.constant$keyword$26));
} else
{return and__3628__auto__;
}
})()))
{event.selectedTarget = selected_target;
var G__15987 = event;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15987) : f.call(null,G__15987));
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3640__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15988){
var elem = cljs.core.first(arglist__15988);
arglist__15988 = cljs.core.next(arglist__15988);
var f = cljs.core.first(arglist__15988);
var args = cljs.core.rest(arglist__15988);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0))))));
}
var vec__16016_16043 = dommy.core.elem_and_selector(elem_sel);var elem_16044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016_16043,(0),null);var selector_16045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016_16043,(1),null);var seq__16017_16046 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__16024_16047 = null;var count__16025_16048 = (0);var i__16026_16049 = (0);while(true){
if((i__16026_16049 < count__16025_16048))
{var vec__16033_16050 = chunk__16024_16047.cljs$core$IIndexed$_nth$arity$2(null,i__16026_16049);var orig_type_16051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16033_16050,(0),null);var f_16052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16033_16050,(1),null);var seq__16027_16053 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16051,new cljs.core.PersistentArrayMap.fromArray([orig_type_16051,cljs.core.identity], true, false)));var chunk__16029_16054 = null;var count__16030_16055 = (0);var i__16031_16056 = (0);while(true){
if((i__16031_16056 < count__16030_16055))
{var vec__16034_16057 = chunk__16029_16054.cljs$core$IIndexed$_nth$arity$2(null,i__16031_16056);var actual_type_16058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034_16057,(0),null);var factory_16059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034_16057,(1),null);var canonical_f_16060 = (cljs.core.truth_(selector_16045)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16044,selector_16045):cljs.core.identity).call(null,(function (){var G__16035 = f_16052;return (factory_16059.cljs$core$IFn$_invoke$arity$1 ? factory_16059.cljs$core$IFn$_invoke$arity$1(G__16035) : factory_16059.call(null,G__16035));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16044,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16045,actual_type_16058,f_16052], null),canonical_f_16060], 0));
if(cljs.core.truth_(elem_16044.addEventListener))
{elem_16044.addEventListener(cljs.core.name(actual_type_16058),canonical_f_16060);
} else
{elem_16044.attachEvent(cljs.core.name(actual_type_16058),canonical_f_16060);
}
{
var G__16061 = seq__16027_16053;
var G__16062 = chunk__16029_16054;
var G__16063 = count__16030_16055;
var G__16064 = (i__16031_16056 + (1));
seq__16027_16053 = G__16061;
chunk__16029_16054 = G__16062;
count__16030_16055 = G__16063;
i__16031_16056 = G__16064;
continue;
}
} else
{var temp__4126__auto___16065 = cljs.core.seq(seq__16027_16053);if(temp__4126__auto___16065)
{var seq__16027_16066__$1 = temp__4126__auto___16065;if(cljs.core.chunked_seq_QMARK_(seq__16027_16066__$1))
{var c__4410__auto___16067 = cljs.core.chunk_first(seq__16027_16066__$1);{
var G__16068 = cljs.core.chunk_rest(seq__16027_16066__$1);
var G__16069 = c__4410__auto___16067;
var G__16070 = cljs.core.count(c__4410__auto___16067);
var G__16071 = (0);
seq__16027_16053 = G__16068;
chunk__16029_16054 = G__16069;
count__16030_16055 = G__16070;
i__16031_16056 = G__16071;
continue;
}
} else
{var vec__16036_16072 = cljs.core.first(seq__16027_16066__$1);var actual_type_16073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16036_16072,(0),null);var factory_16074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16036_16072,(1),null);var canonical_f_16075 = (cljs.core.truth_(selector_16045)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16044,selector_16045):cljs.core.identity).call(null,(function (){var G__16037 = f_16052;return (factory_16074.cljs$core$IFn$_invoke$arity$1 ? factory_16074.cljs$core$IFn$_invoke$arity$1(G__16037) : factory_16074.call(null,G__16037));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16044,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16045,actual_type_16073,f_16052], null),canonical_f_16075], 0));
if(cljs.core.truth_(elem_16044.addEventListener))
{elem_16044.addEventListener(cljs.core.name(actual_type_16073),canonical_f_16075);
} else
{elem_16044.attachEvent(cljs.core.name(actual_type_16073),canonical_f_16075);
}
{
var G__16076 = cljs.core.next(seq__16027_16066__$1);
var G__16077 = null;
var G__16078 = (0);
var G__16079 = (0);
seq__16027_16053 = G__16076;
chunk__16029_16054 = G__16077;
count__16030_16055 = G__16078;
i__16031_16056 = G__16079;
continue;
}
}
} else
{}
}
break;
}
{
var G__16080 = seq__16017_16046;
var G__16081 = chunk__16024_16047;
var G__16082 = count__16025_16048;
var G__16083 = (i__16026_16049 + (1));
seq__16017_16046 = G__16080;
chunk__16024_16047 = G__16081;
count__16025_16048 = G__16082;
i__16026_16049 = G__16083;
continue;
}
} else
{var temp__4126__auto___16084 = cljs.core.seq(seq__16017_16046);if(temp__4126__auto___16084)
{var seq__16017_16085__$1 = temp__4126__auto___16084;if(cljs.core.chunked_seq_QMARK_(seq__16017_16085__$1))
{var c__4410__auto___16086 = cljs.core.chunk_first(seq__16017_16085__$1);{
var G__16087 = cljs.core.chunk_rest(seq__16017_16085__$1);
var G__16088 = c__4410__auto___16086;
var G__16089 = cljs.core.count(c__4410__auto___16086);
var G__16090 = (0);
seq__16017_16046 = G__16087;
chunk__16024_16047 = G__16088;
count__16025_16048 = G__16089;
i__16026_16049 = G__16090;
continue;
}
} else
{var vec__16038_16091 = cljs.core.first(seq__16017_16085__$1);var orig_type_16092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038_16091,(0),null);var f_16093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038_16091,(1),null);var seq__16018_16094 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16092,new cljs.core.PersistentArrayMap.fromArray([orig_type_16092,cljs.core.identity], true, false)));var chunk__16020_16095 = null;var count__16021_16096 = (0);var i__16022_16097 = (0);while(true){
if((i__16022_16097 < count__16021_16096))
{var vec__16039_16098 = chunk__16020_16095.cljs$core$IIndexed$_nth$arity$2(null,i__16022_16097);var actual_type_16099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16039_16098,(0),null);var factory_16100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16039_16098,(1),null);var canonical_f_16101 = (cljs.core.truth_(selector_16045)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16044,selector_16045):cljs.core.identity).call(null,(function (){var G__16040 = f_16093;return (factory_16100.cljs$core$IFn$_invoke$arity$1 ? factory_16100.cljs$core$IFn$_invoke$arity$1(G__16040) : factory_16100.call(null,G__16040));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16044,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16045,actual_type_16099,f_16093], null),canonical_f_16101], 0));
if(cljs.core.truth_(elem_16044.addEventListener))
{elem_16044.addEventListener(cljs.core.name(actual_type_16099),canonical_f_16101);
} else
{elem_16044.attachEvent(cljs.core.name(actual_type_16099),canonical_f_16101);
}
{
var G__16102 = seq__16018_16094;
var G__16103 = chunk__16020_16095;
var G__16104 = count__16021_16096;
var G__16105 = (i__16022_16097 + (1));
seq__16018_16094 = G__16102;
chunk__16020_16095 = G__16103;
count__16021_16096 = G__16104;
i__16022_16097 = G__16105;
continue;
}
} else
{var temp__4126__auto___16106__$1 = cljs.core.seq(seq__16018_16094);if(temp__4126__auto___16106__$1)
{var seq__16018_16107__$1 = temp__4126__auto___16106__$1;if(cljs.core.chunked_seq_QMARK_(seq__16018_16107__$1))
{var c__4410__auto___16108 = cljs.core.chunk_first(seq__16018_16107__$1);{
var G__16109 = cljs.core.chunk_rest(seq__16018_16107__$1);
var G__16110 = c__4410__auto___16108;
var G__16111 = cljs.core.count(c__4410__auto___16108);
var G__16112 = (0);
seq__16018_16094 = G__16109;
chunk__16020_16095 = G__16110;
count__16021_16096 = G__16111;
i__16022_16097 = G__16112;
continue;
}
} else
{var vec__16041_16113 = cljs.core.first(seq__16018_16107__$1);var actual_type_16114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16041_16113,(0),null);var factory_16115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16041_16113,(1),null);var canonical_f_16116 = (cljs.core.truth_(selector_16045)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16044,selector_16045):cljs.core.identity).call(null,(function (){var G__16042 = f_16093;return (factory_16115.cljs$core$IFn$_invoke$arity$1 ? factory_16115.cljs$core$IFn$_invoke$arity$1(G__16042) : factory_16115.call(null,G__16042));
})());dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16044,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16045,actual_type_16114,f_16093], null),canonical_f_16116], 0));
if(cljs.core.truth_(elem_16044.addEventListener))
{elem_16044.addEventListener(cljs.core.name(actual_type_16114),canonical_f_16116);
} else
{elem_16044.attachEvent(cljs.core.name(actual_type_16114),canonical_f_16116);
}
{
var G__16117 = cljs.core.next(seq__16018_16107__$1);
var G__16118 = null;
var G__16119 = (0);
var G__16120 = (0);
seq__16018_16094 = G__16117;
chunk__16020_16095 = G__16118;
count__16021_16096 = G__16119;
i__16022_16097 = G__16120;
continue;
}
}
} else
{}
}
break;
}
{
var G__16121 = cljs.core.next(seq__16017_16085__$1);
var G__16122 = null;
var G__16123 = (0);
var G__16124 = (0);
seq__16017_16046 = G__16121;
chunk__16024_16047 = G__16122;
count__16025_16048 = G__16123;
i__16026_16049 = G__16124;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__16125){
var elem_sel = cljs.core.first(arglist__16125);
var type_fs = cljs.core.rest(arglist__16125);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0))))));
}
var vec__16149_16172 = dommy.core.elem_and_selector(elem_sel);var elem_16173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149_16172,(0),null);var selector_16174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149_16172,(1),null);var seq__16150_16175 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__16157_16176 = null;var count__16158_16177 = (0);var i__16159_16178 = (0);while(true){
if((i__16159_16178 < count__16158_16177))
{var vec__16166_16179 = chunk__16157_16176.cljs$core$IIndexed$_nth$arity$2(null,i__16159_16178);var orig_type_16180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16166_16179,(0),null);var f_16181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16166_16179,(1),null);var seq__16160_16182 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16180,new cljs.core.PersistentArrayMap.fromArray([orig_type_16180,cljs.core.identity], true, false)));var chunk__16162_16183 = null;var count__16163_16184 = (0);var i__16164_16185 = (0);while(true){
if((i__16164_16185 < count__16163_16184))
{var vec__16167_16186 = chunk__16162_16183.cljs$core$IIndexed$_nth$arity$2(null,i__16164_16185);var actual_type_16187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167_16186,(0),null);var __16188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167_16186,(1),null);var keys_16189 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16174,actual_type_16187,f_16181], null);var canonical_f_16190 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16173),keys_16189);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16173,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16189], 0));
if(cljs.core.truth_(elem_16173.removeEventListener))
{elem_16173.removeEventListener(cljs.core.name(actual_type_16187),canonical_f_16190);
} else
{elem_16173.detachEvent(cljs.core.name(actual_type_16187),canonical_f_16190);
}
{
var G__16191 = seq__16160_16182;
var G__16192 = chunk__16162_16183;
var G__16193 = count__16163_16184;
var G__16194 = (i__16164_16185 + (1));
seq__16160_16182 = G__16191;
chunk__16162_16183 = G__16192;
count__16163_16184 = G__16193;
i__16164_16185 = G__16194;
continue;
}
} else
{var temp__4126__auto___16195 = cljs.core.seq(seq__16160_16182);if(temp__4126__auto___16195)
{var seq__16160_16196__$1 = temp__4126__auto___16195;if(cljs.core.chunked_seq_QMARK_(seq__16160_16196__$1))
{var c__4410__auto___16197 = cljs.core.chunk_first(seq__16160_16196__$1);{
var G__16198 = cljs.core.chunk_rest(seq__16160_16196__$1);
var G__16199 = c__4410__auto___16197;
var G__16200 = cljs.core.count(c__4410__auto___16197);
var G__16201 = (0);
seq__16160_16182 = G__16198;
chunk__16162_16183 = G__16199;
count__16163_16184 = G__16200;
i__16164_16185 = G__16201;
continue;
}
} else
{var vec__16168_16202 = cljs.core.first(seq__16160_16196__$1);var actual_type_16203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168_16202,(0),null);var __16204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168_16202,(1),null);var keys_16205 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16174,actual_type_16203,f_16181], null);var canonical_f_16206 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16173),keys_16205);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16173,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16205], 0));
if(cljs.core.truth_(elem_16173.removeEventListener))
{elem_16173.removeEventListener(cljs.core.name(actual_type_16203),canonical_f_16206);
} else
{elem_16173.detachEvent(cljs.core.name(actual_type_16203),canonical_f_16206);
}
{
var G__16207 = cljs.core.next(seq__16160_16196__$1);
var G__16208 = null;
var G__16209 = (0);
var G__16210 = (0);
seq__16160_16182 = G__16207;
chunk__16162_16183 = G__16208;
count__16163_16184 = G__16209;
i__16164_16185 = G__16210;
continue;
}
}
} else
{}
}
break;
}
{
var G__16211 = seq__16150_16175;
var G__16212 = chunk__16157_16176;
var G__16213 = count__16158_16177;
var G__16214 = (i__16159_16178 + (1));
seq__16150_16175 = G__16211;
chunk__16157_16176 = G__16212;
count__16158_16177 = G__16213;
i__16159_16178 = G__16214;
continue;
}
} else
{var temp__4126__auto___16215 = cljs.core.seq(seq__16150_16175);if(temp__4126__auto___16215)
{var seq__16150_16216__$1 = temp__4126__auto___16215;if(cljs.core.chunked_seq_QMARK_(seq__16150_16216__$1))
{var c__4410__auto___16217 = cljs.core.chunk_first(seq__16150_16216__$1);{
var G__16218 = cljs.core.chunk_rest(seq__16150_16216__$1);
var G__16219 = c__4410__auto___16217;
var G__16220 = cljs.core.count(c__4410__auto___16217);
var G__16221 = (0);
seq__16150_16175 = G__16218;
chunk__16157_16176 = G__16219;
count__16158_16177 = G__16220;
i__16159_16178 = G__16221;
continue;
}
} else
{var vec__16169_16222 = cljs.core.first(seq__16150_16216__$1);var orig_type_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16169_16222,(0),null);var f_16224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16169_16222,(1),null);var seq__16151_16225 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16223,new cljs.core.PersistentArrayMap.fromArray([orig_type_16223,cljs.core.identity], true, false)));var chunk__16153_16226 = null;var count__16154_16227 = (0);var i__16155_16228 = (0);while(true){
if((i__16155_16228 < count__16154_16227))
{var vec__16170_16229 = chunk__16153_16226.cljs$core$IIndexed$_nth$arity$2(null,i__16155_16228);var actual_type_16230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16170_16229,(0),null);var __16231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16170_16229,(1),null);var keys_16232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16174,actual_type_16230,f_16224], null);var canonical_f_16233 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16173),keys_16232);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16173,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16232], 0));
if(cljs.core.truth_(elem_16173.removeEventListener))
{elem_16173.removeEventListener(cljs.core.name(actual_type_16230),canonical_f_16233);
} else
{elem_16173.detachEvent(cljs.core.name(actual_type_16230),canonical_f_16233);
}
{
var G__16234 = seq__16151_16225;
var G__16235 = chunk__16153_16226;
var G__16236 = count__16154_16227;
var G__16237 = (i__16155_16228 + (1));
seq__16151_16225 = G__16234;
chunk__16153_16226 = G__16235;
count__16154_16227 = G__16236;
i__16155_16228 = G__16237;
continue;
}
} else
{var temp__4126__auto___16238__$1 = cljs.core.seq(seq__16151_16225);if(temp__4126__auto___16238__$1)
{var seq__16151_16239__$1 = temp__4126__auto___16238__$1;if(cljs.core.chunked_seq_QMARK_(seq__16151_16239__$1))
{var c__4410__auto___16240 = cljs.core.chunk_first(seq__16151_16239__$1);{
var G__16241 = cljs.core.chunk_rest(seq__16151_16239__$1);
var G__16242 = c__4410__auto___16240;
var G__16243 = cljs.core.count(c__4410__auto___16240);
var G__16244 = (0);
seq__16151_16225 = G__16241;
chunk__16153_16226 = G__16242;
count__16154_16227 = G__16243;
i__16155_16228 = G__16244;
continue;
}
} else
{var vec__16171_16245 = cljs.core.first(seq__16151_16239__$1);var actual_type_16246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171_16245,(0),null);var __16247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171_16245,(1),null);var keys_16248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16174,actual_type_16246,f_16224], null);var canonical_f_16249 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16173),keys_16248);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16173,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16248], 0));
if(cljs.core.truth_(elem_16173.removeEventListener))
{elem_16173.removeEventListener(cljs.core.name(actual_type_16246),canonical_f_16249);
} else
{elem_16173.detachEvent(cljs.core.name(actual_type_16246),canonical_f_16249);
}
{
var G__16250 = cljs.core.next(seq__16151_16239__$1);
var G__16251 = null;
var G__16252 = (0);
var G__16253 = (0);
seq__16151_16225 = G__16250;
chunk__16153_16226 = G__16251;
count__16154_16227 = G__16252;
i__16155_16228 = G__16253;
continue;
}
}
} else
{}
}
break;
}
{
var G__16254 = cljs.core.next(seq__16150_16216__$1);
var G__16255 = null;
var G__16256 = (0);
var G__16257 = (0);
seq__16150_16175 = G__16254;
chunk__16157_16176 = G__16255;
count__16158_16177 = G__16256;
i__16159_16178 = G__16257;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16258){
var elem_sel = cljs.core.first(arglist__16258);
var type_fs = cljs.core.rest(arglist__16258);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0))))));
}
var vec__16270_16281 = dommy.core.elem_and_selector(elem_sel);var elem_16282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270_16281,(0),null);var selector_16283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270_16281,(1),null);var seq__16271_16284 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));var chunk__16272_16285 = null;var count__16273_16286 = (0);var i__16274_16287 = (0);while(true){
if((i__16274_16287 < count__16273_16286))
{var vec__16275_16288 = chunk__16272_16285.cljs$core$IIndexed$_nth$arity$2(null,i__16274_16287);var type_16289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16275_16288,(0),null);var f_16290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16275_16288,(1),null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16289,((function (seq__16271_16284,chunk__16272_16285,count__16273_16286,i__16274_16287,vec__16275_16288,type_16289,f_16290,vec__16270_16281,elem_16282,selector_16283){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16289,this_fn], 0));
var G__16277 = e;return (f_16290.cljs$core$IFn$_invoke$arity$1 ? f_16290.cljs$core$IFn$_invoke$arity$1(G__16277) : f_16290.call(null,G__16277));
});})(seq__16271_16284,chunk__16272_16285,count__16273_16286,i__16274_16287,vec__16275_16288,type_16289,f_16290,vec__16270_16281,elem_16282,selector_16283))
], 0));
{
var G__16291 = seq__16271_16284;
var G__16292 = chunk__16272_16285;
var G__16293 = count__16273_16286;
var G__16294 = (i__16274_16287 + (1));
seq__16271_16284 = G__16291;
chunk__16272_16285 = G__16292;
count__16273_16286 = G__16293;
i__16274_16287 = G__16294;
continue;
}
} else
{var temp__4126__auto___16295 = cljs.core.seq(seq__16271_16284);if(temp__4126__auto___16295)
{var seq__16271_16296__$1 = temp__4126__auto___16295;if(cljs.core.chunked_seq_QMARK_(seq__16271_16296__$1))
{var c__4410__auto___16297 = cljs.core.chunk_first(seq__16271_16296__$1);{
var G__16298 = cljs.core.chunk_rest(seq__16271_16296__$1);
var G__16299 = c__4410__auto___16297;
var G__16300 = cljs.core.count(c__4410__auto___16297);
var G__16301 = (0);
seq__16271_16284 = G__16298;
chunk__16272_16285 = G__16299;
count__16273_16286 = G__16300;
i__16274_16287 = G__16301;
continue;
}
} else
{var vec__16278_16302 = cljs.core.first(seq__16271_16296__$1);var type_16303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278_16302,(0),null);var f_16304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278_16302,(1),null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16303,((function (seq__16271_16284,chunk__16272_16285,count__16273_16286,i__16274_16287,vec__16278_16302,type_16303,f_16304,seq__16271_16296__$1,temp__4126__auto___16295,vec__16270_16281,elem_16282,selector_16283){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16303,this_fn], 0));
var G__16280 = e;return (f_16304.cljs$core$IFn$_invoke$arity$1 ? f_16304.cljs$core$IFn$_invoke$arity$1(G__16280) : f_16304.call(null,G__16280));
});})(seq__16271_16284,chunk__16272_16285,count__16273_16286,i__16274_16287,vec__16278_16302,type_16303,f_16304,seq__16271_16296__$1,temp__4126__auto___16295,vec__16270_16281,elem_16282,selector_16283))
], 0));
{
var G__16305 = cljs.core.next(seq__16271_16296__$1);
var G__16306 = null;
var G__16307 = (0);
var G__16308 = (0);
seq__16271_16284 = G__16305;
chunk__16272_16285 = G__16306;
count__16273_16286 = G__16307;
i__16274_16287 = G__16308;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16309){
var elem_sel = cljs.core.first(arglist__16309);
var type_fs = cljs.core.rest(arglist__16309);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
