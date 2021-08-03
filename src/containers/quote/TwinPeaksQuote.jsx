/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '../../components/app/quote/Load';
import Quote from '../../components/app/quote/Quote';
import { getQuote } from '../../services/twinPeaksApi';

const TwinPeaksQuote = () => {

  return (
    <>
      <Quote
      />
      <Button
      />
    </>
  );
};

export default TwinPeaksQuote;

// fetches and displays a quote

/* on clicking the LOAD button, and not before, fetches a quote from the api and displays it */

