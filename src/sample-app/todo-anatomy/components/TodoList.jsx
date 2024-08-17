import React from 'react';

import { TodoItem } from './TodoItem';

const mocks = [
  {
    id: 1,
    title: 'learn javascript',
    completed: false
  }
]

export const TodoList = () => {
  return (
    <>
      {mocks.map((todo, index) => (
        <TodoItem />
      ))}
    </>
  );
};
