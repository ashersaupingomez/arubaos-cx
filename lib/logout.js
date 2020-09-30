/**
 * Logout a given client.
 * @param {superagent.Agent} client ArubaOS-Switch REST API client
 */
module.exports = function logout(client) {
  return client
    .post('/logout');
};
