import React from 'react';

import GuessInput from '@components/GuessInput';
import GuessResults from '@components/GuessResults';

export type GameProps = {
  answer: string;
};

export type GuessType = {
  id: string;
  word: string;
};

function Game({ answer }: GameProps) {
  const [guesses, setGuesses] = React.useState<GuessType[]>([]);

  function addGuess(word: string) {
    setGuesses([
      ...guesses,
      {
        id: crypto.randomUUID(),
        word,
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
