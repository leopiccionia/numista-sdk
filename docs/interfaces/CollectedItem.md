[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / CollectedItem

# Interface: CollectedItem

## Table of contents

### Properties

- [collection](CollectedItem.md#collection)
- [for\_swap](CollectedItem.md#for_swap)
- [grade](CollectedItem.md#grade)
- [id](CollectedItem.md#id)
- [issue](CollectedItem.md#issue)
- [pictures](CollectedItem.md#pictures)
- [price](CollectedItem.md#price)
- [private\_comment](CollectedItem.md#private_comment)
- [public\_comment](CollectedItem.md#public_comment)
- [quantity](CollectedItem.md#quantity)
- [type](CollectedItem.md#type)

## Properties

### collection

• `Optional` **collection**: [`Collection`](Collection.md)

___

### for\_swap

• **for\_swap**: `boolean`

Indicate whether the item is available for swap

___

### grade

• `Optional` **grade**: [`Grade`](../modules.md#grade)

Grade of the item

___

### id

• **id**: `number`

Unique ID of the item

___

### issue

• `Optional` **issue**: [`Issue`](Issue.md)

___

### pictures

• `Optional` **pictures**: { `thumbnail_url`: `string` ; `url`: `string`  }[]

List of pictures or PDF documents. PDF documents are available only if the user is not authenticated.

___

### price

• `Optional` **price**: [`Price`](Price.md)

___

### private\_comment

• `Optional` **private\_comment**: `string`

Private comment (not available if the user is not authenticated)

___

### public\_comment

• `Optional` **public\_comment**: `string`

Public comment

___

### quantity

• **quantity**: `number`

Quantity of items

___

### type

• **type**: `Object`

Describe the type of the item

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `category` | [`Category`](../modules.md#category) | Category |
| `id` | `number` | ID of the type |
| `issuer?` | [`Issuer`](Issuer.md) | - |
| `title` | `string` | Title of the type |
