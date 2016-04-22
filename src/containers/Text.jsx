import React from 'react'
import { connect } from 'react-redux'
import { setText } from '../actions'


const mapStateToProps = (state) => ({text: state.text})


const mapDispatchToProps = (dispatch) => {
  return {
    onTextEnter: (text) => {
      dispatch(setText(text))
    }
  }
}


const component = ({text, onTextEnter}) => {

  const textChange = (event) => onTextEnter(event.target.value)

  return (
    <div>
      <input onChange={textChange} value={text}/>
      <i>
        {text.length}
      </i>
    </div>
  )
}


const Text = connect(
  mapStateToProps,
  mapDispatchToProps)
  (component)



export default Text
