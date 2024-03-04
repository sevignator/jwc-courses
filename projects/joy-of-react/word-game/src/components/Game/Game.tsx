import React from 'react';
import Banner from '@components/Banner';
import GuessInput from '@components/GuessInput';
import GuessResults from '@components/GuessResults';
import { getRandomWord } from '@src/utils';
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_PER_WORD,
} from '@src/constants';
import styles from './Game.module.css';

const answer = getRandomWord(NUM_OF_LETTERS_PER_WORD);

console.log({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const hasGuesses = guesses.length < NUM_OF_GUESSES_ALLOWED;
  const hasWon = guesses[guesses.length - 1] === answer;

  function addGuess(value: string) {
    setGuesses([...guesses, value]);
  }

  return (
    <div className={styles.gameWrapper}>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput addGuess={addGuess} isDisabled={hasWon || !hasGuesses} />

      {hasWon && (
        <Banner type='happy'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </Banner>
      )}

      {!hasWon && !hasGuesses && (
        <Banner type='sad'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </div>
  );
}

export default Game;
