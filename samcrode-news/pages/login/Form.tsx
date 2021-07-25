import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import TextInput from '../../components/common/Input/Text';
import styles from './login.module.scss';
import * as requestFactory from '../../api/requestFactory';
import makeRequest from '../../api/axios';
import {User} from '../../models/User';

const LoginForm = () => {
  const [email, setEmail] = useState({ value: '', invalidMsg: '' });
  const [password, setPassword] = useState({ value: '', invalidMsg: '' });

  const handleEmailChange = (text: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(text.toLowerCase())) {
      setEmail({ value: text, invalidMsg: 'Insira um email válido' });
    } else {
      setEmail({ value: text, invalidMsg: '' });
    }
  };

  const handlePasswordChange = (text: string) => {
    if (text.length === 0) {
      setPassword({ value: text, invalidMsg: 'Campo obrigatório' });
    } else {
      setPassword({ value: text, invalidMsg: '' });
    }
  };

  const authUser = (e: FormEvent) => {
    e.preventDefault();

    const us: User = {Email: email.value, Password: password.value};

    makeRequest(requestFactory.auth(us))
      .then((response) => {
        if (response) {
          console.log(response);
        }
      });
  };

  return (
    <form
      onSubmit={authUser}
      className={styles.formContainer}>
      <div className={styles.loginHeader}>
        <h1>Entrar</h1>
      </div>
      <TextInput
        value={email.value}
        label="Email"
        placeholder="Email"
        onChange={handleEmailChange}
        invalidMsg={email.invalidMsg}
      />
      <TextInput
        value={password.value}
        paddingTop={20}
        label="Senha"
        placeholder="Senha"
        type="password"
        onChange={handlePasswordChange}
        invalidMsg={password.invalidMsg}
      />
      <div className={styles.containerBellow}>
        <span>Esqueceu a senha ?</span>
        <button
          className={styles.btn}
          type="submit"
        >
          Entrar
        </button>
        <span>ou</span>
        <Link href="/register">Criar Conta</Link>
      </div>
    </form>
  );
};

export default LoginForm;
