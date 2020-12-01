/* eslint-disable import/no-extraneous-dependencies */
import baretest from 'baretest';
import { doesNotReject } from 'assert';
import type { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

import createClient from './createClient';
import useClient from './useClient';

const test = baretest('arubaos-cx');

/**
 * @private
 * @param client - ArubaOS-CX REST API client
 * @returns A response which contains the platform name of the switch
 */
function requestGetPlatformName(client: SuperAgentStatic & Request): SuperAgentRequest {
  return client
    .get('/system')
    .query({ attributes: 'platform_name' });
}

/**
 * Disable TLS cert checks, for simplicit's sake
 * @private
 * @returns ArubaOS-CX REST API client
 */
const client: SuperAgentStatic & Request = createClient()
  .disableTLSCerts();

/**
 * Note: a `.env` file is required at the root of this package for tests to work.
 *
 * `useClient` relies on the other 3 functions to work correctly.
 * Therefore, if it is working correctly, the others are also.
 *
 * This test resolves if a `200` HTTP status code is received from the ArubaOS-CX switch.
 * Otherwise, the promise rejects.
 * @private
 */
test('everything works', () => doesNotReject(useClient(requestGetPlatformName, client)));

test.run();
