
import React                  from "react"
import ReactDOM               from "react-dom"
import {Router, match}        from "react-router"
import createBrowserHistory   from "history/lib/createBrowserHistory"
import {createStore}          from 'redux'
import {renderToString}       from "react-dom/server"
import reducers               from '../reducers'
import componentroutes        from "../components/componentroutes.jsx"
import Client                 from "../containers/Client.jsx"


const history = createBrowserHistory()


match({ history, routes: componentroutes },
  (error, redirectLocation, renderProps) => {

    const mountNode = document.getElementById("app")
    const store = createStore(reducers, window.STORE_STATE)

    ReactDOM.render(
      <Client store={store}>
        <Router {...renderProps} />
      </Client>
    , mountNode)

  })
