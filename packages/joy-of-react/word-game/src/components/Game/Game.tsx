import React from 'react';
import GuessInput from '@components/GuessInput';
import GuessResults from '@components/GuessResults';
import { getRandomWord } from '@src/utils';
import { NUM_OF_LETTERS_PER_WORD } from '@src/constants';
import styles from './Game.module.css';

const answer = getRandomWord(NUM_OF_LETTERS_PER_WORD);
console.log({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([]);

  function addGuess(value: string) {
    setGuesses([...guesses, value]);
  }

  return (
    <div className={styles.gameWrapper}>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </div>
  );
}

export default Game;
