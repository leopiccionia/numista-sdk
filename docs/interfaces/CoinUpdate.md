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

#### Defined in

[src/types/schemas.ts:217](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L217)

___

### commemorated\_topic

• `Optional` **commemorated\_topic**: [`LocalizedLabel`](LocalizedLabel.md)[]

For commemorated coins, short description of the commemorated topic (event, person, etc.)

#### Defined in

[src/types/schemas.ts:234](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L234)

___

### comments

• `Optional` **comments**: [`LocalizedLabel`](LocalizedLabel.md)[]

General comments about the coin (HTML format)

#### Defined in

[src/types/schemas.ts:236](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L236)

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

#### Defined in

[src/types/schemas.ts:187](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L187)

___

### demonetization

• `Optional` **demonetization**: `Object`

Inform whether the coin is demonetized

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `demonetization_date?` | `string` | Demonetization date, with format "YYYY-MM-DD" |
| `is_demonetized` | `boolean` | true for demonetized coins and false for coins which are still legal tender |

#### Defined in

[src/types/schemas.ts:210](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L210)

___

### edge

• `Optional` **edge**: [`CoinSideUpdate`](CoinSideUpdate.md)

#### Defined in

[src/types/schemas.ts:223](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L223)

___

### issuer

• `Optional` **issuer**: `Object`

Issuer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Unique ID of the issuer on Numista |

#### Defined in

[src/types/schemas.ts:153](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L153)

___

### mints

• `Optional` **mints**: { `id`: `number` ; `letter`: `string`  }[]

Mints where the coin was minted

#### Defined in

[src/types/schemas.ts:225](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L225)

___

### obverse

• `Optional` **obverse**: [`CoinSideUpdate`](CoinSideUpdate.md)

#### Defined in

[src/types/schemas.ts:221](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L221)

___

### orientation

• `Optional` **orientation**: [`Orientation`](../README.md#orientation)

Orientation of the coin ("coin", "medal" or "variable")

#### Defined in

[src/types/schemas.ts:208](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L208)

___

### references

• `Optional` **references**: { `catalogue`: { `id`: `number`  } ; `number`: `string`  }[]

#### Defined in

[src/types/schemas.ts:247](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L247)

___

### related\_coins

• `Optional` **related\_coins**: { `id`: `number`  }[]

List of related coins

#### Defined in

[src/types/schemas.ts:238](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L238)

___

### reverse

• `Optional` **reverse**: [`CoinSideUpdate`](CoinSideUpdate.md)

#### Defined in

[src/types/schemas.ts:222](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L222)

___

### ruling\_authority

• `Optional` **ruling\_authority**: { `id`: `number`  }[]

Ruling authorities (emperor, queen, period, etc.)

#### Defined in

[src/types/schemas.ts:176](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L176)

___

### series

• `Optional` **series**: [`LocalizedLabel`](LocalizedLabel.md)[]

For coins which are part of a series, the name of the series

#### Defined in

[src/types/schemas.ts:232](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L232)

___

### shape

• `Optional` **shape**: `Object`

Shape of the coin

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `additional_details?` | [`LocalizedLabel`](LocalizedLabel.md)[] | - |
| `id` | `number` | Unique ID of the shape on Numista |

#### Defined in

[src/types/schemas.ts:181](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L181)

___

### size

• `Optional` **size**: `number`

Size of coin (diameter) in millimeters

#### Defined in

[src/types/schemas.ts:204](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L204)

___

### tags

• `Optional` **tags**: { `id`: `number`  }[]

List of tags

#### Defined in

[src/types/schemas.ts:243](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L243)

___

### thickness

• `Optional` **thickness**: `number`

Thickness of the coin in millimeters

#### Defined in

[src/types/schemas.ts:206](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L206)

___

### title

• **title**: [`LocalizedLabel`](LocalizedLabel.md)[]

Title of the coin

#### Defined in

[src/types/schemas.ts:151](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L151)

___

### type

• `Optional` **type**: [`CoinType`](../README.md#cointype)

Type of coin

#### Defined in

[src/types/schemas.ts:158](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L158)

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

#### Defined in

[src/types/schemas.ts:160](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L160)

___

### weight

• `Optional` **weight**: `number`

Weight of the coin in grams

#### Defined in

[src/types/schemas.ts:202](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L202)
