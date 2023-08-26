[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / SearchByImageRequest

# Interface: SearchByImageRequest

## Table of contents

### Properties

- [category](SearchByImageRequest.md#category)
- [images](SearchByImageRequest.md#images)
- [max\_results](SearchByImageRequest.md#max_results)

## Properties

### category

• `Optional` **category**: [`Category`](../modules.md#category)

Catalogue category

___

### images

• **images**: { `image_data`: `string` ; `mime_type`: [`MimeType`](../modules.md#mimetype)  }[]

List of one or two input images in JPEG or PNG format with Base64 encoding

___

### max\_results

• `Optional` **max\_results**: `number`

Maximum number of results. Note that the method may return less results than the specified maximum if less matching types are found

Minimum: 1. Maximum: 100

**`Default Value`**

```ts
100
```
