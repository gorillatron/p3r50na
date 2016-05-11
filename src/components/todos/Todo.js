
import React from 'react'


export default function Todo({todo, updateTodo}) {
  
  const todoToggleDone = event => updateTodo(todo, {done: event.target.checked})
  
  return (
    <li key={Math.random()}>
      <input name="done" type="checkbox" checked={todo.done} onChange={todoToggleDone}/>
      {todo.text}
    </li>
  ) 
}