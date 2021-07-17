const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");
// import user api
const usersAPI = require("../controllers/users.controllers");

// Gets all Users
// #TODO add categories arr
router.get("/", usersAPI.findAll);
//  Login
// #TODO add the function to actually login the user to the site
router.post("/login", usersAPI.login)

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


module.exports = router;
