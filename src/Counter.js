import React, { useState } from "react";
import './Counter.css'




export default function Counter({id, name}) { //Main component with the de-structured props from robot.js
  // const {id, name} = props; //This is de-structuring the prop from robots.js
  const [counter, setCounter] = useState(0); //counter-storage for a wins button that starts at 0
  const [negCounter, setNegCounter] = useState(0); //counter-storage for a losses button that starts at 0
  

  function handleButtonIncrement() {
    setCounter(counter + 1); //function for a button to increase counter button by 1 for each win
    // console.log(counter);
  }
  function handleButtonIncReset() {
    setCounter(0);// function for a button to reset the wins counter
  }

  function HandleButtonDecrement() {
    setNegCounter(negCounter - 1); //function for a button to increase negCounter button by -1 for each loss
    // console.log(negCounter);
  }
  function HandleButtonDecReset() {
    setNegCounter(0); // function for a button to reset the losses negcounter
  }
//----------
  
  const [inputs, setInputs] = useState([]); // State to store the list of todos
  const [inputValues, setInputValues] = useState(''); // State to store a string value of the input field

  const handleInputChange = (event) => {
    setInputValues(event.target.value); // Update the input value when the input field changes
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();//function checks if the Enter key is pressed and triggers the handleAddTodo function. 
    }
  };

  const handleAddTodo = () => {
    if (inputValues.trim() !== '') {
      // Check if the input value is not empty
      setInputs([...inputs, inputValues]); // Add the new todo to the todos array
      setInputValues(''); // Clear the input field after adding the todo
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = inputs.filter((_, i) => i !== index); // Filter out the todo to be deleted
    setInputs(updatedTodos); // Update the todos array with the filtered todos
  };
//--------- 
  

  return (
    <div>
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}`}></img>
      </div>
      <div className='tc bg-light-green dib br3 pa3 ma2'>
      <button onClick={handleAddTodo}>Add</button>
      <input
        type="text"
        value={inputValues}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      /> 
      <ul>
        {/* Render the list of todos */}
        {inputs.map((todo, index) => (
          <li key={index}>
            {/* Render each todo as a list item */}
            {inputs}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            {/* Render a delete button for each todo */}
            
          </li>
          ))}
      </ul>         
        <h1>{name}</h1>
        <p>Wins: {counter}</p>
        <button onClick={handleButtonIncrement}>Won</button>
        <button onClick = {handleButtonIncReset}>Reset</button>
        <p>Losses: {negCounter}</p>
        <button onClick={HandleButtonDecrement}>Lost</button>
        <button onClick = {HandleButtonDecReset}>Reset</button>
      </div>
      

      <p>Sum: {counter + negCounter}</p>
    
    </div>
  );
}

// Counters that update seperatly

// import { useState } from 'react';
// /*useState is like a special box that helps you remember and update a value. You put an initial value inside, and then you can change that value using a function that comes with the box.*/

// export default function MyApp() {
//   return (
//     <div className='counters'>
//       <h1>Counters that update separately</h1>
//       <MyButton /> {/* Render the MyButton component */}
//       <MyButton /> {/* Render another instance of the MyButton component */}
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0); // Declare a state variable 'count' and a function 'setCount' to update it

//   function handleClick() { // Define a function that will be called when the button is clicked
//     setCount(count + 1); // Increment the 'count' state by 1
//   }

//   return (
//     <button onClick={handleClick}> {/* Assign the 'handleClick' function to the 'onClick' event */}
//       Clicked {count} + times {/* Display the current value of 'count' */}
//     </button>
//   );
// }

/*---------------------------------------------- */

// COUNTERS THAT UPDATE TOGETHER

// import { useState } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0); // Declare a state variable 'count' and a function 'setCount' to update it

//   function handleClick() { // Define a function that will be called when the button is clicked
//     setCount(count + 1); // Increment the 'count' state by 1
//   }

//   return (
//     <div className='counters'>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} /> {/* Render the MyButton component with the current 'count' value and the 'handleClick' function */}
//       <MyButton count={count} onClick={handleClick} /> {/* Render another instance of the MyButton component with the same 'count' value and 'handleClick' function */}
//     </div>
//   );
// }

// function MyButton({ count, onClick }) { // Receive the 'count' and 'onClick' props from the parent component
//   return (
//     <button onClick={onClick}> {/* Assign the 'onClick' function to the 'onClick' event */}
//       Clicked {count} times {/* Display the current value of 'count' */}
//     </button>
//   );
// }