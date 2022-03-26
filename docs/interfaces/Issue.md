[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / Issue

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

___

### gregorian\_year

• `Optional` **gregorian\_year**: `number`

Issuance year in Gregorian calendar, if the coin is dated

___

### id

• **id**: `string`

Unique ID of the issue on Numista

___

### is\_dated

• `Optional` **is\_dated**: `boolean`

Informs whether the issuance year is present on the coin

___

### max\_year

• `Optional` **max\_year**: `number`

Last year of issuance in Gregorian calendar, if the coin is non dated

___

### min\_year

• `Optional` **min\_year**: `number`

First year of issuance in Gregorian calendar, if the coin is non dated

___

### mint\_letter

• `Optional` **mint\_letter**: `string`

Mint letter

___

### mintage

• `Optional` **mintage**: `number`

Quantity of coins minted

___

### year

• `Optional` **year**: `number`

Issuance year as written on the coin, if the coin is dated
