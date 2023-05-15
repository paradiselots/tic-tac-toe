import './styles.css';/*Imports css sheet and parameters to this sheet*/

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

/*------------------TIC TAC TOE-------------- */
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return; // If there is a winner or the square is already occupied, return early
    }
    const nextSquares = squares.slice(); // Create a copy of the squares array
    if (xIsNext) {
      nextSquares[i] = 'X'; // Set the value of the square to 'X' if it's X's turn
    } else {
      nextSquares[i] = 'O'; // Set the value of the square to 'O' if it's O's turn
    }
    onPlay(nextSquares); // Call the onPlay function with the updated squares array
  }

  const winner = calculateWinner(squares); // Check if there is a winner
  let status;
  if (winner) {
    status = 'Winner: ' + winner; // If there is a winner, set the status to display the winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // If there is no winner, display the next player's turn
  }

  return (
    <div className='tictactoe'>
      <div className="status">{status}</div> {/* Display the game status */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/* Render the first square */}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> {/* Render the second square */}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> {/* Render the third square */}
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> {/* Render the fourth square */}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} /> {/* Render the fifth square */}
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} /> {/* Render the sixth square */}
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> {/* Render the seventh square */}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> {/* Render the eighth square */}
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} /> {/* Render the ninth square */}
      </div>
    </div>
  );
}

export default function Game() {
  
  const [history, setHistory] = useState([Array(9).fill(null)]); // Set the initial history state with an array of 9 null values
  const [currentMove, setCurrentMove] = useState(0); // Set the initial currentMove state to 0
  const xIsNext = currentMove % 2 === 0; // Check if it's X's turn based on the current move number
  const currentSquares = history[currentMove]; // Get the squares for the current move

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // Create a new history array by combining the existing history up to the current move and appending the nextSquares
    setHistory(nextHistory); // Update the history state with the new history array
    setCurrentMove(nextHistory.length - 1); // Update the currentMove state to the index of the last move
}

function jumpTo(nextMove) {
setCurrentMove(nextMove); // Update the currentMove state to the selected move index
}

const moves = history.map((squares, move) => {
let description;
if (move > 0) {
description = 'Go to move #' + move; // Create a description for each move after the initial move
} else {
description = 'Go to game start'; // Set the description for the initial move
}
return (
<li key={move}>
<button className = "gotobutton" onClick={() => jumpTo(move)}>{description}</button> {/* Render a button for each move */}
</li>
);
});

return (
<div className="game">
<div className="game-board">
<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> {/* Render the game board */}
</div>
<div className="game-info">
<ol>{moves}</ol> {/* Render the list of moves */}
</div>
</div>
);
}

function calculateWinner(squares) {
const lines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
const [a, b, c] = lines[i];
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
return squares[a]; // If there is a winner, return the winning mark ('X' or 'O')
}
}
return null; // If there is no winner, return null
}


