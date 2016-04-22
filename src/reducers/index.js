
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

export default combineReducers({
  text,
  routing
})
