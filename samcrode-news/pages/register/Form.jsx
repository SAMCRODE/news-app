import React from 'react';
import TextInput from '../../components/common/Input/Text';
import styles from './register.module.scss';

const RegisterForm = () => (
  <form className={styles.formContainer}>
    <div className={styles.loginHeader}>
      <h1>Criar Conta</h1>
    </div>
    <TextInput
      label="Nome"
      placeholder="Nome"
    />
    <TextInput
      paddingTop={20}
      label="Email"
      placeholder="Email"
    />
    <TextInput
      paddingTop={20}
      label="Confirmar Email"
      placeholder="Confirmar Email"
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
        Criar Conta
      </button>
      <span>ou</span>
      <a href="//#endregion">Já tenho uma conta</a>
    </div>
  </form>
);

export default RegisterForm;
