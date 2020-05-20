module.exports = app => {
    const feedback = require("../controllers/feedback.controller.js");
    
  
  
    var router = require("express").Router();
  
    // Create a new feedback
    router.post("/", feedback.create);
  
    // Retrieve all feedbacks
    router.get("/", feedback.findAll);
    
    // Retrieve a single user with id
   // router.get("/:id", feedback.findOne);
  
    // Update a user with id
   // router.put("/:id", feedback.update);
  
    // Delete a user with id
   // router.delete("/:id", feedback.delete);
  
    // Delete all users
   // router.delete("/", feedback.deleteAll);

    app.use('/api/feedback', router);
    
  }