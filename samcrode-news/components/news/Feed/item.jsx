/* eslint-disable react/prop-types */
import React from 'react';
import styles from './feed.module.scss';

const FeedItem = ({
  categoryLabel,
  title,
  description,
  time,
  image,
}) => (
  <div className={styles.containerItem}>
    <div
      className={styles.newImage}
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className={styles.metaContainer}>
      <span className={styles.categoryLabel}>{categoryLabel}</span>
      <h2>{title}</h2>
      <p className={styles.brief}>{description}</p>
      <span className={styles.time}>{time}</span>
    </div>
  </div>
);

export default FeedItem;
