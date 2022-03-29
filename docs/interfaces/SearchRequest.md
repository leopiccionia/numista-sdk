[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / SearchRequest

# Interface: SearchRequest

## Hierarchy

- [`BaseRequest`](BaseRequest.md)

- [`PaginatedRequest`](PaginatedRequest.md)

  ↳ **`SearchRequest`**

## Table of contents

### Properties

- [category](SearchRequest.md#category)
- [count](SearchRequest.md#count)
- [issuer](SearchRequest.md#issuer)
- [lang](SearchRequest.md#lang)
- [page](SearchRequest.md#page)
- [q](SearchRequest.md#q)

## Properties

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

### page

• **page**: `number`

Page of results

#### Overrides

[PaginatedRequest](PaginatedRequest.md).[page](PaginatedRequest.md#page)

___

### q

• **q**: `string`

Search query
