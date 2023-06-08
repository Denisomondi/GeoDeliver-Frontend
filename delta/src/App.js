import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ShoppingCart from './components/shoppingcart';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar.js';
import LoginPage from './components/LoginPage';


// LoadingScreen component
const LoadingScreen = () => {
  return (
    <div className="boxes">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

function App() {
  const bannerRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const savedUsername = localStorage.getItem('username');

    if (isLoggedIn) {
      setLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = (username) => {
    setLoggingIn(true);

    // Simulate an asynchronous login process (e.g., API call) with a timeout
    setTimeout(() => {
      setLoggedIn(true);
      setUsername(username);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      setLoggingIn(false);
    }, 1200);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  if (loggingIn) {
    return <LoadingScreen />; // Display the loading screen while logging in
  }

  if (!loggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Navbar onLogout={handleLogout} username={username} />
      <Header />
      <section>
        <SearchBar />
      </section>
      <Banner ref={bannerRef} />
      <LandingPage />
      <ShoppingCart />
    </div>
  );
}

export default App;
