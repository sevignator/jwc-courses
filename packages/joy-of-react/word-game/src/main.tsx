import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/App';
import ThemeProvider from '@context/ThemeProvider';
import './styles.css';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
