const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let type_fichier = new Schema({
    _id: {
        type: Number
     },
    nom: {
      type: String
   },},
 {
   collection: 'types_fichier'
})
module.exports = mongoose.model('type_fichier', type_fichier)