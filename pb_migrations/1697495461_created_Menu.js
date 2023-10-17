/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8w2tt8ogdih85fc",
    "created": "2023-10-16 22:31:01.654Z",
    "updated": "2023-10-16 22:31:01.654Z",
    "name": "Menu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6zxmqqyr",
        "name": "food_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "juqi9qfd",
        "name": "food_description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "g2lbukrn",
        "name": "food_image",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8w2tt8ogdih85fc");

  return dao.deleteCollection(collection);
})
