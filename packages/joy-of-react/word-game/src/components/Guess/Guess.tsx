import React from 'react';
import { range } from '@src/utils';
import { NUM_OF_LETTERS_PER_WORD } from '@src/constants';

export type GuessProps = {
  value?: string;
};

function Guess({ value }: GuessProps) {
  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <span key={index} className='cell'>
          {value?.[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
