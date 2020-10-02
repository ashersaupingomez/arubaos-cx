const { stringify } = require('querystring');

/**
 * Login a client.
 * @param {superagent.Agent} client
 * @param {string} username
 * @param {string} password
 * @example
 * const { createClient, login } = require('arubaos-cx');
 *
 * const client = createClient('10.11.12.13');
 *
 * await login(client);
 *
 * ...
 */
module.exports = function login(
  client,
  username = process.env.ARUBA_OS_CX_USERNAME || 'admin',
  password = process.env.ARUBA_OS_CX_PASSWORD || '',
) {
  return client
    .post('/login')
    .send(stringify({ username, password }));
};
