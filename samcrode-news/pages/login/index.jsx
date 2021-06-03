import React from 'react';
import LoginForm from './Form';
import styles from './login.module.scss';
import LoginWall from './Wall';

const LoginPage = () => (
  <div className={styles.container}>
    <LoginWall />
    <LoginForm />
  </div>
);

export default LoginPage;
