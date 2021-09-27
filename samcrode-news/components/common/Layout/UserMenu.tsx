/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import UserAuthenticatedMenu from './UserAuthenticatedMenu';
import UserNotAuthedMenu from './UserNotAuthedMenu';

const UserMenu = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.authenticated);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(isAuthenticated);
  }, [isAuthenticated]);

  return (
    authed ? <UserAuthenticatedMenu /> : <UserNotAuthedMenu />
  );
};

export default UserMenu;
