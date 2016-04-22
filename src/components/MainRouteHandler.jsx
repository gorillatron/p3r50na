
import React from 'react'
import App   from './App.jsx'


export default class MainRouteHandler extends React.Component {

  render() {
    return (
      <div>
        <App {...this.props} />
      </div>
    )
  }

}
