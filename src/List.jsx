import React from 'react'

const renderListItems = [];
// call api
const data = [
  { title: 'learn js' },
  { title: 'learn react' }
]

function List() {
  const [todos, setTodos] = React.useState([]);
 
  // call api (side effect)
  React.useEffect(() => {
    // map
    data.map((item) => {
      return {
        id: Math.floor(23 * Math.random()),
        ...item
      }
    })
    setTodos(data);
  }, []) 
  
  // forceEach
  data.forEach(item => {
    const todo = (
      <div key={item.id}>
        Title: {item.title} <br />
        <button type='text'>Delete</button>
      </div>
    )
    renderListItems.push(todo)
  })

  console.log('renderListItems: ', renderListItems)

  return (
    <div>
      <h1>List</h1>
      {todos && Array.isArray(todos) && todos.map((todo) => {
        return (
          <div key={todo.id}>
            Title: {todo.title} <br />
            <button type='text'>Delete</button>
          </div>
        )
      })}
      <br />
      <h5>with forEach</h5>
      {renderListItems}
    </div>
  )
}

export default List