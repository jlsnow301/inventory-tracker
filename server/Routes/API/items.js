/**
 * server/routes/inventories/invetory.js
 *
 * @routes /api/item
 * post /:id adds an item
 * put /:id updates an item
 * delete /item/:id deletes an item
 *
 * @todos
 *  Add Following Routes
 *  - Update Inventory
 *  - Delete Inventory
 *
 * @issues
 *
 */

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const INVENTORIES = require('../../Models/Inventories');
const ITEMS = require('../../Models/Items');
const OBJECTID = require('mongodb').ObjectID;

/**
 * @purpose Adds an item to an inventory
 * @params :id is the id of the inventory item belongs in
 * @complete --> NO
 * @working no
 *
 * @todos
 *  - Add functionality to pull based on owner ID/access?
 *  - Responses need to be set up for success and failure
 *  - Should add action to history
 */

ROUTER.post('/:id', (req, res) => {
  let newItem = new ITEMS({
    name: req.body.itemName,
    brand: req.body.itemBrand,
    category: req.body.itemCategory,
    dosage: req.body.itemDosage,
    preparation: req.body.itemPreparation,
    quantity: req.body.itemQuantity,
    description: req.body.itemDescription,
  });

  INVENTORIES.update(
    { _id: OBJECTID(req.params.id) },
    { $push: { items: newItem } },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
    }
  );
});

/**
 * @purpose updates an item in an inventory
 * @params :id is the id of the inventory
 * @complete --> NO
 * @working No
 *
 * @todos
 *  - Add functionality to pull based on owner ID/access?
 *  - Add Notes about Success and information for Failure. Res needs to happen
 *  - Should add action to history
 */
ROUTER.put('/:id/:itemId', (req, res) => {
  let item = {
    name: req.body.itemName,
    brand: req.body.itemBrand,
    category: req.body.itemCategory,
    dosage: req.body.itemDosage,
    preparation: req.body.itemPreparation,
    quantity: req.body.itemQuantity,
    description: req.body.itemDescription,
  };
  /*  'items.name': item[0],
  'items.description': item[1],
  'items.location': item[2],
  'items.updated': item[3],
  'items.quantity': item[4],
*/
  console.log(req.params.id);
  console.log(req.params.itemId);
  // findandupdate

  ITEMS.findOneAndUpdate({ _id: OBJECTID(req.params.itemId) }, { $set: item })
    .then((theItem) => res.status(200).json(theItem))
    .catch((err) => res.status(404).json({ success: false }));
});

/**
 * @purpose Deletes an item from an inventory
 * @params :id is the id of the inventory
 * @complete --> NO
 * @working No
 *
 * @todos
 *  - Add functionality to pull based on owner ID/access?
 *  - Add Notes about Success and information for Failure
 *  - Should add action to history
 */
ROUTER.delete('/item/:id', (req, res) => {
  INVENTORIES.deleteOne({ _id: OBJECTID(req.params.id) })
    .then((inventory) => res.json(inventory))
    .catch((err) => res.status(404).json({ success: false }));
});

// Enter no text below this point

module.exports = ROUTER;
