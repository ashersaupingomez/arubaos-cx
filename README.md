# arubaos-cx

Superagent utilities for interacting with the ArubaOS-CX REST API.

* Super lightweight
* Simple API
* Based on [superagent's `Agent` class](https://visionmedia.github.io/superagent/#agents-for-global-state)
* Works with environment variables by default

## Installation

```bash
$ npm install arubaos-cx
```

## Usage

```javascript
const { useClient } = require('arubaos-cx');

function requestGetPlatformName(client) {
  return client
    .get('/system')
    .query({ attributes: 'platform_name' });
}

const response = await useClient({ fn: requestGetPlatformName });
```

## Testing

Tests are performed on an actual ArubaOS-CX switch whose credentials are defined by environment variables.

```bash
$ ARUBA_OS_CX_HOST=... npm test
```
