/* eslint-disable max-len */
import React from 'react';
import styles from './load.css';

const Button = () => {
  return (
    <>
      <button>
        <img src="../../../public/assets/cherry-pie.png" className={styles.pie} />
      </button>
      <span>Click the pie for a damn fine quote...</span>
    </>
  );
};

export default Button;

// displays a button
