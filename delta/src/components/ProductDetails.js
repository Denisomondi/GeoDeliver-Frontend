import React, { useState, useEffect } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onClose }) => {
  // Logic for displaying product details

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <p>{product.name}</p>
      <p>{product.price && `$${product.price.toFixed(2)}`}</p>
      <p>{product.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4567/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      const response = await fetch('http://localhost:4567/products/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON
