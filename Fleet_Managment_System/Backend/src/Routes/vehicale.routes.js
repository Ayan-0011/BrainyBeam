const express = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const Vehicle  = require('../Controllers/Vehicle.controller');

const router = express.Router();

router.get('/', protect, authorize("admin","fleet_manager", "dispatcher"), Vehicle.getVehicle);

router.post('/created', protect, authorize("admin"), Vehicle.createVehicle);

router.put('/:id', protect, authorize("admin"), Vehicle.updateVehicle);

router.delete('/:id', protect, authorize("admin"), Vehicle.deleteVehicle);



module.exports = router
