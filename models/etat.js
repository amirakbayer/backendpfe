const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let etat = new Schema({
    _id: {
        type: Number
     },
    nom: {
      type: String
   }, altNom: {
    type: String
 },},
 {
   collection: 'etats'
})
module.exports = mongoose.model('etat', etat)