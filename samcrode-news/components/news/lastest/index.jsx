/* eslint-disable react/prop-types */
import React from 'react';
import ItemRow from './ItemRow';
import styles from './lastest.module.scss';

const LastestNews = ({ news }) => (
  <div className={styles.containerL}>
    <h4>Últimas Notícias</h4>
    {
      (news || []).map((obj, i) => (
        <ItemRow
          number={(i + 1).toString()}
          title={obj.Name}
          key={obj.Id}
        />
      ))
    }
  </div>
);

export default LastestNews;
