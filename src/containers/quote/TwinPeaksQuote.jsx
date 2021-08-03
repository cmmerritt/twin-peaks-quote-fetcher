/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '../../components/app/quote/Load';
import Quote from '../../components/app/quote/Quote';
import { getQuote } from '../../services/twinPeaksApi';
// import { useQuoteFetcher } from '../../state/quote';

const TwinPeaksQuote = () => {
  // const { quoteFetched, handleClick } = useQuoteFetcher();

  const [quote, setQuote] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();

    const quote = await getQuote();
    console.log(quote);
    setQuote(quote);
  };

  return (
    <>
      <Quote
        quote={quote}
      />
      <Button
        onClick={handleClick}
      />
    </>
  );
};

export default TwinPeaksQuote;

// fetches and displays a quote

/* on clicking the LOAD button, and not before, fetches a quote from the api and displays it */

