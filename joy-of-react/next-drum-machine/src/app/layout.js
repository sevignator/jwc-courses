import React from 'react';

import SoundEnabledProvider from '../context/SoundEnabledProvider';
import Header from '../components/Header';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundEnabledProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundEnabledProvider>
      </body>
    </html>
  );
}

export default RootLayout;
