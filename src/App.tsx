import React, { useEffect, useState } from "react";
import dino from "./dino.svg";
import "./App.css";
import { fetchDino, postDino } from "./apis/dinos.api";

function App() {
  const [randomDino, setDino] = useState<string>();

  useEffect(() => {
    const dinoFetcher = async () => {
      try {
        const response = await fetchDino();
        const json = await response.json();
        console.log(json);
        setDino(json.dino);
      } catch (error) {
        console.log(error);
      }
    };
    dinoFetcher();
  }, []);

  const likeDino = async () => {
    const response = await postDino('123456', dino)
    const json = await response.json()

    console.log(json)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={dino} className="App-logo" alt="logo" />
        <p>The dinosaur you get is: {randomDino}</p>
      </header>
      <button onClick={likeDino}></button>
    </div>
  );
}

export default App;
