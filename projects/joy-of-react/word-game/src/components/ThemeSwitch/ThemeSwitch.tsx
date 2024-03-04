import React from 'react';
import { Moon, Sun } from 'lucide-react';
import VisuallyHidden from '@components/VisuallyHidden';
import useThemeContext from '@hooks/useThemeContext';
import styles from './ThemeSwitch.module.css';

function ThemeSwitch() {
  const { theme, switchTheme } = useThemeContext();
  const inputId = `switch-${React.useId()}`;

  return (
    <label id={inputId} className={styles.wrapper} htmlFor='dark-mode'>
      <VisuallyHidden>Toggle dark mode</VisuallyHidden>
      <div className={styles.switch}>
        <input
          id='dark-mode'
          className={styles.checkbox}
          type='checkbox'
          role='switch'
          aria-labelledby={inputId}
          checked={theme === 'dark'}
          onChange={(e) => switchTheme(e.target.checked ? 'dark' : 'light')}
        />
        <div className={styles.toggleOuter}>
          <Sun className={styles.sunIcon} color='black' height='100%' />
          <Moon className={styles.moonIcon} color='white' height='100%' />
          <div className={styles.toggleInner} />
        </div>
      </div>
    </label>
  );
}

export default ThemeSwitch;
