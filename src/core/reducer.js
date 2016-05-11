
import {combineReducers} from 'redux'
import {reducer as todos} from './domain/todos'

const reducer = combineReducers({
  todos
})

export default reducer