import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </p>
        {/* <p>
          <Input placeholder='Search...' type="numeric" pattern="[0-9]*" />
        </p>
        <div class="ui input">
          <input type="text" inputmode="numeric" pattern="[0-9]*" placeholder="???"></input>
        </div>
        <p>
          <Operation value="5 x 10 = ?" />
          <ProductSolution value="50" />
        </p> */}
      </header>
    </div>
  );
}

export default App;
