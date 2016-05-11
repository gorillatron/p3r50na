import React from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodo } from '../../core/domain/todos'
import Todo from './Todo'


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


const mapStateToProps = (state) => state.todos

const mapDispatchToProps = (dispatch) => ({
  addTodo: text => dispatch(addTodo({text})),
  updateTodo: (todo, update) => dispatch(updateTodo(todo, update))
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps)
  (component)


export default Container
