const ServiceCategories = require('../models/ServiceCategories.model')
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content cannot be empty!" });
      return;
    }
  
    // Create a service
    const servicecategories = new ServiceCategories({
      name: req.body.name,
      
    });
  
    // Save category in the database
    servicecategories
      .save(servicecategories)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the category."
        });
      });
  };
  //Retrieve all categories/ find by name from the database:
  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    ServiceCategories.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories."
        });
      });
  };
  //Find a single category with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ServiceCategories.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found category with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving category with id=" + id });
      });
  };
  //Update a category identified by the id in the request:
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    ServiceCategories.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Product Category with id=${id}. Maybe Product Category was not found!`
          });
        } else res.send({ message: " category was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating category with id=" + id
        });
      });
  };
  
  //Delete a category with the specified id:
  
  exports.delete = (req, res) => {
  const id = req.params.id;
  
    ServiceCategories.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete category with id=${id}. Maybe category was not found!`
        });
      } else {
        res.send({
          message: "category was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete category with id=" + id
      });
    });
  };
  
  //Delete all categories from the database:
  
  exports.deleteAll = (req, res) => {
  ServiceCategories.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} categories were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
  };
  
  