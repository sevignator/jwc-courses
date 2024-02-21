import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@components/App';

import './reset.css';
import './styles.css';

const rootEl = document.querySelector('#root');

if (rootEl !== null) {
  const root = createRoot(rootEl);
  root.render(<App />);
}
