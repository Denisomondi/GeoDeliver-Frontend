import React, { useState } from 'react';
import './AccountManagement.css';

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

  const handleDelete = () => {
    fetch(`/api/users/${user.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Handle successful deletion
          // For example, you can redirect the user or perform any necessary cleanup
          console.log('User account deleted');
        } else {
          // Handle error case
          console.error('Failed to delete user account');
        }
      })
      .catch(error => {
        console.error('Error occurred while deleting user account', error);
      });
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
      </div>
      <button className='btn' onClick={handleUpdate}>Update Account</button>
      <button className='btn' onClick={onLogout}>Logout</button>
      <button className='btn delete-btn' onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default AccountManagement;
