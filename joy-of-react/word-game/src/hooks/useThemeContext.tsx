import React from 'react';
import { ThemeContext } from '@context/ThemeProvider';

function useThemeContext() {
  const themeContext = React.useContext(ThemeContext);

  if (themeContext === null) {
    throw new Error('Theme context is not available');
  }

  return themeContext;
}

export default useThemeContext;
