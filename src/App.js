// src/App.js

import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  return (
    <div className="app">
      <h1 className="app-title">Quotes Generator</h1>
      <QuoteCard quote={quote} onNewQuote={fetchQuote} />
      <button className="save-button" onClick={saveQuote}>
        Save to List
      </button>
      <div className="saved-quotes">
        <h2 className="saved-quotes-title">Saved Quotes:</h2>
        <ul>
          {savedQuotes.map((savedQuote, index) => (
            <li key={index} className="saved-quote">
              {savedQuote}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
