/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './pureHtml.module.scss';

const PureHtml = ({
  html,
}) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    className={styles.contentType1}
  />
);

export default PureHtml;
