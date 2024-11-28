import React from 'react';

import styles from './Label.module.css';

interface LabelProps extends React.ComponentProps<'label'> {
  children: React.ReactNode;
  className: string;
}

function Label({ children, className = '', ...rest }: LabelProps) {
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
