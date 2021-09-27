/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
import axios from 'axios';
import { ApiBaseUrl } from '../config';

const baseURL = ApiBaseUrl;

const handleApiErrors = () => ({});

const makeRequest = async (request) => axios({
  baseURL,
  ...request,
}).catch(() => handleApiErrors)
  .then((response) => response.data);

export default makeRequest;
