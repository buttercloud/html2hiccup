(ns html2hiccup.core
  (:require [hickory.core :refer [parse as-hiccup]]
            [clojure.string :as string]
            [dommy.core :as dommy :refer-macros [sel sel1]]))

(defonce cm
  (.fromTextArea js/CodeMirror (sel1 :#to-txt) #js {:lineNumbers true
                                                    :mode "clojure"
                                                    :indentWithTabs false
                                                    :tabSize 2
                                                    :readOnly true}))

(defn handle-parse [e]
  (let [hiccup (-> (.. e -target -value)
                   parse
                   as-hiccup
                   vec
                   str
                   (string/replace #"\"(\s*\\n\s*(\w)*)*\"" "$2") ;; remove weird "\n    "
                   (string/replace #"\[" "\n[") ;; start every opening [ on new line
                   (string/replace #" \{\}" "") ;; remove empty {}
                )]
    (.setValue cm hiccup)
    (.execCommand cm "selectAll")
    (.execCommand cm "indentAuto")))

(dommy/listen! (sel1 :#from-txt) :keyup handle-parse)
