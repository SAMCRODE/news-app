/* eslint-disable react/prop-types */
import React from 'react';
import styles from './layout1.module.scss';

const RowLayout1 = ({
  text, firstLetterCap, firstLetter, image, captionImage,
}) => {
  const parts = text.split('<br>');

  return (
    <div className={styles.contentType1}>
      <div className={styles.textCon}>
        {
            firstLetterCap ? <span className={styles.firstLetter}>{firstLetter}</span>
              : { firstLetter }
        }
        {
          parts.map((con) => (
            <span
              key={con}
            >
              {con}
              <br />
              <br />
            </span>
          ))
      }
      </div>
      <div
        className={styles.imageCon}
      >
        <img
          src={image}
          alt="gokuxratinho"
        />
        <span>{captionImage}</span>
      </div>
    </div>
  );
};

export default RowLayout1;
