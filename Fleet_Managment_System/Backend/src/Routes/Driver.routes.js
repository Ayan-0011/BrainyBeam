const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Driver = require('../Controllers/Driver.controller');


const Router = express.Router();

//admin ke liye
Router.post('/created', protect, authorize("admin", "fleet_manager"), Driver.createDriver);

Router.get('/', protect, authorize("admin", "fleet_manager"), Driver.getDriver);

Router.get('/:id', protect, authorize("admin", "fleet_manager"), Driver.getSingleDriver);

Router.put('/:id', protect, authorize("admin", "fleet_manager"), Driver.updateDriver);

Router.delete('/:id', protect, authorize("admin", "fleet_manager"), Driver.deleteDriver);


//driver/self ke liye 
Router.patch('/update-availability', protect, authorize("driver"), Driver.updateAvailability);




module.exports = Router