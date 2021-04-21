/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import Card from '../../common/Card';
import styles from './hot.module.scss';

const HotNews = ({ news }) => {
  const router = useRouter();
  const ulNew = news[0];
  const rbNew = news[1];
  const rcNew = news[2];

  const navigateNews = () => {
    router.push('/news');
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardscontainer}>
        <div className={styles.cardleft}>
          <div className={styles.firstCard}>
            <Card
              onClick={navigateNews}
              category={ulNew.CategoryName}
              title={ulNew.Name}
              backgroundColor={ulNew.BackgroundColor}
              margin={0}
              image={ulNew.ImageUrl}
            />
          </div>
          <div className={styles.secondCard}>
            <Card
              onClick={navigateNews}
              category={rbNew.CategoryName}
              title={rbNew.Name}
              backgroundColor={rbNew.BackgroundColor}
              margin={0}
              image={rbNew.ImageUrl}
            />
          </div>
        </div>
        <div className={styles.cardright}>
          <Card
            onClick={navigateNews}
            category={rcNew.CategoryName}
            title={rcNew.Name}
            backgroundColor={rcNew.BackgroundColor}
            marginLeft={10}
            image={rcNew.ImageUrl}
          />
        </div>
      </div>
      <div className={styles.cardscontainer}>
        <div className={styles.newsBellow}>
          {
            news.slice(3).map((obj) => (
              <div className={styles.newsBellowItem}>
                <Card
                  onClick={navigateNews}
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
