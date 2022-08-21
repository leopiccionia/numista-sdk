[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / NumistaConnector

# Class: NumistaConnector

The main entrypoint for Numista SDK

## Table of contents

### Constructors

- [constructor](NumistaConnector.md#constructor)

### Methods

- [addIssue](NumistaConnector.md#addissue)
- [addItem](NumistaConnector.md#additem)
- [addType](NumistaConnector.md#addtype)
- [catalogues](NumistaConnector.md#catalogues)
- [editItem](NumistaConnector.md#edititem)
- [issuers](NumistaConnector.md#issuers)
- [issues](NumistaConnector.md#issues)
- [item](NumistaConnector.md#item)
- [myBanknotes](NumistaConnector.md#mybanknotes)
- [myCoins](NumistaConnector.md#mycoins)
- [myCollections](NumistaConnector.md#mycollections)
- [myExonumia](NumistaConnector.md#myexonumia)
- [myItems](NumistaConnector.md#myitems)
- [paginatedSearch](NumistaConnector.md#paginatedsearch)
- [prices](NumistaConnector.md#prices)
- [removeItem](NumistaConnector.md#removeitem)
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
- [userCollections](NumistaConnector.md#usercollections)
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
| `config` | `Partial`<[`ConnectorConfig`](../interfaces/ConnectorConfig.md)\> | Miscellaneous configuration |

## Methods

### addIssue

▸ **addIssue**(`typeId`, `data`, `params?`): `Promise`<[`Issue`](../interfaces/Issue.md)\>

Add a issue

It requires a specific permission associated to your API key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the coin to which the issue is added |
| `data` | [`IssueUpdate`](../interfaces/IssueUpdate.md) | Data related to the coin issue to add to the catalogue |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)\>

The coin issue that has been added to the catalogue

___

### addItem

▸ **addItem**(`userId`, `data`): `Promise`<[`CollectedItem`](../interfaces/CollectedItem.md)\>

Add an item in the user collection

This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `data` | [`AddItemRequest`](../interfaces/AddItemRequest.md) | Data related to the item to be added to the collection |

#### Returns

`Promise`<[`CollectedItem`](../interfaces/CollectedItem.md)\>

The item

___

### addType

▸ **addType**(`data`, `params?`): `Promise`<[`Type`](../interfaces/Type.md)\>

This endpoint allows to add a type to the catalogue

It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`TypeUpdate`](../interfaces/TypeUpdate.md) | Data related to the coin to add to the catalogue |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

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

### editItem

▸ **editItem**(`userId`, `itemId`, `data`): `Promise`<[`CollectedItem`](../interfaces/CollectedItem.md)\>

Edit an item in a user's collection

This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `itemId` | `number` | ID of the collected item |
| `data` | [`EditItemRequest`](../interfaces/EditItemRequest.md) | Item data which need to be edited. All fields are optional. Only the fields which are present will be updated |

#### Returns

`Promise`<[`CollectedItem`](../interfaces/CollectedItem.md)\>

The updated item

___

### issuers

▸ **issuers**(`params?`): `Promise`<[`IssuersResponse`](../interfaces/IssuersResponse.md)\>

Retrieve the list of issuing countries and territories

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`IssuersResponse`](../interfaces/IssuersResponse.md)\>

___

### issues

▸ **issues**(`typeId`, `params?`): `Promise`<[`Issue`](../interfaces/Issue.md)[]\>

Find the issues of a type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the type to fetch the issues from |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`Issue`](../interfaces/Issue.md)[]\>

___

### item

▸ **item**(`userId`, `itemId`): `Promise`<[`CollectedItem`](../interfaces/CollectedItem.md)\>

Get an item in a user's collection

This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `itemId` | `number` | ID of the collected item |

#### Returns

`Promise`<[`CollectedItem`](../interfaces/CollectedItem.md)\>

___

### myBanknotes

▸ **myBanknotes**(`params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the banknotes owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### myCoins

▸ **myCoins**(`params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the coins owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### myCollections

▸ **myCollections**(`params?`): `Promise`<[`CollectionsResponse`](../interfaces/CollectionsResponse.md)\>

Get the list of collections of a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<[`CollectionsRequest`](../interfaces/CollectionsRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectionsResponse`](../interfaces/CollectionsResponse.md)\>

___

### myExonumia

▸ **myExonumia**(`params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the exonumia pieces owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### myItems

▸ **myItems**(`params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the items (coins, banknotes, pieces of exonumia) owned by the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### paginatedSearch

▸ **paginatedSearch**(`query`, `params?`): `Promise`<[`PaginatedResult`](PaginatedResult.md)<[`SearchRequest`](../interfaces/SearchRequest.md), [`SearchResponse`](../interfaces/SearchResponse.md)\>\>

Search the catalogue for coin, banknote and exonumia types (with pagination)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `params` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"q"`` \| ``"page"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`PaginatedResult`](PaginatedResult.md)<[`SearchRequest`](../interfaces/SearchRequest.md), [`SearchResponse`](../interfaces/SearchResponse.md)\>\>

___

### prices

▸ **prices**(`typeId`, `issueId`, `params?`): `Promise`<[`PricesResponse`](../interfaces/PricesResponse.md)\>

Get estimates for the price of an issue of a coin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the type |
| `issueId` | `number` | ID of the issue |
| `params` | `Partial`<[`PricesRequest`](../interfaces/PricesRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`PricesResponse`](../interfaces/PricesResponse.md)\>

___

### removeItem

▸ **removeItem**(`userId`, `itemId`): `Promise`<`void`\>

Delete an item from a user's collection

This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `itemId` | `number` | ID of the collected item |

#### Returns

`Promise`<`void`\>

___

### search

▸ **search**(`query`, `params?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for coin, banknote and exonumia types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `params` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"q"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### searchBanknotes

▸ **searchBanknotes**(`query`, `params?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for banknotes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `params` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"q"`` \| ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### searchCoins

▸ **searchCoins**(`query`, `params?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for coins

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `params` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"q"`` \| ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### searchExonumia

▸ **searchExonumia**(`query`, `params?`): `Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

Search the catalogue for exonumia pieces

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Search query |
| `params` | `Partial`<`Omit`<[`SearchRequest`](../interfaces/SearchRequest.md), ``"q"`` \| ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`SearchResponse`](../interfaces/SearchResponse.md)\>

___

### type

▸ **type**(`typeId`, `params?`): `Promise`<[`Type`](../interfaces/Type.md)\>

Find a type by ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeId` | `number` | ID of the type to fetch |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`Type`](../interfaces/Type.md)\>

___

### useAuthorizationCode

▸ **useAuthorizationCode**(`redirectUri`, `scope`, `params?`): [`OAuthConnector`](OAuthConnector.md)

Get OAuth access token via user credentials

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redirectUri` | `string` | URI to redirect back the user to your application after they authenticate |
| `scope` | [`Scope`](../modules.md#scope)[] | List of permissions you are requesting (e.g. 'view_collection') |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

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
| `scope` | [`Scope`](../modules.md#scope)[] | List of permissions |

#### Returns

`Promise`<`number`\>

ID of the user who authenticated

___

### user

▸ **user**(`userId`, `params?`): `Promise`<[`UserResponse`](../interfaces/UserResponse.md)\>

Get information about a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `params` | `Partial`<[`BaseRequest`](../interfaces/BaseRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`UserResponse`](../interfaces/UserResponse.md)\>

___

### userBanknotes

▸ **userBanknotes**(`userId`, `params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the banknotes owned by a user

This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `params` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### userCoins

▸ **userCoins**(`userId`, `params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the coins owned by a user

This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `params` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### userCollections

▸ **userCollections**(`userId`, `params?`): `Promise`<[`CollectionsResponse`](../interfaces/CollectionsResponse.md)\>

Get the list of collections of a user

This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `params` | `Partial`<[`CollectionsRequest`](../interfaces/CollectionsRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectionsResponse`](../interfaces/CollectionsResponse.md)\>

___

### userExonumia

▸ **userExonumia**(`userId`, `params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the exonumia pieces owned by a user

This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `params` | `Partial`<`Omit`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md), ``"category"``\>\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

___

### userItems

▸ **userItems**(`userId`, `params?`): `Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>

Get the items (coin, banknotes, pieces of exonumia) owned by a user

This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `number` | ID of the user |
| `params` | `Partial`<[`CollectedItemsRequest`](../interfaces/CollectedItemsRequest.md)\> | Miscellaneous params |

#### Returns

`Promise`<[`CollectedItemsResponse`](../interfaces/CollectedItemsResponse.md)\>
