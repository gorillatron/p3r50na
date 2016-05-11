import React from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodo } from '../../core/domain/todos'


const mapStateToProps = (state) => state.todos


const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(addTodo({text})),
    updateTodo: (todo, update) => dispatch(updateTodo(todo, update))
  }
}


const component = ({todos, addTodo, updateTodo}) => {

  const textChange = (event) => {
    if(event.keyCode == '13') {
      addTodo(event.target.value)
      event.target.value = "" 
    }
  }

  return (
    <div>
      <input onKeyUp={textChange}/>
      <ul>
        {
          todos.map((todo, index) => 
            Todo({todo, updateTodo}))
        }
      </ul>
    </div>
  )
}


const Todo = ({todo, updateTodo}) => {
  
  const todoToggleDone = event => updateTodo(todo, {done: event.target.checked})
  
  return (
    <li key={Math.random()}>
      <input name="done" type="checkbox" checked={todo.done} onChange={todoToggleDone}/>
      {todo.text}
    </li>
  ) 
}


const Todos = connect(
  mapStateToProps,
  mapDispatchToProps)
  (component)



export default Todos
