import React from 'react';
import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps = {
  children: React.ReactNode;
};

function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <div className={styles.visuallyHidden}>{children}</div>;
}

export default VisuallyHidden;
