/* eslint-disable react/prop-types */
import React from 'react';
import styles from './textCon.module.scss';

const NonEditable = ({ text, firstLetterCap, firstLetter }) => {
  const parts = text.split('<br>');

  return (
    <>
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
    </>
  );
};

export default NonEditable;
