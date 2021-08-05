import Link from 'next/link';
import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import makeRequest from '../../api/axios';
import TextInput from '../../components/common/Input/Text';
import styles from './register.module.scss';
import * as requestFactory from '../../api/requestFactory';

const minPassLen = 8;

const RegisterForm = () => {
  const [name, setName] = useState({ value: '', invalidMsg: '' });
  const [email, setEmail] = useState({ value: '', invalidMsg: '' });
  const [confirmEmail, setConfirmEmail] = useState({ value: '', invalidMsg: '' });
  const [password, setPassword] = useState({ value: '', invalidMsg: '' });
  const [isInvalid, setIsInvalid] = useState(true);
  const [filled, setFilled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    makeRequest(requestFactory
      .createAccount({
        Name: name.value,
        Email: email.value,
        Password: password.value,
      })).then((response) => {
      setLoading(false);
      if (response) {
        // ... todo set logged user info
        router.push('/');
      }
    });
  };

  const handleEmailChange = (text: string) => {
    setFilled(true);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(text.toLowerCase())) {
      setEmail({ value: text, invalidMsg: 'Insira um email válido' });
    } else {
      setEmail({ value: text, invalidMsg: '' });
    }
  };

  const handleNameChange = (text: string) => {
    setFilled(true);
    if (text.length === 0) {
      setName({ value: text, invalidMsg: 'Campo obrigatório' });
    } else {
      setName({ value: text, invalidMsg: '' });
    }
  };

  const handleConfirmEmailChange = (text: string) => {
    setFilled(true);
    if (text !== email.value) {
      setConfirmEmail({ value: text, invalidMsg: 'Emails não coincidem' });
    } else {
      setConfirmEmail({ value: text, invalidMsg: '' });
    }
  };

  const handlePasswordChange = (text: string) => {
    setFilled(true);
    if (text.length < 8) {
      setPassword({ value: text, invalidMsg: `Password precisa ter pelo menos ${minPassLen} caracteres` });
    } else {
      setPassword({ value: text, invalidMsg: '' });
    }
  };

  useEffect(() => {
    setIsInvalid(email.invalidMsg.length > 0
      || confirmEmail.invalidMsg.length > 0
      || name.invalidMsg.length > 0
      || password.invalidMsg.length > 0
      || !filled
      || loading);
  }, [email.invalidMsg, confirmEmail.invalidMsg, name.invalidMsg, password.invalidMsg, loading]);

  return (
    <form
      onSubmit={onSubmit}
      className={styles.formContainer}
    >
      <div className={styles.loginHeader}>
        <h1>Criar Conta</h1>
      </div>
      <TextInput
        value={name.value}
        invalidMsg={name.invalidMsg}
        label="Nome"
        placeholder="Nome"
        onChange={handleNameChange}
      />
      <TextInput
        value={email.value}
        invalidMsg={email.invalidMsg}
        paddingTop={20}
        label="Email"
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <TextInput
        value={confirmEmail.value}
        invalidMsg={confirmEmail.invalidMsg}
        paddingTop={20}
        label="Confirmar Email"
        placeholder="Confirmar Email"
        onChange={handleConfirmEmailChange}
      />
      <TextInput
        value={password.value}
        invalidMsg={password.invalidMsg}
        paddingTop={20}
        label="Senha"
        placeholder="Senha"
        type="password"
        onChange={handlePasswordChange}
      />
      <div className={styles.containerBellow}>
        <button
          className={styles.btn}
          type="submit"
          disabled={isInvalid}
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
