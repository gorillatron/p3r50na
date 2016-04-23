
import React              from 'react'
import Router             from 'react-router'
import {Route}            from 'react-router'
import MainRouteHandler   from './MainRouteHandler.jsx'
import About              from './static/About.jsx'
import Text               from './containers/Text.jsx'


export default (
  <Route path="/" component={MainRouteHandler}>
    <Route path="/about" component={About} />
    <Route path="/text" component={Text} />
  </Route>
)
