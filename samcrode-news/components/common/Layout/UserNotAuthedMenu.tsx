/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faDog, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from './layout.module.scss';

const UserNotAuthedMenu = () => {
  return (
    <Link href="/login">
        <div className={styles['enter-container']}>
            <FontAwesomeIcon
                icon={faDoorOpen}
            />
            <a>Entrar</a>
        </div>
    </Link>
  );
};

export default UserNotAuthedMenu;
