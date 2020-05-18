/**
 * server/routes/inventories/users.js
 *
 * @routes /api/users
 * @todos
 *
 */

const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

/**
 * @purpose gets all members of an
 *
 * @todos
 *  -
 */
ROUTER.get("/", (req, res) => {
  res.json(MEMBERS);
});

/**
 * @purpose gets a single member
 * @success Returns JSON with member information
 * @failure sets status to 400 w/ msg: no member with id found
 *
 */
ROUTER.get("/:id", (req, res) => {
  let found = MEMBERS.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(MEMBERS.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

/**
 * @purpose to add a new user
 * @success adds new member to MEMBERS
 * @failure sets status to 400 and provides msg to include required data
 */
ROUTER.post("/", (req, res) => {
  let newMember = {
    id: UUID.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and/or email" });
  }

  MEMBERS.push(newMember);

  res.json(MEMBERS);
  // uncomment out the line below to have page "refesh" the list
  //res.redirect("/");
});

/**
 * @purpose updates a single member
 * @success Returns JSON with member information
 * @failure sets status to 400 w/ msg: no member with id found
 */
ROUTER.put("/:id", (req, res) => {
  let found = MEMBERS.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    let updMember = req.body;
    MEMBERS.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: "Member Updated", member });
      }
    });
    res.json(MEMBERS.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

/**
 * @purpose deletes a single member
 * @success Returns
 * @failure sets status to 400 w/ msg: no member with id found
 */
ROUTER.delete("/:id", (req, res) => {
  let found = MEMBERS.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "member deleted",
      members: MEMBERS.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
  }
});

module.exports = ROUTER;
