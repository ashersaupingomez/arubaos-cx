const baretest = require('baretest');
const assert = require('assert');

const { createClient, useClient } = require('./lib');
const { name } = require('./package');

const test = baretest(name);

function getSystem(client) {
  return client
    .get('/system');
}

const client = createClient();

test('login, execute a function, then logout', async () => {
  const { ok } = await useClient(client, getSystem);

  assert.ok(ok);
});

test('fails to execute a function after logout', () => {
  assert.rejects(() => getSystem(client));
});

test.run();
