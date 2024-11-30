import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
}

function Button({ className = '', ...delegated }: ButtonProps) {
  const classes = [styles.button];
  if (className) {
    classes.push(className);
  }

  return <button className={classes.join(' ')} {...delegated} />;
}

export default Button;
