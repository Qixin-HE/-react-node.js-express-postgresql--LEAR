//https://bezkoder.com/node-express-sequelize-postgresql/
module.exports = app => {
    const merchants = require("../controllers/lear.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", merchants.create);
  
    // Retrieve all Tutorials
    router.get("/", merchants.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", merchants.findOne);
  
  
    app.use('/api/merchants', router);
  };