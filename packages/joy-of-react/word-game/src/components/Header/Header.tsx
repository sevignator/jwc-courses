import ThemeSwitch from '@components/ThemeSwitch';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSide}></div>
      <div className={styles.headerMiddle}>
        <h1 className={styles.title}>Word Game</h1>
      </div>
      <div className={styles.headerRightSide}>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
