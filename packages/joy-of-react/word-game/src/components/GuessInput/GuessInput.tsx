import React from 'react';

export type GuessInputProps = {
  addGuess: (newGuess: string) => void;
};

function GuessInput({ addGuess }: GuessInputProps) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextGuess = e.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        title='5 letter word'
        pattern='^[A-Z]{5}$'
        maxLength={5}
        value={guess}
        onChange={handleChange}
        required
      />
    </form>
  );
}

export default GuessInput;
