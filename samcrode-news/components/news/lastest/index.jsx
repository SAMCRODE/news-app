import React from 'react';
import ItemRow from './ItemRow';
import styles from './lastest.module.scss';

const LastestNews = () => (
  <div className={styles.container}>
    <h4>Últimas Notícias</h4>
    <ItemRow
      number="01"
      title="&quot;Apostem no macaco&quot;, diz especialista da USP"
    />
    <ItemRow
      number="02"
      title="99% da população aprova a liberação da rinha de galo, diz pesquisa"
    />
  </div>
);

export default LastestNews;
