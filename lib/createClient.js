const { agent } = require('superagent');
const prefix = require('superagent-prefix');

module.exports = function createClient(
  host = process.env.AUBRA_OS_CX_HOST,
  version = process.env.ARUBA_OS_CX_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`https://${host}/rest/${version}`))
    .disableTLSCerts();
};
