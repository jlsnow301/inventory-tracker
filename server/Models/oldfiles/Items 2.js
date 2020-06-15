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
  location: {
    type: String,
    required: true,
  },
  added: {
    type: String,
    required: true,
  },
  updated: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = Items = MONGOOSE.model('Items', ITEM);
