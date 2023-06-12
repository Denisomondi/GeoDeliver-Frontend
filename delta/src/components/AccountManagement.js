import React, { useState } from 'react';
import './AccountManagement.css'

const AccountManagement = ({ loggedIn, user, onUpdate, onLogout }) => {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);

  if (!loggedIn) {
    return <p>Please log in to view your account.</p>;
  }

  console.log('User:', user); // Add console.log to see user information

  const handleUpdate = () => {
    const updatedUser = {
      ...user,
      name: name,
      password: password,
    };

    onUpdate(updatedUser);
  };

  return (
    <div>
      <h2>Account Management</h2>
      <div className='AccountManagement'>
        <p className='id'>ID: {user.id}</p>
        <p>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </p>
        {/* Display orders and other user information as needed */}
      </div>
      <button className='btn' onClick={handleUpdate}>Update Account</button>
      <button className='btn' onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AccountManagement;
