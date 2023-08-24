import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Banner = ({ status, numGuesses }) => {
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {numGuesses === 1 ? (
            <strong> {numGuesses} guess</strong>
          ) : (
            <strong> {numGuesses} guesses</strong>
          )}
          .
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
};

function Game() {
  const [numGuesses, setNumGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("running");
  const [guessList, setGuessList] = useState([]);

  const submitGuess = (guess) => {
    setNumGuesses(numGuesses + 1);
    if (guess.length < 5) {
      return;
    } else if (guess === answer) {
      setGameStatus("won");
    } else if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const nextGuess = { id: Math.random(), guess: guess };
    setGuessList([...guessList, nextGuess]);

    console.log("NUM", numGuesses, NUM_OF_GUESSES_ALLOWED);

    if (numGuesses === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput submitGuess={submitGuess} />
      {gameStatus === "running" ? null : (
        <Banner status={gameStatus} numGuesses={numGuesses} />
      )}
    </>
  );
}

export default Game;
