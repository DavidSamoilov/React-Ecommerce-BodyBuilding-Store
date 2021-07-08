const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");
const { products } = require("../models/");
const Products = products

// Gets all Products
router.get("/", async (req, res) => {
  try {
    Products.findAll({
      include: ["images", "product_categories"],
    }).then((users) => {
      res.json(users);
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    Products.findOne({ where: { id: req.params.id }, include: ["images", "product_categories"] }).then((product) =>
      res.json(product)
    );
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
