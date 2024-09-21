import React from 'react'
import { useTodoContext } from '../contexts/todo-context'

function TodoForm() {
  const [title, setTitle] = React.useState('');
  const { addTodo } = useTodoContext();

  return (
    <div>
      Add Todo: 
      <input type="text" onChange={e => setTitle(e.target.value)} /> 
      <button type="button" onClick={() => addTodo(title)}>Submit</button>
    </div>
  )
}

export default TodoForm