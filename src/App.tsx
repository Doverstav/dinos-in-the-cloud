import React, { useEffect, useState } from 'react';
import dino from './dino.svg';
import './App.css';
import { fetchDino } from './apis/dinos.api';

function App() {
  const [randomDino, setDino] = useState<string>()

  useEffect(() => {
    const dinoFetcher = async () => {
      const response = await fetchDino()
      const json = await response.json()
      console.log(json)
      setDino(json.dino)
    }
    dinoFetcher()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={dino} className="App-logo" alt="logo" />
        <p>
          The dinosaur you get is: {randomDino}
        </p>
      </header>
    </div>
  );
}

export default App;
