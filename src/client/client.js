
// Import CSS
import css                    from "./style/index.css"

// Import Modules
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

// Set up store and sync router with store state

const store = createStore(reducers, window.STORE_STATE, window.devToolsExtension ? window.devToolsExtension() : f => f)
const history = syncHistoryWithStore(createBrowserHistory(), store)


// Mount the app to this node
const mountNode = document.getElementById("app")


// Set up the router to listen to browser history
// Render on matched route

match({ history, routes: componentroutes },
  (error, redirectLocation, renderProps) => {
    ReactDOM.render(
      <Root store={store}>
        <Router {...renderProps} />
      </Root>
    , mountNode)
  })


//Expose a global public app API

window.app = {
  unlock() {
    store.dispatch(unlockApp())
  }
}
