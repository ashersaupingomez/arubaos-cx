const { agent } = require('superagent');
const prefix = require('superagent-prefix');

/**
 * @param {string} host IP address of switch
 * @param {string} version API version of ArubaOS-CX REST API
 * @returns {superagent.agent} ArubaOS-CX REST API client with TLS checks ignored
 * @example
 * const client = createClient('10.11.12.13', 'v10.04');
 */
module.exports = function createClient(
  host = process.env.ARUBA_OS_CX_HOST,
  version = process.env.ARUBA_OS_CX_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`https://${host}/rest/${version}`))
    .disableTLSCerts();
};
