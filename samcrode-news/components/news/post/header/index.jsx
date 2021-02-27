import React from 'react';
import styles from './header.module.scss';

const PostHeader = () => {
  const nClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.metaSection}>
      <h2 className={styles.title}>Ratinho vs Goku é Real ?</h2>
      <h3 className={styles.description}>Imagens são vistas na internet e chocam otakus</h3>
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
