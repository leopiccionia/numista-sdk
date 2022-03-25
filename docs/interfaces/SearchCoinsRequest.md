[@leopiccionia/numista-sdk](../README.md) / SearchCoinsRequest

# Interface: SearchCoinsRequest

## Hierarchy

- [`BaseRequest`](BaseRequest.md)

- [`PaginatedRequest`](PaginatedRequest.md)

  ↳ **`SearchCoinsRequest`**

## Table of contents

### Properties

- [count](SearchCoinsRequest.md#count)
- [issuer](SearchCoinsRequest.md#issuer)
- [lang](SearchCoinsRequest.md#lang)
- [page](SearchCoinsRequest.md#page)
- [q](SearchCoinsRequest.md#q)

## Properties

### count

• **count**: `number`

Results per page

#### Overrides

[PaginatedRequest](PaginatedRequest.md).[count](PaginatedRequest.md#count)

#### Defined in

[src/types/requests.ts:61](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L61)

___

### issuer

• `Optional` **issuer**: `string`

Issuer code. If provided, only the coins from the given issuer are returned

#### Defined in

[src/types/requests.ts:57](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L57)

___

### lang

• `Optional` **lang**: [`Language`](../README.md#language)

Language

#### Overrides

[BaseRequest](BaseRequest.md).[lang](BaseRequest.md#lang)

#### Defined in

[src/types/requests.ts:53](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L53)

___

### page

• **page**: `number`

Page of results

#### Overrides

[PaginatedRequest](PaginatedRequest.md).[page](PaginatedRequest.md#page)

#### Defined in

[src/types/requests.ts:59](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L59)

___

### q

• **q**: `string`

Search query

#### Defined in

[src/types/requests.ts:55](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L55)
