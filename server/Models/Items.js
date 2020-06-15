/**
 * server/Models/Items.js
 *
 * @routes /api/inventories
 * @todos
 *
 */
const MONGOOSE = require('mongoose');

const SCHEMA = MONGOOSE.Schema;

const ITEM = new SCHEMA({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dosage: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

module.exports = Items = MONGOOSE.model('Items', ITEM);
