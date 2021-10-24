/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import Card from '../../common/Card';
import styles from './hot.module.scss';
import { New } from '../../../models/New';

interface HotNewsProps {
  news: New[];
}

const HotNews = ({ news }: HotNewsProps) => {
  const router = useRouter();
  const ulNew = news[2];
  const rbNew = news[1];
  const rcNew = news[0];

  const navigateNews = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardscontainer}>
        <div className={styles.cardleft}>
          <div className={styles.firstCard}>
            {
              ulNew && (
              <Card
                onClick={() => { navigateNews(ulNew.Id as number); }}
                category={ulNew.CategoryName}
                title={ulNew.Name}
                backgroundColor={ulNew.BackgroundColor}
                margin={0}
                image={ulNew.ImageUrl}
              />
              )
            }
          </div>
          <div className={styles.secondCard}>
            {
              rbNew && (
              <Card
                onClick={() => { navigateNews(rbNew.Id as number); }}
                category={rbNew.CategoryName}
                title={rbNew.Name}
                backgroundColor={rbNew.BackgroundColor}
                margin={0}
                image={rbNew.ImageUrl}
              />
              )
            }
          </div>
        </div>
        <div className={styles.cardright}>
          {
            rcNew && (
            <Card
              onClick={() => { navigateNews(rcNew.Id as number); }}
              category={rcNew.CategoryName}
              title={rcNew.Name}
              backgroundColor={rcNew.BackgroundColor}
              image={rcNew.ImageUrl}
            />
            )
          }
        </div>
      </div>
      <div className={styles.cardscontainer}>
        <div className={styles.newsBellow}>
          {
            news.slice(3, 6).map((obj) => (
              <div
                key={obj.Id}
                className={styles.newsBellowItem}
              >
                <Card
                  onClick={() => { navigateNews(obj.Id as number); }}
                  category={obj.CategoryName}
                  title={obj.Name}
                  backgroundColor={obj.BackgroundColor}
                  margin={0}
                  image={obj.ImageUrl}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HotNews;
