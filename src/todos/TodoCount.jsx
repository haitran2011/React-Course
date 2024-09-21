import React from 'react'
import { useTodoContext } from '../contexts/todo-context'

function TodoCount() {
  const { todos } = useTodoContext();
  return (
    <div>NUmbers Todo: {todos.length}</div>
  )
}

export default TodoCount