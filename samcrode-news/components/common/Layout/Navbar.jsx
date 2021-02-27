/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './layout.module.scss';

const Footer = () => (
  <div className={styles.navcontainer}>
    <div className={styles.innerContainer}>
      <Link href="/">
        <a>SAMCRODE</a>
      </Link>
    </div>
  </div>
);

export default Footer;
