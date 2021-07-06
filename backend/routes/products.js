const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");

// Gets all Users
router.get("/", (req, res) => {
  connection.query("SELECT * FROM products", function (err, results, fields) {
    if (err) throw err;
    res.json(results); // results contains rows returned by server
  });
});

module.exports = router;
