'use client';

import React from 'react';

function CensoredButton({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);

  return (
    <button
      className={isCensored ? 'censored' : ''}
      onClick={() => setIsCensored(!isCensored)}
    >
      {children}
    </button>
  );
}

export default CensoredButton;
