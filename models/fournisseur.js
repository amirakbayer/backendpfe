const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let fournisseur = new Schema({
   nom: {
      type: String
   },
   categ: {
      type: Number
   },
   adresse: {
      type: String
   },
   num_tel: {
      type: String
   },
    email: {
    type: String
    }
}, {
   collection: 'fournisseurs'
})
module.exports = mongoose.model('fournisseur', fournisseur)