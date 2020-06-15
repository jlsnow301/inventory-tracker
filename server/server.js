const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const BODYPARSER = require('body-parser');
const CORS = require('cors');


const APP = EXPRESS();

// bodyparser middleware
APP.use(BODYPARSER.json());

// Cross site request frogery
// this here... I Really LIke this!
// Wish Ed would have taught this!
const WHITELIST = ['http://localhost:3000'];

// +++++ comment this out to do testing through postman +++++
// +++++ you wont be able to test with postman if you dont +++++

const CORSOPTIONS = {
  origin: function (origin, callback) {
    if (WHITELIST.indexOf(origin) > -1) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by cors'));
    }
  },
};

APP.use(CORS(CORSOPTIONS));

// DB config
// If you make your keys public one more time...
// THe config should be set up to export mongoURI
const DB = require('./config/keys').mongoURI;

// connect to mongo
MONGOOSE.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }) // connect to MongoDB
  .then(() => console.log('MongoDB Connected...')) // If successfull display this message
  .catch((err) => console.log(err)); // if not show error

// setting up headers
APP.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
/**
 *  API ROUTES
 */

// members API routes
APP.use('/api/users', require('./Routes/Users/Users'));
// Inventory routes
APP.use('/api/inventory', require('./Routes/API/Inventory'));
// Items routes
APP.use('/api/items', require('./Routes/API/Items'));
// Contact routes
APP.use('/api/contact', require('./Routes/API/Contact'));

const port = process.env.PORT || 5000;
APP.listen(port, () => console.log(`Server started on port ${port}`));
