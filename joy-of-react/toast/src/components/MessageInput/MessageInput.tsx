import React from 'react';
import Label from '../Label';

import styles from './MessageInput.module.css';

interface MessageInputProps {
  message: string;
  handleMessage: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function MessageInput({ message, handleMessage }: MessageInputProps) {
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
