const express = require("express");
const router = express.Router();
const passwordResetController = require("../Controller/passwordReset.controller");

router.post("/forgot-password", passwordResetController.forgotPassword);
router.post("/reset-password", passwordResetController.resetPassword);

module.exports = router;