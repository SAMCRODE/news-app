import { createSlice } from '@reduxjs/toolkit';
import * as localStorage from '../../api/localStorage';

const initialState = () => {
  const jwt = localStorage.getItem('jwt');
  const user = localStorage.getItem('user');

  return {
    jwt,
    user: user.length > 0 ? JSON.parse(user) : {},
    authenticated: jwt.length > 0,
    needPassUpdate: false,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    setAuth: (state, action) => {
      const user = {
        Email: action.payload.Email,
        ImageUrl: action.payload.ImageUrl,
        Name: action.payload.Name,
        Permissions: action.payload.Permissions,
      };

      state.jwt = action.payload.Jwt;
      state.user = user;
      state.authenticated = action.payload.Jwt !== '';

      localStorage.setItem('jwt', action.payload.Jwt);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout: (state, action) => {
      state.jwt = '';
      state.user = {};
      state.authenticated = false;
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
    },
    setImage: (state, action) => {
      const { user } = initialState();
      user.profileImage = action.payload.profileImage;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    setNeedPassUpdate: (state, action) => {
      state.needPassUpdate = action.payload.needPassUpdate;
    },
  },
  extraReducers: {
  },
});

export const {
  setAuth,
  logout,
  setImage,
  setUser,
  setNeedPassUpdate,
} = authSlice.actions;

export default authSlice.reducer;
