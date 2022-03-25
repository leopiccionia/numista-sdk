[@leopiccionia/numista-sdk](../README.md) / RequestError

# Class: RequestError

Error returned if server returned an error status

## Hierarchy

- `Error`

  ↳ **`RequestError`**

## Table of contents

### Properties

- [cause](RequestError.md#cause)
- [message](RequestError.md#message)
- [name](RequestError.md#name)
- [stack](RequestError.md#stack)
- [status](RequestError.md#status)
- [statusText](RequestError.md#statustext)
- [prepareStackTrace](RequestError.md#preparestacktrace)
- [stackTraceLimit](RequestError.md#stacktracelimit)

### Methods

- [captureStackTrace](RequestError.md#capturestacktrace)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1024

___

### status

• **status**: `number`

HTTP status code

#### Defined in

[src/errors.ts:20](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/errors.ts#L20)

___

### statusText

• **statusText**: `string`

HTTP status text

#### Defined in

[src/errors.ts:22](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/errors.ts#L22)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@17.0.21/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@17.0.21/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@17.0.21/node_modules/@types/node/globals.d.ts:4
