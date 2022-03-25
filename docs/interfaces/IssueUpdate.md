[@leopiccionia/numista-sdk](../README.md) / IssueUpdate

# Interface: IssueUpdate

## Table of contents

### Properties

- [comment](IssueUpdate.md#comment)
- [gregorian\_year](IssueUpdate.md#gregorian_year)
- [is\_dated](IssueUpdate.md#is_dated)
- [max\_year](IssueUpdate.md#max_year)
- [min\_year](IssueUpdate.md#min_year)
- [mint\_letter](IssueUpdate.md#mint_letter)
- [mintage](IssueUpdate.md#mintage)
- [year](IssueUpdate.md#year)

## Properties

### comment

• `Optional` **comment**: [`LocalizedLabel`](LocalizedLabel.md)[]

Comment about the issue

#### Defined in

[src/types/schemas.ts:318](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L318)

___

### gregorian\_year

• `Optional` **gregorian\_year**: `number`

Issuance year in Gregorian calendar. If missing, it will be calculated automatically. This field is ignored for non-dated coins

#### Defined in

[src/types/schemas.ts:308](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L308)

___

### is\_dated

• **is\_dated**: `boolean`

Informs whether the issuance year is present on the coin

#### Defined in

[src/types/schemas.ts:304](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L304)

___

### max\_year

• `Optional` **max\_year**: `number`

Last year of issuance in Gregorian calendar, if the coin is non dated. This field is ignored for dated coins

#### Defined in

[src/types/schemas.ts:312](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L312)

___

### min\_year

• `Optional` **min\_year**: `number`

First year of issuance in Gregorian calendar, if the coin is non dated. This field is ignored for dated coins

#### Defined in

[src/types/schemas.ts:310](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L310)

___

### mint\_letter

• `Optional` **mint\_letter**: `string`

Mint letter

#### Defined in

[src/types/schemas.ts:314](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L314)

___

### mintage

• `Optional` **mintage**: `number`

Quantity minted

#### Defined in

[src/types/schemas.ts:316](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L316)

___

### year

• `Optional` **year**: `number`

Issuance year as written on the coin. This field is mandatory for dated coins and ignored for non-dated coins

#### Defined in

[src/types/schemas.ts:306](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/schemas.ts#L306)
