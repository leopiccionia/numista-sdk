[@leopiccionia/numista-sdk](../README.md) / Issue

# Interface: Issue

## Table of contents

### Properties

- [comment](Issue.md#comment)
- [gregorian\_year](Issue.md#gregorian_year)
- [id](Issue.md#id)
- [is\_dated](Issue.md#is_dated)
- [max\_year](Issue.md#max_year)
- [min\_year](Issue.md#min_year)
- [mint\_letter](Issue.md#mint_letter)
- [mintage](Issue.md#mintage)
- [year](Issue.md#year)

## Properties

### comment

• `Optional` **comment**: `string`

Comment about the issue

#### Defined in

[src/types/schemas.ts:292](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L292)

___

### gregorian\_year

• `Optional` **gregorian\_year**: `number`

Issuance year in Gregorian calendar, if the coin is dated

#### Defined in

[src/types/schemas.ts:282](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L282)

___

### id

• **id**: `string`

Unique ID of the issue on Numista

#### Defined in

[src/types/schemas.ts:276](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L276)

___

### is\_dated

• `Optional` **is\_dated**: `boolean`

Informs whether the issuance year is present on the coin

#### Defined in

[src/types/schemas.ts:278](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L278)

___

### max\_year

• `Optional` **max\_year**: `number`

Last year of issuance in Gregorian calendar, if the coin is non dated

#### Defined in

[src/types/schemas.ts:286](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L286)

___

### min\_year

• `Optional` **min\_year**: `number`

First year of issuance in Gregorian calendar, if the coin is non dated

#### Defined in

[src/types/schemas.ts:284](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L284)

___

### mint\_letter

• `Optional` **mint\_letter**: `string`

Mint letter

#### Defined in

[src/types/schemas.ts:288](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L288)

___

### mintage

• `Optional` **mintage**: `number`

Quantity of coins minted

#### Defined in

[src/types/schemas.ts:290](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L290)

___

### year

• `Optional` **year**: `number`

Issuance year as written on the coin, if the coin is dated

#### Defined in

[src/types/schemas.ts:280](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L280)
