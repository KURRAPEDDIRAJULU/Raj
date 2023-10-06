import React, { useState } from 'react';
import './index.css'

function SimpleTodos({initialTodosList}) {
  const [todos, setTodos] = useState(initialTodosList);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  

  return (
    <div className="app-container">
     <div className="simple-todos-container">
      <h1 className="heading-1">Simple Todos</h1>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <p className="title"> <span className="para">{todo.tittle}</span></p>
            <button
              type="button"
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>

  );
}

export default SimpleTodos;
