
import {combineReducers} from 'redux'
import {routerReducer as routing}   from 'react-router-redux'

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
  locked,
  routing
})
