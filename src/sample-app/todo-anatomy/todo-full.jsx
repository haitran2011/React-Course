// ❌ Bad code with multiple responsibilities
import { useState } from 'react';

const TodoFull = () => {
  // Handling state ❌
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Handle input change ❌
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Handle todo logic ❌
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const todoItem = {
        text: newTodo,
        completed: false,
      };
      const updatedTodos = [...todos, todoItem];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // ❌  It doesn't provide a clear separation of smaller reusable components.
  return (
    <div className="p-4">
      <h4 className="text-[40px]">Todo Full</h4>

      <div className="flex">
        <input
          type="text"
          className="w-[450px] mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={newTodo}
          onChange={handleInputChange}
        />
        <div className="w-[150px] shrink-0">
          <button
            type="button"
            className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>

      <br />
      <br />

      {todos.map((todo, index) => (
        <div
          key={index}
          class="p-6 bg-white border border-gray-200 rounded-lg shadow mb-8"
        >
          <p
            class="mb-3 font-normal"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </p>
          <div className="flex items-center justify-end">
            <button
              class="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 rounded-lg mr-2"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
            <button
              class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              onClick={() => handleCompleteTodo(index)}
            >
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoFull;
