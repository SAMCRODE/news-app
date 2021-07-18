/* eslint-disable import/prefer-default-export */

/**
 * upload a file
 * @return {Object} request - partial axios request without baseURL
 */
export const uploadFile = (url, file) => ({
  method: 'post',
  data: file,
  url,
});
