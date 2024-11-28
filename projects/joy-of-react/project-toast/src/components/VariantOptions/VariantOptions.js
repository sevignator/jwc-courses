import React from 'react';

import styles from './VariantOptions.module.css';

function VariantOptions({ options, variant, handleVariant }) {
  return (
    <>
      <div className={styles.label}>Variant</div>
      {options.map((option) => (
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

export default VariantOptions;
