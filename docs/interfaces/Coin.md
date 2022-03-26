[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / Coin

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

___

### comments

• `Optional` **comments**: `string`

General comments about the coin (HTML format)

___

### composition

• `Optional` **composition**: `Object`

Composition of coin (metallic content)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `text?` | `string` | Description of the composition |

___

### edge

• `Optional` **edge**: [`CoinSide`](CoinSide.md)

___

### id

• **id**: `number`

Unique ID of the coin on Numista

___

### issuer

• `Optional` **issuer**: [`Issuer`](Issuer.md)

___

### max\_year

• `Optional` **max\_year**: `number`

Last year the coin was minted (in the Gregorian calendar)

___

### min\_year

• `Optional` **min\_year**: `number`

First year the coin was minted (in the Gregorian calendar)

___

### mints

• `Optional` **mints**: { `id`: `string` ; `name`: `string`  }[]

Mints where the coin was minted

___

### obverse

• `Optional` **obverse**: [`CoinSide`](CoinSide.md)

___

### orientation

• `Optional` **orientation**: [`Orientation`](../modules.md#orientation)

Orientation of the coin ("coin", "medal" or "variable")

___

### references

• `Optional` **references**: [`Reference`](Reference.md)[]

References of the coin in other catalogues

___

### related\_coins

• `Optional` **related\_coins**: { `id`: `number` ; `issuer?`: [`Issuer`](Issuer.md) ; `max_year`: `number` ; `min_year`: `number` ; `title`: `string`  }[]

List of related coins

___

### reverse

• `Optional` **reverse**: [`CoinSide`](CoinSide.md)

___

### ruler

• `Optional` **ruler**: { `group?`: { `id`: `number` ; `name`: `string`  } ; `id`: `number` ; `name`: `string` ; `wikidata_id?`: `string`  }[]

___

### series

• `Optional` **series**: `string`

For coins which are part of a series, the name of the series

___

### shape

• `Optional` **shape**: `string`

Shape of the coin

___

### size

• `Optional` **size**: `number`

Size of coin (diameter) in millimeters

___

### tags

• `Optional` **tags**: `string`[]

List of tags

___

### thickness

• `Optional` **thickness**: `number`

Thickness of the coin in millimeters

___

### title

• **title**: `string`

Title of the coin

___

### type

• `Optional` **type**: [`CoinType`](../modules.md#cointype)

Type of coin

___

### url

• `Optional` **url**: `string`

URL to the coin on Numista

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

___

### weight

• `Optional` **weight**: `number`

Weight of the coin in grams
