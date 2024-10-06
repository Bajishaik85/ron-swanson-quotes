import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import SavedQuotesList from "./components/QuoteList";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Fetch random quote from API
  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote(response.data[0]);
    } catch (error) {
      console.error("Error fetching the quote!", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Save the current quote to the list
  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard
        quote={quote}
        onNewQuote={fetchQuote}
        onSaveQuote={saveQuote}
      />
      <SavedQuotesList savedQuotes={savedQuotes} />
    </div>
  );
}

export default App;
