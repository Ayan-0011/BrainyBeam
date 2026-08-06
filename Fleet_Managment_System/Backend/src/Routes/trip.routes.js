const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Trip = require('../Controllers/Trip.controller')

const Router = express.Router();

Router.post('/created', protect, authorize("dispatcher"), Trip.createTrip);



module.exports = Router