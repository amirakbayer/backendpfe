const express = require('express');
const app = express();
const fournisseurRoute = express.Router();
// Employee model
let fournisseur = require('../models/fournisseur');
// Add Employee
fournisseurRoute.route('/createFour').post((req, res, next) => {
  fournisseur.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Employees
fournisseurRoute.route('/').get((req, res) => {
  fournisseur.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single employee
fournisseurRoute.route('/readFour/:id').get((req, res) => {
  fournisseur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee
fournisseurRoute.route('/updateFour/:id').put((req, res, next) => {
  fournisseur.findByIdAndUpdate(req.params.id, {
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
fournisseurRoute.route('/deleteFour/:id').delete((req, res, next) => {
  fournisseur.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = fournisseurRoute;