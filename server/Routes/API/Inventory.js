/**
 * server/routes/inventories/invetory.js
 *
 * @routes /api/inventory
 *  get / retrieves all the inventories of the user
 *  post / adds a new inventory with no items
 *  put /:id updates a document/inventory by id
 *  delete /:id deletes a document/inventory by id
 *
 * @completed --> No
 * @working Yes
 * @todos
 *  - Add Functionality based users permissions on all routes
 *  - Each route should add action to history
 *
 * @issues
 * - make sure the key.js file has the correct URL.
 */

const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const INVENTORIES = require("../../Models/Inventories");
const OBJECTID = require("mongodb").ObjectID;

/**
 * @purpose gets all inventories that the user has created/has access too
 * @complete --> NO
 * @working Yes
 *
 * @todos
 *  - add functionality to pull inventories by ownerID/access
 *  - Add Notes about Success and information for Failure
 *  - Should add action to history
 *
 */
ROUTER.get("/", (req, res) => {
  INVENTORIES.find()
    .sort()
    .then((inventories) => res.json(inventories));
});

/**
 * @purpose gets all inventories that the user has created/has access too
 * @params :id is the is the id of the ownerID
 * @complete --> NO
 * @working Yes
 *
 * @todos
 *  - add functionality to pull inventories by ownerID and access levels
 *  - Add Notes about Success and information for Failure
 *  - Should add action to history
 *
 */
ROUTER.get("/:id", (req, res) => {
  console.log(req.params.id);
  INVENTORIES.find({ _id: OBJECTID(req.params.id) }).then((inventories) =>
    res.json(inventories)
  );
});

/**
 * @purpose Adds an inventory
 * @complete --> NO
 * @working Yes
 *
 * @todos
 *  - Add functionality to pull based on owner ID/access?
 *  - Add Notes about Success and information for Failure
 *  - Should add action to history
 */

ROUTER.post("/", (req, res) => {
  let newInventory = new INVENTORIES({
    name: req.body.name,
    description: req.body.description,
    owner: req.body.owner,
    history: req.body.history,
    items: req.body.items,
    access: req.body.access,
    inventoryCount: req.body.inventoryCount,
    date: req.body.date,
  });
  newInventory.save().then((inventory) =>
    res.json({
      status: "1",
      message: "Inventory has been created successfully.",
    })
  );
});

/**
 * @purpose updates an inventory by identifying document by id.
 * @params :id is the id of the inventory.
 * @complete --> NO
 * @working Yes
 *
 * @todos
 *  - Add functionality to pull based on owner ID/access?
 *  - Add Notes about Success and information for Failure. Res needs to happen
 *  - should add record to history segment
 */
ROUTER.put("/:id", (req, res) => {
  let updateInventory = {
    name: req.body.name,
    description: req.body.description,
    owner: req.body.owner,
    history: req.body.history,
    items: req.body.items,
    access: req.body.access,
    inventoryCount: req.body.inventoryCount,
    date: req.body.date,
  };

  INVENTORIES.update(
    { _id: OBJECTID(req.params.id) },
    { $set: updateInventory },
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
 * @purpose Deletes an inventory by identifying document by id.
 * @complete --> NO
 * @working Yes
 *
 * @todos
 *  - Add functionality to pull based on owner ID/access?
 *  - Add Notes about Success and information for Failure
 *  - should add record of activity to history.
 */
ROUTER.delete("/:id", (req, res) => {
  INVENTORIES.deleteOne({ _id: OBJECTID(req.params.id) })
    .then((inventory) => res.json(inventory))
    .catch((err) => res.status(404).json({ success: false }));
});

// Enter no text below this point

module.exports = ROUTER;
