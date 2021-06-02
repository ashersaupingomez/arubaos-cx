import baretest from 'baretest';
import { doesNotReject } from 'assert';

import { createClient, useClient } from './index.js';

const test = baretest('arubaos-cx');

function requestGetPlatformName(client) {
  return client
    .get('/system')
    .query({ attributes: 'platform_name' });
}

const client = createClient()
  .disableTLSCerts();

test('all works', () => doesNotReject(useClient({
  client,
  fn: requestGetPlatformName,
})));

test.run();
