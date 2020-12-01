/* eslint-disable no-return-assign */
import { agent } from 'superagent';
import type { Request, SuperAgentStatic } from 'superagent';

/**
 * Request URLs are prepended with the appropriate URL base,
 * so only REST API endpoints are required.
 * @param host - Switch IP address (typically)
 * @param version - ArubaOS-CX REST API version
 * @returns ArubaOS-CX REST API client
 * @example
 * const client = createClient();
 * @example <caption>If certs hasn't been configured on the switch</caption>
 * const client = createClient()
 *   .disableTLSCerts();
 */
export default function createClient(
  host: string = process.env.ARUBA_OS_CX_HOST!,
  version: string = process.env.ARUBA_OS_CX_VERSION || 'v1',
): SuperAgentStatic & Request {
  return agent()
    .use((request) => request.url = `https://${host}/rest/${version}${request.url}`);
}
