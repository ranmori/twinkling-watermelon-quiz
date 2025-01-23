import React from "react";
import "./Home.css";

function Quotes() {
  const quotesCollection = [
    "My heart aches because of the other option I didn’t choose.",
    "Don’t feed your enemy. If you feed people like them, all they will do is poop out of their mouths.",
    "If you push the wall, it becomes a bridge. If you fall somewhere, there will be a hidden treasure.",
    "The moment you give up, it’s game over.",
    "Major and minor chords coexist harmoniously for a song to sound delightful and complete. The same goes for life.",
    "Experiencing hardships and joyful moments helps you build your dazzling life.",
    "If you really want to express something, you will find a way. And if you want to express more, you just need to learn how to do it.",
    "Put down the burden already. It’s not your burden to carry. You forced yourself to take on the burden.",
  ];

  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Shuffle the collection and pick the first 3 quotes
  const randomQuotes = shuffleArray([...quotesCollection]).slice(0, 3);

  return (
    <div>
      {randomQuotes.map((quote, index) => (
        <p key={index} className="quotes">
          {quote}
        </p>
      ))}
    </div>
  );
}

export default Quotes;
