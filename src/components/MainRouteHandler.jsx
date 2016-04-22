
import React from 'react'
import App   from './App.jsx'


export default class MainRouteHandler extends React.Component {

  render() {
    return (
      <App {...this.props} />
    )
  }

}
