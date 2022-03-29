[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / CollectedItemsRequest

# Interface: CollectedItemsRequest

## Hierarchy

- [`BaseRequest`](BaseRequest.md)

  ↳ **`CollectedItemsRequest`**

## Table of contents

### Properties

- [category](CollectedItemsRequest.md#category)
- [collection](CollectedItemsRequest.md#collection)
- [lang](CollectedItemsRequest.md#lang)
- [type](CollectedItemsRequest.md#type)

## Properties

### category

• `Optional` **category**: [`Category`](../modules.md#category)

Category. If this parameter is provided, only items of the given category are returned

___

### collection

• `Optional` **collection**: `number`

Collection ID. If this parameter is provided, only items in the given collection are returned

___

### lang

• `Optional` **lang**: [`Language`](../modules.md#language)

Language

#### Overrides

[BaseRequest](BaseRequest.md).[lang](BaseRequest.md#lang)

___

### type

• `Optional` **type**: `number`

Coin type ID. If this parameter is provided, only coins of the given coin type are returned
