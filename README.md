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
const morganDollar = await numista.type(1492)

// Get the Peace Dollar
const peaceDollar = await numista.code('KM', '150', { issuer: 'united-states' })

// Get all American coins depicting a buffalo
const buffalos = await numista.searchCoins('buffalo', { issuer: 'united-states' })
```

## Features

- Great type-safety and IntelliSense support
- `Promise`-based APIs, designed for `async`/`await`
- Proper error handling:
  - The connector returns `RequestError` if the connection with the server failed
  - The connector returns `ResponseError` if the server responded with an error message

## Learn more

- [See full documentation](https://leopiccionia.github.io/numista-sdk/modules.html)
- See demos:
  - [OAuth authorization code with Vue](https://github.com/leopiccionia/numista-sdk/tree/main/demos/oauth)
