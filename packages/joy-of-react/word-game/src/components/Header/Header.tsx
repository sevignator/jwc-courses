import VisuallyHidden from '@components/VisuallyHidden';
import useThemeContext from '@hooks/useThemeContext';
import styles from './Header.module.css';

function Header() {
  const { theme, switchTheme } = useThemeContext();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Word Game</h1>
      <VisuallyHidden>
        <label htmlFor='dark-mode-toggle'>Dark mode</label>
      </VisuallyHidden>
      <input
        type='checkbox'
        name='dark-mode'
        id='dark-mode-toggle'
        checked={theme === 'dark'}
        onChange={(e) => switchTheme(e.target.checked ? 'dark' : 'light')}
      />
    </header>
  );
}

export default Header;
