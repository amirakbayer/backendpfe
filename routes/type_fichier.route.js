const express = require('express');
const app = express();
const type_fichierRoute = express.Router();
// Employee model
let type_fichier = require('../models/type_fichier');

// Get single employee
type_fichierRoute.route('/readTypeF/:id').get((req, res) => {
  type_fichier.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = type_fichierRoute;