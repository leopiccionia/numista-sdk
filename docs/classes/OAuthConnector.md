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

#### Defined in

[src/oauth.ts:29](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/oauth.ts#L29)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/oauth.ts:33](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/oauth.ts#L33)

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

#### Defined in

[src/oauth.ts:48](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/oauth.ts#L48)
