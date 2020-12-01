import type { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

/**
 * Logout a client, closing off the session.
 * 
 * This needs to be called after all requests are made.
 * @private
 * @param client - ArubaOS-CX REST API client
 * @example
 * await logoutClient(client);
 */
export default function logoutClient(client: SuperAgentStatic & Request): SuperAgentRequest {
  return client
    .post('/logout');
}
