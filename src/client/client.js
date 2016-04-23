
import React                  from "react"
import ReactDOM               from "react-dom"
import {Router, match}        from "react-router"
import createBrowserHistory   from "history/lib/createBrowserHistory"
import {syncHistoryWithStore} from 'react-router-redux'
import {createStore}          from 'redux'
import {renderToString}       from "react-dom/server"
import reducers               from '../reducers'
import {unlockApp}            from '../actions'
import componentroutes        from "../components/componentroutes.jsx"
import Root                   from "../components/Root.jsx"
import css                    from "./style/index.css"


const store = createStore(reducers, window.STORE_STATE, window.devToolsExtension ? window.devToolsExtension() : f => f)

const history = syncHistoryWithStore(
  createBrowserHistory(),
  store
)

const mountNode = document.getElementById("app")


match({ history, routes: componentroutes },
  (error, redirectLocation, renderProps) => {
    ReactDOM.render(
      <Root store={store}>
        <Router {...renderProps} />
      </Root>
    , mountNode)
  })


window.p3r50na = {
  unlock: () => {
    store.dispatch(unlockApp())
  }
}
