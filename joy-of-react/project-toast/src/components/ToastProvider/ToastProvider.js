import React from 'react';

import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleKeydown = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', handleKeydown);

  function addToast(message, variant) {
    setToasts((prevToasts) => {
      return [
        ...prevToasts,
        {
          id: crypto.randomUUID(),
          message,
          variant,
        },
      ];
    });
  }

  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
