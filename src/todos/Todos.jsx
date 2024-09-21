import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoCount from './TodoCount'

function Todos() {
  const [todos, setTodos] = React.useState([])
  return (
    <div>
      <h1>Todo Context</h1>
      <TodoCount />
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Todos