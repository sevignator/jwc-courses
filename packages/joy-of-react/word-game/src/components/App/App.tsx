import Game from '@components/Game';
import Header from '@components/Header';
import styles from './App.module.css';
import { useThemeContext } from '@context/ThemeProvider';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={styles.wrapper} data-theme={theme}>
      <Header />
      <div className='game-wrapper'>
        <Game />
      </div>
    </div>
  );
}

export default App;
