import React from 'react'

/*
mounting <> first render
updating <> re-render (next render)
unmounting

Notes:
- clean up function 
  - don't run when component first render
  - just run when component next render
  - run when component un-mounted
*/

function LifeCycleHook() {
  // state
  const [count, setCount] = React.useState(1);
  const [todos, setTodos] = React.useState([]);
  const [limit, setLimit] = React.useState(1);

  React.useEffect(() => {
    console.log("useEffect no dependency");

    return () => {
      console.log("clean up useEffect no dependency");
    }
  }); // every run when component re-render

  // syntax: arrow function
  React.useEffect(() => {
    console.log('useEffect empty dependency')

    async function fetchTodos() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      const data = await res.json();
      setTodos(data);
    }
    fetchTodos();
    return () => {
      console.log('clean up useEffect empty dependency')
    }
  }, [limit]); // only run when values changes
  // [] // only run once time

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect lifeCyclehook');

    return () => {
      console.log('clean up useLayoutEffect lifeCyclehook')
    }
  })

  // actions
  function incrementCounter() {
    setCount(prevState => prevState + 1)
  }

  // UI
  console.log('---------------------')
  console.log('lifeCyclehook render', todos, limit)
  return (
    <div>
      <h1>LifeCycleHook</h1>
      Count: {count}
      <button type="button" onClick={incrementCounter}>Increment count</button>
    
      <h3>Todo List</h3>
      Limit: 
      <select onChange={e => setLimit(e.target.value)}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            Id: {todo.id} <br />
            Title: {todo.title} <br />
          </div>
        )
      })}
    </div>
  )
}

export default LifeCycleHook