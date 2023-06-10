import React, { useEffect, useRef } from "react";
import myImage from './vecteezy_3d-rendering-online-payment-for-ecommerce-or-online-shop_8508172_957.png';
import './Header.css';

const Header = () => {
  const rotatingWords = useRef(null);

  useEffect(() => {
    const words = ["Geo-Deliver", "the Delivery Service", " the Shipping Solution"];
    let currentIndex = 0;

    const rotateWords = () => {
      rotatingWords.current.classList.add("rotate");
      setTimeout(() => {
        rotatingWords.current.textContent = words[currentIndex];
        rotatingWords.current.classList.remove("rotate");
        currentIndex = (currentIndex + 1) % words.length;
      }, 1000);
    };

    const interval = setInterval(rotateWords, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="App-header">
      <h1>
        Welcome to  <span className="rotating-words" ref={rotatingWords}></span>
      </h1>
    </header>
  );
}

export default Header;
