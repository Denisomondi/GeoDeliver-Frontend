import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ orderData, user, onClose }) => {
  const [checkoutStatus, setCheckoutStatus] = useState('');

  const handlePlaceOrder = () => {
    // Perform the necessary API call or logic to create the order
    // After the order is created successfully, set orderPlaced to true
    // You can use the orderData and user variables to send the necessary information to the server
    // Once the order is created, you can show a success message and close the checkout

    // Example code (replace it with your actual implementation):
    fetch('http://localhost:4567/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        total_amount: orderData.totalAmount,
        status: 'placed',
        items: orderData.items.map(item => ({
          product_id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order created:', data); // Log the created order data
        setCheckoutStatus('success'); // Set checkoutStatus to 'success' after successful order creation
      })
      .catch(error => {
        console.error('Failed to create order:', error);
        setCheckoutStatus('error'); // Set checkoutStatus to 'error' if order creation fails
      });
  };

  const handleCheckout = () => {
    handlePlaceOrder();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderData.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="checkout-total">Total: ${parseFloat(orderData.totalAmount).toFixed(2)}</p>
      {checkoutStatus === 'success' && <p>Checkout successful!</p>}
      {checkoutStatus === 'error' && <p>Checkout failed. Please try again.</p>}
      <p>User ID: {user.id}</p>
      <button className="checkout" onClick={handleCheckout}>Done</button>
    </div>
  );
};

export default Checkout;
