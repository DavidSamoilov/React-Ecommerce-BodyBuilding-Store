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
        message:"Some error occurred while creating the User.",
      });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
    await User.findAll().then((users) => res.json(users));
  } catch {
    res.send("500");
  }
};

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
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: {id}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

};

exports.login =  (req, res) => {
  const {email,password} = req.body;
  User.findOne({where:{email,password}})
    .then(data => {
      if(!data){
        res.send(false);
      }else{

      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with email=" + email
      });
    });
}
// Find all published users
// exports.findAllPublished = (req, res) => {};
