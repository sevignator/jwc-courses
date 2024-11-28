import React from 'react';

import Button from '../Button';
import MessageInput from '../MessageInput';
import Toast from '../Toast';
import VariantOptions from '../VariantOptions';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastIsShown, setToastIsShown] = React.useState(false);

  function handleMessage(event) {
    setMessage(event.target.value);
  }
  function handleVariant(event) {
    setVariant(event.target.value);
  }
  function handleRender() {
    setToastIsShown(true);
  }
  function handleDismiss() {
    setToastIsShown(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {toastIsShown && (
        <Toast variant={variant} handleDismiss={handleDismiss}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
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
            <Button onClick={handleRender}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
