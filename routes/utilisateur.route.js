const express = require('express');
const app = express();
const utilisateurRoute = express.Router();
// Employee model
let utilisateur = require('../models/utilisateur');

// Get single employee
utilisateurRoute.route('/readUser/:matr/:mdp').get((req, res) => {
  console.log(req.params);
  utilisateur.findOne({matr: req.params.matr, mdp: req.params.mdp}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

utilisateurRoute.route('/readUser/:id').get((req, res) => {
  console.log(req.params);
  utilisateur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


utilisateurRoute.route('/readAss/:id').get((req, res) => {
  utilisateur.find({id_role: req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      
    }
  })
})

// Update employee
utilisateurRoute.route('/updateUser/:id').put((req, res, next) => {
  utilisateur.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete employee

module.exports = utilisateurRoute;