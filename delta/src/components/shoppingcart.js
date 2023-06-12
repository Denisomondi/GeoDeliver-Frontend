import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';
import './ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Checkout from './Checkout';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({ user }) => {
  const { selectedProducts, removeFromCart, clearCart } = useContext(ShoppingCartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    // You can add additional logic here if needed
  };

  const handleClearCart = () => {
    clearCart();
    // You can add additional logic here if needed
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of selectedProducts) {
      totalPrice += product.price;
    }
    return totalPrice.toFixed(2);
  };

  const handleOpenCheckout = () => {
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const orderData = {
    items: selectedProducts.map((product) => ({
      id: product.id,
      name: product.name,
      quantity: 1, // Assuming quantity is always 1 for each product in the cart
      price: product.price,
    })),
    totalAmount: calculateTotalPrice(),
  };

  console.log('orderData:', orderData); // Log the orderData to the console

  return (
    <div>
      <h2 className="shopping-cart">Shopping Cart</h2>
      {selectedProducts.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th className="action">remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button 
                    className="button"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total Price:</td>
              <td className="price">${calculateTotalPrice()}</td>
            </tr>
          </tfoot>
        </table>
      )}
      {selectedProducts.length > 0 && (
        <div>
          <button className="clear" onClick={handleClearCart}>
            Clear Cart
          </button>
          <button className="checkout" onClick={handleOpenCheckout}>
            Checkout
          </button>
        </div>
      )}
      {showCheckout && (
        <div className="checkout-popup">
          <div className="checkout-popup-inner">
            <button className="close-button" onClick={handleCloseCheckout}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Checkout orderData={orderData} onClose={handleCloseCheckout} user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
