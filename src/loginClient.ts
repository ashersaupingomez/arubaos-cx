import { stringify } from 'querystring';
import { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

/**
 * Login a client, enabling it to make requests thereafter.
 * 
 * This needs to be called before any requests are made.
 * @private
 * @param client - ArubaOS-CX REST API client
 * @param username - Switch username
 * @param password - Switch password
 * @example
 * await loginClient();
 */
export default function loginClient(
  client: SuperAgentStatic & Request,
  username: string = process.env.ARUBA_OS_CX_USERNAME || 'admin',
  password: string = process.env.ARUBA_OS_CX_PASSWORD || '',
): SuperAgentRequest {
  return client
    .post('/login')
    .send(stringify({ username, password }));
}
