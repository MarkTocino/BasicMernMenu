/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8w2tt8ogdih85fc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d1k95ek6",
    "name": "price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8w2tt8ogdih85fc")

  // remove
  collection.schema.removeField("d1k95ek6")

  return dao.saveCollection(collection)
})
