import React from 'react';

import styles from './VariantSelector.module.css';

import { VARIANT_OPTIONS } from '../../constants';
import {type VariantOptions} from '../../types';

interface VariantSelectorProps {
  variant: VariantOptions;
  handleVariant: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function VariantSelector({ variant, handleVariant }: VariantSelectorProps) {
  return (
    <>
      <div className={styles.label}>Variant</div>
      {VARIANT_OPTIONS.map((option) => (
        <div
          key={option}
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          <label htmlFor={`variant-${option}`}>
            <input
              id={`variant-${option}`}
              type='radio'
              name='variant'
              value={option}
              checked={option === variant}
              onChange={handleVariant}
            />
            {option}
          </label>
        </div>
      ))}
    </>
  );
}

export default VariantSelector;
