const express = require("express");
const router = express.Router();
const app = require("../app");
const connection = require("../MySQL/connection");
const models =  require("../models/")

// Gets all Users
router
  .get("/", async (req, res) => {
    console.log(models.users);
    try{
      models.users.findAll().then(
        users => res.json(users))
    }catch{
      res.send("500")
    }
      



    // connection.query("SELECT * FROM users", function (err, results, fields) {
    //   if (err) throw err;
    //   res.json(results); // results contains rows returned by server
    // });
  })
  .post(
    // REGISTER
    // #Todo add validation to data
    "/",
     (req, res) => {
      const post = req.body;
      const { name, email, password } = post;

      if (!(name && email && password)) {
        return res
          .status(400)
          .json({ msg: "Please include a name ,email and password" });
      } else {
        connection.query(
          "SELECT id FROM users WHERE `email` = ?",
          [email],
          (error, result) => {
            if (result[0]) {
              res.send({ msg: "User with email address already exists" });
            } else {
              connection.query(
                "INSERT INTO users (email, password, first_name) VALUES (?,?,?)",
                [email, password, name],
                () => {
                  res.json({ msg: "User added" });
                }
              );
            }
          }
        );
      }
    }
  );

// Get single member by id
// #Todo get rid if else statement with return somehow
router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM `users` WHERE `id` = ?",
    [req.params.id],
    function (err, results, fields) {
      if (err || results == false) {
        res
          .status(400)
          .json({ msg: `No member with the id of ${req.params.id}` });
      } else {
        res.json(results); // results contains rows returned by server
      }
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );
});


//  Login
// #TODO add the function to actually login the user to the site
router.post("/login", (req, res) => {
  if (!req.body) return res.status(500).send("Can't be empty");
  connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [req.body.email , req.body.password],
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
