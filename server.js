const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
global.__basedir = __dirname; 
// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
// Setting up port with express js
const reclamationRoute = require('../backend/routes/reclamation.route')
const fournisseurRoute = require('../backend/routes/fournisseur.route')
const categorieRoute = require('../backend/routes/categorie.route')
const sous_categorieRoute = require('../backend/routes/sous_categorie.route')
const etatRoute = require('../backend/routes/etat.route')
const roleRoute = require('../backend/routes/role.route')
const type_fichierRoute = require('../backend/routes/type_fichier.route')
const lieuRoute = require('../backend/routes/lieu.route')
const utilisateurRoute = require('../backend/routes/utilisateur.route')
const fichierRoute = require('../backend/routes/fichier.route')
const mise_a_jourRoute = require('../backend/routes/mise_a_jour.route')
const initRoutes = require("../backend/routesF");
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/pfe')))
app.use('/', express.static(path.join(__dirname, 'dist/pfe')))
app.use('/rec', reclamationRoute)
app.use('/fournisseur', fournisseurRoute)
app.use('/categorie', categorieRoute)
app.use('/sous_categorie', sous_categorieRoute)
app.use('/etat', etatRoute)
app.use('/role', roleRoute)
app.use('/type_fichier', type_fichierRoute)
app.use('/lieu', lieuRoute)
app.use('/utilisateur', utilisateurRoute)
app.use('/fichier', fichierRoute)
app.use('/mise_a_jour', mise_a_jourRoute)

initRoutes(app);

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})