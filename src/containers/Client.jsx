
import React              from "react"
import {Provider}         from 'react-redux'

export default class Client extends React.Component {

  render() {
    return (
      <Provider {...this.props}>
        {this.props.children}
      </Provider>
    )
  }

}
