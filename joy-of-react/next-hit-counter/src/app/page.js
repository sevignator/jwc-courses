import React from 'react';

import CensoredButton from '../components/CensoredButton';
import HitCounter from '../components/HitCounter';

async function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{' '}
        <CensoredButton>
          <HitCounter />
        </CensoredButton>
        .
      </p>
    </main>
  );
}

export default Home;
