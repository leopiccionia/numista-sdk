[@leopiccionia/numista-sdk](../README.md) / PaginatedResult

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

- [collect](PaginatedResult.md#collect)
- [hasNext](PaginatedResult.md#hasnext)
- [next](PaginatedResult.md#next)
- [stream](PaginatedResult.md#stream)

## Accessors

### count

• `get` **count**(): `number`

Total number of items

#### Returns

`number`

#### Defined in

[src/pagination.ts:41](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L41)

___

### data

• `get` **data**(): `Omit`<`Res`, ``"count"``\>

All items already fetched

#### Returns

`Omit`<`Res`, ``"count"``\>

#### Defined in

[src/pagination.ts:46](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L46)

___

### page

• `get` **page**(): `number`

Last fetched page

#### Returns

`number`

#### Defined in

[src/pagination.ts:72](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L72)

## Methods

### collect

▸ **collect**(): `Promise`<`Omit`<`Res`, ``"count"``\>\>

Fetch all missing pages

#### Returns

`Promise`<`Omit`<`Res`, ``"count"``\>\>

All items

#### Defined in

[src/pagination.ts:33](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L33)

___

### hasNext

▸ **hasNext**(): `boolean`

If there are items still unfetched

#### Returns

`boolean`

#### Defined in

[src/pagination.ts:51](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L51)

___

### next

▸ **next**(): `Promise`<`Res`\>

Fetch next page

#### Returns

`Promise`<`Res`\>

The next page

#### Defined in

[src/pagination.ts:59](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L59)

___

### stream

▸ **stream**(): `ReadableStream`<`Omit`<`Res`, ``"count"``\>\>

Fetch and stream all missing pages (experimental)

**`experimental`**

#### Returns

`ReadableStream`<`Omit`<`Res`, ``"count"``\>\>

A WHATWG-compatible readable stream

#### Defined in

[src/pagination.ts:81](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/pagination.ts#L81)
