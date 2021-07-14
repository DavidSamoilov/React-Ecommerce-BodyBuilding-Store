const db = require("../models");
const Product = db.products;

exports.create = (req, res) => {
  const post = req.body;
  const { name, price, short_description, long_description } = post;
  const { image, category } = post;
  // Validate request
  if (
    !(
      name &&
      price &&
      short_description &&
      long_description &&
      image &&
      category
    )
  ) {
    return res.status(400).send({
      message: "Please include a name ,email and password",
    });
  }
  if (!(image && category)) {
    return res.status(400).send({
      message: "Please include a image and category",
    });
  }

  if (!(image && category)) {
    return res.status(400).send({
      message: "Please include a image and category",
    });
  }

  // Create a User
  const product = {
    name,
    price,
    short_description,
    long_description,
  };

  // Save Tutorial in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while creating the User.",
      });
    });
};
