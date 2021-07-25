/* eslint-disable import/prefer-default-export */

/**
 * create account
 * @param {import("../../models/User").User} account
 * @return {Object} request - partial axios request without baseURL
 */
export const auth = (account) => ({
  method: 'post',
  url: '/auth/',
  data: account,
});
