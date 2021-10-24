/* eslint-disable no-use-before-define */
/* eslint-disable react/no-danger */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './textCon.module.scss';

const NonEditable = ({
  text = '', firstLetterCap, firstLetter, html,
}) => {
  const parts = text.split('<br>');

  if (html) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.contentType1}
      />
    );
  }

  return (
    <>
      {
        firstLetterCap ? <span className={styles.firstLetter}>{firstLetter}</span>
          : <span>{ firstLetter }</span>
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
