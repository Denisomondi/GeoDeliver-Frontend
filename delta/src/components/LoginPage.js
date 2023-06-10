import React, { useRef, useState } from 'react';
import './LoginPage.css';
import Header from './Header';

const LoginPage = ({ onLogin }) => {
  const usernameEmailRef = useRef(null);
  const passwordRef = useRef(null);
  const newUsernameRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const emailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Get the entered username or email and password
    const usernameEmail = usernameEmailRef.current.value;
    const password = passwordRef.current.value;
  
    console.log('Login Data:', { usernameEmail, password });
  
    try {
      const response = await fetch(`http://localhost:4567/users?name=${usernameEmail}&password=${password}`);
      if (response.ok) {
        const user = await response.json();
        console.log('User ID:', user.id); // Log the user ID
        onLogin(user.name, user.email);
      } else {
        const emailResponse = await fetch(`http://localhost:4567/users?email=${usernameEmail}&password=${password}`);
        if (emailResponse.ok) {
          const user = await emailResponse.json();
          console.log('User ID:', user.id); // Log the user ID
          onLogin(user.name, user.email);
        } else {
          setLoginError('Invalid username or password');
        }
      }
    } catch (error) {
      setLoginError('Error occurred during login');
    }
  };
  
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    // Get the entered new username, password, and email
    const newUsername = newUsernameRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const email = emailRef.current.value;
  
    console.log('Sign Up Data:', { newUsername, newPassword, confirmPassword, email });
  
    if (newPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4567/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newUsername, password: newPassword, email: email }),
      });
      if (response.ok) {
        const user = await response.json();
        console.log('User ID:', user.id); // Log the user ID
        onLogin(user.name, user.email);
      } else {
        const emailResponse = await fetch(`http://localhost:4567/users?email=${email}`);
        if (emailResponse.ok) {
          const user = await emailResponse.json();
          console.log('User ID:', user.id); // Log the user ID
          onLogin(user.name, user.email);
        } else {
          setSignupError('Error occurred during sign up');
        }
      }
    } catch (error) {
      setSignupError('Error occurred during sign up');
    }
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
                  <div classname="signup">
                    <div className="input-group">
                      <label htmlFor="newUsername">Username</label>
                      <input type="text" name="newUsername" id="newUsername" placeholder="" ref={newUsernameRef} />
                    </div>
                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" placeholder="" ref={emailRef} />
                    </div>
                    <div className="input-group">
                      <label htmlFor="newPassword">New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        placeholder=""
                        ref={newPasswordRef}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder=""
                        ref={confirmPasswordRef}
                      />
                    </div>
                    <button className="sign" onClick={handleSignUp}>
                      Sign up
                    </button>
                    <div className="no-account" onClick={toggleSignUp}>
                      Already have an account? Sign in
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="input-group2">
                    <label htmlFor="usernameEmail">Enter Username or Email</label>
                    <input
                      type="text"
                      name="usernameEmail"
                      id="usernameEmail"
                      placeholder=""
                      ref={usernameEmailRef}
                    />
                  </div>
                  <div className="input-group2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="" ref={passwordRef} />
                    <div className="forgot">
                      <a rel="noopener noreferrer" href="#">
                        Forgot Password?
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
