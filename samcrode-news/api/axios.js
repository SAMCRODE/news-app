/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
import axios from 'axios';

const baseURL = 'http://0.0.0.0:8080';

const handleApiErrors = () => ({});

const makeRequest = async (request) => axios({
  baseURL,
  ...request,
}).catch(() => handleApiErrors)
  .then((response) => response.data);

export default makeRequest;
