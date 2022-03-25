[@leopiccionia/numista-sdk](../README.md) / CoinPricesResponse

# Interface: CoinPricesResponse

## Table of contents

### Properties

- [currency](CoinPricesResponse.md#currency)
- [prices](CoinPricesResponse.md#prices)

## Properties

### currency

• **currency**: `string`

3-letter ISO 4217 code of the currency in which the prices are provided

#### Defined in

[src/types/responses.ts:28](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L28)

___

### prices

• **prices**: { `grade`: [`Grade`](../README.md#grade) ; `price`: `number`  }[]

List of zero or more prices for each grade

#### Defined in

[src/types/responses.ts:30](https://github.com/leopiccionia/numista-sdk/blob/0647f5f/src/types/responses.ts#L30)
