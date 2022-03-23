# An unofficial JS SDK for Numista

A TypeScript SDK for [Numista](https://en.numista.com/) that can be used both in browser and servers.

## Getting started

Before starting, you'll need a Numista API key ([get one](https://en.numista.com/api/doc/index.php)).

```ts
import { NumistaConnector } from '@leopiccionia/numista-sdk'

const numista = new NumistaConnector('YOUR-API-KEY', { defaultLanguage: 'en' })

// Get the Morgan Dollar
const morganDollar = await numista.coin(1492)

// Get all American coins depicting a buffalo
const buffalos = await numista.searchCoins('buffalo', { issuer: 'united-states' })
```

## Features

- `Promise`-based APIs, with `async`/`await` support
- Experimental [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)-based API for paginated requests
- Proper error handling:
  - Connector returns `ConnectionError` if connection failed
  - Connector returns `RequestError` if server returned an error message
