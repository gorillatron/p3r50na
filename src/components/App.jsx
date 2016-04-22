

import React from 'react'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <span>App -></span>
        {this.props.children}
      </div>
    )
  }

}
