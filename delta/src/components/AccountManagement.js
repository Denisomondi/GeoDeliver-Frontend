import React, { useRef, useState } from 'react';

const AccountManagement = ({ id, user, onUpdate, onLogout }) => {
  const newUsernameRef = useRef(null);
  const newPasswordRef = useRef(null);
  const [updateError, setUpdateError] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  console.log('User:', user); // Display user object in the console to check its contents
  console. log('id:', id);
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Get the entered new username and password
    const newUsername = newUsernameRef.current.value;
    const newPassword = newPasswordRef.current.value;

    try {
      const response = await fetch(`http://localhost:4567/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newUsername,
          password: newPassword
        })
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log('Updated User:', updatedUser); // Display updated user data in the console
        onUpdate(updatedUser);
        setIsUpdated(true);
      } else {
        setUpdateError('Failed to update user');
      }
    } catch (error) {
      setUpdateError('Error occurred during update');
      console.error(error);
    }
  };

  const handleLogout = () => {
    onLogout();
  };

  if (isUpdated) {
    return (
      <div>
        <h2>Account Updated</h2>
        <p>Please login again with your new details.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Account Management</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <form onSubmit={handleUpdate}>
        <label htmlFor="newUsername">New Username:</label>
        <input type="text" id="newUsername" ref={newUsernameRef} />
        <label htmlFor="newPassword">New Password:</label>
        <input type="password" id="newPassword" ref={newPasswordRef} />
        <button type="submit">Update Account</button>
      </form>
      {updateError && <p className="error">{updateError}</p>}
    </div>
  );
};

export default AccountManagement;
