/**
 * server/routes/API/users.js
 *
 * @routes /api/users
 * get /:org - gets all the members of an organization
 * get /single/id: gets a single member
 * post /
 * put /:id updates a user
 * delete /:id deletes a user
 *
 * @completed --> No
 * @working No
 * @todos
 *
 */

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const USERS = require('../../Models/Users');
const OBJECTID = require('mongodb').ObjectID;

/**
 * @purpose gets all members of an organization
 * @complete --> No
 * @working - yes
 * @success
 * @failure
 * @todos
 *  - Research how Multiple word names would work,
 *      currently it does just by /This Dot Org
 *  - form handling, may need to convert to lowercase
 */
ROUTER.get('/:org', (req, res, next) => {
  // the :org param is the name from the field.
  USERS.find({ organization: req.params.org })
    .sort()
    .then((users) => res.json(users));
});

/**
 * @purpose gets a single member
 * @complete --> No
 * @working No
 * @success Returns JSON with member information
 * @failure sets status to 400 w/ msg: no member with id found
 *
 * @todos
 *  - if used as part of login, make sure to check active status
 *
 */
ROUTER.get('/single/:id', (req, res) => {
  USERS.find({ _id: OBJECTID(req.params.id) }).then((user) =>
    res
      .json(user)
      .catch((err) => res.status(404).json({ success: false, msg: err }))
  );
});

/**
 * @purpose to add a new user
 * @complete --> No
 * @working Yes
 * @success adds new member to MEMBERS
 * @failure sets status to 400 and provides msg to include required data
 *
 * @todos
 */
ROUTER.post('/', (req, res) => {
  let newMember = new USERS({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    active: req.body.active,
    userType: req.body.userType,
    password: req.body.password,
    organization: req.body.organization,
  });

  if (
    !newMember.firstName ||
    !newMember.lastName ||
    !newMember.email ||
    !newMember.password
  ) {
    return res
      .status(400)
      .json({ msg: 'Please complete the form in its entirety' });
  }

  newMember
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ success: false, error: err }));
  // uncomment out the line below to have page "refesh" the list
  //res.redirect("/");
});

/**
 * @purpose updates a single member
 * @complete --> no
 * @working Yes
 * @success Returns JSON with member information
 * @failure sets status to 400 w/ msg: no member with id found
 *
 * @todos
 *  - We need to set up the responses correctly.
 *  - should be using this to deactivate users so they can't login
 *
 */
ROUTER.put('/single/:id', (req, res) => {
  //let found = USERS.findById((member) => member.id === parseInt(req.params.id));

  let userInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    active: req.body.active,
    userType: req.body.userType,
    password: req.body.password,
    organization: req.body.organization,
  };

  USERS.update(
    { _id: OBJECTID(req.params.id) },
    { $set: userInfo },
    (err, res) => {
      if (err) {
        //res.status(404).json({ success: false, msg: err });
        console.log(err);
      } else {
        //res.status(200).json(userInfo);
        console.log('it worked');
      }
    }
  );
});

/**
 * @purpose deletes a single member
 * @complete -->
 * @working No
 * @success Returns
 * @failure sets status to 400 w/ msg: no member with id found
 *
 * @todos
 *
 */
ROUTER.delete('/:id', (req, res) => {
  USERS.deleteOne({ _id: OBJECTID(req.params.id) })
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ success: false }));
});

// Enter no text below this point

module.exports = ROUTER;
