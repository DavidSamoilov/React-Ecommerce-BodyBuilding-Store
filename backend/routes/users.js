const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");
// import user api
const usersAPI = require("../controllers/users.controllers");

// Gets all Users
// #TODO add categories arr
router.get("/", usersAPI.findAll);

// REGISTER
router.post("/", usersAPI.create);

// Get single member by id
// #Todo get rid if else statement with return somehow
router.get("/:id", usersAPI.findOne);

// Update Member
// TODO not working
router.put("/:id", usersAPI.delete);

// Delete Member
// TODO not working
router.delete("/:id", usersAPI.delete);












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

module.exports = router;
