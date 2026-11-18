const express = require("express");
const router = express.Router();
const scheduleController = require("../Controller/donationSchedule.controller");
const protect = require("../Middleware/auth.middleware");
const authorize = require("../Middleware/role.middleware");

router.post("/", protect, authorize("donor"), scheduleController.createSchedule);
router.get("/", protect, authorize("donor"), scheduleController.getMySchedules);
router.get("/:id", protect, authorize("donor"), scheduleController.getScheduleById);
router.put("/:id", protect, authorize("donor"), scheduleController.updateSchedule);
router.patch("/:id/cancel", protect, authorize("donor"), scheduleController.cancelSchedule);

module.exports = router;