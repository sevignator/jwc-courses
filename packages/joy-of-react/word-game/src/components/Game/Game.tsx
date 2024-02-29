import React from 'react';
import GuessInput from '@components/GuessInput';
import GuessResults from '@components/GuessResults';
import { getRandomWord } from '@src/utils';
import { NUM_OF_LETTERS_PER_WORD } from '@src/constants';

const answer = getRandomWord(NUM_OF_LETTERS_PER_WORD);
console.log({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([]);

  function addGuess(value: string) {
    setGuesses([...guesses, value]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
