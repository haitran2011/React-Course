import React from 'react'
     
function TodoItem({ todo }) {
  return (
    <div>
      Title: {todo.title}
    </div>
  )
}

export default TodoItem