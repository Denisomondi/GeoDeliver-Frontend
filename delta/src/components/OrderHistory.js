import React, { useEffect, useState } from 'react';
import './OrderHistory.css';

const OrderHistory = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the user's order history from the server
    fetch(`http://localhost:4567/orders?user_id=${user.id}`)
      .then(response => response.json())
      .then(data => {
        setOrders(data);
      })
      .catch(error => {
        console.error('Failed to fetch order history:', error);
      });
  }, [user.id]);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <table className="order-history-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.created_at).toLocaleDateString()}</td>
                <td>${(order.total_amount !== null ? parseFloat(order.total_amount).toFixed(2) : '0.00')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
