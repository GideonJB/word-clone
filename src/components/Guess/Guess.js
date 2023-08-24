import React from "react";
import { checkGuess } from "../../game-helpers";

const blankValue = [
  { letter: "", status: "" },
  { letter: "", status: "" },
  { letter: "", status: "" },
  { letter: "", status: "" },
  { letter: "", status: "" },
];

const Guess = ({ value = blankValue }) => {
  return (
    <p className="guess">
      <span className={`cell ${value[0].status}`}>{value[0].letter}</span>
      <span className={`cell ${value[1].status}`}>{value[1].letter}</span>
      <span className={`cell ${value[2].status}`}>{value[2].letter}</span>
      <span className={`cell ${value[3].status}`}>{value[3].letter}</span>
      <span className={`cell ${value[4].status}`}>{value[4].letter}</span>
    </p>
  );
};

export default Guess;
