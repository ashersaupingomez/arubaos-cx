const { stringify } = require('querystring');

module.exports = function login(
  client,
  username = process.env.ARUBA_OS_CX_USERNAME,
  password = process.env.ARUBA_OS_CX_PASSWORD,
) {
  return client
    .post('/login')
    .send(stringify({ username, password }));
};
