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
        Samcrode
      </Link>
      <UserMenu />
    </div>
  </div>
);

export default Footer;
