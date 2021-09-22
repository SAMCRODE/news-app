/* eslint-disable max-len */
import axios from 'axios';
import { ApiBaseUrl } from '../config/index';
import { store } from '../store';
import { logout, setAuth } from '../store/auth/authSlice';

const handleApiErrors = (err) => {
  if (err.response.status === 401) {
    store.dispatch(logout());

    // store.dispatch(setErrorPopupMessage(err.response.data.msg));
  }

  return {};
};

const makeAuthedRequest = async (request, token) => axios({
  baseURL: ApiBaseUrl,
  ...request,
  headers: { authorization: token || store.getState().auth.jwt },
}).catch(handleApiErrors)
  .then((response) => {
    if (response.headers && response.headers.token) {
      store.dispatch(setAuth({ jwt: response.headers.token, user: JSON.parse(response.headers.user) }));
    }

    return response;
  })
  .then((response) => response.data);

export default makeAuthedRequest;
