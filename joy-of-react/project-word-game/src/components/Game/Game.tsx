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

type GameStatuses = 'running' | 'won' | 'lost';

const answer = getRandomWord(NUM_OF_LETTERS_PER_WORD);

console.log(answer);

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([]);
  let gameStatus: GameStatuses;

  if (guesses[guesses.length - 1] === answer) {
    gameStatus = 'won';
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    gameStatus = 'lost';
  } else {
    gameStatus = 'running';
  }

  function addGuess(value: string) {
    setGuesses([...guesses, value]);
  }

  return (
    <div className={styles.gameWrapper}>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput addGuess={addGuess} isDisabled={gameStatus !== 'running'} />

      {gameStatus === 'won' && (
        <Banner type='happy'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </Banner>
      )}

      {gameStatus === 'lost' && (
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
