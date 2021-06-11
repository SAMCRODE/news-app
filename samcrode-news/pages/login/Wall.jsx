import React from 'react';
import Link from 'next/link';
import styles from './login.module.scss';

const LoginWall = () => (
  <div className={styles.loginWall}>
    <div className={styles.loginWallText}>
      <h4>Essa plataforma foi colhida nas plantações ao norte</h4>
      <span>Feito com as mais novas tecnologias presentes no campo</span>
      <h4>Marcelo Freitas é o responsável por essa belezura</h4>
      <span>Mesmo com sua vida simples no campo</span>
      <h4>Cansado de fazer grana com colheitas de trigo</h4>
      <span>Fez um ato mais nobre ao construir esse site</span>
      <h4>Ele convida você, sim você, para fazer parte</h4>
      <Link
        href="/register"
      >
        <button
          type="button"
          className={styles.registerButton}
        >
          Criar uma conta
        </button>
      </Link>
    </div>
  </div>
);

export default LoginWall;
