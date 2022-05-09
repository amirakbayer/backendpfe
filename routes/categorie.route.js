const express = require('express');
const app = express();
const categorieRoute = express.Router();
// Employee model
let categorie = require('../models/categorie');
// Add Employee

// Get All Employees
categorieRoute.route('/').get((req, res) => {
  categorie.find((error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
    }
  })
})
// Get single employee
categorieRoute.route('/readCat/:id').get((req, res) => {
  categorie.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = categorieRoute;