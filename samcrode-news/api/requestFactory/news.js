/**
 * Get lastest news
 * @return {Object} request - partial axios request without baseURL
 */
export const getLastest = () => ({
  method: 'get',
  url: '/news/lastest',
});

/**
 * get news paginated
 * @param {number} page
 * @return {Object} request - partial axios request without baseURL
 */
export const getPaginated = (page) => ({
  method: 'get',
  url: `/news/collection/:${page}`,
});

/**
 * get home page news
 * @return {Object} request - partial axios request without baseURL
 */
export const getHome = () => ({
  method: 'get',
  url: '/news/home',
});
