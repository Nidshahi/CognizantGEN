import React from 'react';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <h1>Please sign up.</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
