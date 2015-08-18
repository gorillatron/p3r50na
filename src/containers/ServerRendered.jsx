
import React from "react"

export default class ServerRendered {

  render() {
    return (
      <html>

        <head>
          <meta charset="utf-8" />
          <title></title>
        </head>

        <body>
          {this.props.children}
        </body>

      </html>
    )
  }

}
