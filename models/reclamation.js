const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let reclamation = new Schema({
   id_reclamant: {
      type: String
   },
   id_lieu: {
      type: String
   },
   id_etat: {
      type: Number
   },
   date: {
      type: Date
   },
    Id_sousCateg: {
    type: Number
    },
    urg: {
    type: Number
    },
    desc: {
    type: String
     },
    id_affect: {
    type: String
 }
}, {
   collection: 'reclamations'
})
module.exports = mongoose.model('reclamation', reclamation)