import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

function MyButton() {
  return (

    <button>
      I'm a button
    </button>
  );
}

export default App;
