/**
 * server/Models/Users.js
 *
 * @routes /api/user
 * @todos
 *
 */
const MONGOOSE = require('mongoose');

const SCHEMA = MONGOOSE.Schema;

const USERS = new SCHEMA({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
});

module.exports = Users = MONGOOSE.model('Users', USERS);
