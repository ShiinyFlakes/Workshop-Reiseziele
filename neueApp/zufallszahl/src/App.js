import { useState } from "react";
import "./App.css";

function App() {
  const [tries, setTries] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("Ich warte auf Deine Eingabe");
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  return (
    <div className="App container">
      <h1>Rate eine Zahl zwischen 1 und 10</h1>
      <div>
        <input
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (isNaN(guess)) {
              setResult("Du musst eine Zahl eingeben");
            } else if (parseInt(guess) === secretNumber) {
              setTries(tries + 1);
              setResult(`Richtig! Meine Zahl war ${secretNumber}.`);
            } else {
              setGuess("");

              setTries(tries + 1);
              setResult(
                `${guess} ist leider nicht richtig! Versuche es noch einmal.`
              );
            }
          }}
        >
          Raten
        </button>
      </div>
      <div>
        <p>{result}</p>
        <p>Anzahl Versuche: {tries}</p>
      </div>
    </div>
  );
}

export default App;