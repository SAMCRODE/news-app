/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from './layout.module.scss';

const UserNotAuthedMenu = () => (
  <Link href="/login">
    <div className={styles['enter-container']}>
      <FontAwesomeIcon
        icon={faDoorOpen}
      />
      <span>Entrar</span>
    </div>
  </Link>
);

export default UserNotAuthedMenu;
