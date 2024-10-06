import React from "react";

const SavedQuotesList = ({ savedQuotes }) => {
  return (
    <div className="saved-quotes-list">
      <h2>Saved Quotes</h2>
      {savedQuotes.length > 0 ? (
        <ul>
          {savedQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      ) : (
        <p>No saved quotes yet.</p>
      )}
    </div>
  );
};

export default SavedQuotesList;
