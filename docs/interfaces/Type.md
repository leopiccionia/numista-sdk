[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / Type

# Interface: Type

## Hierarchy

- [`BaseType`](BaseType.md)

  ↳ **`Type`**

## Table of contents

### Properties

- [category](Type.md#category)
- [commemorated\_topic](Type.md#commemorated_topic)
- [comments](Type.md#comments)
- [composition](Type.md#composition)
- [edge](Type.md#edge)
- [id](Type.md#id)
- [issuer](Type.md#issuer)
- [max\_year](Type.md#max_year)
- [min\_year](Type.md#min_year)
- [mints](Type.md#mints)
- [obverse](Type.md#obverse)
- [orientation](Type.md#orientation)
- [printers](Type.md#printers)
- [references](Type.md#references)
- [related\_types](Type.md#related_types)
- [reverse](Type.md#reverse)
- [ruler](Type.md#ruler)
- [series](Type.md#series)
- [shape](Type.md#shape)
- [size](Type.md#size)
- [tags](Type.md#tags)
- [thickness](Type.md#thickness)
- [title](Type.md#title)
- [type](Type.md#type)
- [url](Type.md#url)
- [value](Type.md#value)
- [watermark](Type.md#watermark)
- [weight](Type.md#weight)

## Properties

### category

• **category**: [`Category`](../modules.md#category)

Category

#### Inherited from

[BaseType](BaseType.md).[category](BaseType.md#category)

___

### commemorated\_topic

• `Optional` **commemorated\_topic**: `string`

For commemorated types, short description of the commemorated topic (event, person, etc.)

___

### comments

• `Optional` **comments**: `string`

General comments about the type (HTML format)

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

• `Optional` **edge**: [`TypeSide`](TypeSide.md)

___

### id

• **id**: `number`

Unique ID of the type on Numista

#### Inherited from

[BaseType](BaseType.md).[id](BaseType.md#id)

___

### issuer

• `Optional` **issuer**: [`Issuer`](Issuer.md)

#### Inherited from

[BaseType](BaseType.md).[issuer](BaseType.md#issuer)

___

### max\_year

• `Optional` **max\_year**: `number`

Last year the type was produced (in the Gregorian calendar)

#### Inherited from

[BaseType](BaseType.md).[max_year](BaseType.md#max_year)

___

### min\_year

• `Optional` **min\_year**: `number`

First year the type was produced (in the Gregorian calendar)

#### Inherited from

[BaseType](BaseType.md).[min_year](BaseType.md#min_year)

___

### mints

• `Optional` **mints**: { `id`: `string` ; `name`: `string`  }[]

Mints where the coin was minted

___

### obverse

• `Optional` **obverse**: [`TypeSide`](TypeSide.md)

___

### orientation

• `Optional` **orientation**: [`Orientation`](../modules.md#orientation)

Orientation of the coin ("coin", "medal" or "variable")

___

### printers

• `Optional` **printers**: { `id`: `number` ; `name`: `string`  }[]

Printers where the banknote was printed

___

### references

• `Optional` **references**: [`Reference`](Reference.md)[]

References of the type in other catalogues

___

### related\_types

• `Optional` **related\_types**: { `category?`: [`Category`](../modules.md#category) ; `id`: `number` ; `issuer?`: [`Issuer`](Issuer.md) ; `max_year`: `number` ; `min_year`: `number` ; `title`: `string`  }[]

List of related types

___

### reverse

• `Optional` **reverse**: [`TypeSide`](TypeSide.md)

___

### ruler

• `Optional` **ruler**: { `group?`: { `id`: `number` ; `name`: `string`  } ; `id`: `number` ; `name`: `string` ; `wikidata_id?`: `string`  }[]

___

### series

• `Optional` **series**: `string`

For types which are part of a series, the name of the series

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

Title of the type

#### Inherited from

[BaseType](BaseType.md).[title](BaseType.md#title)

___

### type

• `Optional` **type**: `string`

Type

___

### url

• `Optional` **url**: `string`

URL to the type on Numista

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

### watermark

• `Optional` **watermark**: [`TypeSide`](TypeSide.md)

___

### weight

• `Optional` **weight**: `number`

Weight of the coin in grams
