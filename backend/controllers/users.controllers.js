// const Op = db.Sequelize.Op;
const db = require("../models");
const User = db.users;

// Create and Save a new user
exports.create = (req, res) => {
  const post = req.body;
  const { first_name, email, password } = post;
  // Validate request
  if (!first_name || !email || !password) {
    res.status(400).send({
      message: "Please include a name ,email and password",
    });
    return;
  }
  
  // Create a User
  const user = {
    email,
    password,
    first_name,
  };

  // Save Tutorial in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Tutorial with id=${id}`,
      });
    });
};

// Update a user by the id in the request
exports.update = (req, res) => {};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {};

// Delete all users from the database.
exports.deleteAll = (req, res) => {};

// Find all published users
exports.findAllPublished = (req, res) => {};
