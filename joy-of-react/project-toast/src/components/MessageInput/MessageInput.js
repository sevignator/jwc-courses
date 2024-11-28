import React from 'react';
import Label from '../Label/Label';

import styles from './MessageInput.module.css';

function MessageInput({ message, handleMessage }) {
  return (
    <>
      <Label htmlFor='message' style={{ alignSelf: 'baseline' }}>
        Message
      </Label>
      <div className={styles.inputWrapper}>
        <textarea
          id='message'
          className={styles.messageInput}
          value={message}
          onChange={handleMessage}
        />
      </div>
    </>
  );
}

export default MessageInput;
