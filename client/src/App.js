import React from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './uploader'


const fetchUsers = function(){
  fetch('/api/v1/users')
  .then((res)=> res.json())
  .then((res)=> console.log(res))
  .catch((err)=> console.log('Error In Api', err));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={fetchUsers}>Load Users</button>
        <Uploader />
      </header>
    </div>
  );
}

export default App;
