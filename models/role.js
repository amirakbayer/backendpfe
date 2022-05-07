const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let role = new Schema({
    _id: {
        type: Number
     },
    nom: {
      type: String
   },},
 {
   collection: 'roles'
})
module.exports = mongoose.model('role', role)