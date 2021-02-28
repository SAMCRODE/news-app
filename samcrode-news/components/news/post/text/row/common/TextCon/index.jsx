/* eslint-disable react/prop-types */
import React from 'react';
import styles from './textCon.module.scss';

const TextCon = ({ text, firstLetterCap, firstLetter }) => {
  const parts = text.split('<br>');

  return (
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
  );
};

export default TextCon;
