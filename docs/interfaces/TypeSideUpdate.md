[@leopiccionia/numista-sdk](../README.md) / [Exports](../modules.md) / TypeSideUpdate

# Interface: TypeSideUpdate

## Table of contents

### Properties

- [description](TypeSideUpdate.md#description)
- [designers](TypeSideUpdate.md#designers)
- [engravers](TypeSideUpdate.md#engravers)
- [lettering](TypeSideUpdate.md#lettering)
- [lettering\_scripts](TypeSideUpdate.md#lettering_scripts)
- [lettering\_translation](TypeSideUpdate.md#lettering_translation)
- [picture](TypeSideUpdate.md#picture)
- [picture\_copyright](TypeSideUpdate.md#picture_copyright)
- [picture\_copyright\_type](TypeSideUpdate.md#picture_copyright_type)
- [unabridged\_legend](TypeSideUpdate.md#unabridged_legend)

## Properties

### description

• `Optional` **description**: [`LocalizedLabel`](LocalizedLabel.md)[]

Description of the side of the type

___

### designers

• `Optional` **designers**: `string`[]

Name of the designer(s). Note that this field is not applicable for the edge or watermark

___

### engravers

• `Optional` **engravers**: `string`[]

Name of the engraver(s). Note that this field is not applicable for the edge or watermark

___

### lettering

• `Optional` **lettering**: `string`

Lettering visible on the side of the type

___

### lettering\_scripts

• `Optional` **lettering\_scripts**: { `id`: `number`  }[]

Scripts used to write the lettering on the side of the coins

___

### lettering\_translation

• `Optional` **lettering\_translation**: [`LocalizedLabel`](LocalizedLabel.md)[]

Translation of the lettering visible on the side of the type

___

### picture

• `Optional` **picture**: `string`

URL to the picture of the side of the type. You may provide any URL publicly available. The picture will be downloaded by Numista and stored internally. Only JPEG images are accepted

___

### picture\_copyright

• `Optional` **picture\_copyright**: `string`

Name of the owner of the picture. This field is mandatory if a picture is provided. Pictures should not be used without consent from their owner

___

### picture\_copyright\_type

• `Optional` **picture\_copyright\_type**: [`CopyrightType`](../modules.md#copyrighttype)

Type of source of the picture. This field is mandatory if a picture is provided

___

### unabridged\_legend

• `Optional` **unabridged\_legend**: `string`

Legend visible on the side of the type with abbreviations replaced by full words
