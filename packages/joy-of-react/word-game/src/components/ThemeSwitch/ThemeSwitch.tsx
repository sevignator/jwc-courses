import VisuallyHidden from '@components/VisuallyHidden';
import useThemeContext from '@hooks/useThemeContext';
import styles from './ThemeSwitch.module.css';

import { Moon, Sun } from 'lucide-react';

function ThemeSwitch() {
  const { theme, switchTheme } = useThemeContext();

  return (
    <label className={styles.wrapper} htmlFor='frequency'>
      <VisuallyHidden>Switch theme</VisuallyHidden>
      <div className={styles.switch}>
        <input
          id='frequency'
          className={styles.checkbox}
          type='checkbox'
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
