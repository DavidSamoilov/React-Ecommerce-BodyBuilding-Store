const express = require("express");
const router = express.Router();
const connection = require("../MySQL/connection");
const models =  require("../models/")

// Gets all Users
router.get("/",async (req, res) => {
  try{
    models.products.findAll().then(allProducts => res.json(allProducts))
  }catch(err){
    res.send(err)
  }
  
});

router.get("/:id", (req, res) => {
  try{
    models.products.findOne({where:{id:req.params.id}}).then(product => res.json(product))
  }catch(err){
    res.send(err)
  }
  
});


module.exports = router;
