/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './imageCon.module.scss';

const NonEditable = ({ image, captionImage }) => {
  return (
    <>
      <div
        className={styles.nonEditableImg}
        style={{ backgroundImage: `url(${image})` }}
        alt="gokuxratinho"
      />
      <span>{captionImage}</span>
    </>
  );
};

export default NonEditable;
