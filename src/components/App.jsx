

import React              from 'react'
import {RouteHandler}     from 'react-router'
import {Provider}         from 'react-redux'
import {createStore}      from 'redux'
import reducers           from '../reducers'


const store = createStore(reducers)


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          App ->
          {this.props.children}
        </div>
      </Provider>
    )
  }

}
