const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Trip = require('../Controllers/Trip.controller')

const Router = express.Router();

Router.post('/created', protect, authorize("dispatcher"), Trip.createTrip);

Router.get('/', protect, authorize('admin',"dispatcher"), Trip.getTrips);


Router.get('/my-trips', protect, authorize('driver'), Trip.myTrips);


Router.get('/:id', protect, authorize('admin',"dispatcher"), Trip.getSingleTrip);



module.exports = Router