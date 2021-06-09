import { agent } from 'superagent';

const {
  ARUBA_OS_CX_HOST,
  ARUBA_OS_CX_VERSION,
  ARUBA_OS_CX_USERNAME,
  ARUBA_OS_CX_PASSWORD,
} = process.env;

const DEFAULT_HOST = ARUBA_OS_CX_HOST;
const DEFAULT_VERSION = ARUBA_OS_CX_VERSION || 'v1';
const DEFAULT_USERNAME = ARUBA_OS_CX_USERNAME || 'admin';
const DEFAULT_PASSWORD = ARUBA_OS_CX_PASSWORD || '';

export function getRequestPrefix(host = DEFAULT_HOST, version = DEFAULT_VERSION) {
  return `https://${host}/rest/${version}`;
}

export function createClient(host = DEFAULT_HOST, version = DEFAULT_VERSION) {
  return agent()
    .use((request) => { request.url = getRequestPrefix(host, version) + request.url; });
}

export function loginClient({
  host = DEFAULT_HOST,
  version = DEFAULT_VERSION,
  client = createClient(host, version),
  username = DEFAULT_USERNAME,
  password = DEFAULT_PASSWORD,
}) {
  const params = new URLSearchParams({ username, password });

  return client
    .post('/login')
    .send(params.toString());
}

export function logoutClient(client) {
  return client
    .post('/logout');
}

export function useClient({
  host = DEFAULT_HOST,
  version = DEFAULT_VERSION,
  client = createClient(host, version),
  username = DEFAULT_USERNAME,
  password = DEFAULT_PASSWORD,
  fn,
}) {
  return loginClient({ client, username, password })
    .then(() => fn(client))
    .finally(() => logoutClient(client));
}
