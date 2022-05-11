const express = require('express');
const app = express();
const fichierRoute = express.Router();
// Employee model
let fichier = require('../models/fichier');
// Add Employee
fichierRoute.route('/saveFichier').post((req, res, next) => {
  fichier.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Employees
fichierRoute.route('/').get((req, res) => {
  fichier.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

fichierRoute.route('/readFichierByID/:id').get((req, res) => {
    
  fichier.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      
    }
  })
})

fichierRoute.route('/readFichier/:nom').get((req, res) => {
    
    fichier.findOne({nom: req.params.nom}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        
      }
    })
  })
module.exports = fichierRoute;