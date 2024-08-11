import React from 'react'

/*
const todos = []
&& (trái, phải)
 - if left is true, it get right
 - if left is false, it get false
true && true -> true
true && false -> false
'tony' && 'hai' -> true && 'hai' -> hai
'' && 'viet' -> false && 'viet' -> empty
'viet' && ' ' -> true & ' ' -> ' '
'viet' && 'tony' && 'react' -> true && 'tony' && 'react' -> 'tony' && 'react' -> true && 'react' -> 'react'
todos && todos.length > 0 && hasTodo -> hasTodo

|| 
- vế nào true thì lấy vế đó
- nó sẽ lấy vế nào true đầu tiên
'tony' || 'hai' -> tony
tony || hai || viet -> tony
'' || hai || viet ->  hai
(a || b) && (c || d) && e && b && f
*/

const game = {
  useTemplate: true
}
const params = {
  url: 'tony'
}

function ConditionalRendering() {
  const [todos, setTodos] = React.useState(null);
  // const template = game.useTemplate ? 'abc' 
  //                       : url === '1' || url === '2'
  //                       ? 'tony'
  //                       : params.url
  //                       ? params.url
  //                       : 'default'
  let template = 'default';
  switch(true) {
    case game.useTemplate:
      template = 'abc' 
      break;
    case url === '1' || url === '2':
      template = 'tony'
      break;
    case params?.url:
      template = params?.url
      break;
    default:
      break;
  }

  function addTodo() {
    setTodos(prevState => {
      const todo = {
        id: Date.now(),
        title: `Learn ${Date.now()}`
      }
      return [...prevState || [], todo]; // array destructuring es6
    })
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>
      <button type="button" onClick={addTodo}>Add Todo</button>
      {todos && Array.isArray(todos) && todos.map(todo => {
        return (
          <div key={todo.id}>
            Title: {todo.title}
          </div>
        )
      })}
    </div>
  )
}

export default ConditionalRendering