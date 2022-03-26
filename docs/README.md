@leopiccionia/numista-sdk / [Exports](modules.md)

# @leopiccionia/numista-sdk

This is an unofficial JavaScript/TypeScript SDK for [Numista](https://en.numista.com/). It can run in both browsers and servers.

## Installing

```bash
npm install @leopiccionia/numista-sdk
```

## Getting started

Before starting, you'll need a Numista API key ([get one here](https://en.numista.com/api/doc/index.php)).

```ts
import { NumistaConnector } from '@leopiccionia/numista-sdk'

const numista = new NumistaConnector(YOUR_API_KEY, YOUR_CLIENT_ID, { defaultLanguage: 'en' })

// Get the Morgan Dollar
const morganDollar = await numista.coin(1492)

// Get all American coins depicting a buffalo
const buffalos = await numista.searchCoins('buffalo', { issuer: 'united-states' })
```

## Features

- Good type-safety and IntelliSense support
- `Promise`-based APIs, designed for `async`/`await`
- Experimental [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)-based API for paginated requests
- Proper error handling:
  - Connector returns `ConnectionError` if connection failed
  - Connector returns `RequestError` if server returned an error message

## Learn more

- [See full documentation](https://leopiccionia.github.io/numista-sdk/modules.html)
- See demos:
  - [OAuth authorization code with Vue](https://github.com/leopiccionia/numista-sdk/tree/main/demos/oauth)
