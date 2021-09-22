/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper, faSkiing, faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './layout.module.scss';
import { logout } from '../../../store/auth/authSlice';

const UserAuthenticatedMenu = () => {
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.auth.user.ImageUrl);
  const permissions = useSelector((state) => state.auth.user.Permissions);
  const name = useSelector((state) => state.auth.user.Name);
  const [showMenu, setShowMenu] = useState(false);

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const showMenuHandler = () => {
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
      onClick={() => { showMenuHandler(); }}
      className={styles.userMenu}
    >
      <div className={styles.profile}>
        <div
          className={styles.profileImage}
          style={{ backgroundImage: `url(${profileImage})` }}
        />
        <p>
          {name}
        </p>
      </div>
      {
        showMenu && (
        <div
          className={styles.dropdownMenu}
        >
          {
            permissions ? (
              <>
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
                  <Link href="/admin/news/create">
                    <p
                      className={styles['dropdown-text']}
                    >
                      Nova notícia
                    </p>
                  </Link>
                </div>
              </>
            ) : <></>
          }
          <div
            className={styles['dropdown-item']}
          >
            <FontAwesomeIcon
              icon={faSkiing}
              className={styles['dropdown-icon']}
            />
            <button
              type="button"
              onClick={() => { dispatch(logout({})); }}
              className={styles['dropdown-text']}
            >
              Sair
            </button>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default UserAuthenticatedMenu;
