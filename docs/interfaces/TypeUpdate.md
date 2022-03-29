[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / TypeUpdate

# Interface: TypeUpdate

## Table of contents

### Properties

- [calendar](TypeUpdate.md#calendar)
- [category](TypeUpdate.md#category)
- [commemorated\_topic](TypeUpdate.md#commemorated_topic)
- [comments](TypeUpdate.md#comments)
- [composition](TypeUpdate.md#composition)
- [demonetization](TypeUpdate.md#demonetization)
- [edge](TypeUpdate.md#edge)
- [issuer](TypeUpdate.md#issuer)
- [mints](TypeUpdate.md#mints)
- [obverse](TypeUpdate.md#obverse)
- [orientation](TypeUpdate.md#orientation)
- [printers](TypeUpdate.md#printers)
- [references](TypeUpdate.md#references)
- [related\_coins](TypeUpdate.md#related_coins)
- [reverse](TypeUpdate.md#reverse)
- [ruling\_authority](TypeUpdate.md#ruling_authority)
- [series](TypeUpdate.md#series)
- [shape](TypeUpdate.md#shape)
- [size](TypeUpdate.md#size)
- [tags](TypeUpdate.md#tags)
- [technique](TypeUpdate.md#technique)
- [thickness](TypeUpdate.md#thickness)
- [title](TypeUpdate.md#title)
- [type](TypeUpdate.md#type)
- [value](TypeUpdate.md#value)
- [watermark](TypeUpdate.md#watermark)
- [weight](TypeUpdate.md#weight)

## Properties

### calendar

• `Optional` **calendar**: `Object`

Calendar to which the year visible on the type belongs

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Unique ID of the calendar on Numista |

___

### category

• **category**: [`Category`](../modules.md#category)

Category

___

### commemorated\_topic

• `Optional` **commemorated\_topic**: [`LocalizedLabel`](LocalizedLabel.md)[]

For commemorated types, short description of the commemorated topic (event, person, etc.)

___

### comments

• `Optional` **comments**: [`LocalizedLabel`](LocalizedLabel.md)[]

General comments about the type (HTML format)

___

### composition

• `Optional` **composition**: `Object`

Composition (metallic content)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additional_details?` | [`LocalizedLabel`](LocalizedLabel.md)[] | - |
| `composition_type` | ``"plain"`` | Type of composition |
| `core?` | { `fineness?`: `number` ; `material`: { `id`: `number`  }  } | COmposition of the core |
| `core.fineness?` | `number` | Fineness of the material (e.g. 999.9) |
| `core.material` | { `id`: `number`  } | - |
| `core.material.id` | `number` | Unique ID of the material on Numista |

___

### demonetization

• `Optional` **demonetization**: `Object`

Inform whether the coin or banknote is demonetized

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demonetization_date?` | `string` | Demonetization date, with format "YYYY-MM-DD" |
| `is_demonetized` | `boolean` | true for demonetized, and false if still legal tender |

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

• `Optional` **mints**: { `id`: `number` ; `letter?`: `string`  }[]

Mints where the coin was minted

___

### obverse

• `Optional` **obverse**: [`CoinSideUpdate`](CoinSideUpdate.md)

___

### orientation

• `Optional` **orientation**: [`Orientation`](../modules.md#orientation)

Orientation of the coin ("coin", "medal" or "variable")

___

### printers

• `Optional` **printers**: { `id`: `number`  }[]

Printers where the banknote was printed

___

### references

• `Optional` **references**: { `catalogue`: { `id`: `number`  } ; `number`: `string`  }[]

___

### related\_coins

• `Optional` **related\_coins**: { `id`: `number`  }[]

List of related types

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

For types which are part of a series, the name of the series

___

### shape

• `Optional` **shape**: `Object`

Shape

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additional_details?` | [`LocalizedLabel`](LocalizedLabel.md)[] | - |
| `id` | `number` | Unique ID of the shape on Numista |

___

### size

• `Optional` **size**: `number`

Size (diameter) in millimeters

___

### tags

• `Optional` **tags**: { `id`: `number`  }[]

List of tags

___

### technique

• `Optional` **technique**: `Object`

Manufacturing technique

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additional_details?` | [`LocalizedLabel`](LocalizedLabel.md)[] |
| `list?` | { `id`: `number`  }[] |

___

### thickness

• `Optional` **thickness**: `number`

Thickness of the coin in millimeters

___

### title

• **title**: [`LocalizedLabel`](LocalizedLabel.md)[]

Title of the type

___

### type

• `Optional` **type**: `string`

Type

___

### value

• `Optional` **value**: `Object`

Face value

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency?` | { `id`: `number`  } | Currency |
| `currency.id` | `number` | Unique ID of the currency on Numista |
| `denominator?` | `number` | If the value is better described as a fraction, this is the denominator of the fraction |
| `numerator?` | `number` | If the value is better described as a fraction, this is the numerator of the fraction |
| `numeric_value?` | `number` | Face value as a floating number. This field is ignored if a numerator and a denominator are provided |
| `text?` | [`LocalizedLabel`](LocalizedLabel.md)[] | Face value in text format |

___

### watermark

• `Optional` **watermark**: [`CoinSideUpdate`](CoinSideUpdate.md)

___

### weight

• `Optional` **weight**: `number`

Weight in grams
