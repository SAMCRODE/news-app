/* eslint-disable react/prop-types */
import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import ClickableLogo from '../ClickableLogo';

const Layout = ({ children }) => (
  <>
    <ClickableLogo />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
