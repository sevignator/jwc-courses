import React from 'react';

import Button from '../Button';
import MessageInput from '../MessageInput';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import VariantOptions from '../VariantOptions';

import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleMessage(event) {
    setMessage(event.target.value);
  }
  function handleVariant(event) {
    setVariant(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    addToast(message, variant);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
