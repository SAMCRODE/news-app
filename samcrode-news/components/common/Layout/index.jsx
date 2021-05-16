/* eslint-disable react/prop-types */
import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.acontainer}>
    <Navbar />
    <div>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
