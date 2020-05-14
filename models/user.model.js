const mongoose = require('mongoose');



const schema = mongoose.Schema({
    name: String,
    email: String,
    city: String,
    phone: String
    
    
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


module.exports = mongoose.model('User', schema)

