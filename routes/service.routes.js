module.exports = app => {
    const services = require('../controllers/service.controller')
    var router = require('express').Router();


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

app.use('/api/services', router)
}