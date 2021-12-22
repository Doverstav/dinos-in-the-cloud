import React, { useEffect, useState } from "react";
import dino from "./dino.svg";
import "./App.css";
import { fetchDino, fetchLikedDinos, postDino } from "./apis/dinos.api";
import { useUUID } from "./hooks/useUUID";

interface RandomDino {
  Name: string;
  Description: string;
}

function App() {
  const [randomDino, setDino] = useState<RandomDino>();
  const [likedDinos, setLikedDinos] = useState<string[]>([]);
  const userId = useUUID();

  const updateDinos = async (userId: string) => {
    try {
      const randomDinoResponse = await fetchDino();
      const randomDinoJson = (await randomDinoResponse.json()) as RandomDino;
      console.log(randomDinoJson);
      setDino(randomDinoJson);

      const likedDinosResponse = await fetchLikedDinos(userId);
      const likedDinosJson = await likedDinosResponse.json();

      setLikedDinos(likedDinosJson.dinosLiked);
    } catch (error) {
      console.log(error);
    }
  };

  const likeDino = async (userId: string, dinoName: string | undefined) => {
    if (!dinoName || dinoName === "" || userId === "") {
      return;
    }

    await postDino(userId, dinoName);
    await updateDinos(userId);
  };

  useEffect(() => {
    if (userId !== "") {
      updateDinos(userId);
    }
  }, [userId]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={dino} className="App-logo" alt="logo" />
        <p>The dinosaur you get is: {randomDino?.Name}</p>
        <p>{randomDino?.Description}</p>
        <button onClick={() => likeDino(userId, randomDino?.Name)}>
          I like this dinosaur!
        </button>
        <p>Dinos you like are:</p>
        <ul>
          {likedDinos.map((likedDino) => (
            <li>{likedDino}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
