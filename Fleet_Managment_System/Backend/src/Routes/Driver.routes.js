const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Driver = require('../Controllers/Driver.controller');


const Router = express.Router();


Router.post('/created', protect, authorize("admin", "fleet"), Driver.createDriver);

Router.get('/', protect, authorize("admin", "fleet"), Driver.getDriver);

Router.get('/:id', protect, authorize("admin", "fleet"), Driver.getSingleDriver);

Router.patch('/:id', protect, authorize("admin", "fleet"), Driver.updateDriver);

Router.delete('/:id', protect, authorize("admin", "fleet"), Driver.deleteDriver);


module.exports = Router