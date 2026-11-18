const express = require("express");
const router = express.Router();
const scheduleController = require("../Controller/donationSchedule.controller");
const protect = require("../Middleware/auth.middleware");
const authorize = require("../Middleware/role.middleware");

router.post("/", protect, authorize("donor"), scheduleController.createSchedule);


module.exports = router;