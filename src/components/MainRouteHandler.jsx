
import React from 'react'
import App   from './App'


export default class MainRouteHandler extends React.Component {

  render() {

    const ContainerComponent = this.props.ContainerComponent

    return (
      <ContainerComponent>
        <App {...this.props} />
      </ContainerComponent>
    )
  }

}
