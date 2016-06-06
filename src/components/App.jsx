

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'


class App extends React.Component {

  render() {
    return (
      <div>
        asdss
        {this.props.children}
      </div>
    )
  }

}

const mapStateToProps = state => state

const AppContainer = connect(
  mapStateToProps)
  (App)


export default AppContainer
