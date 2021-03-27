/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import FeedNews from '../components/news/Feed';
import HotNews from '../components/news/hot';
import LastestNews from '../components/news/lastest';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SAMCRODE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <HotNews />
          <FeedNews />
        </div>
        <div className={styles.contentRight}>
          <LastestNews />
        </div>
      </div>
    </div>
  );
}
