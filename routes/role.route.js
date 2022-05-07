const express = require('express');
const app = express();
const roleRoute = express.Router();
// Employee model
let role = require('../models/role');

// Get single employee
roleRoute.route('/readRole/:id').get((req, res) => {
  role.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = roleRoute;