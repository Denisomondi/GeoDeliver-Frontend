import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myImage from './vecteezy_3d-rendering-online-payment-for-ecommerce-or-online-shop_8508172_957.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HistoryComponent from './OrderHistory';

const Navbar = ({ onLogout, onSearchButtonClick }) => {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={myImage} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className={selectedItem === 'home' ? 'selected' : ''}>
          <Link to="/" onClick={() => setSelectedItem('home')}>
            Home
          </Link>
        </li>

        <li className="search">
          <button className="search-button" onClick={onSearchButtonClick}>
            Search
          </button>
        </li>
        <li className={selectedItem === 'categories' ? 'selected' : ''}>
          <Link to="/CategoriesPage" onClick={() => setSelectedItem('categories')}>
            Categories
          </Link>
        </li>
        <li className={selectedItem === 'about' ? 'selected' : ''}>
          <Link to="/about" onClick={() => setSelectedItem('about')}>
            About Us
          </Link>
        </li>
        <li className={selectedItem === 'sell' ? 'selected' : ''}>
          <Link to="/sell" onClick={() => setSelectedItem('sell')}>
            Sell with Us
          </Link>
        </li>
        <li className={selectedItem === 'cart' ? 'selected' : ''}>
          <Link to="/cart" onClick={() => setSelectedItem('cart')}>
            Cart<FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </li>
        <li className={selectedItem === 'account' ? 'selected' : ''}>
          <Link to="/account" onClick={() => setSelectedItem('account')}>
            Account
          </Link>
        </li>
        <li className={selectedItem === 'History' ? 'selected' : ''}>
          <Link to="/History" onClick={() => setSelectedItem('History')}>
            History
          </Link>
        </li>
        <li className="logout">
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
