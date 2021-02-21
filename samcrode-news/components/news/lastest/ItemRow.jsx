/* eslint-disable react/prop-types */
import React from 'react';
import styles from './lastest.module.scss';

const ItemRow = ({ number, title }) => (
  <div className={styles.itemContainer}>
    <h5>{number}</h5>
    <p>{title}</p>
  </div>
);

export default ItemRow;
