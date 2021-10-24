/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './layout.module.scss';
import { setLoading } from '../../../store/appSlice';
import Loading from '../../common/Loading';

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStart = () => {
      dispatch(setLoading(true));
    };
    const handleStop = () => {
      dispatch(setLoading(false));
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <div className={styles.acontainer}>
      <Loading />
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
