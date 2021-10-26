import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setState] = useState({});
  useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json()).then(
        (res) => setState(res),
      );
  }, []);

  return (

    <>

      <h3 className="quote-author">
        {quote.author}
        {' '}
        :
      </h3>
      <p className="quote">{quote.quote}</p>
    </>
  );
};
export default Quotes;
