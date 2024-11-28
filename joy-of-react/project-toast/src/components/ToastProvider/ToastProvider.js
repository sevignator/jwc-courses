import React from 'react';

import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const addToast = React.useCallback(
    (message, variant) => {
      const nextToasts = [
        ...toasts,
        {
          id: crypto.randomUUID(),
          variant,
          message,
        },
      ];

      setToasts(nextToasts);
    },
    [toasts]
  );
  const removeToast = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => toast.id !== id);

      setToasts(nextToasts);
    },
    [toasts]
  );
  const value = React.useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts, addToast, removeToast]
  );
  const handleKeydown = React.useCallback(() => setToasts([]), []);

  useKeydown('Escape', handleKeydown);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
