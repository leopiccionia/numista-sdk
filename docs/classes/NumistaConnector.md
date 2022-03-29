[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / NumistaConnector

# Class: NumistaConnector

The main entrypoint for Numista SDK

## Table of contents

### Constructors

- [constructor](NumistaConnector.md#constructor)

### Methods

- [addCoin](NumistaConnector.md#addcoin)
- [addCoinIssue](NumistaConnector.md#addcoinissue)
- [addIssue](NumistaConnector.md#addissue)
- [addType](NumistaConnector.md#addtype)
- [catalogues](NumistaConnector.md#catalogues)
- [coin](NumistaConnector.md#coin)
- [coinIssues](NumistaConnector.md#coinissues)
- [coinPrices](NumistaConnector.md#coinprices)
- [issuers](NumistaConnector.md#issuers)
- [issues](NumistaConnector.md#issues)
- [myBanknotes](NumistaConnector.md#mybanknotes)
- [myCoins](NumistaConnector.md#mycoins)
- [myExonumia](NumistaConnector.md#myexonumia)
- [myItems](NumistaConnector.md#myitems)
- [paginatedSearch](NumistaConnector.md#paginatedsearch)
- [prices](NumistaConnector.md#prices)
- [search](NumistaConnector.md#search)
- [searchBanknotes](NumistaConnector.md#searchbanknotes)
- [searchCoins](NumistaConnector.md#searchcoins)
- [searchExonumia](NumistaConnector.md#searchexonumia)
- [type](NumistaConnector.md#type)
- [useAuthorizationCode](NumistaConnector.md#useauthorizationcode)
- [useUserCredentials](NumistaConnector.md#useusercredentials)
- [user](NumistaConnector.md#user)
- [userBanknotes](NumistaConnector.md#userbanknotes)
- [userCoins](NumistaConnector.md#usercoins)
- [userExonumia](NumistaConnector.md#userexonumia)
- [userItems](NumistaConnector.md#useritems)

## Constructors

### constructor

• **new NumistaConnector**(`apiKey`, `clientId`, `config?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey` | `string` | API key |
| `clientId` | `string` | Client ID |
| `config` | `Partial`<[`ConnectorConfig`](../interfaces/ConnectorConfig.md)\> | Other params |

## Methods

### addCoin

▸ **addCoin**(`data`, `config?`): `Promise`<[`Type`](../interfaces/Type.md)\>

This endpoint allows to add a coin to the catalogue

It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue

**`deprecated`** Use [`addType`](NumistaConnector.md#addtype) (since 0.3.0)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`TypeUpdate`](../interfaces/TypeUpdate.md) | Data related to the coin to add to the catalogue |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Type`](../interfaces/Type.md)\>

The coin that has been added to the catalogue

___

### addCoinIssue

▸ **addCoinIssue**(`coinId`, `data`, `config?`): `Promise`<[`Issue`](../interfaces/Issue.md)\>

Add a coin issue

It requires a specific permission associated to your API key

**`deprecated`** Use [`addIssue`](NumistaConnector.md#addissue) (since 0.3.0)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `number` | ID of the coin to which the issue is added |
| `data` | [`IssueUpdate`](../interfaces/IssueUpdate.md) | Data related to the coin issue to add to the catalogue |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)\>

The coin issue that has been added to the catalogue

___

### addIssue

▸ **addIssue**(`typeId`, `data`, `config?`): `Promise`<[`Issue`](../interfaces/Issue.md)\>

Add a issue

It requires a specific permission associated to your API key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the coin to which the issue is added |
| `data` | [`IssueUpdate`](../interfaces/IssueUpdate.md) | Data related to the coin issue to add to the catalogue |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)\>

The coin issue that has been added to the catalogue

___

### addType

▸ **addType**(`data`, `config?`): `Promise`<[`Type`](../interfaces/Type.md)\>

This endpoint allows to add a type to the catalogue

It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`TypeUpdate`](../interfaces/TypeUpdate.md) | Data related to the coin to add to the catalogue |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Type`](../interfaces/Type.md)\>

The coin that has been added to the catalogue

___

### catalogues

▸ **catalogues**(): `Promise`<[`CataloguesResponse`](../interfaces/CataloguesResponse.md)\>

Retrieve the list of catalogues used for coin references

#### Returns

`Promise`<[`CataloguesResponse`](../interfaces/CataloguesResponse.md)\>

___

### coin

▸ **coin**(`coinId`, `config?`): `Promise`<[`Type`](../interfaces/Type.md)\>

Find a coin by ID

**`deprecated`** Use [`type`](NumistaConnector.md#type) (since 0.3.0)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `number` | ID of the coin to fetch |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Type`](../interfaces/Type.md)\>

___

### coinIssues

▸ **coinIssues**(`coinId`, `config?`): `Promise`<[`Issue`](../interfaces/Issue.md)[]\>

Find the issues of a coin

**`deprecated`** Use [`issues`](NumistaConnector.md#issues) (since 0.3.0)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `number` | ID of the coin to fetch the issues from |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)[]\>

___

### coinPrices

▸ **coinPrices**(`coinId`, `issueId`, `config?`): `Promise`<[`PricesResponse`](../interfaces/PricesResponse.md)\>

Get estimates for the price of an issue of a coin

**`deprecated`** Use [`prices`](NumistaConnector.md#prices) (since 0.3.0)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coinId` | `number` | ID of the coin type |
| `issueId` | `number` | ID of the issue of the coin |
| `config` | `Partial`<[`PricesRequest`](../interfaces/PricesRequest.md)\> | Other params |

#### Returns

`Promise`<[`PricesResponse`](../interfaces/PricesResponse.md)\>

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

___

### issues

▸ **issues**(`typeId`, `config?`): `Promise`<[`Issue`](../interfaces/Issue.md)[]\>

Find the issues of a type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the type to fetch the issues from |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)[]\>

___

### myBanknotes

▸ **myBanknotes**(`config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the banknotes owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### myCoins

▸ **myCoins**(`config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the coins owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### myExonumia

▸ **myExonumia**(`config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the exonumia pieces owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### myItems

▸ **myItems**(`config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the items (coins, banknotes, pieces of exonumia) owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Partial`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md)\> | Params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### paginatedSearch

▸ **paginatedSearch**(`query`, `config?`): `Promise`<[`PaginatedResult`](PaginatedResult.md)<[`SearchRequest`](../interfaces/SearchRequest.md), [`SearchResponse`](../interfaces/SearchResponse.md)\>\>

Search the catalogue for coin, banknote and exonumia types (with pagination)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"page"`` \| ``"q"``\>\> | Other params |

#### Returns

`Promise`<[`PaginatedResult`](PaginatedResult.md)<[`SearchRequest`](../interfaces/SearchRequest.md), [`SearchResponse`](../interfaces/SearchResponse.md)\>\>

___

### prices

▸ **prices**(`typeId`, `issueId`, `config?`): `Promise`<[`PricesResponse`](../interfaces/PricesResponse.md)\>

Get estimates for the price of an issue of a coin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the type |
| `issueId` | `number` | ID of the issue |
| `config` | `Partial`<[`PricesRequest`](../interfaces/PricesRequest.md)\> | Other params |

#### Returns

`Promise`<[`PricesResponse`](../interfaces/PricesResponse.md)\>

___

### search

▸ **search**(`query`, `config?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for coin, banknote and exonumia types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"q"``\>\> | Other params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### searchBanknotes

▸ **searchBanknotes**(`query`, `config?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for banknotes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"category"`` \| ``"q"``\>\> | Other params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### searchCoins

▸ **searchCoins**(`query`, `config?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for coins

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"category"`` \| ``"q"``\>\> | Other params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### searchExonumia

▸ **searchExonumia**(`query`, `config?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for exonumia pieces

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `config` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"category"`` \| ``"q"``\>\> | Other params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### type

▸ **type**(`typeId`, `config?`): `Promise`<[`Type`](../interfaces/Type.md)\>

Find a type by ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the type to fetch |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`Type`](../interfaces/Type.md)\>

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

___

### user

▸ **user**(`userId`, `config?`): `Promise`<[`UserResponse`](../interfaces/UserResponse.md)\>

Get information about a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `config` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Other params |

#### Returns

`Promise`<[`UserResponse`](../interfaces/UserResponse.md)\>

___

### userBanknotes

▸ **userBanknotes**(`userId`, `config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the banknotes owned by a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `config` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Other params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### userCoins

▸ **userCoins**(`userId`, `config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the coins owned by a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `config` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Other params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### userExonumia

▸ **userExonumia**(`userId`, `config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the exonumia pieces owned by a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `config` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Other params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### userItems

▸ **userItems**(`userId`, `config?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the items (coin, banknotes, pieces of exonumia) owned by a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `config` | `Partial`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md)\> | Other params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>
