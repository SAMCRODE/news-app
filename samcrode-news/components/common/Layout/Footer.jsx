import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import styles from './layout.module.scss';

const Footer = () => (
  <div className={styles.fcontainer}>
    SAMCRODE nem todos os direitos reservados
    <a href="https://github.com/samcrode" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} className={styles.footlink} style={{ fontSize: '2px' }} />
    </a>
  </div>
);

export default Footer;
