const login = require('./login');
const logout = require('./logout');

/**
 * Login a client, execute a function on the client, then logout the client.
 * @param {superagent.Agent} client ArubaOS-Switch REST API client
 * @param {function} fn
 * @param {string} username Client username
 * @param {string} password Client pasword
 * @example
 * const { createClient, useClient } = require('arubaos-cx');
 *
 * function getHostname(client) {
 *   return client
 *     .get('/system')
 *     .then(({ body }) => body.hostname);
 * }
 *
 * useClient(createClient('10.11.12.13'), getHostname)
 *   .then(console.log)
 *   .catch(console.error);
 */
module.exports = function useClient(client, fn, username, password) {
  return login(client, username, password)
    .then(() => fn(client))
    .finally(() => logout(client));
};
