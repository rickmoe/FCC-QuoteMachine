import { useState } from "react";
import "./App.css";
import quotes from "./quotes";

export default function App() {
  function getRandomQuote(quotes) {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }

  const [quote, setQuote] = useState(getRandomQuote(quotes));
  let tweetURL =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    quote.text.replace(" ", "%20") +
    "%20-%20" +
    quote.author.replace(" ", "%20");

  return (
    <>
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <div className="row">
          <a id="tweet-quote" href={tweetURL}>
            Tweet Quote
          </a>
          <button
            id="new-quote"
            onClick={() => setQuote(getRandomQuote(quotes))}
          >
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}
