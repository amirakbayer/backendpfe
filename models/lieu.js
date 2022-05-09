const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let lieu = new Schema({
    _id: {
        type: Number
     },
    gouv: {
      type: String
   },
    ville: {
    type: String
 },
    agence: {
    type: String
 },},
 {
   collection: 'lieux'
})
module.exports = mongoose.model('lieu', lieu)