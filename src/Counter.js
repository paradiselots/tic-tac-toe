import React, { useState } from "react";



export default function Counter() { //Main component
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

  return (
    <div>
      <p>Wins: {counter}</p>
      <button onClick={handleButtonIncrement}>Won</button>
      <button onClick = {handleButtonIncReset}>Reset</button>
      <p>Losses: {negCounter}</p>
      <button onClick={HandleButtonDecrement}>Lost</button>
      <button onClick = {HandleButtonDecReset}>Reset</button>

      <p>Sum: {counter + negCounter}</p>
    </div>
  );
}
