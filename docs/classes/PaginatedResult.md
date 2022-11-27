[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / PaginatedResult

# Class: PaginatedResult<Req, Res\>

A paginated response

## Type parameters

| Name | Type |
| :------ | :------ |
| `Req` | extends [`PaginatedRequest`](../interfaces/PaginatedRequest.md) |
| `Res` | extends [`PaginatedResponse`](../interfaces/PaginatedResponse.md) |

## Table of contents

### Accessors

- [count](PaginatedResult.md#count)
- [data](PaginatedResult.md#data)
- [page](PaginatedResult.md#page)

### Methods

- [[asyncIterator]](PaginatedResult.md#[asynciterator])
- [collect](PaginatedResult.md#collect)
- [hasNext](PaginatedResult.md#hasnext)
- [next](PaginatedResult.md#next)

## Accessors

### count

• `get` **count**(): `number`

Total number of items

#### Returns

`number`

___

### data

• `get` **data**(): `Omit`<`Res`, ``"count"``\>

All items already fetched

#### Returns

`Omit`<`Res`, ``"count"``\>

___

### page

• `get` **page**(): `number`

Last fetched page

#### Returns

`number`

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncGenerator`<`Omit`<`Res`, ``"count"``\>, `any`, `unknown`\>

Fetch and iterate through all missing pages

#### Returns

`AsyncGenerator`<`Omit`<`Res`, ``"count"``\>, `any`, `unknown`\>

The async iterator

___

### collect

▸ **collect**(): `Promise`<`Omit`<`Res`, ``"count"``\>\>

Fetch all missing pages

#### Returns

`Promise`<`Omit`<`Res`, ``"count"``\>\>

All items

___

### hasNext

▸ **hasNext**(): `boolean`

If there are items still unfetched

#### Returns

`boolean`

___

### next

▸ **next**(): `Promise`<`Res`\>

Fetch next page

#### Returns

`Promise`<`Res`\>

The next page
