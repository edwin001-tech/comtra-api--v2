const mongoose = require('mongoose');



const schema = mongoose.Schema({
    name: String,
    //product_name: String,
    //service_name: String,
    email: String,
    city: String,
    phone: String,
    //product_price: String,
    //product_description: String,
    //service_price: String,
    //service_description: String
    
},
{
  timestamps: true
     
}
);
//If you use this app with a front-end that needs id field instead of _id,
// you have to override toJSON method that map default object to a custom object
schema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
var users = mongoose.model('Users', schema);
//var products = mongoose.model('Products', schema);
//var services = mongoose.model('Services', schema)

module.exports = {
  users : users 
  //products: products,
  //services: services
} 


