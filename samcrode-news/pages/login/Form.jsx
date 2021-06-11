import Link from 'next/link';
import React from 'react';
import TextInput from '../../components/common/Input/Text';
import styles from './login.module.scss';

const LoginForm = () => (
  <form className={styles.formContainer}>
    <div className={styles.loginHeader}>
      <h1>Entrar</h1>
    </div>
    <TextInput
      label="Login"
      placeholder="Login"
    />
    <TextInput
      paddingTop={20}
      label="Senha"
      placeholder="Senha"
      type="password"
    />
    <div className={styles.containerBellow}>
      <span>Esqueceu a senha ?</span>
      <button
        className={styles.btn}
        type="button"
      >
        Entrar
      </button>
      <span>ou</span>
      <Link href="/register">Criar Conta</Link>
    </div>
  </form>
);

export default LoginForm;
