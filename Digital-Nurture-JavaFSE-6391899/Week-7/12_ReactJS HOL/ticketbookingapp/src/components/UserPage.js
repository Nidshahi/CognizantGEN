import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div>
      <h1>Welcome back</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
