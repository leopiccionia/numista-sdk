[@leopiccionia/numista-sdk](../README.md) / CoinUpdate

# Interface: CoinUpdate

## Table of contents

### Properties

- [calendar](CoinUpdate.md#calendar)
- [commemorated\_topic](CoinUpdate.md#commemorated_topic)
- [comments](CoinUpdate.md#comments)
- [composition](CoinUpdate.md#composition)
- [demonetization](CoinUpdate.md#demonetization)
- [edge](CoinUpdate.md#edge)
- [issuer](CoinUpdate.md#issuer)
- [mints](CoinUpdate.md#mints)
- [obverse](CoinUpdate.md#obverse)
- [orientation](CoinUpdate.md#orientation)
- [references](CoinUpdate.md#references)
- [related\_coins](CoinUpdate.md#related_coins)
- [reverse](CoinUpdate.md#reverse)
- [ruling\_authority](CoinUpdate.md#ruling_authority)
- [series](CoinUpdate.md#series)
- [shape](CoinUpdate.md#shape)
- [size](CoinUpdate.md#size)
- [tags](CoinUpdate.md#tags)
- [thickness](CoinUpdate.md#thickness)
- [title](CoinUpdate.md#title)
- [type](CoinUpdate.md#type)
- [value](CoinUpdate.md#value)
- [weight](CoinUpdate.md#weight)

## Properties

### calendar

• `Optional` **calendar**: `Object`

Calendar to which the year visible on the coin belongs

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Unique ID of the calendar on Numista |

___

### commemorated\_topic

• `Optional` **commemorated\_topic**: [`LocalizedLabel`](LocalizedLabel.md)[]

For commemorated coins, short description of the commemorated topic (event, person, etc.)

___

### comments

• `Optional` **comments**: [`LocalizedLabel`](LocalizedLabel.md)[]

General comments about the coin (HTML format)

___

### composition

• `Optional` **composition**: `Object`

Composition of coin (metallic content)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additional_details` | [`LocalizedLabel`](LocalizedLabel.md)[] | - |
| `composition_type` | ``"plain"`` | Type of composition (only "plain" is currently supported) |
| `core?` | { `material`: { `fineness`: `number` ; `id`: `number`  }  } | Composition of the core |
| `core.material` | { `fineness`: `number` ; `id`: `number`  } | - |
| `core.material.fineness` | `number` | Fineness of the material (e.g. 999.9) |
| `core.material.id` | `number` | Unique ID of the material on Numista |

___

### demonetization

• `Optional` **demonetization**: `Object`

Inform whether the coin is demonetized

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demonetization_date?` | `string` | Demonetization date, with format "YYYY-MM-DD" |
| `is_demonetized` | `boolean` | true for demonetized coins and false for coins which are still legal tender |

___

### edge

• `Optional` **edge**: [`CoinSideUpdate`](CoinSideUpdate.md)

___

### issuer

• `Optional` **issuer**: `Object`

Issuer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Unique ID of the issuer on Numista |

___

### mints

• `Optional` **mints**: { `id`: `number` ; `letter`: `string`  }[]

Mints where the coin was minted

___

### obverse

• `Optional` **obverse**: [`CoinSideUpdate`](CoinSideUpdate.md)

___

### orientation

• `Optional` **orientation**: [`Orientation`](../README.md#orientation)

Orientation of the coin ("coin", "medal" or "variable")

___

### references

• `Optional` **references**: { `catalogue`: { `id`: `number`  } ; `number`: `string`  }[]

___

### related\_coins

• `Optional` **related\_coins**: { `id`: `number`  }[]

List of related coins

___

### reverse

• `Optional` **reverse**: [`CoinSideUpdate`](CoinSideUpdate.md)

___

### ruling\_authority

• `Optional` **ruling\_authority**: { `id`: `number`  }[]

Ruling authorities (emperor, queen, period, etc.)

___

### series

• `Optional` **series**: [`LocalizedLabel`](LocalizedLabel.md)[]

For coins which are part of a series, the name of the series

___

### shape

• `Optional` **shape**: `Object`

Shape of the coin

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additional_details?` | [`LocalizedLabel`](LocalizedLabel.md)[] | - |
| `id` | `number` | Unique ID of the shape on Numista |

___

### size

• `Optional` **size**: `number`

Size of coin (diameter) in millimeters

___

### tags

• `Optional` **tags**: { `id`: `number`  }[]

List of tags

___

### thickness

• `Optional` **thickness**: `number`

Thickness of the coin in millimeters

___

### title

• **title**: [`LocalizedLabel`](LocalizedLabel.md)[]

Title of the coin

___

### type

• `Optional` **type**: [`CoinType`](../README.md#cointype)

Type of coin

___

### value

• `Optional` **value**: `Object`

Face value of the coin

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency?` | { `id`: `number`  } | Currency of the coin |
| `currency.id` | `number` | Unique ID of the currency on Numista |
| `denominator?` | `number` | If the value is better described as a fraction, this is the denominator of the fraction |
| `numerator?` | `number` | If the value is better described as a fraction, this is the numerator of the fraction |
| `numeric_value?` | `number` | Face value as a floating number. This field is ignored if a numerator and a denominator are provided |
| `text?` | [`LocalizedLabel`](LocalizedLabel.md)[] | Face value in text format |

___

### weight

• `Optional` **weight**: `number`

Weight of the coin in grams
