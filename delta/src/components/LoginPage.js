import React, { useRef, useState } from 'react';
import './LoginPage.css';
import Header from './Header';

const LoginPage = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const newUsernameRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the entered username and password
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Retrieve the stored signup data from localStorage
    const signUpData = localStorage.getItem('signupData');
    if (signUpData) {
      const jsonData = JSON.parse(signUpData);
      const storedUsername = jsonData.username;
      const storedPassword = jsonData.password;

      if (username === storedUsername && password === storedPassword) {
        // Login successful
        onLogin(username, password);
      } else {
        setLoginError('Invalid username or password');
      }
    } else {
      setLoginError('No signup data found');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Get the entered new username and password
    const newUsername = newUsernameRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (newPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    // Create an object to represent the signup data
    const signUpData = {
      username: newUsername,
      password: newPassword,
    };

    // Store the signup data in localStorage as a JSON string
    localStorage.setItem('signupData', JSON.stringify(signUpData));

    // Automatically perform login after successful sign up
    onLogin(newUsername, newPassword);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setLoginError('');
    setSignupError('');
  };

  return (
    <>
      <input id="switch" type="checkbox" />
      <div className="app">
        <div className="body">
          <Header className="head" />
          <div className="form-container">
            <p className="title">{showSignUp ? 'Sign Up' : 'Login'}</p>
            {loginError && <p className="error">{loginError}</p>}
            {signupError && <p className="error">{signupError}</p>}
            <form className="form">
              {showSignUp ? (
                <>
                  <div className="input-group">
                    <label htmlFor="newUsername">Username</label>
                    <input type="text" name="newUsername" id="newUsername" placeholder="" ref={newUsernameRef} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" name="newPassword" id="newPassword" placeholder="" ref={newPasswordRef} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="" ref={confirmPasswordRef} />
                  </div>
                  <button className="sign" onClick={handleSignUp}>
                    Sign up
                  </button>
                  <div className="no-account" onClick={toggleSignUp}>
                    Already have an account? Sign in
                  </div>
                </>
              ) : (
                <>
                  <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="" ref={usernameRef} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="" ref={passwordRef} />
                    <div className="forgot">
                      <a rel="noopener noreferrer" href="#">
                        Forgot Password ?
                      </a>
                    </div>
                  </div>
                  <button className="sign" onClick={handleLogin}>
                    Sign in
                  </button>
                  <div className="no-account" onClick={toggleSignUp}>
                    Don't have an account? Sign up
                  </div>
                </>
              )}
            </form>
          </div>
          <p>
            Unlock a world of limitless possibilities. Discover the joy of seamless online shopping and find your perfect
            fit. Welcome to our e-commerce community, where convenience meets style
          </p>
          <div className="phone">
            <div className="menu">
              <div className="time">4:20</div>
              <div className="icons">
                <div className="network"></div>
                <div className="battery"></div>
              </div>
            </div>
            <div className="content">
              <div className="circle">
                <div className="crescent"></div>
              </div>
              <label htmlFor="switch">
                <div className="toggle"></div>
                <div className="names">
                  <p className="light">Light</p>
                  <p className="dark">Dark</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
