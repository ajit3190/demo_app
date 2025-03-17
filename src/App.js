import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* // <header className="App-header"> */}
      {/* //   <img src={logo} className="App-logo" alt="logo" /> */}
      {/* //   <p> */}
      {/* //     Edit <code>src/App.js</code> and save to reload. */}
      {/* //   </p> */}
      {/* //   <a */}
      {/* //     className="App-link" */}
      {/* //     href="https://reactjs.org" */}
      {/* //     target="_blank" */}
      {/* //     rel="noopener noreferrer" */}
      {/* //   > */}
      {/* //     Learn React */}
      {/* //   </a> */}
      {/* // </header> */}
      {/* <button>I'm a button</button> */}
    <h1>Welcome to my app</h1>
    <MyButton />
      {/* <p> fff</p> */}
      <h1>Counters that update separately</h1>
      <CButton />
      <CButton />

      <h1>Counters that update together</h1>
      <MButton />
      <Game />
    </div>
  );
}

function MyButton() {
  return (
    <button onClick={handleClick} className="mybutton" >
      I'm a button
    </button>
  );
  function handleClick(){
    alert('this is button')
  }
}

function CButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times      
    </button>
  )
}

function MButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  };

  return(
    <h1>
    <MbButton count={count} onClick={handleClick}></MbButton>
    <MbButton count={count} onClick={handleClick}></MbButton>
    </h1>
  );

  function MbButton({count, onClick}) {
    return(
    <button onClick={onClick}>
      Clicked {count} times      
    </button>
  )
  }

}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Tic Tac game
// ------------------------------------------------------------------------------------------------------------------------------------------------------

function Square({value, onSquareClick}){
  return( 
    <button className="square" onClick = {onSquareClick}>
      {value}
    </button>
  )
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
   onPlay(nextSquares);

  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return(
    
    <div>
    <h1 className="status">{status}</h1>
    {[0, 3, 6].map(rowIndex => (
      <div key={rowIndex} className="board-row">
        {[0, 1, 2].map(offset => {
          const i = rowIndex + offset;
          return (
            <Square
              key={i}
              value={squares[i]}
              onSquareClick={() => handleClick(i)}
            />
          );
        })}
      </div>
    ))}
    </div>
  ) 
}

function Game(){
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[history.length - 1];
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
       <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
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
      return squares[a];
    }
  }
  return null;
}

export default App;
