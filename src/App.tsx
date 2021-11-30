import React from 'react';
import dino from './dino.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dino} className="App-logo" alt="logo" />
        <p>
          The dinosaur you get is: 
        </p>
      </header>
    </div>
  );
}

export default App;
