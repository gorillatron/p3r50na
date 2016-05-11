
import { createAction, handleActions } from 'redux-actions'


export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'


export const initialState = {
  todos: []
}


export const addTodo = createAction(ADD_TODO)

export const updateTodo = createAction(UPDATE_TODO, (todo, update) => ({todo, update}))

export const reducer = handleActions({
  
  [ADD_TODO]: (state, action) => 
    Object.assign({}, state, {todos: state.todos.concat(action.payload)}),
    
  [UPDATE_TODO]: (state, action) => {
    const {todo, update} = action.payload
    const todos = state.todos.map(todoCand => 
      todoCand === todo ? Object.assign({}, todoCand, update) :
      todoCand)
    return Object.assign({}, {todos})
  }
  
}, initialState)