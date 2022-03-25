[@leopiccionia/numista-sdk](../README.md) / SearchCoinsResponse

# Interface: SearchCoinsResponse

## Hierarchy

- [`PaginatedResponse`](PaginatedResponse.md)

  ↳ **`SearchCoinsResponse`**

## Table of contents

### Properties

- [coins](SearchCoinsResponse.md#coins)
- [count](SearchCoinsResponse.md#count)

## Properties

### coins

• **coins**: `Pick`<[`Coin`](Coin.md), ``"issuer"`` \| ``"id"`` \| ``"max_year"`` \| ``"min_year"`` \| ``"title"``\>[]

List of matching coins on the given page

___

### count

• **count**: `number`

Total count of matching coins

#### Overrides

[PaginatedResponse](PaginatedResponse.md).[count](PaginatedResponse.md#count)
