import React from 'react';

import { range } from '@src/utils';

export type GuessProps = {
  word?: string;
};

function Guess({ word = '' }: GuessProps) {
  return (
    <p className='guess'>
      {word
        ? [...word].map((char, index) => (
            <span key={index} className='cell'>
              {char}
            </span>
          ))
        : range(5).map((cell) => <span key={cell} className='cell' />)}
    </p>
  );
}

export default Guess;
