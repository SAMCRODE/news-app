/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import RegisterForm from './Form';
import styles from './register.module.scss';

const RegisterPage = () => (
  <div className={styles.container}>
    <RegisterForm />
  </div>
);

export default RegisterPage;
