/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './imageCon.module.scss';

const ImageCon = ({
  image, captionImage,
}) => {
  return (
    <div
      className={styles.imageCon}
    >
      <img
        src={image}
        alt="gokuxratinho"
      />
      <span>{captionImage}</span>
    </div>
  );
};

export default ImageCon;
