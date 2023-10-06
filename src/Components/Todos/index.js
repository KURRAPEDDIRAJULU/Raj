import React, { useState } from 'react';
import './index.css'


const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };
       setList([...list, newTask]);
        setInputTask('');
    };

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

   return (
        <div className="Todo">
            <h1>My Todos List</h1>

            <div className="Top">
                <input className="input" type="text" value={inputTask}
                   onChange={handleInputChange} placeholder="Enter a new todo" />

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>

           <ul>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 