import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myImage from './vecteezy_3d-rendering-online-payment-for-ecommerce-or-online-shop_8508172_957.png';

const Navbar = ({ onLogout }) => {
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CategoriesPage">Categories</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/sell">Sell with Us</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li>
        <li className='logout'><a href="#" onClick={handleLogout}>Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
