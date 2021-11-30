import React, { useEffect } from 'react';
import dino from './dino.svg';
import './App.css';
import { fetchDino } from './apis/dinos.api';

function App() {
  useEffect(() => {
    fetchDino()
  })

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
