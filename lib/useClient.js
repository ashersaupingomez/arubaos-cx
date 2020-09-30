const login = require('./login');
const logout = require('./logout');

/**
 * Login, execute a function, then logout.
 * @param {superagent.Agent} client ArubaOS-Switch REST API client
 * @param {function} fn
 * @param {string} username Client username
 * @param {string} password Client pasword
 * @example
 * function getHostname(client) {
 *   return client
 *     .get('/system')
 *     .then(({ body }) => body.hostname);
 * }
 *
 * useClient(client, getHostname)
 *   .then(console.log)
 *   .catch(console.error);
 */
module.exports = function useClient(client, fn, username, password) {
  return login(client, username, password)
    .then(() => fn(client))
    .finally(() => logout(client));
};
