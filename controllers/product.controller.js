const Product = require('../models/product.model')

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Product
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
    
  });

  // Save Product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};
//Retrieve all Product/ find by name from the database:
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Product.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};
//Find a single Product with an id:
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with id=" + id });
    });
};
//Update a Product identified by the id in the request:
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found!`
        });
      } else res.send({ message: "Product was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
};

//Delete a Product with the specified id:

exports.delete = (req, res) => {
const id = req.params.id;

Product.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
      });
    } else {
      res.send({
        message: "Product was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Product with id=" + id
    });
  });
};

//Delete all Products from the database:

exports.deleteAll = (req, res) => {
Product.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Products were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all products."
    });
  });
};