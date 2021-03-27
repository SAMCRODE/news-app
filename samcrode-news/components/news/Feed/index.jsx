import React from 'react';
import styles from './feed.module.scss';
import FeedItem from './item';

const FeedNews = () => (
  <div className={styles.containerFeed}>
    <FeedItem
      title="Charlinho, o menino que só queria estudar"
      categoryLabel="Brasil Mulambo"
      description="A história de mais um brasileirinho nesse Brasil afora"
      time="Há 3 horas"
      image="https://i.ytimg.com/vi/q_xuwdSyOJs/maxresdefault.jpg"
    />

    <FeedItem
      title="Aprenda a fugir de um baculejo"
      categoryLabel="Small Tricks"
      description="Especilistas em fulgas, Jorge Bacon ensina como se livrar de baculejos"
      time="Há 2 horas"
      image="https://sites.google.com/site/noticiasdasruas/_/rsrc/1477960287807/home/baculejo-de-policial/IMG-20161031-WA0043.jpg"
    />
  </div>
);

export default FeedNews;
