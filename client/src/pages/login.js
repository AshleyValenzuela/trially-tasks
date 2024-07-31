import React, { useState } from 'react';
import { loginUser } from '../services/api';

const LoginPage = ({ user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loggedInUser = await loginUser({ email, password });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const user = {}; // Fetch user data if needed - Ashley
  return {
    props: { user }, // Pass user data to the page component as props - Ashley
  };
}

export default LoginPage;
