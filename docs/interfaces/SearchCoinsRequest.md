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

___

### issuer

• `Optional` **issuer**: `string`

Issuer code. If provided, only the coins from the given issuer are returned

___

### lang

• `Optional` **lang**: [`Language`](../README.md#language)

Language

#### Overrides

[BaseRequest](BaseRequest.md).[lang](BaseRequest.md#lang)

___

### page

• **page**: `number`

Page of results

#### Overrides

[PaginatedRequest](PaginatedRequest.md).[page](PaginatedRequest.md#page)

___

### q

• **q**: `string`

Search query
