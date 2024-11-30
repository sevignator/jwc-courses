import React from 'react';

import styles from './Label.module.css';

interface LabelProps extends React.ComponentProps<'label'> {
  children: React.ReactNode;
  className?: string;
}

function Label({ children, className = '', ...delegated }: LabelProps) {
  const classes = [styles.label];
  if (className) {
    classes.push(className);
  }

  return (
    <label {...delegated} className={classes.join(' ')}>
      {children}
    </label>
  );
}

export default Label;
