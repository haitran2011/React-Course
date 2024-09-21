import React from 'react';

const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);

  function addTodo(title) {
    const todoItem = {
      id: Date.now(),
      title
    }
    setTodos(prevState => [...prevState, todoItem]);
  }

  return (
    <TodoContext.Provider
      value={{
        // states
        todos,
        tony: 'xxx',

        // actions
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
} 

export const useTodoContext = () => React.useContext(TodoContext);