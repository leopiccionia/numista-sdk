[@leopiccionia/numista-sdk](../README.md) / Coin

# Interface: Coin

## Table of contents

### Properties

- [commemorated\_topic](Coin.md#commemorated_topic)
- [comments](Coin.md#comments)
- [composition](Coin.md#composition)
- [edge](Coin.md#edge)
- [id](Coin.md#id)
- [issuer](Coin.md#issuer)
- [max\_year](Coin.md#max_year)
- [min\_year](Coin.md#min_year)
- [mints](Coin.md#mints)
- [obverse](Coin.md#obverse)
- [orientation](Coin.md#orientation)
- [references](Coin.md#references)
- [related\_coins](Coin.md#related_coins)
- [reverse](Coin.md#reverse)
- [ruler](Coin.md#ruler)
- [series](Coin.md#series)
- [shape](Coin.md#shape)
- [size](Coin.md#size)
- [tags](Coin.md#tags)
- [thickness](Coin.md#thickness)
- [title](Coin.md#title)
- [type](Coin.md#type)
- [url](Coin.md#url)
- [value](Coin.md#value)
- [weight](Coin.md#weight)

## Properties

### commemorated\_topic

• `Optional` **commemorated\_topic**: `string`

For commemorated coins, short description of the commemorated topic (event, person, etc.)

#### Defined in

[src/types/schemas.ts:86](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L86)

___

### comments

• `Optional` **comments**: `string`

General comments about the coin (HTML format)

#### Defined in

[src/types/schemas.ts:88](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L88)

___

### composition

• `Optional` **composition**: `Object`

Composition of coin (metallic content)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `text?` | `string` | Description of the composition |

#### Defined in

[src/types/schemas.ts:61](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L61)

___

### edge

• `Optional` **edge**: [`CoinSide`](CoinSide.md)

#### Defined in

[src/types/schemas.ts:75](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L75)

___

### id

• **id**: `number`

Unique ID of the coin on Numista

#### Defined in

[src/types/schemas.ts:19](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L19)

___

### issuer

• `Optional` **issuer**: [`Issuer`](Issuer.md)

#### Defined in

[src/types/schemas.ts:24](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L24)

___

### max\_year

• `Optional` **max\_year**: `number`

Last year the coin was minted (in the Gregorian calendar)

#### Defined in

[src/types/schemas.ts:28](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L28)

___

### min\_year

• `Optional` **min\_year**: `number`

First year the coin was minted (in the Gregorian calendar)

#### Defined in

[src/types/schemas.ts:26](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L26)

___

### mints

• `Optional` **mints**: { `id`: `string` ; `name`: `string`  }[]

Mints where the coin was minted

#### Defined in

[src/types/schemas.ts:77](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L77)

___

### obverse

• `Optional` **obverse**: [`CoinSide`](CoinSide.md)

#### Defined in

[src/types/schemas.ts:73](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L73)

___

### orientation

• `Optional` **orientation**: [`Orientation`](../README.md#orientation)

Orientation of the coin ("coin", "medal" or "variable")

#### Defined in

[src/types/schemas.ts:72](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L72)

___

### references

• `Optional` **references**: [`Reference`](Reference.md)[]

References of the coin in other catalogues

#### Defined in

[src/types/schemas.ts:104](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L104)

___

### related\_coins

• `Optional` **related\_coins**: { `id`: `number` ; `issuer?`: [`Issuer`](Issuer.md) ; `max_year`: `number` ; `min_year`: `number` ; `title`: `string`  }[]

List of related coins

#### Defined in

[src/types/schemas.ts:90](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L90)

___

### reverse

• `Optional` **reverse**: [`CoinSide`](CoinSide.md)

#### Defined in

[src/types/schemas.ts:74](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L74)

___

### ruler

• `Optional` **ruler**: { `group?`: { `id`: `number` ; `name`: `string`  } ; `id`: `number` ; `name`: `string` ; `wikidata_id?`: `string`  }[]

#### Defined in

[src/types/schemas.ts:43](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L43)

___

### series

• `Optional` **series**: `string`

For coins which are part of a series, the name of the series

#### Defined in

[src/types/schemas.ts:84](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L84)

___

### shape

• `Optional` **shape**: `string`

Shape of the coin

#### Defined in

[src/types/schemas.ts:59](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L59)

___

### size

• `Optional` **size**: `number`

Size of coin (diameter) in millimeters

#### Defined in

[src/types/schemas.ts:68](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L68)

___

### tags

• `Optional` **tags**: `string`[]

List of tags

#### Defined in

[src/types/schemas.ts:102](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L102)

___

### thickness

• `Optional` **thickness**: `number`

Thickness of the coin in millimeters

#### Defined in

[src/types/schemas.ts:70](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L70)

___

### title

• **title**: `string`

Title of the coin

#### Defined in

[src/types/schemas.ts:23](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L23)

___

### type

• `Optional` **type**: [`CoinType`](../README.md#cointype)

Type of coin

#### Defined in

[src/types/schemas.ts:30](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L30)

___

### url

• `Optional` **url**: `string`

URL to the coin on Numista

#### Defined in

[src/types/schemas.ts:21](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L21)

___

### value

• `Optional` **value**: `Object`

Face value of the coin

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency?` | [`Currency`](Currency.md) | - |
| `denominator?` | `number` | If the value is better described as a fraction, this is the denominator of the fraction |
| `numerator?` | `number` | If the value is better described as a fraction, this is the numerator of the fraction |
| `numeric_value?` | `number` | Face value as a floating number |
| `text?` | `string` | Face value in text format |

#### Defined in

[src/types/schemas.ts:32](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L32)

___

### weight

• `Optional` **weight**: `number`

Weight of the coin in grams

#### Defined in

[src/types/schemas.ts:66](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L66)
