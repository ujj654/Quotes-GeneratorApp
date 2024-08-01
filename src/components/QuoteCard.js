// src/components/QuoteCard.js

import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, onNewQuote }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">{quote}</p>
      <button className="new-quote-button" onClick={onNewQuote}>
        Get New Quote
      </button>
    </div>
  );
};

export default QuoteCard;
