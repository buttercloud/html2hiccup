// Compiled by ClojureScript 0.0-2371
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('hickory.utils');
goog.require('hickory.utils');
hickory.core.HiccupRepresentable = (function (){var obj16361 = {};return obj16361;
})();
hickory.core.as_hiccup = (function as_hiccup(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (hickory.core.as_hiccup[(function (){var G__16365 = x__4277__auto__;return goog.typeOf(G__16365);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (hickory.core.as_hiccup["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
})().call(null,this$);
}
});
hickory.core.HickoryRepresentable = (function (){var obj16367 = {};return obj16367;
})();
hickory.core.as_hickory = (function as_hickory(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (hickory.core.as_hickory[(function (){var G__16371 = x__4277__auto__;return goog.typeOf(G__16371);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (hickory.core.as_hickory["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
})().call(null,this$);
}
});
hickory.core.node_type = (function node_type(type){return (Node[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"_NODE")]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.extend_type_with_seqable = (function extend_type_with_seqable(t){t.prototype.cljs$core$ISeqable$ = true;
return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){var array__$1 = this;return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(array__$1);
});
});
hickory.core.extend_type_with_seqable(NodeList);
if(typeof NamedNodeMap !== 'undefined')
{hickory.core.extend_type_with_seqable(NamedNodeMap);
} else
{}
if(typeof MozNamedAttrMap !== 'undefined')
{hickory.core.extend_type_with_seqable(MozNamedAttrMap);
} else
{}
hickory.core.format_doctype = (function format_doctype(dt){var name = (dt["name"]);var publicId = (dt["publicId"]);var systemId = (dt["systemId"]);if(!(cljs.core.empty_QMARK_(publicId)))
{var G__16376 = "<!DOCTYPE %s PUBLIC \"%s\" \"%s\">";var G__16377 = name;var G__16378 = publicId;var G__16379 = systemId;return goog.string.format(G__16376,G__16377,G__16378,G__16379);
} else
{return ("<!DOCTYPE "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+">");
}
});
(hickory.core.HiccupRepresentable["object"] = true);
(hickory.core.as_hiccup["object"] = (function (this$){var pred__16381 = cljs.core._EQ_;var expr__16382 = (this$["nodeType"]);if(cljs.core.truth_((function (){var G__16384 = hickory.core.Attribute;var G__16385 = expr__16382;return (pred__16381.cljs$core$IFn$_invoke$arity$2 ? pred__16381.cljs$core$IFn$_invoke$arity$2(G__16384,G__16385) : pred__16381.call(null,G__16384,G__16385));
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else
{if(cljs.core.truth_((function (){var G__16386 = hickory.core.Comment;var G__16387 = expr__16382;return (pred__16381.cljs$core$IFn$_invoke$arity$2 ? pred__16381.cljs$core$IFn$_invoke$arity$2(G__16386,G__16387) : pred__16381.call(null,G__16386,G__16387));
})()))
{return ("<!--"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"]))+"-->");
} else
{if(cljs.core.truth_((function (){var G__16388 = hickory.core.Document;var G__16389 = expr__16382;return (pred__16381.cljs$core$IFn$_invoke$arity$2 ? pred__16381.cljs$core$IFn$_invoke$arity$2(G__16388,G__16389) : pred__16381.call(null,G__16388,G__16389));
})()))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"]));
} else
{if(cljs.core.truth_((function (){var G__16390 = hickory.core.DocumentType;var G__16391 = expr__16382;return (pred__16381.cljs$core$IFn$_invoke$arity$2 ? pred__16381.cljs$core$IFn$_invoke$arity$2(G__16390,G__16391) : pred__16381.call(null,G__16390,G__16391));
})()))
{return hickory.core.format_doctype(this$);
} else
{if(cljs.core.truth_((function (){var G__16392 = hickory.core.Element;var G__16393 = expr__16382;return (pred__16381.cljs$core$IFn$_invoke$arity$2 ? pred__16381.cljs$core$IFn$_invoke$arity$2(G__16392,G__16393) : pred__16381.call(null,G__16392,G__16393));
})()))
{var tag = hickory.utils.lower_case_keyword((this$["tagName"]));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_((function (){var G__16394 = tag;return (hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(G__16394) : hickory.utils.unescapable_content.call(null,G__16394));
})())?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tag,pred__16381,expr__16382){
return (function (p1__16380_SHARP_){return (p1__16380_SHARP_["wholeText"]);
});})(tag,pred__16381,expr__16382))
,(this$["childNodes"])):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"])))));
} else
{if(cljs.core.truth_((function (){var G__16395 = hickory.core.Text;var G__16396 = expr__16382;return (pred__16381.cljs$core$IFn$_invoke$arity$2 ? pred__16381.cljs$core$IFn$_invoke$arity$2(G__16395,G__16396) : pred__16381.call(null,G__16395,G__16396));
})()))
{return hickory.utils.html_escape((this$["wholeText"]));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16382))));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);
(hickory.core.as_hickory["object"] = (function (this$){var pred__16397 = cljs.core._EQ_;var expr__16398 = (this$["nodeType"]);if(cljs.core.truth_((function (){var G__16400 = hickory.core.Attribute;var G__16401 = expr__16398;return (pred__16397.cljs$core$IFn$_invoke$arity$2 ? pred__16397.cljs$core$IFn$_invoke$arity$2(G__16400,G__16401) : pred__16397.call(null,G__16400,G__16401));
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else
{if(cljs.core.truth_((function (){var G__16402 = hickory.core.Comment;var G__16403 = expr__16398;return (pred__16397.cljs$core$IFn$_invoke$arity$2 ? pred__16397.cljs$core$IFn$_invoke$arity$2(G__16402,G__16403) : pred__16397.call(null,G__16402,G__16403));
})()))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,cljs.core.constant$keyword$55,cljs.core.constant$keyword$30,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else
{if(cljs.core.truth_((function (){var G__16404 = hickory.core.Document;var G__16405 = expr__16398;return (pred__16397.cljs$core$IFn$_invoke$arity$2 ? pred__16397.cljs$core$IFn$_invoke$arity$2(G__16404,G__16405) : pred__16397.call(null,G__16404,G__16405));
})()))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,cljs.core.constant$keyword$56,cljs.core.constant$keyword$30,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else
{if(cljs.core.truth_((function (){var G__16406 = hickory.core.DocumentType;var G__16407 = expr__16398;return (pred__16397.cljs$core$IFn$_invoke$arity$2 ? pred__16397.cljs$core$IFn$_invoke$arity$2(G__16406,G__16407) : pred__16397.call(null,G__16406,G__16407));
})()))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,cljs.core.constant$keyword$58,cljs.core.constant$keyword$57,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$59,(this$["name"]),cljs.core.constant$keyword$60,(this$["publicId"]),cljs.core.constant$keyword$61,(this$["systemId"])], null)], null);
} else
{if(cljs.core.truth_((function (){var G__16408 = hickory.core.Element;var G__16409 = expr__16398;return (pred__16397.cljs$core$IFn$_invoke$arity$2 ? pred__16397.cljs$core$IFn$_invoke$arity$2(G__16408,G__16409) : pred__16397.call(null,G__16408,G__16409));
})()))
{return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$54,cljs.core.constant$keyword$63,cljs.core.constant$keyword$57,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["attributes"])))),cljs.core.constant$keyword$62,hickory.utils.lower_case_keyword((this$["tagName"])),cljs.core.constant$keyword$30,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else
{if(cljs.core.truth_((function (){var G__16410 = hickory.core.Text;var G__16411 = expr__16398;return (pred__16397.cljs$core$IFn$_invoke$arity$2 ? pred__16397.cljs$core$IFn$_invoke$arity$2(G__16410,G__16411) : pred__16397.call(null,G__16410,G__16411));
})()))
{return (this$["wholeText"]);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16398))));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function extract_doctype(s){var temp__4126__auto__ = cljs.core.second((function (){var or__3640__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());if(cljs.core.truth_(temp__4126__auto__))
{var doctype = temp__4126__auto__;return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else
{return null;
}
});
hickory.core.remove_el = (function remove_el(el){return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function parse_dom_with_domparser(s){if(typeof DOMParser !== 'undefined')
{return (new DOMParser()).parseFromString(s,"text/html");
} else
{return null;
}
});
/**
* Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
*/
hickory.core.parse_dom_with_write = (function parse_dom_with_write(s){var doc = document.implementation.createHTMLDocument("");var doctype_el = (doc["doctype"]);if(cljs.core.truth_(hickory.core.extract_doctype(s)))
{} else
{hickory.core.remove_el(doctype_el);
}
var temp__4126__auto___16412 = cljs.core.first((doc["head"]["childNodes"]));if(cljs.core.truth_(temp__4126__auto___16412))
{var title_el_16413 = temp__4126__auto___16412;if(cljs.core.empty_QMARK_((title_el_16413["text"])))
{hickory.core.remove_el(title_el_16413);
} else
{}
} else
{}
doc.write(s);
return doc;
});
/**
* Parse an entire HTML document into a DOM structure that can be
* used as input to as-hiccup or as-hickory.
*/
hickory.core.parse = (function parse(s){var or__3640__auto__ = hickory.core.parse_dom_with_domparser(s);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return hickory.core.parse_dom_with_write(s);
}
});
/**
* Parse an HTML fragment (some group of tags that might be at home somewhere
* in the tag hierarchy under <body>) into a list of DOM elements that can
* each be passed as input to as-hiccup or as-hickory.
*/
hickory.core.parse_fragment = (function parse_fragment(s){return (hickory.core.parse(s)["body"]["childNodes"]);
});
