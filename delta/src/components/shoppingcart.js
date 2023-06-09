import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleCheckboxChange = (productId, price) => {
    const updatedCartItems = cartItems.includes(productId)
      ? cartItems.filter((item) => item !== productId)
      : [...cartItems, productId];
    setCartItems(updatedCartItems);

    const updatedTotalPrice = updatedCartItems.reduce((total, itemId) => {
      const itemPrice = products.find((product) => product.id === itemId)?.price || 0;
      return total + itemPrice;
    }, 0);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
      <table className="shopping-cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Category</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={cartItems.includes(product.id)}
                    onChange={() => handleCheckboxChange(product.id, product.price)}
                  />
                  <span className="checkbox-custom"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
