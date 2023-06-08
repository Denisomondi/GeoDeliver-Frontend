import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Sell with Us</a></li>
        <li><a href="#">Shopping Cart</a></li>
        <li className='logout'><a href="#" onClick={handleLogout}>Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
