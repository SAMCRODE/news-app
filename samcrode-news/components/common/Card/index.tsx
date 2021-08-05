/* eslint-disable react/prop-types */
import React from 'react';
import styles from './card.module.scss';

interface CardProps {
  margin?: number;
  image?: string;
  category?: string;
  title?: string;
  backgroundColor?: string;
  onClick?: any;
}

const Card = ({
  margin, image, category, title, backgroundColor, onClick,
}: CardProps) => (
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
