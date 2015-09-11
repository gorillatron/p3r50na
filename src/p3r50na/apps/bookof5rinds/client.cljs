(ns p3r50na.apps.bookof5rinds.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cljs.core.async :refer [put! chan <! timeout]]))

(enable-console-print!)


(def app-state (atom {
  :rindidates [ {:name "wat"} ]}))

(def comm (chan))

(def socket
  (js/WebSocket. "ws://localhost:8080/book-of-5-rinds/ws"))


(defn rindidate-list [rindidates]
  (dom/ul nil
    (for [rindidate rindidates]
      (dom/li nil (:name rindidate)))))


(defn handle-new-rind-keydown [e state owner]
  (if (== (.-keyCode e) 13)
    (let [name (.-value (.-target e))]
      (if (> 4 (count name))
        (js/alert "Rind name muyst be longer than 4 characters")
        (let [new-rind {:name name}
              message  {:command "create-rind"
                        :data new-rind}]
          (.send socket
            (js/JSON.stringify (clj->js message))))))))


(defn app [state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (while true
            (let [event (<! comm)]
              (doseq []
                (let [newstate (:state event)]
                  (om/update-state! owner (fn [] newstate))))))))
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (dom/input #js {:onKeyDown #(handle-new-rind-keydown % state owner)})
        (rindidate-list (:rindidates state))))))


(om/root app app-state
  {:target (. js/document (getElementById "app"))})




(set! (.-onopen socket)
  (fn [e]))

(set! (.-onerror socket)
  (fn []
    (js/alert "error")
    (.log js/console js/arguments)))

(set! (.-onmessage socket)
  (fn [e]
    (let [event (js->clj (.parse js/JSON (.-data e)) :keywordize-keys true)]
      (doseq []
        (go (>! comm event))))))
