const express = require('express');
const app = express();
const sous_categorieRoute = express.Router();
// Employee model
let sous_categorie = require('../models/sous_categorie');
// Add Employee

// Get All Employees
sous_categorieRoute.route('/:id').get((req, res) => {
    par= req.params.id.toString();
    console.log("par is ",par);
  sous_categorie.find({id2: par},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
      console.log(req.params.id)
    }
  })
})
// Get single employee
sous_categorieRoute.route('/readSousCat/:id').get((req, res) => {
  sous_categorie.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee

// Delete employee

module.exports = sous_categorieRoute;