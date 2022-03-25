[@leopiccionia/numista-sdk](../README.md) / OAuthConnector

# Class: OAuthConnector

OAuth adapter using authorization code

## Table of contents

### Accessors

- [state](OAuthConnector.md#state)
- [url](OAuthConnector.md#url)

### Methods

- [setCode](OAuthConnector.md#setcode)

## Accessors

### state

• `get` **state**(): `string`

#### Returns

`string`

___

### url

• `get` **url**(): `string`

#### Returns

`string`

## Methods

### setCode

▸ **setCode**(`code`): `Promise`<`number`\>

Exchange the authorization code for an access token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The authorization code |

#### Returns

`Promise`<`number`\>

ID of the user who authenticated
