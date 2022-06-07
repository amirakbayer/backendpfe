const express = require('express');
const app = express();
const reclamationRoute = express.Router();
// Employee model
let reclamation = require('../models/reclamation');
// Add Employee
reclamationRoute.route('/createRec').post((req, res, next) => {
  reclamation.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Employees
reclamationRoute.route('/').get((req, res) => {
  reclamation.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single employee
reclamationRoute.route('/readRec/:id').get((req, res) => {
  reclamation.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get own recs
reclamationRoute.route('/readOwnRecs/:id').get((req, res) => {
  reclamation.find({id_reclamant: req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      
    }
  })
})
// Get aff recs
reclamationRoute.route('/readAffRecs/:id').get((req, res) => {
  reclamation.find({id_affect: req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      
    }
  })
})

// Update employee
reclamationRoute.route('/updateRec/:id').put((req, res, next) => {
  reclamation.findByIdAndUpdate(req.params.id, {
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
reclamationRoute.route('/deleteRec/:id').delete((req, res, next) => {
  reclamation.findOneAndDelete({_id: req.params.id}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("rec is deleted ", req.params.id);
      res.status(200).json({
        msg: data
        
      })
    }
  })
})
module.exports = reclamationRoute;