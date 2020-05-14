module.exports = app => {
    var users = require("../controllers/user.controller.js");
    var products = require("../controllers/user.controller.js");
    var services = require("../controllers/user.controller.js");
  
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);
    
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
  
    // Update a user with id
    router.put("/:id", users.update);
  
    // Delete a user with id
    router.delete("/:id", users.delete);
  
    // Delete all users
    router.delete("/", users.deleteAll);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Products routes

    

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    //Services routes

    

    
    app.use('/api/users', router);
    app.use('/api/products',router);
    app.use('/api/services',router);
  };