
import React              from 'react'
import Router             from 'react-router'
import {Route}            from 'react-router'
import MainRouteHandler   from '../components/MainRouteHandler.jsx'
import Todos              from '../components/todos/Container.jsx'


export default (
  <Route path="/" component={MainRouteHandler}>
    <Route path="/todos" component={Todos} />
  </Route>
)
