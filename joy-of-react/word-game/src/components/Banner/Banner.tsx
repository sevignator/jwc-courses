import React from 'react';
import clsx from 'clsx';
import styles from './Banner.module.css';

type BannerProps = {
  children: React.ReactNode;
  type: 'happy' | 'sad';
};

function Banner({ children, type }: BannerProps) {
  return <div className={clsx(styles.banner, styles[type])}>{children}</div>;
}

export default Banner;
