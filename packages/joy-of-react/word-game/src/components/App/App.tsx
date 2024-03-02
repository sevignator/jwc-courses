import Game from '@components/Game';
import Header from '@components/Header';
import useThemeContext from '@hooks/useThemeContext';
import styles from './App.module.css';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={styles.wrapper} data-theme={theme}>
      <Header />
      <Game />
    </div>
  );
}

export default App;
