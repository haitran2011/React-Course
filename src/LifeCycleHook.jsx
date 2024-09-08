import React from 'react'

/*
mounting <> first render
updating <> re-render (next render)
unmounting
*/

function LifeCycleHook() {
  // state
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    console.log('useEffect lifeCyclehook') 
    return () => {
      console.log('clean up useEffect lifeCyclehook')
    }
  })

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
  console.log('lifeCyclehook render')
  return (
    <div>
      <h1>LifeCycleHook</h1>
      Count: {count}
      <button type="button" onClick={incrementCounter}>Increment count</button>
    </div>
  )
}

export default LifeCycleHook