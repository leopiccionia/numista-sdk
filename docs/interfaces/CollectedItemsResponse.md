[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / CollectedItemsResponse

# Interface: CollectedItemsResponse

## Table of contents

### Properties

- [item\_count](CollectedItemsResponse.md#item_count)
- [item\_for\_swap\_count](CollectedItemsResponse.md#item_for_swap_count)
- [item\_type\_count](CollectedItemsResponse.md#item_type_count)
- [item\_type\_for\_swap\_count](CollectedItemsResponse.md#item_type_for_swap_count)
- [items](CollectedItemsResponse.md#items)
- [warning](CollectedItemsResponse.md#warning)

## Properties

### item\_count

• **item\_count**: `number`

Count of items owned by the user

___

### item\_for\_swap\_count

• **item\_for\_swap\_count**: `number`

Count of items offered for swap by the user

___

### item\_type\_count

• **item\_type\_count**: `number`

Count of different types owned by the user

___

### item\_type\_for\_swap\_count

• **item\_type\_for\_swap\_count**: `number`

Count of different types offered for swap by the user

___

### items

• **items**: { `coin`: { `category`: [`Category`](../modules.md#category) ; `id`: `number` ; `issuer?`: [`Issuer`](Issuer.md) ; `title`: `string`  } ; `collection?`: [`Collection`](Collection.md) ; `for_swap`: `boolean` ; `grade?`: [`Grade`](../modules.md#grade) ; `id`: `number` ; `issue?`: [`Issue`](Issue.md) ; `pictures?`: { `thumbnail_url`: `string` ; `url`: `string`  }[] ; `price?`: [`Price`](Price.md) ; `private_comment?`: `string` ; `public_comment?`: `string` ; `quantity`: `number`  }[]

List of items in the collection

___

### warning

• `Optional` **warning**: `string`

Warning message (e.g. in case of user not authenticated but some data can be retrieved since the collection is public)
