const { agent } = require('superagent');
const prefix = require('superagent-prefix');

/**
 * Create a client.
 * @param {string} host Switch IP address
 * @param {string} version Switch API version
 * @returns {superagent.Agent}
 * @example
 * const { createClient } = require('arubaos-cx');
 *
 * const client = createClient('10.11.12.13');
 *
 * ...
 */
module.exports = function createClient(
  host = process.env.ARUBA_OS_CX_HOST,
  version = process.env.ARUBA_OS_CX_VERSION || 'v1',
) {
  return agent()
    .use(prefix(`https://${host}/rest/${version}`))
    .disableTLSCerts();
};
