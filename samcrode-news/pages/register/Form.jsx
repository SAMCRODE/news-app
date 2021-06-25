import Link from 'next/link';
import React, { useState } from 'react';
import TextInput from '../../components/common/Input/Text';
import styles from './register.module.scss';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={styles.formContainer}
    >
      <div className={styles.loginHeader}>
        <h1>Criar Conta</h1>
      </div>
      <TextInput
        value={name}
        label="Nome"
        placeholder="Nome"
        onChange={setName}
      />
      <TextInput
        value={email}
        paddingTop={20}
        label="Email"
        placeholder="Email"
        onChange={setEmail}
      />
      <TextInput
        value={confirmEmail}
        paddingTop={20}
        label="Confirmar Email"
        placeholder="Confirmar Email"
        onChange={setConfirmEmail}
      />
      <TextInput
        value={password}
        paddingTop={20}
        label="Senha"
        placeholder="Senha"
        type="password"
        onChange={setPassword}
      />
      <div className={styles.containerBellow}>
        <button
          className={styles.btn}
          type="submit"
        >
          Criar Conta
        </button>
        <span>ou</span>
        <Link href="/login">Já tenho uma conta</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
