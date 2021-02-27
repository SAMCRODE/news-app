import React from 'react';
import PostHeader from '../../components/news/post/header';
import PostText from '../../components/news/post/text';
import styles from './news.module.scss';

export default function News() {
  return (
    <div className={styles.container}>
      <div className={styles.newsContent}>
        <PostHeader />
        <PostText />
      </div>
    </div>
  );
}
