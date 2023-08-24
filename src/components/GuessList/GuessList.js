import React from "react";
import Guess from "../Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { checkGuess } from "../../game-helpers";

const GuessList = ({ guessList, answer }) => {
  const cellArray = range(NUM_OF_GUESSES_ALLOWED);

  const guessArray = Object.entries(guessList).forEach((entry, index) => {
    const checkedGuess = checkGuess(entry[1].guess, answer);
    cellArray[index] = { id: entry[1].id, guess: checkedGuess };
  });

  return (
    <>
      <div className="guess-results">
        {cellArray.map((el, index) => {
          if (typeof el === "object") {
            return <Guess key={el.id} value={el.guess} />;
          } else {
            return <Guess key={index} />;
          }
        })}
      </div>
    </>
  );
};

export default GuessList;
