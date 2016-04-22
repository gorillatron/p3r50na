
import React              from "react"
import {Provider}         from 'react-redux'

export default class ServerRendered extends React.Component {

  render() {

    const {store, children} = this.props

    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

}
