import Game from '@components/Game';
import Header from '@components/Header';

import { getRandomWord } from '@src/utils';

const answer = getRandomWord(5);
console.log({ answer });

function App() {
  return (
    <div className='wrapper'>
      <Header />

      <div className='game-wrapper'>
        <Game answer={answer} />
      </div>
    </div>
  );
}

export default App;
