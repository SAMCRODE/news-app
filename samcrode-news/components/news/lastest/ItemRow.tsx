/* eslint-disable react/prop-types */
import React from 'react';
import styles from './lastest.module.scss';

interface ItemRowProps {
  number: string;
  title: string;
}

const ItemRow = ({ number, title }: ItemRowProps) => (
  <div className={styles.itemContainer}>
    <h5>{number}</h5>
    <p>{title}</p>
  </div>
);

export default ItemRow;
