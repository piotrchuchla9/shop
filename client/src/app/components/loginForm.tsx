"use client";

import React, { useState } from 'react';
import { useLogin } from '@shared/api/hooks';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      {/* {loginMutation.isLoading && <p>Loading...</p>} */}
      {loginMutation.isError && <p>Error: {loginMutation.error?.message}</p>}
      {loginMutation.isSuccess && <p>Login successful! Token: {loginMutation.data.token}</p>}
    </form>
  );
};

export default LoginForm;
