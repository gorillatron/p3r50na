
import {combineReducers} from 'redux'
import {routerReducer as routing}   from 'react-router-redux'

function text(state = "change me..", action) {
  switch (action.type) {
    case 'SET_TEXT':
      return action.text
    default:
      return state
  }
}

function locked(state = true, action) {
  switch (action.type) {
    case 'UNLOCK_APP':
      return false
    case 'LOCK_APP':
      return true
    default:
      return state
  }
}

export default combineReducers({
  text,
  locked,
  routing
})
