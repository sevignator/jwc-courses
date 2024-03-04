import clsx from 'clsx';
import { range } from '@src/utils';
import { checkGuess } from '@src/game-helpers';
import { NUM_OF_LETTERS_PER_WORD } from '@src/constants';
import styles from './Guess.module.css';

export type GuessProps = {
  answer: string;
  value?: string;
};

function Guess({ answer, value }: GuessProps) {
  const checkedGuess = value ? checkGuess(value, answer) : null;

  return (
    <p className={styles.guess}>
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <span
          key={index}
          className={clsx(
            styles.cellOuter,
            checkedGuess && styles[checkedGuess[index].status]
          )}
        >
          <span className={styles.cellInner}>{value?.[index]}</span>
        </span>
      ))}
    </p>
  );
}

export default Guess;
