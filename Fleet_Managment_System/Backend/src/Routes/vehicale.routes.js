const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Vehicle  = require('../Controllers/Vehicle.controller');

const router = express.Router();

router.get('/', protect, authorize("admin","fleet_manager", "dispatcher"), Vehicle.getVehicle);

router.post('/created', protect, authorize("admin", "fleet_manager"), Vehicle.createVehicle);

router.put('/:id', protect, authorize("admin","fleet_manager"), Vehicle.updateVehicle);

router.delete('/:id', protect, authorize("admin","fleet_manager"), Vehicle.deleteVehicle);



module.exports = router
