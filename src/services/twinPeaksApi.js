/* eslint-disable max-len */
// getQuote function fetches a Twin Peaks quote

export const getQuote = async () => {
  const res = await fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random');
  const json = await res.json();
  return json;
};
