/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper, faSkiing, faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import styles from './layout.module.scss';

const UserMenu = () => {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const profileImage = useSelector((state) => state.auth.user.ProfileImage);
  const name = useSelector((state) => state.auth.user.Name);
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
        <p>
          {isAuthenticated ? name : 'pai ausente'}
        </p>
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
