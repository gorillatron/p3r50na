
import {combineReducers} from 'redux'

function text(state = "change me..", action) {
  switch (action.type) {
    case 'SET_TEXT':
      return action.text
    default:
      return state
  }
}

export default combineReducers({text})
