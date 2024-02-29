import React from 'react';

import { type Guess } from '@components/Game';

type GuessResultsProps = {
  guesses: Guess[];
};

function GuessResults({ guesses }: GuessResultsProps) {
  return (
    <div className='guess-results'>
      {guesses.map(({ id, text }) => (
        <p key={id} className='guess'>
          {text}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
