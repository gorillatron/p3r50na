
import React              from 'react'
import Router             from 'react-router'
import {Route}            from 'react-router'
import MainRouteHandler   from '../components/MainRouteHandler.jsx'
import About              from '../components/static/About.jsx'
import Todos              from '../components/containers/Todos.jsx'


export default (
  <Route path="/" component={MainRouteHandler}>
    <Route path="/about" component={About} />
    <Route path="/todos" component={Todos} />
  </Route>
)
