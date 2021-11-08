/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import FeedNews from '../components/news/Feed';
import HotNews from '../components/news/hot';
import LastestNews from '../components/news/lastest';
import styles from '../styles/Home.module.scss';
import * as requestFactory from '../api/requestFactory';
import makeRequest from '../api/axios';
import { New } from '../models/New';

interface HomeProps {
  lastest: New[];
  hot: New[];
}

export default function Home({ lastest, hot }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SAMCRODE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <HotNews
            news={hot || []}
          />
          <FeedNews news={(hot || []).slice(6)} />
        </div>
        <div className={styles.contentRight}>
          <LastestNews news={(lastest || [])} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await makeRequest(requestFactory.getHome());

  return {
    props: res, // will be passed to the page component as props
  };
}
