import React from 'react';

// function ReducerHook() {
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [users, setUsers] = React.useState([]);
//   const [name, setName] = React.useState('');

//   async function handleLoad() {
//     setIsLoading(true);
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     setUsers(data)
//     setIsLoading(false);
//   }

//   function handleAddUser() {
//     const user = {
//       id: Date.now(),
//       name
//     }
//     setUsers(prevState => [...prevState, user])
//   }

//   return (
//     <div>
//       <h1>ReducerHook</h1>
      
//       <button type="button" onClick={handleLoad}>Reload</button>
//       <div>
//         <input type="text" value={name} onChange={e => setName(e.target.value)} />
//         <button type="button" onClick={handleAddUser}>Add</button>
//       </div>

//       {isLoading ? (
//         <div>Loading ... </div>
//       ) : (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>User: {user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default ReducerHook

const initialState = {
  isLoading: false,
  users: [],
  name: ''
}

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    // case 'SHOW_LOADING': {
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // }
    // case 'HIDE_LOADING': {
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: payload.isLoading
      }
    }
    case 'ADD_USER': {
      return {
        ...state,
        users: [...state.users, payload.user]
      }
    }
    case 'FETCH_USERS': {
      return {
        ...state,
        users: payload.users
      }
    }
    default:
      return state
  }
}

// action creator
// function showLoading() {
//   return {
//     type: 'SHOW_LOADING'
//   }
// }

// function hideLoading() {
//   return {
//     type: 'HIDE_LOADING'
//   }
// }

function setLoading(isLoading) {
  return {
    type: 'SET_LOADING',
    payload: {
      isLoading
    }
  }
}

function addUser(user) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}

function fetchUsers(users) {
  return {
    type: 'FETCH_USERS',
    payload: {
      users
    }
  }
}

function ReducerHook() {
  const [{ isLoading, users }, dispatch] = React.useReducer(reducer, initialState);
  const [name, setName] = React.useState('');

  async function handleLoad() {
    // dispatch(showLoading());
    dispatch(setLoading(true));

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dispatch(fetchUsers(data))

    dispatch(setLoading(false));
    // dispatch(hideLoading());
    // dispatch({
    //   type: 'HIDE_LOADING'
    // });
  }

  function handleAddUser() {
    const user = {
      id: Date.now(),
      name,
    }
    dispatch(addUser(user))
  }

  return (
    <div>
      <h1>ReducerHook</h1>
      
      <button type="button" onClick={handleLoad}>Reload</button>
      <div>
        <input type="text" />
        <button type="button">Search</button>
      </div>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button type="button" onClick={handleAddUser}>Add</button>
      </div>

      {isLoading ? (
        <div>Loading ... </div>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>User: {user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ReducerHook