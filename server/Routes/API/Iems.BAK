const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ITEM = require('../../Models/Item');

ROUTER.post('/', (req, res) => {
    ITEM.create({
        name: req.body.itemName,
        brand: req.body.itemBrand,
        category: req.body.itemCategory,
        dosage: req.body.itemDosage,
        preparation: req.body.itemPreparation,
        quantity: req.body.itemQuantity,
        description: req.body.itemDescription,
    }).then(function() {
        return res.json({
            status: "1",
            message: 'Item has been created successfully.'
        })
    })
})

// Enter no text below this point

module.exports = ROUTER;
