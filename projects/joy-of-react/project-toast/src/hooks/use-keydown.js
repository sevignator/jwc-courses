import React from 'react';

export default function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code !== key) return;

      callback();
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [key, callback]);
}
