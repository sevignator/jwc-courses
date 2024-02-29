import React from 'react';

import Guess from '@components/Guess';
import { type GuessType } from '@components/Game';

import { range } from '@src/utils';
import { NUM_OF_GUESSES_ALLOWED } from '@src/constants';

export type GuessResultsProps = {
  guesses: GuessType[];
};

function GuessResults({ guesses }: GuessResultsProps) {
  return (
    <div className='guess-results'>
      {guesses.map(({ id, word }) => (
        <Guess key={id} word={word} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((index) => (
        <Guess key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
