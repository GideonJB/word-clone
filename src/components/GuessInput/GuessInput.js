import React, { useState } from "react";

const GuessInput = ({ submitGuess }) => {
  const [guess, setGuess] = useState("");

  const handleChange = (event) => {
    if (event.target.value.length <= 5) {
      setGuess(event.target.value.toUpperCase());
    }
  };

  const handleSubmit = (event, guess) => {
    event.preventDefault();
    submitGuess(guess);
    setGuess("");
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event, guess)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
};

export default GuessInput;
