var Product = require('../models/comtra.model').products;
var User = require('../models/comtra.model').users;
var Service = require('../models/comtra.model').services;
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a User
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      phone: req.body.phone
    });
  
    // Save User in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };
//Retrieve all Users/ find by name from the database:
  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };
//Find a single User with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with id=" + id });
      });
  };
 //Update a User identified by the id in the request:
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

  //Delete a User with the specified id:

exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

//Delete all Users from the database:

exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Products Controllers
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
      message: "Data to update can not be empty!"
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Services Controllers
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a service
  const service = new Service({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
    
  });

  // Save service in the database
  service
    .save(service)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the service."
      });
    });
};
//Retrieve all services/ find by name from the database:
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Service.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving services."
      });
    });
};
//Find a single service with an id:
exports.findOne = (req, res) => {
  const id = req.params.id;

  Service.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found service with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving service with id=" + id });
    });
};
//Update a service identified by the id in the request:
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Service.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Service with id=${id}. Maybe Service was not found!`
        });
      } else res.send({ message: "service was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating service with id=" + id
      });
    });
};

//Delete a service with the specified id:

exports.delete = (req, res) => {
const id = req.params.id;

Service.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Service with id=${id}. Maybe Service was not found!`
      });
    } else {
      res.send({
        message: "Service was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Service with id=" + id
    });
  });
};

//Delete all Services from the database:

exports.deleteAll = (req, res) => {
Service.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} services were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all products."
    });
  });
};
