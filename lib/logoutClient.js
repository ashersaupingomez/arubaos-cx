/**
 * Note: must be performed after requests
 * @param {superagent.agent} client ArubaOS-CX REST API client
 * @returns {superagent.Request} Logout request for the ArubaOS-CX REST API
 * @example
 * await logoutClient(client);
 */
module.exports = function logoutClient(client) {
  return client
    .post('/logout');
};
