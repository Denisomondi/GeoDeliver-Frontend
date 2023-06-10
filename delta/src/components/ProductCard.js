import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
