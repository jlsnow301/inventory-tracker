/**
 * server/Models/Inventories.js
 *
 * @routes /api/inventory
 * @todos
 *  - None as of 5/17
 */

const MONGOOSE = require('mongoose');

const SCHEMA = MONGOOSE.Schema;

const Invens = new SCHEMA({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: Array,
    required: true,
  },
  history: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  access: {
    type: Array,
    required: true,
  },
  inventoryCount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Inventories = MONGOOSE.model('Inventories', Invens);
