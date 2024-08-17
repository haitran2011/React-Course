import React from 'react';

export const TodoItem = () => {
  return (
    <div
      className="p-6 bg-white border border-gray-200 rounded-lg shadow mb-8"
    >
      <p
        className="mb-3 font-normal"
      >
        title
      </p>

      <div className="flex items-center justify-end">
        <button
          className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 rounded-lg mr-2"
        >
          Delete
        </button>
        <button
          className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Mark Incomplete
        </button>
      </div>
    </div>
  );
};
