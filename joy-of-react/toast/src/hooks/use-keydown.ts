import React from 'react';

export default function useKeydown(key: string, callback: () => void) {
  React.useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.code !== key) return;

      callback();
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [key, callback]);
}
