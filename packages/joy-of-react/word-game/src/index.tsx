import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@components/App';

import './reset.css';
import './styles.css';
import ThemeProvider from '@context/ThemeProvider';

const rootEl = document.querySelector('#root');

if (rootEl !== null) {
  const root = createRoot(rootEl);
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
