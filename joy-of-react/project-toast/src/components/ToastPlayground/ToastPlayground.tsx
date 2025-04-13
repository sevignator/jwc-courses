import React from 'react';
import Button from '../Button';
import MessageInput from '../MessageInput';
import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf';
import VariantSelector from '../VariantSelector';

import styles from './ToastPlayground.module.css';
import toastImage from '../../assets/toast.png';
import { VARIANT_OPTIONS } from '../../constants';
import { type VariantOptions } from '../../types';

function ToastPlayground() {
  const toastContext = React.useContext(ToastContext);

  if (!toastContext) {
    throw new Error('Context is missing')
  }

  const { addToast } = toastContext;
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState<VariantOptions>();

  function handleMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }
  function handleVariant(event: React.ChangeEvent<HTMLInputElement>) {
    setVariant(event.target.value);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addToast(message, variant);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src={toastImage} />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <MessageInput message={message} handleMessage={handleMessage} />
        </div>

        <div className={styles.row}>
          <VariantSelector variant={variant} handleVariant={handleVariant} />
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
