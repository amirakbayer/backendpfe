const express = require('express');
const app = express();
const mise_a_jourRoute = express.Router();
// Employee model
let mise_a_jour = require('../models/mise_a_jour');
// Add Employee
mise_a_jourRoute.route('/saveUpdate').post((req, res, next) => {
  mise_a_jour.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


module.exports = mise_a_jourRoute;