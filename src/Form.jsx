import React from 'react'

/* uncontrolled 
Uncontrolled inputs are like traditional HTML form inputs:
They remember what you typed. You can then get their value using a ref.
Don’t cause re-render component.
The input value is not being managed by React.
We are using DOM manipulation to access and manipulate the value of the input element.
*/


function Form() {
  const firstNameRef = React.useRef();
  const headingRef = React.useRef();
  const [form, setForm] = React.useState({
    last_name: '',
    age: 0
  })
  const [users, setUsers] = React.useState(null);

  function handleSubmit() {
    console.log('submit: ', form);
    /* [{ id: xx, first_name: xxx, last_name: xxx, age: xxx }] */
    const user = {
      id: Date.now(),
      first_name: firstNameRef.current.value,
      last_name: form.last_name,
      age: form.age
    }
    // setUsers(prevState => [...(prevState || []), user])
    setUsers(prevState => {
      console.log('prevState: ', prevState)
      return [...(prevState || []), user]
    })
  }

  function onForm(e) {
    // const name = e.target.name;
    // const value = e.target.value;
    // setForm((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value
    //   }
    // })
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      
      <h1 ref={headingRef}>Form</h1>

      First Name<input id="first_name" type="text" ref={firstNameRef} defaultValue="tony" />
      Last Name <input type="text" name="last_name" onChange={onForm} />
      Age <input type="text" name="age" onChange={onForm} />
      
      
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>

      <table>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
        </tr>
        {users && Array.isArray(users) && users.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.age}</td>
            </tr>
          )
        })}
      </table>


    </div>
  )
}

export default Form