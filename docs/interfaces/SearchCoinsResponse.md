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

#### Defined in

[src/types/responses.ts:103](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L103)

___

### count

• **count**: `number`

Total count of matching coins

#### Overrides

[PaginatedResponse](PaginatedResponse.md).[count](PaginatedResponse.md#count)

#### Defined in

[src/types/responses.ts:101](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L101)
