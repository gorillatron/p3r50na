
// Import CSS
import css                    from "../style/index.css"

// Import Modules
import React                  from "react"
import ReactDOM               from "react-dom"
import {Router, match}        from "react-router"
import createBrowserHistory   from "history/lib/createBrowserHistory"
import {renderToString}       from "react-dom/server"
import {storeFactory}         from "../core/store"
import routes                 from "../routes/index.jsx"
import Root                   from "../components/Root.jsx"


!(async function() {
  
  // Set up store and sync router with store state
  const store = await storeFactory({initialState: window.STORE_STATE})
  const history = createBrowserHistory()


  // Mount the app to this node
  const mountNode = document.getElementById("app")


  // Set up the router to listen to browser history
  // Render on matched route

  match({history, routes},
    (error, redirectLocation, renderProps) => {
      ReactDOM.render(
        <Root store={store}>
          <Router {...renderProps} />
        </Root>
      , mountNode)
    })


  //Expose a global public app API

  window.app = {}
  
})();

