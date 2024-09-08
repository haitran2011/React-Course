import React from 'react'

/* merge object
const objA = { firstName: 'tony }
const objB = { lastName: 'nguyen' }
=> merge object = { firstName: 'tony', lastName: 'nguyen' }

replace object
const objectC = { ...objA, ...objB }
*/

function initializeCountState() {
  console.log('initializeCountState:')
  return 10
}

function StateHook() {
  // const counter = React.useState(0);
  const [counter, setCounter] = React.useState(initializeCountState); // array destructuring
  const [person, setPerson] = React.useState({
    first_name: 'tony'
  }); // memory A


  function handleUpdateCount() {
    // counter[1](prevState => prevState + 1)
    // setCounter(prevState => prevState + 1);
    // person.last_name = 'nguyen'; // memory A
    const newPerson = {
      ...person,
      last_name: 'nguyen'
    }
    setPerson(newPerson);
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  }

  console.log('counter: ', {
    counter,
    person
  })

  return (
    <div>
      <h1>StateHook</h1>
      Counter: {counter} <br />
      <button type="button" onClick={handleUpdateCount}>update counter</button>

    </div>
  )
}

export default StateHook