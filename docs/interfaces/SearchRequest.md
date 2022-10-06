[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / SearchRequest

# Interface: SearchRequest

At least one of the following parameters should be provided: `q`, `issuer`, `catalogue`

## Hierarchy

- [`BaseRequest`](BaseRequest.md)

- [`PaginatedRequest`](PaginatedRequest.md)

  ↳ **`SearchRequest`**

## Table of contents

### Properties

- [catalogue](SearchRequest.md#catalogue)
- [category](SearchRequest.md#category)
- [count](SearchRequest.md#count)
- [issuer](SearchRequest.md#issuer)
- [lang](SearchRequest.md#lang)
- [number](SearchRequest.md#number)
- [page](SearchRequest.md#page)
- [q](SearchRequest.md#q)

## Properties

### catalogue

• `Optional` **catalogue**: `number`

ID of a reference catalogue. If provided, only the types referenced in the given catalogue are returned

___

### category

• `Optional` **category**: [`Category`](../modules.md#category)

Catalogue category

___

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

• `Optional` **lang**: [`Language`](../modules.md#language)

Language

#### Overrides

[BaseRequest](BaseRequest.md).[lang](BaseRequest.md#lang)

___

### number

• `Optional` **number**: `string`

Number of the searched typed in a reference catalogue. This parameter works only with the other parameter `catalogue`

___

### page

• **page**: `number`

Page of results

#### Overrides

[PaginatedRequest](PaginatedRequest.md).[page](PaginatedRequest.md#page)

___

### q

• `Optional` **q**: `string`

Search query
