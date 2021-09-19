/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import makeRequest from '../../api/axios';
import PostHeader from '../../components/news/post/header';
import PostText from '../../components/news/post/text';
import styles from './news.module.scss';
import * as requestFactory from '../../api/requestFactory';
import { New } from '../../models/New';
import { User } from '../../models/User';
import { Row } from '../../models/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import SaveNew from '../../functions/news/save';

interface NewsProps {
  post: New;
}

export default function News({ post }: NewsProps) {
  const [cpost, setPost] = useState(post);
  const {save} = SaveNew((response: New) => {
    console.log(response);
  });

  return (
    <div className={styles.container}>
      <div className={styles.newsContent}>
        <PostHeader
          authorName={(post.Author as User).Name}
          authorProfile={(post.Author as User).ImageUrl}
          name={(post || {}).Name}
          description={(post || {}).Description}
        />
        <PostText
          saverows={cpost.Rows || []}
          onChange={(rows: Row[]) => {
            setPost({...cpost, Rows: rows})
          }}
        />
        <div className={styles.rightFixedContainer}>
          <button
            className={styles.buttonSave}
            onClick={() => {save(cpost)}}>
              <FontAwesomeIcon
                icon={faSave}
              />
            </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await makeRequest(requestFactory.getNewDetail(params.id));

  return { props: res };
}
