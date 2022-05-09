const express = require('express');
const app = express();
const lieuRoute = express.Router();
// Employee model
let lieu = require('../models/lieu');

// Get single employee
lieuRoute.route('/readLieu/:id').get((req, res) => {
  lieu.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = lieuRoute;