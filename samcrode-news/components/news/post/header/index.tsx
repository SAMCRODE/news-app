/* eslint-disable no-use-before-define */
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './header.module.scss';

interface PostHeaderProps {
  name: string;
  description: string;
  authorName: string;
  authorProfile: string;
  edit: boolean;
  onEdit: any;
  date: string;
}

const PostHeader = ({
  name, description, authorName, authorProfile, edit = false, onEdit, date,
}: PostHeaderProps) => (
  <div className={styles.metaSection}>
    <h2 className={styles.title}>
      {name}
      {edit && (
      <FontAwesomeIcon
        onClick={() => { onEdit(); }}
        className={styles.editIcon}
        icon={faEdit}
      />
      )}
    </h2>
    <h3 className={styles.description}>{description}</h3>
    <div className={styles.authorSection}>
      <div
        className={styles.authorPhoto}
        style={{ backgroundImage: `url(${authorProfile})` }}
      />
      <div className={styles.nameAndData}>
        <span>{authorName}</span>
        <span className={styles.data}>
          em
          {date}
        </span>
      </div>
    </div>
  </div>
);

export default PostHeader;
