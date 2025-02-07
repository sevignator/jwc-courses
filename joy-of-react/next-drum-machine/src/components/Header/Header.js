'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import { SoundEnabledContext } from '../../context/SoundEnabledProvider';
import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';

function Header() {
  const id = React.useId();
  const {soundEnabled, toggleSoundEnabled} = React.useContext(SoundEnabledContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={toggleSoundEnabled}
        >
          {soundEnabled ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {soundEnabled
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
