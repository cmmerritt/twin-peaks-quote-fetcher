/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './load.css';

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        <img src="../../../public/assets/cherry-pie.png" className={styles.pie} />
      </button>
      <span>Click the pie for a damn fine quote...</span>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;

// displays a button
