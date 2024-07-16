import React from 'react';
import Layout from './layout';
import LoginForm from './components/loginForm';

const Page: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Page;