import React from 'react';

const DisplayPage = ({ product, addToCart, onClose }) => {
  const { id, name, image, price, description } = product;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="display-page">
      <div className="product-details">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
      </div>
      <div className="actions">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DisplayPage;
