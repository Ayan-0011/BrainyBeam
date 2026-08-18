const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Maintenance = require('../Controllers/maintenance.controller');


const Router = express.Router();

Router.post('/create', protect, authorize("fleet_manager"), Maintenance.createMaintenance);


module.exports = Router
