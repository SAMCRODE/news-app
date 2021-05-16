/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './layout.module.scss';
import UserMenu from './UserMenu';
import ClickableLogo from '../ClickableLogo';

const Footer = () => (
  <div className={styles.navcontainer}>
    <ClickableLogo />
    <div className={styles.innerContainer}>
      <Link href="/">
        <a>SAMCRODE</a>
      </Link>
      <UserMenu />
    </div>
  </div>
);

export default Footer;
