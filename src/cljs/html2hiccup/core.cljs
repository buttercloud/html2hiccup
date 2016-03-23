(ns html2hiccup.core
  (:require [hickory.core :refer [parse parse-fragment as-hiccup]]
            [clojure.string :as string]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [cljs.reader :refer [read-string]]))

(enable-console-print!)

(defonce cm
  (.fromTextArea js/CodeMirror 
                 (sel1 :#to-txt) 
                 #js {:lineNumbers true
                      :mode "clojure"
                      :indentWithTabs false
                      :tabSize 2
                      :readOnly true}))

(defn map-as-hiccup [frag]
  (map as-hiccup frag))

(defn handle-parse [e]
  (let [hiccup (-> (.. e -target -value)
                   ;(string/replace (re-pattern "\\s+(?![^<>]*(<\\/pre>|<\\/style>|<\\/textarea>))") "$1") ;; remove whitespace
                   parse-fragment
                   map-as-hiccup
                   str
                   ;; remove outer parens ()
                   (string/replace-first #"^\((.*)\)" "$1")
                   ;; remove weird "\n    "
                   (string/replace #"\"(\s*\\n\s*(\w)*)*\"" "$2")
                   ;; start every opening [ on new line
                   (string/replace #"\[" "\n[")
                   ;; remove empty {}
                   (string/replace #" \{\}" "")
                   ;; remove trailing whitespace and empty strings
                   (string/replace #"([\]\}])(\s*(\"\s*\"\s*)*)[\n]" "$1\n")
                   ;; remove initial \n
                   (string/replace-first #"^\n" "")
                   ;; remove whitespace between closing brackets;
                   (string/replace #"(\]+[ \t]+)+" (fn [m] (string/replace m #"\s+" ""))))]
    (.setValue cm hiccup)
    (.execCommand cm "selectAll")
    (.execCommand cm "indentAuto")))

(dommy/listen! (sel1 :#from-txt) :keyup handle-parse)
