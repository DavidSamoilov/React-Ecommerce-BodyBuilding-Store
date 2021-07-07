const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Email can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name
  };

  // Save Tutorial in the database
  User.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};
  

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single user with an id
exports.findOne = (req, res) => {
  
};

// Update a user by the id in the request
exports.update = (req, res) => {
  
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published users
exports.findAllPublished = (req, res) => {
  
};