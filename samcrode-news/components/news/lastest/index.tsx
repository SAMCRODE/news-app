/* eslint-disable react/prop-types */
import React from 'react';
import { New } from '../../../models/New';
import ItemRow from './ItemRow';
import styles from './lastest.module.scss';

interface LastestNewsProps {
  news: New[];
}

const LastestNews = ({ news }: LastestNewsProps) => (
  <div className={styles.containerL}>
    <h4>Últimas Notícias</h4>
    {
      (news || []).map((obj, i) => (
        <ItemRow
          number={(i + 1).toString()}
          title={obj.Name || ''}
          key={obj.Id}
        />
      ))
    }
  </div>
);

export default LastestNews;
