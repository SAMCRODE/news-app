/* eslint-disable react/prop-types */
import React from 'react';
import styles from './layout3.module.scss';

const RowLayout3 = ({
  text, firstLetterCap, firstLetter,
}) => {
  const parts = text.split('<br>');

  return (
    <div className={styles.contentType1}>
      <div className={styles.textCon}>
        {
            firstLetterCap ? <span className={styles.firstLetter}>{firstLetter}</span>
              : <span>{firstLetter}</span>
        }
        {
          parts.map((con) => (
            <>
              {con}
              <br />
              <br />
            </>
          ))
      }
      </div>
    </div>
  );
};

export default RowLayout3;
