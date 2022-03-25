[@leopiccionia/numista-sdk](../README.md) / CollectedCoinsRequest

# Interface: CollectedCoinsRequest

## Hierarchy

- [`BaseRequest`](BaseRequest.md)

  ↳ **`CollectedCoinsRequest`**

## Table of contents

### Properties

- [lang](CollectedCoinsRequest.md#lang)
- [type](CollectedCoinsRequest.md#type)

## Properties

### lang

• `Optional` **lang**: [`Language`](../README.md#language)

Language

#### Overrides

[BaseRequest](BaseRequest.md).[lang](BaseRequest.md#lang)

#### Defined in

[src/types/requests.ts:24](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L24)

___

### type

• `Optional` **type**: `number`

Coin type ID. If this parameter is provided, only coins of the given coin type are returned.

#### Defined in

[src/types/requests.ts:26](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/requests.ts#L26)
