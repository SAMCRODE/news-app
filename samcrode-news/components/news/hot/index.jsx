import React from 'react';
import Card from '../../common/Card';
import styles from './hot.module.scss';

const HotNews = () => (
  <div className={styles.container}>
    <div className={styles.cardscontainer}>
      <div className={styles.cardleft}>
        <Card
          category="carros"
          title="Afinal, Santana tem carburador ou não tem carburador ?"
          backgroundColor="#620607"
          margin={0}
          image="https://images.uncyc.org/pt/thumb/d/d5/Ti%C3%A3o_Carburador.jpg/1200px-Ti%C3%A3o_Carburador.jpg"
        />
        <Card
          category="economia"
          title="Não sei Rick, parece falso"
          backgroundColor="#1A1A10"
          margin={0}
          image="https://noticiasdatv.uol.com.br/media/uploads/artigos/history-trato-feito-rick-harrison.jpg"
        />
      </div>
      <div className={styles.cardright}>
        <Card
          category="spider-main"
          title="parker you are fired"
          backgroundColor="#CA2E30"
          margin={0}
          image="https://y.yarn.co/93e01b0d-0764-4af9-bdab-b03b8c59743d_screenshot.jpg"
        />
      </div>
    </div>
  </div>
);
export default HotNews;
