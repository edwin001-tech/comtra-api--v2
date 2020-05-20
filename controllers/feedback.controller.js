const Feedback = require('../models/Feedback.model')
exports.create = (req, res) => {
    // Validate request
    if (!req.body.feedback) {
      res.status(400).send({ message: "Content cannot be empty!" });
      return;
    }
  
    // Create a feedback
    const feedback = new Feedback({
      feedback: req.body.feedback,
      
    });
  
    // Save feedback in the database
    feedback
      .save(feedback)
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
  //Retrieve all feedback/ find by 'feedback' from the database:
  exports.findAll = (req, res) => {
    const feedback = req.query.feedback;
    var condition = feedback? { feedback: { $regex: new RegExp(feedback), $options: "i" } } : {};
  
    Feedback.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving feedbacks."
        });
      });
  };
  //Find a single feedback with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Feedback.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found feedback with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving feedback with id=" + id });
      });
  };
  //Update a feedback identified by the id in the request:
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Feedback.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update feedback with id=${id}. Maybe feedback was not found!`
          });
        } else res.send({ message: " feedback was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating feedback with id=" + id
        });
      });
  };
  
  //Delete a feedback with the specified id:
  
  exports.delete = (req, res) => {
  const id = req.params.id;
  
  Feedback.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete feedback with id=${id}. Maybe feedback was not found!`
        });
      } else {
        res.send({
          message: "feedback was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete feedback with id=" + id
      });
    });
  };
  
  //Delete all feedback from the database:
  
  exports.deleteAll = (req, res) => {
  Feedback.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} feedbacks were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all feedback."
      });
    });
  };
  
  