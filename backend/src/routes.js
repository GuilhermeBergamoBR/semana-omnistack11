const express = require('express');

const OngController = require('./Controllers/OngController.js')
const incidentController = require('./Controllers/IncidentController.js');
const ProfileController = require('./Controllers/ProfileController')
const sessionController = require('./Controllers/SessionController')

const routes = express.Router();

routes.post('/session', sessionController.create); 

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;