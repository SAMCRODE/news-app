import React from 'react';
import { New } from '../../../models/New';
import styles from './feed.module.scss';
import FeedItem from './item';

interface FeedNewsProps {
  news: New[]
}

const FeedNews = ({news}: FeedNewsProps) => (
  <div className={styles.containerFeed}>
    {
      news.map((obj) => (
        <FeedItem
          title={obj.Name}
          categoryLabel={obj.CategoryName}
          description={obj.Description}
          time={new Date(obj.CreateDate as string).toLocaleDateString()}
          image={obj.ImageUrl}
          key={obj.Id}
        />
      ))
    }
  </div>
);

export default FeedNews;
