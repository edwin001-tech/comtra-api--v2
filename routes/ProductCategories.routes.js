module.exports = app => {
    const productcategories = require("../controllers/ProductCategories.controller.js");
    
  
  
    var router = require("express").Router();
  
    // Create a new category
    router.post("/", users.productcategories);
  
    // Retrieve all categories
    router.get("/", users.productcategories);
    
    // Retrieve a single category with id
    router.get("/:id", productcategories.findOne);
  
    // Update a category with id
    router.put("/:id", productcategories.update);
  
    // Delete a category with id
    router.delete("/:id", productcategories.delete);
  
    // Delete all category
    router.delete("/", productcategories.deleteAll);

    app.use('/api/productcategories', router);
    
  }