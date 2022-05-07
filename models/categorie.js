const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let categorie = new Schema({
    _id: {
        type: Number 
     },
   nom: {
      type: String
   }, },
   {
   collection: 'categories'
})
module.exports = mongoose.model('categorie', categorie)