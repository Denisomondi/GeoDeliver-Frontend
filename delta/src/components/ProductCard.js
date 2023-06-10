import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      {/* Add additional information or buttons as needed */}
    </div>
  );
};

export default ProductCard;
