import { range } from '@src/utils';
import { NUM_OF_LETTERS_PER_WORD } from '@src/constants';
import styles from './Guess.module.css';

export type GuessProps = {
  value?: string;
};

function Guess({ value }: GuessProps) {
  return (
    <p className={styles.guess}>
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <span key={index} className={styles.cell}>
          {value?.[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
