import React from 'react';

function usePreferredColorScheme() {
  // Set the initial color scheme based on the user system's preferences
  const [colorScheme, setColorScheme] = React.useState<'light' | 'dark'>(() =>
    window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  );

  React.useEffect(() => {
    // Reference to the media query
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    console.log('Listening to media query', mediaQuery);

    // Event handler for when the user switches their color scheme
    function updateColorScheme() {
      setColorScheme(mediaQuery.matches ? 'light' : 'dark');
      console.log('Color theme change');
    }

    mediaQuery.addEventListener('change', updateColorScheme);

    return () => {
      mediaQuery.removeEventListener('change', updateColorScheme);
    };
  }, []);

  return colorScheme;
}

export default usePreferredColorScheme;
