import React from 'react';
import styles from './header.module.scss';

const PostHeader = ({name, description}) => {
  const nClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.metaSection}>
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles.description}>{description}</h3>
      <div className={styles.authorSection}>
        <div className={styles.authorPhoto} />
        <div className={styles.nameAndData}>
          <span>Merlin</span>
          <span className={styles.data}>Em 12/12/2021 ás 14:39</span>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
