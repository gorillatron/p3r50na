
import React from 'react'

class App extends React.Component {

  render() {
    return (
      <div>
        <span>App -></span>
        {this.props.children}
      </div>
    )
  }

}

export default App
