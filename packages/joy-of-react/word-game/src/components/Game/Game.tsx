import React from 'react';

import GuessInput from '@components/GuessInput';
import GuessResults from '@components/GuessResults';

type GameProps = {
  answer: string;
};

export type Guess = {
  id: string;
  text: string;
};

function Game({ answer }: GameProps) {
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
