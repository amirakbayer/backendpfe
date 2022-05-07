const express = require('express');
const app = express();
const utilisateurRoute = express.Router();
// Employee model
let utilisateur = require('../models/utilisateur');

// Get single employee
utilisateurRoute.route('/readUser/:id').get((req, res) => {
  utilisateur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = utilisateurRoute;