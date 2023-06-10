import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ orderData }) => {
  const [checkoutStatus, setCheckoutStatus] = useState('');
  const [orderId, setOrderId] = useState(null);
  
  const handleCheckout = () => {
    // After successfully creating the order, create the order items
    const orderItemsPromises = orderData.items.map((item) => {
      const orderItemData = {
        quantity: item.quantity,
        unit_price: item.price,
        order_id: orderId,
        product_id: item.id,
      };
  
      console.log('Order item being posted:', orderItemData); // Log the object being posted
  
      return fetch('/order_items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderItemData),
      });
    });

    // Use Promise.all to wait for all order item requests to complete
    Promise.all(orderItemsPromises)
      .then((responses) => {
        // Handle the responses if needed
        console.log('Order items created:', responses);
        // Redirect to a success page or perform additional actions
        setCheckoutStatus('success');
      })
      .catch((error) => {
        console.error('Error occurred during order item creation:', error);
        // Handle the error and display an appropriate message to the user
        setCheckoutStatus('error');
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Display order items and other checkout details */}
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderData.items.map((item) => (
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
      <button className='checkout' onClick={handleCheckout}>Done</button>
    </div>
  );
};

export default Checkout;
