import React from 'react';

import Button from '../Button';
import MessageInput from '../MessageInput';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import VariantOptions from '../VariantOptions';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const formRef = React.useRef();
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    formRef.current?.querySelector(':is(input, textarea, select)').focus();
  }, [toasts]);

  function handleMessage(event) {
    setMessage(event.target.value);
  }
  function handleVariant(event) {
    setVariant(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }
  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form
        ref={formRef}
        className={styles.controlsWrapper}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <MessageInput message={message} handleMessage={handleMessage} />
        </div>

        <div className={styles.row}>
          <VariantOptions
            options={VARIANT_OPTIONS}
            variant={variant}
            handleVariant={handleVariant}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
