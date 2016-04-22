
import React                  from "react"
import ReactDOM               from "react-dom"
import {Router, match}        from "react-router"
import createBrowserHistory   from "history/lib/createBrowserHistory"
import {syncHistoryWithStore} from 'react-router-redux'
import {createStore}          from 'redux'
import {renderToString}       from "react-dom/server"
import reducers               from '../reducers'
import componentroutes        from "../components/componentroutes.jsx"
import Client                 from "../containers/Client.jsx"


const stores = createStore(reducers, window.STORE_STATE, window.devToolsExtension ? window.devToolsExtension() : f => f)

const history = syncHistoryWithStore(
  createBrowserHistory(),
  store
)

const mountNode = document.getElementById("app")


match({ history, routes: componentroutes },
  (error, redirectLocation, renderProps) => {

    ReactDOM.render(
      <Client store={store}>
        <Router {...renderProps} />
      </Client>
    , mountNode)

  })
