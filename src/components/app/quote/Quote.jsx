import React from 'react';
import PropTypes from 'prop-types';
import styles from './quote.css';

const Quote = ({ quote }) => {
  return (
    <p className={styles.quote}>
      {quote}
    </p>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired
};

export default Quote;

// displays a quote
