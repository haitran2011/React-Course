import React from 'react';

import Button from './components/button';

// first render
// re-render (next render)

/*
- so sánh tham trị: string, number, boolean, null, undefiend ...
- so sánh tham chiếu: object, array ... -> so sánh vùng nhớ với nhau
    - const ab -> vùng nhớ A
    - const objA = {}; // vùng nhớ B
    - const objB = {}; // vùng nhớ C
    - const objC = objA; // vùng nhớ B
    objA === objB -> false;
    objA === objC -> true;
*/

function State() {
  // state
  // array 2 item -> array destructuring
  // initial value: string, boolean, object, number ...
  const [firstName, setFirstName] = React.useState(''); 
  // DO update: string or null or undefiend
  // DON'T update: convert to object or array, number ...

  const [user, setUser] = React.useState({
    firstName: 'Hai',
    lastName: 'Viet',
    book: {
      author: 'tony',
      year: 1990
    }
  }) // vùng nhớ B

  // action
  function updateFirstName() {
    const newFirstName = 'tony'
    // setFirstName(newFirstName)
    setFirstName(() => {
      return newFirstName
    })
  }
  // click 1: prev '' === next 'tony' -> component re-render
  // click 2: prev 'tony' === next 'tony' -> component don't re-render

  function updateAuthor() {
    // user.book.author = `tony ${Date.now()}`; // vùng nhớ A
    const newUser = {
      ...user, // copy all properties of users
      book: {
        ...user.book, // copy all properties of books
        author: `tony ${Date.now()}`
      }
    }; // vùng nhớ C
    
    setUser(newUser) // prevState B === next state C => component don't re-render
  }

  function updateYear() {
    // term react -> updater function in set state
    // setUser(() => {}); // callback function -> write syntax arrow function
    // setUser(function() {}); // callback function -> write syntax traditional function
    
    // way 1:  traditional function
    // setUser(function(prevUser) {
    //   return {
    //     ...prevUser,
    //     book: {
    //       ...prevUser.book,
    //       author: `tony ${Date.now()}`
    //     }
    //   }
    // });

    // way 2:  arrow function
    // setUser((prevUser) => {
    //   console.log('prevUser: ', prevUser)
    //   return {
    //     ...prevUser,
    //     book: {
    //       ...prevUser.book,
    //       author: `tony ${Date.now()}`
    //     }
    //   }
    // });
    
    // way 3: return direct
    setUser((prevUser) => ({
      ...prevUser,
      book: {
        ...prevUser.book,
        author: `tony ${Date.now()}`
      }
    }));
  }

  console.log('State re-render ----------', { 
    firstName,
    user 
  })

  // view
  return (
    <div>
      <h3>State</h3>
      First Name: {firstName} <br />
      <Button 
        text="Update First Name" 
        type="button" 
        onClick={updateFirstName} 
      /> <br />
      Author First Name: {user.firstName} <br />
      Author book: {user.book.author} <br />
      <Button 
        text="Update author" 
        type="button" 
        onClick={updateAuthor} 
      /> <br />
      Author Year: {user.book.year} < br/>
      <Button 
        text="Update year" 
        type="button" 
        onClick={updateYear} 
      /> 
    </div>
  )
}

export default State