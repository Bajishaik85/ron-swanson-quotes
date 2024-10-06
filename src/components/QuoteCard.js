import React from "react";

const QuoteCard = ({ quote, onNewQuote, onSaveQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <div className="buttons">
        <button onClick={onNewQuote}>New Quote</button>
        <button onClick={onSaveQuote}>Save Quote</button>
      </div>
    </div>
  );
};

export default QuoteCard;
