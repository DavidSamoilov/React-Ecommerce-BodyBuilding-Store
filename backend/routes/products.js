const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");
const { Products, Images } = require("../models/");

// Gets all Users
router.get("/", async (req, res) => {
  try {
    Products.findAll({
      include: ["images", "product_categories"],
    }).then((users) => {
      res.json(users);
    });


    // Products.findAll().then((allProducts) => res.json(allProducts));
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", (req, res) => {
  try {
    Products.findOne({ where: { id: req.params.id } }).then((product) =>
      res.json(product)
    );
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
