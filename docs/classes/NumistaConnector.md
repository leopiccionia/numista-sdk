[@leopiccionia/numista-sdk](../README.md) / NumistaConnector

# Class: NumistaConnector

The main entrypoint for Numista SDK

## Table of contents

### Constructors

- [constructor](NumistaConnector.md#constructor)

### Methods

- [addCoin](NumistaConnector.md#addcoin)
- [addCoinIssue](NumistaConnector.md#addcoinissue)
- [catalogues](NumistaConnector.md#catalogues)
- [coin](NumistaConnector.md#coin)
- [coinIssues](NumistaConnector.md#coinissues)
- [coinPrices](NumistaConnector.md#coinprices)
- [issuers](NumistaConnector.md#issuers)
- [myCoins](NumistaConnector.md#mycoins)
- [searchCoins](NumistaConnector.md#searchcoins)
- [searchCoinsPaginated](NumistaConnector.md#searchcoinspaginated)
- [useAuthorizationCode](NumistaConnector.md#useauthorizationcode)
- [useUserCredentials](NumistaConnector.md#useusercredentials)
- [user](NumistaConnector.md#user)
- [userCoins](NumistaConnector.md#usercoins)

## Constructors

### constructor

• **new NumistaConnector**(`apiKey`, `clientId`, `config?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey` | `string` | API key |
| `clientId` | `string` | Client ID |
| `config` | `Partial`<[`ConnectorConfig`](../interfaces/ConnectorConfig.md)\> | Other params |

#### Defined in

[src/core.ts:27](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L27)

## Methods

### addCoin

▸ **addCoin**(`data`, `config?`): `Promise`<[`Coin`](../interfaces/Coin.md)\>

This endpoint allows to add a coin to the catalogue

It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`CoinUpdate`](../interfaces/CoinUpdate.md) | Data related to the coin to add to the catalogue |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Coin`](../interfaces/Coin.md)\>

The coin that has been added to the catalogue

#### Defined in

[src/core.ts:46](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L46)

___

### addCoinIssue

▸ **addCoinIssue**(`coinId`, `data`, `config?`): `Promise`<[`Issue`](../interfaces/Issue.md)\>

Add a coin issue

It requires a specific permission associated to your API key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `string` \| `number` | ID of the coin to which the issue is added |
| `data` | [`IssueUpdate`](../interfaces/IssueUpdate.md) | Data related to the coin issue to add to the catalogue |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)\>

The coin issue that has been added to the catalogue

#### Defined in

[src/core.ts:64](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L64)

___

### catalogues

▸ **catalogues**(): `Promise`<[`CataloguesResponse`](../interfaces/CataloguesResponse.md)\>

Retrieve the list of catalogues used for coin references

#### Returns

`Promise`<[`CataloguesResponse`](../interfaces/CataloguesResponse.md)\>

#### Defined in

[src/core.ts:74](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L74)

___

### coin

▸ **coin**(`coinId`, `config?`): `Promise`<[`Coin`](../interfaces/Coin.md)\>

Find a coin by ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `string` \| `number` | ID of the coin to fetch |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Coin`](../interfaces/Coin.md)\>

#### Defined in

[src/core.ts:83](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L83)

___

### coinIssues

▸ **coinIssues**(`coinId`, `config?`): `Promise`<[`Issue`](../interfaces/Issue.md)[]\>

Find the issues of a coin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `string` \| `number` | ID of the coin to fetch the issues from |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)[]\>

#### Defined in

[src/core.ts:97](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L97)

___

### coinPrices

▸ **coinPrices**(`coinId`, `issueId`, `config?`): `Promise`<[`CoinPricesResponse`](../interfaces/CoinPricesResponse.md)\>

Get estimates for the price of an issue of a coin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `string` \| `number` | ID of the coin type |
| `issueId` | `string` \| `number` | ID of the issue of the coin |
| `config` | `Partial`<[`CoinPricesRequest`](../interfaces/CoinPricesRequest.md)\> | Other params |

#### Returns

`Promise`<[`CoinPricesResponse`](../interfaces/CoinPricesResponse.md)\>

#### Defined in

[src/core.ts:112](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L112)

___

### issuers

▸ **issuers**(`config?`): `Promise`<[`IssuersResponse`](../interfaces/IssuersResponse.md)\>

Retrieve the list of issuing countries and territories

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> |

#### Returns

`Promise`<[`IssuersResponse`](../interfaces/IssuersResponse.md)\>

#### Defined in

[src/core.ts:123](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L123)

___

### myCoins

▸ **myCoins**(`config?`): `Promise`<[`CollectedCoinsResponse`](../interfaces/CollectedCoinsResponse.md)\>

Get the coins owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Partial`<[`CollectedCoinsRequest`](../interfaces/CollectedCoinsRequest.md)\> | Params |

#### Returns

`Promise`<[`CollectedCoinsResponse`](../interfaces/CollectedCoinsResponse.md)\>

#### Defined in

[src/core.ts:136](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L136)

___

### searchCoins

▸ **searchCoins**(`query`, `config?`): `Promise`<[`SearchCoinsResponse`](../interfaces/SearchCoinsResponse.md)\>

Search for coins

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchCoinsRequest`](../interfaces/SearchCoinsRequest.md), ``"q"``\>\> | Other params |

#### Returns

`Promise`<[`SearchCoinsResponse`](../interfaces/SearchCoinsResponse.md)\>

#### Defined in

[src/core.ts:147](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L147)

___

### searchCoinsPaginated

▸ **searchCoinsPaginated**(`query`, `config?`): `Promise`<[`PaginatedResult`](PaginatedResult.md)<[`SearchCoinsRequest`](../interfaces/SearchCoinsRequest.md), [`SearchCoinsResponse`](../interfaces/SearchCoinsResponse.md)\>\>

Paginated search for coins

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchCoinsRequest`](../interfaces/SearchCoinsRequest.md), ``"q"`` \| ``"page"``\>\> | Other params |

#### Returns

`Promise`<[`PaginatedResult`](PaginatedResult.md)<[`SearchCoinsRequest`](../interfaces/SearchCoinsRequest.md), [`SearchCoinsResponse`](../interfaces/SearchCoinsResponse.md)\>\>

#### Defined in

[src/core.ts:164](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L164)

___

### useAuthorizationCode

▸ **useAuthorizationCode**(`redirectUri`, `scope`, `config?`): [`OAuthConnector`](OAuthConnector.md)

Get OAuth access token via user credentials

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redirectUri` | `string` | URI to redirect back the user to your application after they authenticate |
| `scope` | ``"view_collection"``[] | List of permissions you are requesting (e.g. 'view_collection') |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

[`OAuthConnector`](OAuthConnector.md)

OAuth adapter using authorization code

#### Defined in

[src/core.ts:213](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L213)

___

### useUserCredentials

▸ **useUserCredentials**(`scope`): `Promise`<`number`\>

Get OAuth access token via user credentials

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | ``"view_collection"``[] | List of permissions |

#### Returns

`Promise`<`number`\>

ID of the user who authenticated

#### Defined in

[src/core.ts:227](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L227)

___

### user

▸ **user**(`userId`, `config?`): `Promise`<[`UserResponse`](../interfaces/UserResponse.md)\>

Get information about a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` \| `number` | ID of the user |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`UserResponse`](../interfaces/UserResponse.md)\>

#### Defined in

[src/core.ts:183](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L183)

___

### userCoins

▸ **userCoins**(`userId`, `config?`): `Promise`<[`CollectedCoinsResponse`](../interfaces/CollectedCoinsResponse.md)\>

Get the coins owned by a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` \| `number` | ID of the user |
| `config` | `Partial`<[`CollectedCoinsRequest`](../interfaces/CollectedCoinsRequest.md)\> | Other params |

#### Returns

`Promise`<[`CollectedCoinsResponse`](../interfaces/CollectedCoinsResponse.md)\>

#### Defined in

[src/core.ts:197](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/core.ts#L197)
