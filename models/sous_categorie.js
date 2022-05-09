const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let sous_categorie = new Schema({
    _id: {
        type: Number
     },
    nom: {
      type: String
   }, id2: {
    type: Number
 },},
 {
   collection: 'sous_categories'
})
module.exports = mongoose.model('sous_categorie', sous_categorie)