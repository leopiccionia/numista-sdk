[@leopiccionia/numista-sdk](../README.md) / CollectedCoinsResponse

# Interface: CollectedCoinsResponse

## Table of contents

### Properties

- [coin\_count](CollectedCoinsResponse.md#coin_count)
- [coin\_for\_swap\_count](CollectedCoinsResponse.md#coin_for_swap_count)
- [coin\_type\_count](CollectedCoinsResponse.md#coin_type_count)
- [coin\_type\_for\_swap\_count](CollectedCoinsResponse.md#coin_type_for_swap_count)
- [collected\_coins](CollectedCoinsResponse.md#collected_coins)
- [warning](CollectedCoinsResponse.md#warning)

## Properties

### coin\_count

• **coin\_count**: `number`

Count of coins owned by the user

#### Defined in

[src/types/responses.ts:42](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L42)

___

### coin\_for\_swap\_count

• **coin\_for\_swap\_count**: `number`

Count of coins offered for swap by the user

#### Defined in

[src/types/responses.ts:44](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L44)

___

### coin\_type\_count

• **coin\_type\_count**: `number`

Count of different coin types owned by the user

#### Defined in

[src/types/responses.ts:46](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L46)

___

### coin\_type\_for\_swap\_count

• **coin\_type\_for\_swap\_count**: `number`

Count of different coin types offered for swap by the user

#### Defined in

[src/types/responses.ts:48](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L48)

___

### collected\_coins

• **collected\_coins**: { `coin`: { `id`: `number` ; `issuer?`: [`Issuer`](Issuer.md) ; `title`: `string`  } ; `collection?`: [`Collection`](Collection.md) ; `for_swap`: `boolean` ; `grade?`: [`Grade`](../README.md#grade) ; `id`: `number` ; `issue?`: [`Issue`](Issue.md) ; `pictures?`: { `thumbnail_url`: `string` ; `url`: `string`  }[] ; `price?`: [`Price`](Price.md) ; `private_comment?`: `string` ; `public_comment?`: `string` ; `quantity`: `number`  }[]

List of collected coins

#### Defined in

[src/types/responses.ts:50](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L50)

___

### warning

• `Optional` **warning**: `string`

Warning message (e.g. in case of user not authenticated but some data can be retrieved since the collection is public)

#### Defined in

[src/types/responses.ts:40](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L40)
