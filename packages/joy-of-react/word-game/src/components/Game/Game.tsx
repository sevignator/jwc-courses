import React from 'react';

import GuessInput from '@components/GuessInput';
import GuessResults from '@components/GuessResults';

import { sample } from '@src/utils';
import { WORDS } from '@src/data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export type Guess = {
  id: string;
  text: string;
};

function Game() {
  const [guesses, setGuesses] = React.useState<Guess[]>([]);

  function addGuess(newGuess: string) {
    setGuesses([
      ...guesses,
      {
        id: crypto.randomUUID(),
        text: newGuess,
      },
    ]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
