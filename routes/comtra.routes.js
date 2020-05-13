module.exports = app => {
    var users = require("../controllers/comtra.controller.js");
    var products = require("../controllers/comtra.controller.js");
    var services = require("../controllers/comtra.controller.js");
  
  
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

    // Create a new product
    router.post("/", products.create);
  
    // Retrieve all products
    router.get("/", products.findAll);
    
    // Retrieve a single product with id
    router.get("/:id", products.findOne);
  
    // Update a product with id
    router.put("/:id", products.update);
  
    // Delete a product with id
    router.delete("/:id", products.delete);
  
    // delete all products
    router.delete("/", products.deleteAll);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    //Services routes

    // Create a new service
    router.post("/", services.create);
  
    // Retrieve all services
    router.get("/", services.findAll);
    
    // Retrieve a single service with id
    router.get("/:id", services.findOne);
  
    // Update a service with id
    router.put("/:id", services.update);
  
    // Delete a service with id
    router.delete("/:id", services.delete);
  
    // delete all services
    router.delete("/", services.deleteAll);

    
    app.use('/api/users', router);
    app.use('/api/products',router);
    app.use('/api/services',router);
  };