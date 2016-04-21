
import React              from 'react'
import Router             from 'react-router'
import {Route}            from 'react-router'
import MainRouteHandler   from './MainRouteHandler'
import About              from './static/About'
import Text               from '../containers/Text'


export default (
  <Route path="/" component={MainRouteHandler}>
    <Route path="/about" component={About} />
    <Route path="/text" component={Text} />
  </Route>
)
