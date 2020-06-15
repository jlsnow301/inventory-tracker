/**
 * server/routes/inventories/invetory.js
 *
 * @routes /api/inventory
 *
 * @todos
 *
 *
 */

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const INVENTORIES = require('../../Models/Inventories');

/**
 * @purpose gets all inventories that the user has created/has access too
 */
ROUTER.get('/', (req, res) => {
  INVENTORIES.find();
});

/**
 * @purpose gets a single Collection
 * @precondition Assumes User has access
 * @success
 * @failure
 */
ROUTER.get('/:id', (req, res) => {});

/**
 * @purpose add a new inventory (group/collection of items)
 * @success
 * @failure
 */
ROUTER.post('/', (req, res) => {
  let newMember = {
    id: UUID.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and/or email' });
  }

  MEMBERS.push(newMember);

  res.json(MEMBERS);
  // uncomment out the line below to have page "refesh" the list
  //res.redirect("/");
});

/**
 * @purpose updates a single inventory
 * @success Returns JSON with inventory information
 * @failure sets status to 400 w/ msg: no inventory found with id found
 */
ROUTER.put('/:id', (req, res) => {
  let found = MEMBERS.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    let updMember = req.body;
    MEMBERS.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: 'Member Updated', member });
      }
    });
    res.json(MEMBERS.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

/**
 * @purpose deletes an inventory
 * @success
 * @failure
 */
ROUTER.delete('/:id', (req, res) => {
  let found = MEMBERS.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'member deleted',
      members: MEMBERS.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

module.exports = ROUTER;
