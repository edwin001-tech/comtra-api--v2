Comtra Endpoints

api/ users
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


api/ products
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
router.delete("/", products.deleteAll)


api/ services
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



api/ product categories
// Create a new category
router.post("/", productcategories.create);
  
// Retrieve all categories
router.get("/", productcategories.findAll);
    
// Retrieve a single category with id
router.get("/:id", productcategories.findOne);
  
// Update a category with id
router.put("/:id", productcategories.update);
  
// Delete a category with id
router.delete("/:id", productcategories.delete);
  
// Delete all category
router.delete("/", productcategories.deleteAll);


api/ service categories
// Create a new category
router.post("/", servicecategories.create);
  
// Retrieve all categories
router.get("/", servicecategories.findAll);
    
// Retrieve a category  with id
router.get("/:id", servicecategories.findOne);
  
// Update a category with id
router.put("/:id", servicecategories.update);
  
// Delete a category with id
router.delete("/:id", servicecategories.delete);
  
// Delete all categories
router.delete("/", servicecategories.deleteAll);


api/ feedback
// Create a new feedback
router.post("/", feedback.create);
  
// Retrieve all feedbacks
router.get("/", feedback.findAll);

