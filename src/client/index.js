
import Koa                from "koa"
import React              from "react"
import ReactRouter        from "react-router"
import {HistoryLocation}  from "react-router"
import componentroutes    from "../components/componentroutes"
import Client             from "../containers/Client"


ReactRouter.run(componentroutes, HistoryLocation, (RootComponent) => {

  const html = React.renderToString(React.createElement(RootComponent, {
    ContainerComponent: Client
  }))

  resolve(html)
})
