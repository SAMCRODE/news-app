/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from '../../../store';
import styles from './loading.module.scss';

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

const Loading = () => {
  const loading = useSelector((state: RootState) => state.appReducer.loading);

  return (
    loading && (
    <div className={styles.container}>
      <div className={styles.spinnerContainer}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={spinTransition}
          className={styles.spinner}
        />
      </div>
    </div>
    )
  );
};

export default Loading;
