const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let mise_a_jour = new Schema({
    id_rec: {
        type: String  
     },
    id_utilisateur: {
      type: String
   },
   id_etatA: {
    type: String
    },
    id_etatN: {
    type: String
     }, 
    date: {
        type: String
    },
   id_fichier: {
    type: String
 },},
 {
   collection: 'mises_a_jour'
})
module.exports = mongoose.model('mise_a_jour', mise_a_jour)