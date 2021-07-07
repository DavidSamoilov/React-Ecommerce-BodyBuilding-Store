const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");
// import user api
const usersAPI = require("../controllers/users.controllers");

// import sequelize User
const { users } = require("../models");
const User = users


// Gets all Users
router
  .get("/", async (req, res) => {
    try {
      User.findAll().then((users) => res.json(users));
    } catch {
      res.send("500");
    }

    // connection.query("SELECT * FROM users", function (err, results, fields) {
    //   if (err) throw err;
    //   res.json(results); // results contains rows returned by server
    // });
  })
  .post(
    // REGISTER
    "/",
    usersAPI.create   
  );

// Get single member by id
// #Todo get rid if else statement with return somehow
router.get("/:id", usersAPI.findOne);

//  Login
// #TODO add the function to actually login the user to the site
router.post("/login", (req, res) => {
  if (!req.body) return res.status(500).send("Can't be empty");
  connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [req.body.email, req.body.password],
    function (err, results, fields) {
      if (err) throw err;
      if (results == []) return res.send("Incorrect email or password");

      res.json(results); // results contains rows returned by server
    }
  );
});

// Update Member
// TODO not working
router.put("/:id", (req, res) => {
  const found = Members.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    const member = Members.find(
      (member) => member.id === parseInt(req.params.id)
    );
    if (member) {
      member.name = updMember.name ? updMember.name : member.name;
      member.email = updMember.email ? updMember.email : member.email;
      res.json({ msg: "Member updated", member });
    }
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete Member
// TODO not working
router.delete("/:id", (req, res) => {
  const found = Members.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "Member deleted",
      Members: Members.filter((user) => user.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
