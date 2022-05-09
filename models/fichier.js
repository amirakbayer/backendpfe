const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let fichier = new Schema({
    nom: {
        type: String  
     },
    id_f: {
      type: String
   }, 
   id_type: {
    type: String
 },},
 {
   collection: 'fichiers'
})
module.exports = mongoose.model('fichier', fichier)