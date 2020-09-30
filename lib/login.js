const { stringify } = require('querystring');

/**
 * Login an ArubaOS-Switch REST API client
 * @param {superagent.Agent} client
 * @param {string} username
 * @param {string} password
 */
module.exports = function login(
  client,
  username = process.env.ARUBA_OS_CX_USERNAME,
  password = process.env.ARUBA_OS_CX_PASSWORD,
) {
  return client
    .post('/login')
    .send(stringify({ username, password }));
};
