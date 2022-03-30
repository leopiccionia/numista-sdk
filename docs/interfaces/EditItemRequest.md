[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / EditItemRequest

# Interface: EditItemRequest

## Table of contents

### Properties

- [collection](EditItemRequest.md#collection)
- [for\_swap](EditItemRequest.md#for_swap)
- [grade](EditItemRequest.md#grade)
- [issue](EditItemRequest.md#issue)
- [price](EditItemRequest.md#price)
- [private\_comment](EditItemRequest.md#private_comment)
- [public\_comment](EditItemRequest.md#public_comment)
- [quantity](EditItemRequest.md#quantity)
- [type](EditItemRequest.md#type)

## Properties

### collection

• `Optional` **collection**: `number`

ID of the collection

___

### for\_swap

• `Optional` **for\_swap**: `boolean`

Indicate whether the item is available for swap

**`defaultvalue`** false

___

### grade

• `Optional` **grade**: ``null`` \| `number`

Grade of the item, or null for undetermined grade

___

### issue

• `Optional` **issue**: ``null`` \| `number`

ID of the issue of the item, or null for undetermined issue

___

### price

• `Optional` **price**: ``null`` \| [`Price`](Price.md)

Buying price

___

### private\_comment

• `Optional` **private\_comment**: `string`

Private comment

___

### public\_comment

• `Optional` **public\_comment**: `string`

Public comment

___

### quantity

• `Optional` **quantity**: `number`

Quantity of items

**`defaultvalue`** 1

___

### type

• `Optional` **type**: `number`

ID of the type of the item
