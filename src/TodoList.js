import './todo.css';
import React, { useState } from 'react';


export default function TodoList() {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [inputValue, setInputValue] = useState(''); // State to store the value of the input field

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value when the input field changes
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      // Check if the input value is not empty
      setTodos([...todos, inputValue]); // Add the new todo to the todos array
      setInputValue(''); // Clear the input field after adding the todo
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the todo to be deleted
    setTodos(updatedTodos); // Update the todos array with the filtered todos
  };

  return (
    <div className='todolist'>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/* Render an input field that updates the inputValue state */}
      <button onClick={handleAddTodo}>Add Todo</button>
      {/* Render a button to add a new todo */}
      <ul>
        {/* Render the list of todos */}
        {todos.map((todo, index) => (
          <li key={index}>
            {/* Render each todo as a list item */}
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            {/* Render a delete button for each todo */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default TodoList;
