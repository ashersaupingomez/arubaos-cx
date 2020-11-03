const { stringify } = require('querystring');

/**
 * Note: must be performed before any requests
 * @param {superagent.agent} client ArubaOS-CX REST API client
 * @param {string} username Username of switch user
 * @param {string} password Password of switch user
 * @returns {superagent.Request} Login request for ArubaOS-CX REST API
 * @example
 * await loginClient(client, 'rick', 'wubba lubba dub-dub');
 */
module.exports = function loginClient(
  client,
  username = process.env.ARUBA_OS_CX_USERNAME || 'admin',
  password = process.env.ARUBA_OS_CX_PASSWORD || '',
) {
  return client
    .post('/login')
    .send(stringify({ username, password }));
};
