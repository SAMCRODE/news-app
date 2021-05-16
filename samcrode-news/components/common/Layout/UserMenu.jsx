/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMeh, faNewspaper, faSkiing, faUser, faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './layout.module.scss';

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const showMenuHandler = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', closeMenuHandler);
    } else {
      document.removeEventListener('click', closeMenuHandler);
    }
    return () => {
      document.removeEventListener('click', closeMenuHandler);
    };
  }, [showMenu]);

  return (
    <div
      role="button"
      onClick={showMenuHandler.bind(this)}
      className={styles.userMenu}
    >
      <div className={styles.profile}>
        <div className={styles.profileImage} />
        <p>Goku</p>
      </div>
      {
        showMenu && (
        <div
          className={styles.dropdownMenu}
        >
          <div
            className={styles['dropdown-item']}
          >
            <FontAwesomeIcon
              icon={faUserAstronaut}
              className={styles['dropdown-icon']}
            />
            <p
              className={styles['dropdown-text']}
            >
              Minha conta
            </p>
          </div>
          <div
            className={styles['dropdown-item']}
          >
            <FontAwesomeIcon
              icon={faNewspaper}
              className={styles['dropdown-icon']}
            />
            <p
              className={styles['dropdown-text']}
            >
              Nova notícia
            </p>
          </div>
          <div
            className={styles['dropdown-item']}
          >
            <FontAwesomeIcon
              icon={faSkiing}
              className={styles['dropdown-icon']}
            />
            <p
              className={styles['dropdown-text']}
            >
              Sair
            </p>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default UserMenu;
