[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / AddItemRequest

# Interface: AddItemRequest

## Table of contents

### Properties

- [collection](AddItemRequest.md#collection)
- [for\_swap](AddItemRequest.md#for_swap)
- [grade](AddItemRequest.md#grade)
- [issue](AddItemRequest.md#issue)
- [price](AddItemRequest.md#price)
- [private\_comment](AddItemRequest.md#private_comment)
- [public\_comment](AddItemRequest.md#public_comment)
- [quantity](AddItemRequest.md#quantity)
- [type](AddItemRequest.md#type)

## Properties

### collection

• `Optional` **collection**: `number`

ID of the collection

___

### for\_swap

• `Optional` **for\_swap**: `boolean`

Indicate whether the item is available for swap

**`Default Value`**

```ts
false
```

___

### grade

• `Optional` **grade**: [`Grade`](../modules.md#grade)

Grade of the item

___

### issue

• `Optional` **issue**: `number`

ID of the issue of the item

___

### price

• `Optional` **price**: [`Price`](Price.md)

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

**`Default Value`**

```ts
1
```

___

### type

• **type**: `number`

ID of the type of the item
