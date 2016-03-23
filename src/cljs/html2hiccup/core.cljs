(ns html2hiccup.core
  (:require [hickory.core :refer [parse parse-fragment as-hiccup]]
            [clojure.string :as string]
            [cljsjs.codemirror]
            [cljsjs.codemirror.mode.xml]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.addon.edit.closetag]
            [cljsjs.codemirror.addon.edit.closebrackets]
            [cljsjs.codemirror.addon.edit.matchbrackets]))

(enable-console-print!)

(defonce cm-html
  (.fromTextArea js/CodeMirror 
                 (.getElementById js/document "from-txt") 
                 #js {:lineNumbers true
                      :mode "text/html"
                      :indentWithTabs false
                      :autoCloseTags true
                      :autoCloseBrackets true
                      :autofocus true
                      :tabSize 2}))
                      
(defonce cm-clojure
  (.fromTextArea js/CodeMirror 
                 (.getElementById js/document "to-txt") 
                 #js {:lineNumbers true
                      :mode "clojure"
                      :indentWithTabs false
                      :matchBrackets true
                      :tabSize 2}))

(defn html->hiccup [val snippet?]
  (if snippet?
    (map as-hiccup (parse-fragment val))
    (as-hiccup (parse val))))

(defn handle-parse [val]
  (-> val
      (html->hiccup true)
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
      (string/replace #"(\]+[ \t]+)+" (fn [m] (string/replace m #"\s+" "")))))

(.on cm-html "change"
  (fn [] 
    (.setValue cm-clojure (handle-parse (.getValue cm-html)))
    (.execCommand cm-clojure "selectAll")
    (.execCommand cm-clojure "indentAuto")))
