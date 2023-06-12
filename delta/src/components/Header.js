import React, { useEffect, useState } from "react";
import myImage from './vecteezy_3d-rendering-online-payment-for-ecommerce-or-online-shop_8508172_957.png';
import './Header.css';

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Geo-Deliver", "the Delivery Service", "the Shipping Solution", "a Seller's Place"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getCurrentWord = () => {
    const word = words[currentWordIndex];
    const [firstWord, secondWord, thirdWord] = word.split(" ");

    if (thirdWord) {
      return (
        <>
          <span className="orange">{firstWord}</span>{" "}
          <span className="green">{secondWord}</span>{" "}
          <span className="orange">{thirdWord}</span>
        </>
      );
    } else if (secondWord) {
      return (
        <>
          <span className="orange">{firstWord}</span>{" "}
          <span className="green">{secondWord}</span>
        </>
      );
    } else {
      return <span className="green">{firstWord}</span>;
    }
  };

  return (
    <header className="App-header">
      <h1>
        Welcome to <span className="rotating-words">{getCurrentWord()}</span>
      </h1>
    </header>
  );
}

export default Header;
