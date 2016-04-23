

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { setText } from '../../actions'


class App extends React.Component {

  render() {

    const className = classNames({
      App: true,
      locked: this.props.state.locked
    })

    return (
      <div className={className}>

        {/* Show lock screen if app is locked */
         this.props.state.locked &&
          <div className="lockscreen"></div>}

        {this.props.children}
      </div>
    )
  }

}

const mapStateToProps = (state) => ({state})

const AppContainer = connect(
  mapStateToProps)
  (App)

export default AppContainer
