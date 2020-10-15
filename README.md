# arubaos-cx

Superagent utilities for interacting with the ArubaOS-CX REST API

## Features

-   Tested & working on REST API versions v1 & v10.04
-   Based on [superagent.Agent](https://visionmedia.github.io/superagent/#agents-for-global-state), a simple & robust http client class with in-built cookie handling.
-   Simple & flexible API with minimal moving parts.
-   Able to work with environment variables.
-   Super-lightweight package.

## Testing

Tests are performed on actual ArubaOS-CX switches. Include the `ARUBA_OS_CX_HOST` environment variable, at minimum, along with any other of the mentioned environment variables.

```bash
ARUBA_OS_CX_HOST=10.11.12.13 npm test
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [createClient](#createclient)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [login](#login)
    -   [Parameters](#parameters-1)
    -   [Examples](#examples-1)
-   [logout](#logout)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples-2)
-   [useClient](#useclient)
    -   [Parameters](#parameters-3)
    -   [Examples](#examples-3)

### createClient

Create a client.

#### Parameters

-   `host` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Switch IP address (optional, default `process.env.ARUBA_OS_CX_HOST`)
-   `version` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Switch API version (optional, default `process.env.ARUBA_OS_CX_VERSION||'v1'`)

#### Examples

```javascript
const { createClient } = require('arubaos-cx');

const client = createClient('10.11.12.13');

...
```

Returns **superagent.Agent** 

### login

Login a client.

#### Parameters

-   `client` **superagent.Agent** 
-   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `process.env.ARUBA_OS_CX_USERNAME||'admin'`)
-   `password` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `process.env.ARUBA_OS_CX_PASSWORD||''`)

#### Examples

```javascript
const { createClient, login } = require('arubaos-cx');

const client = createClient('10.11.12.13');

await login(client);

...
```

### logout

Logout a client.

#### Parameters

-   `client` **superagent.Agent** 

#### Examples

```javascript
const { createClient, login, logout } = require('arubaos-cx');

const client = createClient('10.11.12.13');

await login(client);

...

await logout(client);
```

### useClient

Login a client, execute a function on the client, then logout the client.

#### Parameters

-   `client` **superagent.Agent** 
-   `fn` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
-   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `process.env.ARUBA_OS_CX_USERNAME||'admin'`)
-   `password` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `process.env.ARUBA_OS_CX_PASSWORD||''`)

#### Examples

```javascript
const { createClient, useClient } = require('arubaos-cx');

function getHostname(client) {
  return client
    .get('/system')
    .then(({ body }) => body.hostname);
}

useClient(createClient('10.11.12.13'), getHostname)
  .then(console.log)
  .catch(console.error);
```
