module.exports = app => {
    const servicecategories = require("../controllers/ServiceCategories.controller.js");
    
  
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", servicecategories.create);
  
    // Retrieve all users
    router.get("/", servicecategories.findAll);
    
    // Retrieve a single user with id
    router.get("/:id", servicecategories.findOne);
  
    // Update a user with id
    router.put("/:id", servicecategories.update);
  
    // Delete a user with id
    router.delete("/:id", servicecategories.delete);
  
    // Delete all users
    router.delete("/", servicecategories.deleteAll);

    app.use('/api/servicecategories', router);
    
  }