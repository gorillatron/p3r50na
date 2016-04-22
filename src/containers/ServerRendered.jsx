
import React              from "react"
import {Provider}         from 'react-redux'

export default class ServerRendered extends React.Component {

  render() {

    const {store, children} = this.props

    // using react to render html as root fucks up checksums
    // client root is the router

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
