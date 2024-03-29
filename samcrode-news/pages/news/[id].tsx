/* eslint-disable no-bitwise */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import makeRequest from '../../api/axios';
import PostHeader from '../../components/news/post/header';
import PostText from '../../components/news/post/text';
import styles from './news.module.scss';
import * as requestFactory from '../../api/requestFactory';
import { New } from '../../models/New';
import { User } from '../../models/User';
import { Row } from '../../models/Row';
import SaveNew from '../../functions/news/save';
import { RootState } from '../../store';

interface NewsProps {
  post: New;
}

export default function News({ post }: NewsProps) {
  const router = useRouter();
  const permissions = useSelector((state: RootState) => state.auth.user.Permissions);
  const [edit, setEdit] = useState<boolean>(false);
  const [cpost, setPost] = useState(post);

  const { save } = SaveNew((response: New) => {
    if (response) {
      setPost(response);
    }
  });

  const editHeader = () => {
    router.push(`/admin/news/edit/${cpost.Id}`);
  };

  useEffect(() => {
    setEdit(!!(permissions) && ((permissions & 1) > 0));
  }, [permissions]);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          samcrode -
          {cpost.Name}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.newsContent}>
        <PostHeader
          onEdit={editHeader}
          edit={edit}
          authorName={(cpost.Author as User).Name || ''}
          authorProfile={(cpost.Author as User).ImageUrl || ''}
          name={(cpost || {}).Name || ''}
          description={(cpost || {}).Description || ''}
          date={new Date(cpost.CreateDate as unknown as string).toLocaleDateString()}
        />
        <PostText
          edit={edit}
          saverows={cpost.Rows || []}
          onChange={(rows: Row[]) => {
            setPost({ ...cpost, Rows: rows });
          }}
        />
        {
          edit && (
            <div className={styles.rightFixedContainer}>
              <button
                type="button"
                className={styles.buttonSave}
                onClick={() => { save(cpost); }}
              >
                <FontAwesomeIcon
                  icon={faSave}
                />
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

interface ServerSideProps {
  params: any;
}

export async function getServerSideProps({ params }: ServerSideProps) {
  const res = await makeRequest(requestFactory.getNewDetail(params.id));

  return { props: res };
}
