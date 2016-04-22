

import React from 'react'

export default class App extends React.Component {

  render() {
    return (
      <div className="App locked">
        <span>App -></span>
        {this.props.children}
      </div>
    )
  }

}
