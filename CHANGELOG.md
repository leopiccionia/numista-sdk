# Changelog

## [0.4.0](https://github.com/leopiccionia/numista-sdk/compare/v0.3.0...v0.4.0) (2023-02-08)

This release contain many breaking changes. While breaking stuff is not desirable, this releases puts the SDK a lot closer to stability.

The main **BREAKING** change is renaming the error classes: the former `RequestError` class is now called `ResponseError`, while the `ConnectionError` is now the new `RequestError` class. The new naming scheme is better aligned with Fetch API.

Other changes:

- **BREAKING**: Remove methods that were deprecated in 0.3.0
- **BREAKING**: Remove experimental `stream` method from `PaginatedResult`, as it was not fully compatible with the Streams API
- `PaginatedResult` can now be iterated with `for await`, as it implements the `AsyncGenerator` interface
- Add new `code` helper method for searching types by catalogue + number

## [0.3.0](https://github.com/leopiccionia/numista-sdk/compare/v0.2.0...v0.3.0) (2022-04-04)

From this release, the SDK uses API v3 instead of v2. The main improvements are:

- Support for banknotes and exonumia
- Manage (add, eddit, remove) items in collections

Some methods were renamed to better reflect they're not restricted to coins anymore.

| Old name (0.2.0) | New name (0.3.0) | Old name is now... |
|--|--|--|
| `addCoin` | `addType` | Deprecated |
| `addCoinIssue` | `addIssue` | Deprecated |
| `coin` | `type` | Deprecated |
| `coinIssues` | `issues` | Deprecated |
| `coinPrices` | `prices` | Deprecated |
| `searchCoinsPaginated` | `paginatedSearch` | Removed |

For TypeScript users, some interfaces were renamed to align to the new names.

Other notable changes:

- Add the `myCollections` and `userCollections` methods for listing collections
- Add the `myBanknotes`, `myExonumia`, `myItems`, `userBanknotes`, `userExonumia` and `userItems` methods for listing items in collections
- Add the `addItem`, `editItem`, `item` and `removeItem` methods for managing items in collections
- Add the `search`, `searchBanknote` and `searchExonumia` methods for searching the catalogue

## [0.2.0](https://github.com/leopiccionia/numista-sdk/compare/v0.1.0...v0.2.0) (2022-03-26)

- **BREAKING**: Make ID parameters more strict
- **BREAKING**: Add `constructor` parameter to experimental `PaginatedResult.stream` method
