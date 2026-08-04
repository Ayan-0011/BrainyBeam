const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Driver = require('../Controllers/Driver.controller');


const Router = express.Router();


Router.post('/created', protect, authorize("admin", "fleet_manager"), Driver.createDriver);

Router.get('/', protect, authorize("admin", "fleet_manager"), Driver.getDriver);

Router.get('/:id', protect, authorize("admin", "fleet_manager"), Driver.getSingleDriver);

Router.put('/:id', protect, authorize("admin", "fleet_manager"), Driver.updateDriver);

Router.patch('/update-availability', protect, authorize("driver"), Driver.updateAvailability);

Router.delete('/:id', protect, authorize("admin", "fleet_manager"), Driver.deleteDriver);

module.exports = Router