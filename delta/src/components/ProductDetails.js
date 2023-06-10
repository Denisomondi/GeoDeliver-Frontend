import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const ProductDetails = ({ product, onClose }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>{product.name}</p>
      {product.price ? (
        <p>${product.price.toFixed(2)}</p>
      ) : (
        <p>Price not available</p>
      )}
      <p>{product.description}</p>
      <button onClick={onClose}>Close</button>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};


export default ProductDetails;
