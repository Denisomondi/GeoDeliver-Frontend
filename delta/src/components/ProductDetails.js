import React, { useState, useEffect } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onClose }) => {
  // Logic for displaying product details

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <p>{product.name}</p>
      <p>${product.price}</p>
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
        body: JSON.stringify({
          productId: productId
        })
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="shopping-cart-items">
        {products.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="item-info">
              <input type="checkbox" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            <button onClick={() => openProductDetails(product)}>Details</button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
      )}
    </div>
  );
};

export default ShoppingCart;
