import { assert, describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe.concurrent('Managing collections', () => {

  it('works', async () => {
    const numista = createConnector()

    const userId = await numista.useUserCredentials(['edit_collection', 'view_collection'])

    const { collections } = await numista.userCollections(userId)

    const collection = collections.find((col) => col.name.toLowerCase().includes('test'))
    if (!collection) {
      assert(collection, 'Create a collection called "test" to continue')
    }

    const item = await numista.addItem(userId, {
      collection: collection!.id,
      type: 1492,
      quantity: 2,
    })
    expect(item.quantity).toBe(2)

    const editedItem = await numista.editItem(userId, item.id, {
      quantity: 3,
    })
    expect(item.id).toBe(editedItem.id)
    expect(editedItem.quantity).toBe(3)

    const deleted = await numista.removeItem(userId, item.id)
    expect(deleted).toBeFalsy()
  })
})
