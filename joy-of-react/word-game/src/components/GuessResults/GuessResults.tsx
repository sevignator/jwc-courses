import Guess from '@components/Guess';
import { range } from '@src/utils';
import { NUM_OF_GUESSES_ALLOWED } from '@src/constants';
import styles from './GuessResults.module.css';

export type GuessResultsProps = {
  answer: string;
  guesses: string[];
};

function GuessResults({ answer, guesses }: GuessResultsProps) {
  return (
    <div className={styles.guessResults}>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} answer={answer} value={guesses[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
