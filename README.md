# An unofficial JS SDK for Numista

> WORK IN PROGRESS

A TypeScript SDK for [Numista](https://en.numista.com/) that can be used both in browser and servers.

## Getting started

Before starting, you'll need a Numista API key ([get one](https://en.numista.com/api/doc/index.php)).

```ts
import { NumistaConnector } from '@leopiccionia/numista-sdk'

const numista = new NumistaConnector('YOUR-API-KEY', { defaultLanguage: 'en' })

// Get the Morgan Dollar
const morganDollar = await numista.getCoin(1492)

// Get all American coins depicting a buffalo
const buffalos = await numista.searchCoins('buffalo', { issuer: 'united-states' })
```

## Features

- `Promise`-based APIs, with `async`/`await` support
- Experimental [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)-based API for paginated requests
- Proper error handling:
  - Connector returns `NetworkError` if connection failed
  - Connector returns `ConnectorError` if server returned an error message

### Endpoints

- [x] Search for coins
- [ ] Add a coin to the catalogue
- [x] Find a coin by ID
- [x] Find the issues of a coin
- [ ] Add a coin issue
- [x] Get estimates for the price of an issue of a coin
- [x] Retrieve the list of issuing countries and territories
- [x] Retrieve the list of catalogues used for coin references
- [ ] Get OAuth access token
- [ ] Get information about a user
- [ ] Get the coins owned by a user
