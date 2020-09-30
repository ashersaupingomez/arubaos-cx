const superagent = require('superagent');
const prefix = require('superagent-prefix');

/**
 * Create a http client with the appropriate URL prefix.
 * @param {string} host Aruba switch IP address
 * @param {string} version REST API version
 * @returns {superagent.Agent}
 * @see {@link https://visionmedia.github.io/superagent/#agents-for-global-state|superagent.Agent}
 */
module.exports = function createClient(
  host = process.env.AUBRA_OS_CX_HOST,
  version = process.env.ARUBA_OS_CX_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`https://${host}/rest/${version}`))
    .disableTLSCerts();
};
