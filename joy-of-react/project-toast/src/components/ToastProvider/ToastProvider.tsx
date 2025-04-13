import React from 'react';
import useKeydown from '../../hooks/use-keydown';

import { type VariantOptions } from '../../types';

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, variant: VariantOptions) => void;
  removeToast: (id: string) => void;
}

interface Toast {
  id: string;
  variant: VariantOptions;
  message: string;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = React.createContext<ToastContextType | null>(null);

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const addToast = React.useCallback(
    (message: string, variant: VariantOptions) => {
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
    (id: string) => {
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
