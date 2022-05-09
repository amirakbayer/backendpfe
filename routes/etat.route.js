const express = require('express');
const app = express();
const etatRoute = express.Router();
// Employee model
let etat = require('../models/etat');

// Get single employee
etatRoute.route('/readEtat/:id').get((req, res) => {
  etat.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = etatRoute;