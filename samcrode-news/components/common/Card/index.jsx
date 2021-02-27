/* eslint-disable react/prop-types */
import React from 'react';
import styles from './card.module.scss';

const Card = ({
  margin, image, category, title, backgroundColor, onClick
}) => (
  <div
    onClick={onClick.bind(this)}
    role="link"
    style={{ margin, backgroundImage: `url(${image})`, borderColor: backgroundColor }}
    className={styles.container}
    aria-hidden="true"
  >
    <div
      className={styles.category}
      style={{ backgroundColor }}
    >
      {category}
    </div>
    <div
      className={styles.title}
      style={{ backgroundColor }}
    >
      {title}
    </div>
  </div>
);

export default Card;
