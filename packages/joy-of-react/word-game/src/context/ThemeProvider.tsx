import React from 'react';
import usePreferredColorScheme from '@hooks/usePreferredColorScheme';

type ThemeOptions = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeOptions;
  switchTheme: (themeName: ThemeOptions) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = usePreferredColorScheme();
  const [theme, setTheme] = React.useState<ThemeOptions>(colorScheme);

  // Update the theme based on the user system's color scheme after their
  // OS settings have been changed
  React.useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  function switchTheme(themeName: ThemeOptions) {
    setTheme(themeName);
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
