import type { Request, SuperAgentStatic } from 'superagent';

import createClient from './createClient';
import loginClient from './loginClient';
import logoutClient from './logoutClient';

/**
 * @param fn - Function whose only parameter is `client`
 * @param client - ArubaOS-CX REST API client
 * @param username - Switch username
 * @param password - Switch password
 * @returns Promise that resolves to the return value of `fn`
 * @example <caption>First, define a function which accepts & uses the `client` paramter</caption>
 * function requestGetPlatformName(client) {
 *   return client
 *     .get('/system')
 *     .query({ attributes: 'platform_name' });
 * }
 * @example <caption>Then, use the `useClient` function which returns the resolved value of `fn`</caption>
 * const response = await useClient(requestGetPlatformName);
 */
export default function useClient<T>(
  fn: (client: SuperAgentStatic & Request) => Promise<T>,
  client: SuperAgentStatic & Request = createClient(),
  username: string = process.env.ARUBA_OS_CX_USERNAME || 'admin',
  password: string = process.env.ARUBA_OS_CX_PASSWORD || '',
): Promise<T> {
  return loginClient(client, username, password)
    .then(() => fn(client))
    .finally(() => logoutClient(client));
}
