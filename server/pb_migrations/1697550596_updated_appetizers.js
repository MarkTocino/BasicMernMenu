/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hbths77x347no1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iao3pxbf",
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
  const collection = dao.findCollectionByNameOrId("9hbths77x347no1")

  // remove
  collection.schema.removeField("iao3pxbf")

  return dao.saveCollection(collection)
})
