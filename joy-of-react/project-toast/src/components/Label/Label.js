import React from 'react';

import styles from './Label.module.css';

function Label({ children, className = '', ...rest }) {
  const classes = [styles.label];
  if (className?.length > 0) {
    classes.push(className);
  }

  return (
    <label {...rest} className={classes.join(' ')}>
      {children}
    </label>
  );
}

export default Label;
