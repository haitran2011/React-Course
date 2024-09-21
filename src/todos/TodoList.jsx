import React from 'react'
import TodoItem from './TodoItem'
import { useTodoContext } from '../contexts/todo-context'

function TodoList() {
  const { todos } = useTodoContext();
  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default TodoList