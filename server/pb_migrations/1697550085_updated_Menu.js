/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8w2tt8ogdih85fc")

  collection.name = "pizza"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8w2tt8ogdih85fc")

  collection.name = "Menu"

  return dao.saveCollection(collection)
})
