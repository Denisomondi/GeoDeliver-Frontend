import React from 'react';

const AccountManagement = ({ loggedIn, user, onUpdate, onLogout }) => {
  if (!loggedIn) {
    return <p>Please log in to view your account.</p>;
  }

  console.log('User:', user); // Add console.log to see user information

  return (
    <div>
      <h2>Account Management</h2>
      <div>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Password: {user.password}</p>
        {/* Display orders and other user information as needed */}
      </div>
      <button onClick={onUpdate}>Update Account</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AccountManagement;
