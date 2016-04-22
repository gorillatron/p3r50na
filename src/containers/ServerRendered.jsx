
import React              from "react"
import {Provider}         from 'react-redux'

export default class ServerRendered extends React.Component {

  render() {

    const {store, children} = this.props

    // TODO!: rewrite so that we just render react from to level Provider
    //        so that client and server is in sync. Use static template for the layot.

    return (
      <html>

        <head>
          <meta charset="utf-8" />
          <title>wat</title>
        </head>

        <body>


          <div id="app">
            <Provider store={store}>
              {children}
            </Provider>
          </div>

          <script dangerouslySetInnerHTML={{__html: `window.STORE_STATE = ${JSON.stringify(store.getState())}`}}></script>
          <script src="/assets/client.js"></script>

        </body>

      </html>
    )
  }

}
