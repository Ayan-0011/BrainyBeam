const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Fuel = require('../Controllers/fuel.controller');


const Router = express.Router();

Router.post('/created', protect, authorize("driver"), Fuel.createFuellog);

Router.get('/', protect, authorize("admin",  "fleet_manager", "dispatcher"), Fuel.getFuellog);

Router.get('/:tripId', protect, authorize("admin","fleet_manager", "dispatcher", "driver"), Fuel.getsigleFuellog);



module.exports = Router