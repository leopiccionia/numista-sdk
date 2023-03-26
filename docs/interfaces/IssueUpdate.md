[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / IssueUpdate

# Interface: IssueUpdate

## Table of contents

### Properties

- [comment](IssueUpdate.md#comment)
- [gregorian\_year](IssueUpdate.md#gregorian_year)
- [is\_dated](IssueUpdate.md#is_dated)
- [marks](IssueUpdate.md#marks)
- [max\_year](IssueUpdate.md#max_year)
- [min\_year](IssueUpdate.md#min_year)
- [mint\_letter](IssueUpdate.md#mint_letter)
- [mintage](IssueUpdate.md#mintage)
- [signatures](IssueUpdate.md#signatures)
- [year](IssueUpdate.md#year)

## Properties

### comment

• `Optional` **comment**: [`LocalizedLabel`](LocalizedLabel.md)[]

Comment about the issue

___

### gregorian\_year

• `Optional` **gregorian\_year**: `number`

Issuance year in Gregorian calendar. If missing, it will be calculated automatically. This field is ignored for non-dated coins

___

### is\_dated

• **is\_dated**: `boolean`

Informs whether the issuance year is present on the coin

___

### marks

• `Optional` **marks**: { `id`: `number`  }[]

List of marks (mint master mark, privy mark, die mark, etc.)

___

### max\_year

• `Optional` **max\_year**: `number`

Last year of issuance in Gregorian calendar, if the coin is non dated. This field is ignored for dated coins

___

### min\_year

• `Optional` **min\_year**: `number`

First year of issuance in Gregorian calendar, if the coin is non dated. This field is ignored for dated coins

___

### mint\_letter

• `Optional` **mint\_letter**: `string`

Mint letter

___

### mintage

• `Optional` **mintage**: `number`

Quantity minted

___

### signatures

• `Optional` **signatures**: { `id`: `number`  }[]

List of signatures

___

### year

• `Optional` **year**: `number`

Issuance year as written on the coin. This field is mandatory for dated coins and ignored for non-dated coins
