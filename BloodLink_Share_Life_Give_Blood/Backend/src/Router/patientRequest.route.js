const express = require("express");
const patientRequestController = require("../Controller/patientRequest.controller");
const protect = require("../Middleware/auth.middleware");
const authorize = require("../Middleware/role.middleware");

const router = express.Router();

router.post("/", protect, authorize("patient"), patientRequestController.createBloodRequest);

module.exports = router;