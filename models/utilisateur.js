const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let utilisateur = new Schema({
    _id: {
        type: Number
     },
    matr: {
      type: String
   },
    mdp: {
    type: String
    },
    nom: {
    type: String
    },
    prenom: {
    type: String
    },
    num_tel: {
    type: String
    },
    email: {
    type: String
    },
    id_role: {
    type: Number
    },
    id_lieu: {
    type: Number
    },
},
 {
   collection: 'utilisateurs'
})
module.exports = mongoose.model('utilisateur', utilisateur)