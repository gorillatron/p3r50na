
import React              from 'react'
import Router             from 'react-router'
import {Route}            from 'react-router'
import App                from '../components/App.jsx'
import Todos              from '../components/todos/Container.jsx'


export default (
  <Route path="/" component={App}>
    <Route path="/todos" component={Todos} />
  </Route>
)
