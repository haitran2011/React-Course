import React from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function TodoSeparate() {
  return (
    <div>
      <h4 className='text-[15px]'>TodoSeparate</h4>

      <TodoForm />
      <TodoList />
    </div>
  )
}

export default TodoSeparate