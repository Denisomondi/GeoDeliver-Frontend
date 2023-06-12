import React, { useEffect, useState } from 'react';

const OrderHistory = ({ user }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(`http://localhost:4567/orders/history/${user.id}`);
        const data = await response.json();
        setOrderHistory(data);
      } catch (error) {
        console.error('Error occurred while fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, [user.id]);

  return (
    <div>
      <h2>Order History</h2>
      {orderHistory.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Total Amount: {order.total_amount}</p>
          {/* Display other order details */}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
